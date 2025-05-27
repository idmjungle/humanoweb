import { Link } from "@/i18n/navigation";

const Menu = () => {

  return (
    
    <menu className="bg-humano-dark md:bg-transparent p-4 md:p-0 fixed md:static z-50 bottom-0 left-0 right-0">
      <div className="flex md:grid md:grid-cols-2 gap-2 md:gap-4 md:text-3xl lg:text-6xl text-xl">
        <Link
          href="/about"
          className="bg-humano-red text-humano-light transition-all duration-150 col-span-2 lg:w-1/2 lg:hover:w-full w-full font-extrabold tracking-tighter rounded-lg p-2 md:p-4 uppercase"
        >
          About Us
        </Link>
        <Link
          href="/works"
          className="bg-humano-orange text-humano-light transition-all duration-150 col-span-2 lg:w-1/2 lg:hover:w-full w-full font-extrabold tracking-tighter rounded-lg p-2 md:p-4 uppercase"
        >
          Works
        </Link>
        <Link
          href="/contact"
          className="bg-humano-yellow text-humano-dark transition-all duration-150 col-span-2 lg:w-1/2 lg:hover:w-full w-full font-extrabold tracking-tighter rounded-lg p-2 md:p-4 uppercase"
        >
          Contact
        </Link>
      </div>
    </menu>
  );
};

export default Menu;
