"use client";

import PageTop from "@/components/shared/pageTop";
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// export const metadata = {
//   title: "Info",
// };
function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const WorksPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const [window, setWindow] = useState<boolean>(false);
  type Work = {
    photo: string;
    title: string;
    year: string;
    desc?: string;
  };
  
  const [site, setSite] = useState<Work>({ photo: "", title: "", year: "", desc: "" });

  const t = useTranslations("WorksPage");

  const gallery = t.raw("WorksGallery.works");

  const openWork = async (index: number) => {
    setSite(gallery[index]);
    await sleep(500);
    setShow(true);
    setWindow(true);
  };

  const closeWork = async () => {
    setWindow(false);
    await sleep(500);
    setShow(false);
    await sleep(500);
    setSite({ photo: "", title: "", year: "", desc: "" });
  }

  const worksCard = gallery.map(
    (work: { photo: string; title: string; year: string }, index: number) => (
      <Link
        key={index}
        href={work.photo}
        className="relative group"
        onClick={(e) => {
          e.preventDefault();
          openWork(index);
        }}
      >
        <div className="flex bg-humano-dark/80 absolute w-full h-full font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div className="p-6 absolute bottom-0">
            <h2 className="text-8xl opacity-0 leading-18 top-1/2 -translate-y-1/2 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-1000 delay-300 ease-in-out">{work.title}</h2>
            <h3 className="text-4xl opacity-0 left-1/2 translate-x-full group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-1000 ease-in-out delay-400">{work.year}</h3>
          </div>
        </div>
        <Image
          className="h-auto max-w-full rounded-lg"
          src={work.photo}
          alt=""
          width={500}
          height={500}
        />
      </Link>
    )
  );

  return (
    <>
      {show && (
        <section className="absolute w-full h-full -top-0 left-0 z-50 overflow-hidden rounded-lg">
          <div
            className="absolute top-0 z-50 left-0 p-4 text-4xl text-humano-dark hover:text-humano-red rounded-full cursor-pointer"
            onClick={closeWork}
          >
            <FontAwesomeIcon icon={faTimesCircle} />
          </div>
          <div className="flex flex-row items-center justify-center h-full relative bg-humano-dark">
            <div
              className={`-translate-x-0 left-0 w-1/2 h-full ${
                window ? "animate-slide-in-left" : "animate-slide-out-left"
              } relative overflow-hidden`}
            >
              <div
                style={{ backgroundImage: `url('${site.photo}')`, backgroundRepeat: "repeat-x", backgroundPosition: "50% auto" }}
                className="animate-bg-slide w-[200%] h-full overflow-hidden top-0 absolute bg-humano-dark"
              ></div>
              <div className="w-full text-9xl bg-humano-dark/50 font-bold p-6 absolute bottom-0 leading-28">
                {site.title}
              </div>
            </div>
            <div
              className={`translate-x-0 left-0 w-1/2 h-full relative ${
                window ? "animate-slide-in-right" : "animate-slide-out-right"
              } overflow-auto`}
            >
              <div className="p-6 text-right space-y-8 h-full bg-humano-light text-humano-dark">
                <p>
                  {site.desc}
                </p>
              </div>
            </div>
          </div>
        </section>
      )}

      <div className={`p-6 ${show ? "hidden" : "block"}`}>
        {PageTop(
          { imageType: "works", textType: "works" },
          "works",
          "works",
          "shadow"
        )}
        <h2 className="my-4 font-bold text-5xl">{t("description")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">{worksCard}</div>
        <div className="text-6xl font-bold mt-4">
          {t("soon")}
        </div>
      </div>
    </>
  );
};

export default WorksPage;
