import { useState } from "react";
import logo from "../assets/images/arhat_name_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-[1000] bg-white/90 backdrop-blur-md shadow-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">

        <a href="#home" onClick={closeMenu}>
          <img src={logo} alt="Arhat Logo" className="h-9 md:h-10 w-auto" />
        </a>

        {/* DESKTOP */}
        <ul className="hidden md:flex items-center gap-10 text-[17px] font-medium text-gray-800">
          <li><a href="#home" className="hover:text-[#0F56B3] transition">Home</a></li>
          <li><a href="#about" className="hover:text-[#0F56B3] transition">About</a></li>
          <li><a href="#services" className="hover:text-[#0F56B3] transition">Services</a></li>
          <li><a href="#products" className="hover:text-[#0F56B3] transition">Products</a></li>
          <li>
            <a href="#getintouch" className="bg-[#0F56B3] text-white px-5 py-2.5 rounded-full hover:bg-[#0c4591] transition">
              Contact
            </a>
          </li>
        </ul>

        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden text-3xl text-gray-800">
          {menuOpen? "✕" : "☰"}
        </button>
      </nav>

      {/* MOBILE */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <ul className="flex flex-col text-center text-[17px] font-medium text-gray-800">
            <li><a href="#home" onClick={closeMenu} className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-[#0F56B3]">Home</a></li>
            <li><a href="#about" onClick={closeMenu} className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-[#0F56B3]">About</a></li>
            <li><a href="#services" onClick={closeMenu} className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-[#0F56B3]">Services</a></li>
            <li><a href="#products" onClick={closeMenu} className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-[#0F56B3]">Products</a></li>
            <li><a href="#getintouch" onClick={closeMenu} className="block py-4 hover:bg-blue-50 hover:text-[#0F56B3]">Contact</a></li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;