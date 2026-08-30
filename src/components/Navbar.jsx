import { useState } from "react";
import logo from "../assets/images/arhat_name_logo.png";

// Main Navbar component
function Navbar() {
  // This controls whether the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu after clicking a menu item
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    // Main navbar
    <header
      className="sticky top-0 z-[1000] bg-white shadow-sm"
      style={{
        border: "2px solid #cbd5e1",
      }}
    >

      {/* ================= NAVBAR CONTENT ================= */}
      <nav className="max-w-7xl mx-auto px-5 md:px-6 py-4 flex items-center justify-between">

        {/* ================= ARHAT LOGO ================= */}
        <a href="#home" onClick={closeMenu}>
          <img
            src={logo}
            alt="Arhat Logo"
            className="h-9 md:h-10 w-auto"
          />
        </a>


        {/* ================= DESKTOP NAVIGATION ================= */}
        {/* This menu is shown on tablet and desktop screens */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">

          {/* Home */}
          <li>
            <a
              href="#home"
              className="hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
          </li>

          {/* About */}
          <li>
            <a
              href="#about"
              className="hover:text-blue-600 transition duration-300"
            >
              About
            </a>
          </li>

          {/* Services */}
          <li>
            <a
              href="#services"
              className="hover:text-blue-600 transition duration-300"
            >
              Services
            </a>
          </li>

          {/* Products */}
          <li>
            <a
              href="#products"
              className="hover:text-blue-600 transition duration-300"
            >
              Products
            </a>
          </li>

          {/* Contact */}
          <li>
            <a
              href="#getintouch"
              className="hover:text-blue-600 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>


        {/* ================= MOBILE MENU BUTTON ================= */}
        {/* This button is shown only on mobile screens */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-3xl text-gray-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {/* Show X when menu is open, otherwise show hamburger */}
          {menuOpen ? "✕" : "☰"}
        </button>

      </nav>


      {/* ================= MOBILE NAVIGATION ================= */}
      {/* This menu appears when the user clicks the hamburger button */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">

          <ul className="flex flex-col text-center text-lg font-medium">

            {/* Mobile Home */}
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
              >
                Home
              </a>
            </li>


            {/* Mobile About */}
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
              >
                About
              </a>
            </li>


            {/* Mobile Services */}
            <li>
              <a
                href="#services"
                onClick={closeMenu}
                className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
              >
                Services
              </a>
            </li>


            {/* Mobile Products */}
            <li>
              <a
                href="#products"
                onClick={closeMenu}
                className="block py-4 border-b border-gray-100 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
              >
                Products
              </a>
            </li>


            {/* Mobile Contact */}
            <li>
              <a
                href="#getintouch"
                onClick={closeMenu}
                className="block py-4 hover:bg-blue-50 hover:text-blue-600 transition duration-300"
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

// Export Navbar so it can be used in other files
export default Navbar;