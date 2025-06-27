"use client";
import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";
import Link from "next/link";

const Carousel = () => {
  const [count, setCount] = useState<number>(0);
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined;
    if (isActive) {
      intervalId = setInterval(() => {
        setCount((c) => c + 1);
        if (count >= 150) {
          setCount(0);
        }
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, count]);
  const t = useTranslations("Carousel");

  const toggleCounting = () => setIsActive(!isActive);

  return (
    <>
      <div className="grid grid-cols-1 w-full gap-0 h-3/1 ">
        <div className="animate-scrolling h-full">
          <div className="bg-fixed relative bg-no-repeat bg-cover bg-center bg-[url('/images/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg')] h-1/3 bg-blend-luminosity">
            <div className="p-4 m-4 absolute bottom-0 right-0 text-humano-light bg-humano-dark/70 rounded-lg text-sm md:text-md">
              Photo by{" "}
              <Link href="https://unsplash.com/@anotherlovely?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Alyssa Strohmann
              </Link>{" "}
              on{" "}
              <Link href="https://unsplash.com/photos/hanged-top-on-brown-and-white-clothes-horse-TS--uNw-JqE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </Link>
            </div>
          </div>
          <div className="bg-humano-orange bg-fixed relative bg-no-repeat bg-cover bg-center bg-[url('/images/dan-burton-wHsOV75Xi8Y-unsplash.jpg')] h-1/3">
            <div className="p-4 m-4 absolute bottom-0 right-0 text-humano-light bg-humano-dark/70 rounded-lg text-sm md:text-md">
              Photo by{" "}
              <Link href="https://unsplash.com/@danburton?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Dan Burton
              </Link>{" "}
              on{" "}
              <Link href="https://unsplash.com/photos/wHsOV75Xi8Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </Link>
            </div>
          </div>
          <div className="bg-humano-yellow bg-fixed relative bg-no-repeat bg-cover bg-center bg-[url('/images/karen-z-wIPKnB58QMw-unsplash.jpg')] h-1/3">
            <div className="p-4 m-4 absolute bottom-0 right-0 text-humano-light bg-humano-dark/70 rounded-lg text-sm md:text-md">
              Photo by{" "}
              <Link href="https://unsplash.com/@karenz?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Karen Z
              </Link>{" "}
              on{" "}
              <Link href="https://unsplash.com/photos/wIPKnB58QMw?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </Link>
            </div>
          </div>
          <div className="bg-humano-red absolute w-full bg-fixed bg-no-repeat bg-cover bg-center bg-[url('/images/alyssa-strohmann-TS--uNw-JqE-unsplash.jpg')] h-1/3">
            <div className="p-4 m-4 absolute bottom-0 right-0 text-humano-light bg-humano-dark/70 rounded-lg text-sm md:text-md">
              Photo by{" "}
              <Link href="https://unsplash.com/@anotherlovely?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Alyssa Strohmann
              </Link>{" "}
              on{" "}
              <Link href="https://unsplash.com/photos/hanged-top-on-brown-and-white-clothes-horse-TS--uNw-JqE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">
                Unsplash
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        className="flex absolute top-0 bottom-0 left-0 right-0 p-4 text-right text-humano-light bg-humano-dark/50 
        rounded-t-lg h-full"
        onClick={toggleCounting}
      >
        <div className="flex text-5xl md:text-9xl font-extrabold tracking-tighter w-full h-full">
          <span
            className={`absolute self-center right-4 opacity-0 ${
              count > 6 && count <= 30
                ? "animate-flicker-in-glow"
                : count > 30
                ? "opacity-0 animate-flicker-out-glow"
                : ""
            }`}
          >
            {t("custom")}
          </span>
          <span
            className={`absolute self-center right-4 opacity-0 ${
              count > 33 && count <= 60
                ? "animate-flicker-in-glow"
                : count > 60
                ? "opacity-0 animate-flicker-out-glow"
                : ""
            }`}
          >
            {t("maintanance")}
          </span>
          <span
            className={`absolute self-center right-4 opacity-0 ${
              count > 63 && count <= 90
                ? "animate-flicker-in-glow"
                : count > 90
                ? "opacity-0 animate-flicker-out-glow"
                : ""
            }`}
          >
            {t("redesign")}
          </span>
          <span
            className={`absolute self-center right-4 opacity-0 ${
              count > 93 && count <= 120
                ? "animate-flicker-in-glow"
                : count > 120
                ? "opacity-0 animate-flicker-out-glow"
                : ""
            }`}
          >
            {t("lang")}
          </span>
        </div>
      </div>
    </>
  );
};

export default Carousel;
