'use client';


const Loading = () => {
  
  return (
    <section className="absolute w-full h-full -top-0 left-0 z-100 overflow-hidden invisible rounded-lg">
      <div className="flex flex-col items-center justify-center h-full relative">
        <div className="-left-full w-full h-full bg-humano-red relative transition-all duration-500 delay-75"></div>
        <div className="left-full w-full h-full bg-humano-orange relative transition-all duration-500 delay-100"></div>
        <div className="-left-full w-full h-full bg-humano-yellow relative transition-all duration-500 delay-125"></div>
        <div className="left-full w-full h-full bg-humano-light relative transition-all duration-500 delay-150"></div>
      </div>
    </section>
  );
};

export default Loading;
