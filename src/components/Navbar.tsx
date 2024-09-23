import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="flex font-medium text-xl items-center justify-center w-full h-full">
      <div className="w-1/2 h-full">
        <h1 className="text-3xl font-bold text-center">Alu Decor</h1>
      </div>
      <div className="w-full h-full">
        <div className="flex items-center justify-evenly gap-7 p-6">
          <ul className="flex items-center justify-between gap-5">
            <li>Email</li>
            <li>Phone</li>
          </ul>

          <ul className="flex items-center justify-between text-2xl gap-5">
            <li>
                <a href="https://instagram.com/"><FaInstagram /></a>
            </li>
            <li><FaFacebook /></li>
            <li><FaWhatsapp /></li>
            <li><FaYoutube /></li>
          </ul>
        </div>
        <div className="flex items-center justify-center gap-5 font-light bg-blue-400 text-2xl text-white">
            <ul className="flex items-center justify-between p-6 gap-6">
                <li>Home</li>
                <li>About Us</li>
                <li>Our Products</li>
                <li>Contact Us</li>
            </ul>
            <button className="bg-gray-500 p-2 text-sm" type="button">inquire now</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
