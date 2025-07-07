"use client";

import {usePathname} from "next/navigation"

const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();
  const pathname = usePathname();

  return (
    <footer className={`${(pathname === "/en" || pathname === "/es") ? "md:absolute md:bottom-0 right-0 left-0 px-4" : ""} md:w-full md:h-20`}>
      <div className="bg-humano-light text-humano-dark md:bg-humano-dark/50 md:text-humano-light rounded-lg p-2 md:p-4 block ">
        <div className="text-surface font-extrabold tracking-tighter">
          &copy; {year} Humano Web
        </div>
      </div>
    </footer>
  );
};

export default Footer;
