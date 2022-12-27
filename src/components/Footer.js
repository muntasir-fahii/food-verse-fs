const Footer = () => {
  return (
    <div className="bg-rose-600 h-20 mx-auto text-center py-3">
      <h2 className="logo text-2xl font-bold lowercase italic ">
        Food<span className="text-white">verse</span>
      </h2>
      <p className="font-thin text-white">
        © all right reserved {new Date().getFullYear()}
      </p>
    </div>
  );
};

export default Footer;
