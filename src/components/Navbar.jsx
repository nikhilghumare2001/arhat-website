import { useState } from "react";
import logo from "../assets/images/arhat_name_logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" onClick={closeMenu}>
          <img
            src={logo}
            alt="Arhat Logo"
            className="h-9 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition"
            >
              Services
            </a>
          </li>

          <li>
            <a
              href="#products"
              className="hover:text-blue-600 transition"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#getintouch"
              className="hover:text-blue-600 transition"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="flex flex-col text-center text-lg font-medium">

            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block py-4 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-4 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-4 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#products"
                onClick={closeMenu}
                className="block py-4 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Products
              </a>
            </li>

            <li>
              <a
                href="#getintouch"
                onClick={closeMenu}
                className="block py-4 hover:bg-blue-50 hover:text-blue-600 transition"
              >
                Contact
              </a>
            </li>

          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;