import { sendEmail } from "@/utils/mailer.utils";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("tel");
  const message = formData.get("message");
  const captchaToken = formData.get("captchaToken");
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;

  if (!turnstileSecret) {
    console.error("Turnstile verification is not configured");
    return Response.json(
      { error: "Captcha verification is unavailable" },
      { status: 503 }
    );
  }

  if (typeof captchaToken !== "string" || !captchaToken) {
    return Response.json(
      { error: "Captcha verification is required" },
      { status: 400 }
    );
  }

  const verificationData = new URLSearchParams({
    secret: turnstileSecret,
    response: captchaToken,
  });
  let verification: { success?: boolean };
  try {
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: verificationData,
        signal: AbortSignal.timeout(10_000),
      }
    );
    if (!verificationResponse.ok) {
      console.error(
        "Turnstile verification request failed",
        verificationResponse.status
      );
      return Response.json(
        { error: "Captcha verification failed" },
        { status: 502 }
      );
    }
    verification = await verificationResponse.json();
  } catch (error) {
    console.error("Turnstile verification could not be completed", error);
    return Response.json(
      { error: "Captcha verification failed" },
      { status: 502 }
    );
  }

  if (!verification.success) {
    return Response.json(
      { error: "Captcha verification failed" },
      { status: 400 }
    );
  }

  try {
    const result = await sendEmail({
      name,
      email,
      tel,
      message,
    });
    return Response.json({ result }, { status: 200 });
  } catch (error) {
    return Response.json({ error: error }, { status: 500 });
  }
}
