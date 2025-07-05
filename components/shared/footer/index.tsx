const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="md:sticky md:bottom-0 md:w-full md:h-20">
      <div className="bg-humano-light text-humano-dark md:bg-humano-dark/50 md:text-humano-light rounded-lg m-4 p-2 md:p-4 block ">
        <div className="text-surface font-extrabold tracking-tighter">
          &copy; {year} Humano Web
        </div>
      </div>
    </footer>
  );
};

export default Footer;
