"use client";
import { Link, usePathname } from "@/i18n/navigation";
import React from "react";
import { useRef, useEffect } from "react";
import { useRouter } from "@/i18n/navigation";
import { LinkProps } from "next/link";

type AllowedHref = "/" | "/info" | "/works" | "/connect";

interface TLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
}

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TLink = ({ children, href, ...props }: TLinkProps) => {
  const router = useRouter();
  const pathname = usePathname();
  const ref = useRef<HTMLDivElement>(null);

  const handleTransition = async (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.preventDefault();
    if(pathname === href) {
      return; // Prevent transition if the link is the current page
    }


    const main = document.querySelector("main");
    const section = document.querySelector("section");
    const sub = section?.querySelector("div");
    const lines = sub?.querySelectorAll("div");

    section?.classList.remove("invisible");
    main?.classList.add("overflow-hidden");

    console.log(lines);
    console.log(ref.current);

    if (ref.current && lines) {
      lines.forEach((line) => {
        if (line.classList.contains("-left-full")) {
          line.classList.add("left-0");
        } else {
          line.classList.add("left-0!");
        }
      });
    }

    await sleep(500);
    router.push(href as Parameters<typeof router.push>[0]);
    await sleep(500);

  };

    useEffect(() => {
    const main = document.querySelector("main");
    const section = document.querySelector("section");
    const sub = section?.querySelector("div");
    const lines = sub?.querySelectorAll("div");

    // Reset classes after navigation
    lines?.forEach((line) => {
      if (line.classList.contains("-left-full")) {
        line.classList.remove("left-0");
      } else {
        line.classList.remove("left-0!");
      }
    });

    section?.classList.add("invisible");
    main?.classList.remove("overflow-hidden");
  }, [pathname]); // Runs after every navigation


  // Remove locale if it's false to avoid type error
  const { locale, ...restProps } = props;
  const linkProps = locale === false ? restProps : { locale, ...restProps };

  return (
    <Link
      onClick={handleTransition}
      className="col-span-2 w-full relative group"
      href={href as AllowedHref}
      {...linkProps}
    >
      <span ref={ref} >
      {children}
      </span>
    </Link>
  );
};

export default TLink;
