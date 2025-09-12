"use client";

import Image from "next/image";
import Logo from "@/public/images/logo.svg";
import {
  FaBluesky,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { useParams } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const handleLanguageToggle = (checked: boolean) => {
    router.replace(pathname, { locale: checked ? "es" : "en" });
  };

  return (
    <header className="grid md:grid-cols-3 md:gap-4 mb-5">
      <div className="">
        <Link href="/">
          <Image src={Logo} alt="group-10" width={680} height={175} />
        </Link>
        <div className="lg:mt-4 mt-2">
          <a
            href="https://bsky.app/profile/humano-web.bsky.social"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:cursor-pointer"
              type="button"
            >
              <FaBluesky className="md:h-8 md:w-8 h-6 w-6" />
            </button>
          </a>
          <a
            href="https://www.facebook.com/people/Humano-Web/61577124087699/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:cursor-pointer"
              type="button"
            >
              <FaFacebook className="md:h-8 md:w-8 h-6 w-6" />
            </button>
          </a>
          <a
            href="https://www.pinterest.com/humanoweb/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:cursor-pointer"
              type="button"
            >
              <FaPinterest className="md:h-8 md:w-8 h-6 w-6" />
            </button>
          </a>
          <a
            href="https://www.instagram.com/humano.web.design/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 hover:cursor-pointer"
              type="button"
            >
              <FaInstagram className="md:h-8 md:w-8 h-6 w-6" />
            </button>
          </a>
        </div>
      </div>
      <div className="flex items-center">
        {" "}
        <h1 className="text-xl md:text-5xl xl:text-7xl text-humano-light font-extrabold tracking-tighter md:text-center">
          <span className="text-humano-red">Your Vision</span>, en{" "}
          <span className="text-humano-orange">Español</span> y{" "}
          <span className="text-humano-yellow">English</span>
        </h1>
      </div>
      <div className="flex place-items-center items-center md:items-end justify-start md:justify-end gap-4 tracking-tighter text-humano-light">
        <span className="text-2xl md:text-4xl font-extrabold mb-2">EN</span>{" "}
        <div className="relative">
          <label
            htmlFor="lang"
            className="block rounded-full bg-humano-light w-16 h-8 md:w-24 md:h-12 cursor-pointer outline-2 relative"
          >
            <input
              type="checkbox"
              id="lang"
              defaultChecked={params.locale === "es"}
              className="peer appearance-none"
              onChange={(e) => handleLanguageToggle(e.target.checked)}
            />
            <div className="absolute transition-all rounded-full w-8 h-8 md:w-12 md:h-12 bg-humano-dark top-0 left-0 peer-checked:translate-x-[100%] outline-1 -outline-offset-1"></div>
          </label>
        </div>
        <span className="text-2xl md:text-4xl font-extrabold mb-2">
          &Eacute;S
        </span>{" "}
      </div>
    </header>
  );
};

export default Header;
