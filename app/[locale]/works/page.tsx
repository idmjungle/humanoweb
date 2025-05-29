import { useTranslations } from "next-intl";
import RootLayout from "../(root)/layout";
import WorksImage from "@/components/shared/svg/works";
export const metadata = {
  title: "Info",
};
const WorksPage = () => {
  const t = useTranslations("WorkPage");

  return (
    <RootLayout>
      <div className="flex text-9xl p-4 font-extrabold uppercase bg-humano-orange rounded-full tracking-tighter animate-shadow-pop-bl">
        <WorksImage design="fill-humano-light me-4" size={128} />
        {t("title")}
      </div>
    </RootLayout>
  );
};

export default WorksPage;
