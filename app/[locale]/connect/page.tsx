import { useTranslations } from "next-intl";
import RootLayout from "../(root)/layout";
import ContactImage from "@/components/shared/svg/contact";
export const metadata = {
  title: "Info",
};
const ContactPage = () => {
  const t = useTranslations("ContactPage");

  return (
    <RootLayout>
      <div className="flex text-8xl p-4 font-extrabold uppercase bg-humano-yellow text-humano-dark rounded-full tracking-tighter animate-shadow-pop-bl">
        <ContactImage design="fill-humano-dark me-4" size={96} />
        {t("title")}
      </div>
    </RootLayout>
  );
};

export default ContactPage;
