import { useTranslations, useMessages } from "next-intl";

export const metadata = {
  title: "Home",
};

const Homepage = () => {
  const t = useTranslations("HomePage");
  metadata.title = t("title");
  const messages = useMessages();
  const keys = Object.keys(messages.HomePage.sampleText);

  return (
    <div className="flex flex-col text-2xl/6 gap-6">
      <p>{t("description")}</p>
      {keys.map((key) => (
        <div className="animate-flicker-in-1" style={{ animationDelay: `${Number(key) * 100}ms` }} key={key}><p className="leading-8">{t(`sampleText.${key}`)}</p></div>
      ))}
    </div>
  );
};

export default Homepage;
