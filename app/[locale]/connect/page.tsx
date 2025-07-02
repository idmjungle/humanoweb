"use client";
import PageTop from "@/components/shared/pageTop";
import { useTranslations } from "next-intl";
import { FormEvent, FormEventHandler, useState } from "react";
import { useParams } from "next/navigation";
import z from "zod";
import { PatternFormat } from 'react-number-format';


// export const metadata = {
//   title: "Info",
// };
const ContactPage = () => {
  const t = useTranslations("ContactPage");
  const params = useParams();
  const locale = params.locale;
  const [sending, setSending] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [message, setMessage] = useState<z.ZodIssue[]>([]);
  const Task = z.object({
    name: z.string().min(1, "Name is required"),
    email: z.string().email("Invalid email address"),
    tel: z.string().optional(),
    message: z.string().optional(),
  });

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    setError(false);
    const form = new FormData(event.currentTarget);
    try {
      await Task.parseAsync({
        name: form.get("name"),
        email: form.get("email"),
        tel: form.get("tel"),
        message: form.get("message"),
      });
      setSending(true);
      const response = await fetch(`/${locale}/api/contact`, {
        method: "POST",
        body: form,
      });

      if (!response.ok) {
        throw new Error(`response status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setSuccess(true);
      setSending(false);
    } catch (err) {
      console.log(err);
      // alert("Error, please try resubmitting the form");
      if (err instanceof z.ZodError) {
        setError(true);
        setMessage(err.errors);
        return err.errors.map((error) => {
          return `${error.path.join(".")}: ${error.message}`;
        });
      }
      return "Error, please try resubmitting the form";
    }
  };


  return (
    <div className="p-6">
      {PageTop(
        { imageType: "contact", textType: "contact" },
        "contact",
        "contact",
        "shadow"
      )}
      <h2 className="my-4 font-bold text-base md:text-3xl tracking-tighter leading-5">{t("description")}</h2>
      <form
        onSubmit={handleSubmit}
        className={`p-3 lg:p-8 grid lg:grid-cols-3 text-base lg:text-xl bg-humano-light ${(sending || success)?"rounded-full":"rounded-4xl"} gap-4 transition-all duration-1500`}
      >
        {sending && (
          <div className="text-9xl font-bold animate-pulse text-humano-dark tracking-tighter leading-[0.8]">{t("sending")}</div>
        )}
        {success && (
          <div className="text-9xl font-bold text-humano-dark tracking-tighter leading-[0.8] w-full">{t("success")}</div>
        )}
        <div className={`space-y-3 md:space-y-5 ${(sending || success) && "hidden"}`}>
          <div>
            <label className="mt-4 text-humano-dark font-bold mb-2 block">
              {t("name")} *
            </label>
            <input
              type="text"
              placeholder={t("namePlace")}
              id="name"
              name="name"
              className={`w-full rounded-full py-2.5 px-4 ${(error && message.find((m) => m.path[0] === "name") ? "text-humano-light bg-humano-red" : "text-humano-light bg-humano-dark")} border border-humano-dark focus:border-humano-dark focus:bg-humano-yellow focus:text-humano-dark outline-0 transition-all`}
            />
            {error && message.find((m) => m.path[0] === "name") && (
              <div className="text-humano-red text-lg">
                {message.find((m) => m.path[0] === "name")?.message}
              </div>
            )}
          </div>
          <div>
            <label className="text-humano-dark font-bold mb-2 block">
              {t("email")} *
            </label>
            <input
              type="email"
              placeholder={t("emailPlace")}
              id="email"
              name="email"
              className={`w-full py-2.5 rounded-full px-4 ${(error && message.find((m) => m.path[0] === "email") ? "text-humano-light bg-humano-red" : "text-humano-light bg-humano-dark")} border border-gray-200 focus:border-humano-dark focus:bg-humano-yellow focus:text-humano-dark outline-0 transition-all`}
            />
            {error && message.find((m) => m.path[0] === "email") && (
              <div className="text-humano-red text-lg">
                {message.find((m) => m.path[0] === "email")?.message}
              </div>
            )}
          </div>
          <div>
            <label className="text-humano-dark font-bold mb-2 block">
              {t("tel")}
            </label>
            <PatternFormat   
              type="tel"
              format="+1 (###) ###-####"
              allowEmptyFormatting mask="_" 
              placeholder={t("telPlace")}
              id="tel"
              name="tel"
              className="w-full py-2.5 rounded-full px-4 text-humano-light bg-humano-dark border border-gray-200 focus:border-humano-dark focus:bg-humano-yellow focus:text-humano-dark outline-0 transition-all"
            />
          </div>
        </div>
        <div className={`space-y-5 ${(sending || success) && "hidden"}`}>
          <div>
            <label className="text-humano-dark font-bold mb-2 block">
              {t("message")}
            </label>
            <textarea
              placeholder={t("messagePlace")}
              rows={9}
              id="message"
              name="message"
              className="w-full rounded-4xl px-4 text-humano-light bg-humano-dark border border-gray-200 focus:border-humano-dark focus:bg-humano-yellow focus:text-humano-dark pt-3 outline-0 transition-all"
            ></textarea>
          </div>
        </div>
        <div className={`space-y-5 ${(sending || success) && "hidden"}`}>
          <button
            type="submit"
            className="text-humano-light bg-humano-dark rounded-4xl font-bold hover:bg-humano-orange hover:text-humano-dark text-5xl md:text-7xl text-left tracking-tighter leading-[0.8] px-4 py-2.5 md:w-full border-0 outline-0 cursor-pointer h-32 md:h-66"
          >
            {t("submit")}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;

