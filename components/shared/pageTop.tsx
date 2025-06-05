import { useTranslations } from "next-intl";
import AboutImage from "@/components/shared/svg/about";
import WorksImage from "@/components/shared/svg/works";
import ContactImage from "@/components/shared/svg/contact";

type ImageType = "about" | "works" | "contact";

interface PageTopProps {
  imageType: ImageType;
}

const PageTop = (props: PageTopProps, color: string) => {
  const t = useTranslations("AboutPage");
  const components = {
    about: AboutImage,
    works: WorksImage,
    contact: ContactImage,
  };
  const ImageComponent = components[props.imageType];

  switch (props.imageType) {
    case "about":
      color = "red";
      break;
    case "works":
      color = "orange";
      break;
    case "contact":
      color = "yellow";
      break;
  }

  return (
    <div
      className={`flex text-8xl p-4 font-extrabold uppercase bg-humano-${color} text-humano-${color === "yellow" ? "dark" : "light"} rounded-full tracking-tighter animate-shadow-pop-bl`}
    >
      <ImageComponent design={`fill-humano-${color === "yellow" ? "dark" : "light"}`} me-4 size={96} />
      {t("title")}
    </div>
  );
};

export default PageTop;
