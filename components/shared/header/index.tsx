import Image from "next/image";
import Logo from '@/public/images/logo.svg';

import {
  FaTwitter,
  FaFacebook,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "@/i18n/navigation";

const Header = () => {
  return (
    <header className="grid md:grid-cols-3 gap-4 mb-5">
      <div className="">
        <Link href="/">
          <Image
            src={Logo}
            alt="group-10"
            width={680}
            height={175}
          />
        </Link>
        <div className="lg:mt-4 mt-2">
          <button
            className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <FaTwitter className="md:h-8 md:w-8 h-6 w-6" />
          </button>
          <button
            className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <FaFacebook className="md:h-8 md:w-8 h-6 w-6" />
          </button>
          <button
            className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <FaPinterest className="md:h-8 md:w-8 h-6 w-6" />
          </button>
          <button
            className="bg-humano-light inline-flex h-8 w-8 md:h-12 md:w-12 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
            type="button"
          >
            <FaInstagram className="md:h-8 md:w-8 h-6 w-6" />
          </button>
        </div>

        {/* <div className="h-[60px] mt-2 bg-[url(/images/humano_lines.png)] "></div> */}
      </div>
      <div className="flex items-center">
        {" "}
        <h1 className="text-4xl lg:text-7xl text-humano-light font-extrabold tracking-tighter md:text-center">
          <span className="text-humano-red">Your Vision</span>, en{" "}
          <span className="text-humano-orange">Español</span> y{" "}
          <span className="text-humano-yellow">English</span>
        </h1>
      </div>
      <div className="hidden md:flex place-items-center md:items-end justify-start md:justify-end gap-4 tracking-tighter text-humano-light">
        <span className="text-2xl md:text-4xl font-extrabold mb-2">EN</span>{" "}
        <div className="relative">
          <label htmlFor="lang" className="block rounded-full bg-humano-light w-18 h-9 md:w-24 md:h-12 cursor-pointer outline-2 relative">
            <input type="checkbox" id="lang" className="peer appearance-none" />
            {/* <div className="absolute rounded-full w-8 h-8 md:w-10 md:h-10 bg-humano-dark top-0 m-0.5 md:m-1 has-checked:left-full has-not-checked:left-0"></div> */}
            <div className="absolute transition-all rounded-full w-8 h-8 md:w-12 md:h-12 bg-humano-dark top-0 peer-checked:translate-x-[100%] outline-1 -outline-offset-1"></div>
          </label>
        </div>
      {/* <Image
        className="inline"
        src="/images/group0.svg"
        alt="group0"
        width={116}
        height={44}
      /> */}
        <span className="text-2xl md:text-4xl font-extrabold mb-2">ES</span>{" "}
      </div>
      {/* <div>
              <div className="grid place-content-end space-y-3">
                <div className="bg-humano-red rounded-full w-32 h-6"></div>
                <div className="bg-humano-orange rounded-full w-32 h-6"></div>
                <div className="bg-humano-yellow rounded-full w-32 h-6"></div>
              </div>
            </div> */}
    </header>
  );
};

export default Header;
