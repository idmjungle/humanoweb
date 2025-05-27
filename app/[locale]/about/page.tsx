import { useTranslations } from "next-intl";
import RootLayout from "../(root)/layout";

export const metadata = {
  title: "About",
};
const AboutPage = () => {

  const t = useTranslations("AboutPage");
    metadata.title = t("title");
  

  return (
    <RootLayout>
      <div>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </div>
    </RootLayout>
  );
};

export default AboutPage;
