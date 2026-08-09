import logo from "../assets/images/arhat_name_logo.png";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home">
          <img
            src={logo}
            alt="Arhat Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Navigation */}
        <ul className="flex items-center gap-10 text-lg font-medium">

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

      </nav>
    </header>
  );
}

export default Navbar;