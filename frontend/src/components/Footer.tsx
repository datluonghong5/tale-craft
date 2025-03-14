import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="text-center footer w-full py-16 px-32">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img src={Logo} alt="logo" /> <p className="text-2xl">TaleCraft</p>
      </div>
      <p className="text-xl">Crafting Dreams, One Chapter at a Time.</p>
      <div className="flex items-center justify-between mt-16"></div>
    </div>
  );
}

export default Footer;
