import { useTranslations } from "next-intl";
import PageTop from "@/components/shared/pageTop";
import Image from "next/image";
import { generateLocalizedMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "AboutPage", "/info");
}

const AboutPage = () => {
  const t = useTranslations("AboutPage");

  // Ensure t("who.description") returns an array of strings.
  const whoDescriptionLines: string[] = t.raw
    ? t.raw("who.description")
    : typeof t("who.description") === "string"
    ? t("who.description").split("\n")
    : [];

  const whatServicesLines: string[] = t.raw
    ? t.raw("what.services")
    : typeof t("what.services") === "string"
    ? t("what.services").split("\n")
    : [];

  const whatFAQLines: { question: string; answer: string }[] = t.raw
    ? t.raw("faq.questions")
    : JSON.parse(t("faq.questions"));

  const whoDescription = whoDescriptionLines.map(
    (line: string, index: number) => (
      <p key={index} className="mb-4">
        {line}
      </p>
    )
  );
  const whatServices = whatServicesLines.map((line: string, index: number) => (
    <li key={index} className="mb-4">
      {line}
    </li>
  ));
  const whatFAQ = whatFAQLines.map(
    (q: { question: string; answer: string }, index: number) => (
      <li key={index} className="mb-4">
        <span className="font-bold">Q: </span>
        {q.question}
        <br />
        <span className="font-bold">A: </span>
        {q.answer}
      </li>
    )
  );

  return (
    <>
      <div className="p-6">
        {PageTop(
          { imageType: "about", textType: "about" },
          "about",
          "about",
          "shadow"
        )}
        <h2 className="text-4xl md:text-6xl font-bold my-8 text-shadow-red">
          {t("who.title")}
        </h2>
        <div className="text-xl md:text-2xl">
          <div className="md:float-left me-4 mb-4">
            <Image
              className="rounded-full size-fit"
              src="/images/me.jpg"
              alt="That's me!"
              width={300}
              height={300}
            />
          </div>
          {whoDescription}
        </div>
        <h2 className="text-4xl md:text-6xl font-bold my-8 text-shadow-red">
          {t("what.title")}
        </h2>
        <p className="text-xl md:text-2xl mb-4">{t("what.description")}</p>
        <ul className="text-xl md:text-2xl list-disc list-inside list-image-[url('/images/humano_logo_bullet.png')]">
          {whatServices}
        </ul>
        <h2 className="text-4xl md:text-6xl font-bold my-8 text-shadow-red">
          {t("faq.title")}
        </h2>
        <ul className="text-xl md:text-2xl list-decimal list-inside">
          {whatFAQ}
        </ul>
      </div>
    </>
  );
};

export default AboutPage;
