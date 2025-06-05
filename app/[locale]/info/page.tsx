import { useTranslations } from "next-intl";
import RootLayout from "../(root)/layout";
import AboutImage from "@/components/shared/svg/about";

export const metadata = {
  title: "Info",
};
const AboutPage = () => {
  const t = useTranslations("AboutPage");

  
  // Ensure t("who.description") returns an array of strings.
  const whoDescriptionLines: string[] = t.raw
    ? t.raw("who.description")
    : (t("who.description").split("\n") as string[]);

  const whatServicesLines: string[] = t.raw
    ? t.raw("what.services")
    : (t("what.services").split("\n") as string[]);

  const whoDescription = whoDescriptionLines.map((line: string, index: number) => (
    <p key={index} className="mb-4">
      {line}
    </p>
  ));
  const whatServices = whatServicesLines.map((line: string, index: number) => (
    <li key={index} className="mb-4">
      {line}
    </li>
  ));

  return (
    <RootLayout>
      <div className="flex ">
        <div className="text-8xl font-extrabold uppercase bg-humano-red rounded-full tracking-tighter animate-shadow-pop-bl p-4 w-1/2 ">
          <AboutImage design="fill-humano-light me-4 float-left" size={96} />
          <span className="text-humano-light">{t("title")}</span>
        </div>
      </div>
      <h2 className="text-6xl font-bold my-8">{t("who.title")}</h2>
      <div>{whoDescription}</div>
      <h2 className="text-6xl font-bold my-8">{t("what.title")}</h2>
      <p>{t("what.description")}</p>
      <ul>{whatServices}</ul>
    </RootLayout>
  );
};

export default AboutPage;
