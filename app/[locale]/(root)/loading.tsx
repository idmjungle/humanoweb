'use client';

import { usePathname } from 'next/navigation'


const LoadingPage = () => {
  const pathname = usePathname();

  return (
    <div className={`${(pathname === "/en" || pathname === "/es") ? "fixed" : "absolute"} w-full h-full top-0 left-0 z-50 overflow-hidden`}>
      <div className="flex flex-col items-center justify-center h-full bg-humano-dark">
        <div className="w-[180%] h-full bg-humano-red relative animate-moveRightStart"></div>
        <div className="w-[180%] h-full bg-humano-orange relative animate-moveRightCenter"></div>
        <div className="w-[180%] h-full bg-humano-yellow relative animate-moveRightBottom"></div>
        <div className="w-[180%] h-full bg-humano-light relative animate-moveRightEnd"></div>
      </div>
    </div>
  );
};

export default LoadingPage;
