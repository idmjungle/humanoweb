import Carousel from "@/components/shared/carousel/page";

const Homepage = () => {

  return (
    <div
      className="bg-humano-dark text-2xl col-span-2 text-humano-light rounded-lg overflow-hidden p-0 relative h-full"
    >
      <div className="absolute w-full h-full top-0 bottom-0 overflow-hidden rounded-sm">
        <Carousel />
      </div>
    </div>
  );
};

export default Homepage;
