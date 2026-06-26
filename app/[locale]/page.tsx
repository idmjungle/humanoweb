import { getTranslations } from "next-intl/server";
import Carousel from "@/components/shared/carousel/page";
import { APP_NAME, PUBLIC_EMAIL, SERVER_URL } from "@/lib/constants";
import { generateLocalizedMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return generateLocalizedMetadata(locale, "HomePage", "");
}

const Homepage = async ({ params }: { params: Promise<{ locale: string }> }) => {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const rawServices = t.raw ? t.raw("HomePage.services") : undefined;
  const rawIntroDetails = t.raw ? t.raw("HomePage.introDetails") : undefined;
  const rawProcessSteps = t.raw ? t.raw("HomePage.processSteps") : undefined;
  const rawLocalSignals = t.raw ? t.raw("HomePage.localSignals") : undefined;
  const rawHomeFaqs = t.raw ? t.raw("HomePage.homeFaqs") : undefined;
  const services = Array.isArray(rawServices) ? (rawServices as string[]) : [];
  const introDetails = Array.isArray(rawIntroDetails)
    ? (rawIntroDetails as string[])
    : [];
  const processSteps = Array.isArray(rawProcessSteps)
    ? (rawProcessSteps as string[])
    : [];
  const localSignals = Array.isArray(rawLocalSignals)
    ? (rawLocalSignals as string[])
    : [];
  const homeFaqs = Array.isArray(rawHomeFaqs)
    ? (rawHomeFaqs as { question: string; answer: string }[])
    : [];
  const serviceAreas = ["Olympia", "Tacoma", "Seattle", "Thurston County"];
  const schema = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: APP_NAME,
    url: `${SERVER_URL}/${locale}`,
    description: t("HomePage.description"),
    email: PUBLIC_EMAIL,
    areaServed: [
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Olympia",
          addressRegion: "WA",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Tacoma",
          addressRegion: "WA",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Seattle",
          addressRegion: "WA",
        },
      },
      {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Thurston County",
          addressRegion: "WA",
        },
      },
    ],
    serviceType: [
      "Web design",
      "Website redesign",
      "Website maintenance",
      "Bilingual web development",
    ],
  });

  return (
    <>
      <div className="bg-humano-dark text-2xl col-span-2 text-humano-light rounded-lg overflow-hidden p-0 relative h-80 md:h-full">
        <div className="absolute w-full h-full top-0 bottom-0 overflow-hidden rounded-sm">
          <Carousel />
        </div>
      </div>
      <section className="p-6 max-w-6xl mx-auto space-y-10 h-card hidden">
        <div className="sr-only">
          <span className="p-name">{APP_NAME}</span>
          <a className="u-url" href={`${SERVER_URL}/${locale}`}>
            {SERVER_URL}/{locale}
          </a>
          <a className="u-email" href={`mailto:${PUBLIC_EMAIL}`}>
            {PUBLIC_EMAIL}
          </a>
          <div className="h-adr">
            {serviceAreas.map((area) => (
              <span key={area} className="p-locality">
                {area}
              </span>
            ))}
          </div>
        </div>
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight p-name">
            {APP_NAME}
          </h1>
          <p className="text-xl md:text-2xl text-humano-dark/80 p-note">
            {t("HomePage.description")}
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {t("HomePage.introHeading")}
          </h2>
          <p className="text-xl md:text-2xl leading-relaxed">
            {t("HomePage.introParagraph")}
          </p>
          <p className="text-xl md:text-2xl leading-relaxed">
            {t("HomePage.introSubtitle")}
          </p>
          {introDetails.map((detail, index) => (
            <p key={index} className="text-lg md:text-xl leading-relaxed text-humano-dark/90">
              {detail}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {t("HomePage.servicesHeading")}
          </h2>
          <ul className="list-disc list-inside space-y-3 text-xl md:text-2xl">
            {services.map((service, index) => (
              <li key={index} className="p-category">{service}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {t("HomePage.processHeading")}
          </h2>
          <ul className="list-decimal list-inside space-y-3 text-lg md:text-xl leading-relaxed">
            {processSteps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {t("HomePage.localHeading")}
          </h2>
          {localSignals.map((signal, index) => (
            <p key={index} className="text-lg md:text-xl leading-relaxed text-humano-dark/90">
              {signal}
            </p>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            {t("HomePage.faqHeading")}
          </h2>
          <div className="space-y-4">
            {homeFaqs.map((faq, index) => (
              <div key={index}>
                <h3 className="text-2xl md:text-3xl font-semibold">{faq.question}</h3>
                <p className="text-lg md:text-xl leading-relaxed text-humano-dark/90">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
    </>
  );
};

export default Homepage;
