import { sendEmail } from "@/utils/mailer.utils";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("tel");
  const message = formData.get("message");
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
