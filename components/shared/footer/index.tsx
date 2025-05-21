const Footer = () => {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="md:sticky inset-x-0 bottom-0">
      <div className=" bg-humano-light text-humano-dark md:bg-humano-dark/50 md:text-humano-light rounded-lg mt-2 p-2 md:p-4 block ">
        <div className="text-surface font-extrabold tracking-tighter">
          &copy; {year} Humano Web
        </div>
      </div>
    </footer>
  );
};

export default Footer;
