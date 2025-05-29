import { useTranslations } from "next-intl";
import RootLayout from "../(root)/layout";
import AboutImage from "@/components/shared/svg/about";

export const metadata = {
  title: "Info",
};
const AboutPage = () => {
  const t = useTranslations("AboutPage");

  return (
    <RootLayout>
      <div className="flex text-9xl p-4 font-extrabold uppercase bg-humano-red rounded-full tracking-tighter animate-shadow-pop-bl">
        <AboutImage design="fill-humano-light me-4" size={128} />
        {t("title")}
      </div>
    </RootLayout>
  );
};

export default AboutPage;
