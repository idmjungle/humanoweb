import { useTranslations } from "next-intl";

export const metadata = {
  title: "Home",
};

const Homepage = () => {
  
  const t = useTranslations("HomePage");
  metadata.title = t("title");
  return (
    <div className="flex flex-col text-2xl/6 gap-6">
      <p>{t("description")}</p>
    </div>
  );
};

export default Homepage;
