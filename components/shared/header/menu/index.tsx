import { Link } from "@/i18n/navigation";
import AboutImage from "@/components/shared/svg/about/index";
import WorksImage from "@/components/shared/svg/works/index";
import ContactImage from "@/components/shared/svg/contact/index";
import { useTranslations } from "next-intl";

const Menu = () => {
  const t = useTranslations("Menu");

  return (
    <menu className="bg-humano-dark md:bg-transparent p-4 md:p-0 md:static z-50 bottom-0 left-0 right-0">
      <div className="flex md:grid md:grid-cols-2 gap-2 md:gap-4 md:text-3xl lg:text-6xl text-xl md:justify-start text-humano-light">
        <Link
          className=" col-span-2 w-full relative group "
          href="/info"
        >
          <div className="bg-humano-red text-humano-light transition-all ease-in-out duration-500 font-extrabold tracking-tighter rounded-lg p-2 md:p-4 uppercase z-0 relative top-0 left-0 group-hover:left-3 group-hover:-top-3 w-full">
            <div className="float-left mr-4">
              <AboutImage design="fill-humano-light" size={64} />
            </div>
            {t("info")}
          </div>
          <div className="bg-humano-red/90 transition-all ease-in-out duration-500 p-2 md:p-4 rounded-lg absolute top-0 group-hover:-top-0 left-0 w-full -z-10">
            {" "}
            &nbsp;{" "}
          </div>
          <div className="bg-humano-red/80 transition-all ease-in-out duration-500 p-2 md:p-4 rounded-lg absolute top-0 left-0 group-hover:top-3 group-hover:-left-3 w-full -z-20">
            {" "}
            &nbsp;{" "}
          </div>
        </Link>
        <Link
          className=" col-span-2 w-full relative group "
          href="/works"
        >
          <div className="bg-humano-orange text-humano-light transition-all ease-in-out duration-300 font-extrabold tracking-tighter rounded-lg p-2 md:p-4 uppercase z-0 relative top-0 left-0 group-hover:left-3 group-hover:-top-3">
            <div className="float-left mr-4">
              <WorksImage design="fill-humano-light" size={64} />
            </div>
            {t("works")}
          </div>
          <div className="bg-humano-orange/75 transition-all ease-in-out duration-400 p-2 md:p-4 rounded-lg absolute top-0 group-hover:-top-0 left-0 group-hover:-left-0.5 w-full -z-10">
            {" "}
            &nbsp;{" "}
          </div>
          <div className="bg-humano-orange/50 transition-all ease-in-out duration-500 p-2 md:p-4 rounded-lg absolute top-0 left-0 group-hover:top-3 group-hover:-left-3 w-full -z-20">
            {" "}
            &nbsp;{" "}
          </div>
        </Link>
        <Link
          className=" col-span-2 w-full relative group "
          href="/connect"
        >
          <div className="bg-humano-yellow text-humano-dark transition-all ease-in-out duration-300 font-extrabold tracking-tighter rounded-lg p-2 md:p-4 uppercase z-0 relative top-0 left-0 group-hover:left-3 group-hover:-top-3 w-full">
            <div className="float-left mr-4">
              <ContactImage design="fill-humano-dark" size={64} />
            </div>
            {t("connect")}
          </div>
          <div className="bg-humano-yellow/75 transition-all ease-in-out duration-400 p-2 md:p-4 rounded-lg absolute top-0 group-hover:-top-0 left-0 group-hover:-left-0.5 w-full -z-10">
            {" "}
            &nbsp;{" "}
          </div>
          <div className="bg-humano-yellow/50 transition-all ease-in-out duration-500 p-2 md:p-4 rounded-lg absolute top-0 left-0 group-hover:top-3 group-hover:-left-3 w-full -z-20">
            {" "}
            &nbsp;{" "}
          </div>
        </Link>
      </div>
    </menu>
  );
};

export default Menu;
