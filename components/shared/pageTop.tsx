import { useTranslations } from "next-intl";
import AboutImage from "@/components/shared/svg/about";
import WorksImage from "@/components/shared/svg/works";
import ContactImage from "@/components/shared/svg/contact";

type ImageType = "about" | "works" | "contact";

interface PageTopProps {
  imageType: ImageType;
  textType: ImageType;
}

const PageTop = (props: PageTopProps, color: string, text: string, shadow: string) => {
  const components = {
    about: AboutImage,
    works: WorksImage,
    contact: ContactImage,
  };
  const ImageComponent = components[props.imageType];

  switch (props.imageType) {
    case "about":
      color = "red";
      text = "AboutPage";
      shadow = "text-shadow-red";
      break;
    case "works":
      color = "orange";
      text = "WorksPage";
      shadow = "text-shadow-orange";
      break;
    case "contact":
      color = "yellow";
      text = "ContactPage";
      shadow = "text-shadow-yellow";
      break;
  }

  const t = useTranslations(text);
  
  if (!ImageComponent) {
    throw new Error(`Unknown image type: ${props.imageType}`);
  }


  return (
    <div className="relative">
      <div
        className={` bg-humano-${color} text-humano-${
          color === "yellow" ? "dark" : "light" 
        } outline-2 outline-humano-dark rounded-full animate-shadow-pop-bl p-2 md:p-1 size-16 md:size-40 inline-flex items-center justify-center`}
      >
        <ImageComponent
          design={`fill-humano-${
            color === "yellow" ? "dark" : "light"
          } inline-block md:hidden`}
          size={48}
        />
        <ImageComponent
          design={`fill-humano-${color === "yellow" ? "dark" : "light"} hidden md:inline-block`}
          size={128}
        />
      </div>
      <span className={`text-4xl md:text-9xl font-extrabold uppercase inline-flex text-humano-light align-middle tracking-tighter items-center justify-center ms-4 h-32 top-0 absolute ${shadow}`}>
        {t("title")}
      </span>
    </div>
  );
};

export default PageTop;
