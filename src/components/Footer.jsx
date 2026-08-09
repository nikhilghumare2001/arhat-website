import logo from "../assets/images/arhat_systemsLLP.png";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* Top Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Company */}
          <div>

            <img
              src={logo}
              alt="Arhat Systems LLP"
              className="h-20 w-auto mb-3"
            />

            <p className="leading-7 text-gray-400">
              Delivering intelligent home and building automation
              solutions with world-class technology, premium security
              systems, lighting control, home theatres, and energy
              management.
            </p>

          </div>

          <div>

  <h3 className="text-xl font-semibold text-white mb-5">
    Quick Links
  </h3>

  <ul className="space-y-3">

    <li>
      <a
        href="#home"
        className="hover:text-blue-500 transition duration-300"
      >
        Home
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="hover:text-blue-500 transition duration-300"
      >
        About
      </a>
    </li>

    <li>
      <a
        href="#services"
        className="hover:text-blue-500 transition duration-300"
      >
        Services
      </a>
    </li>

    <li>
      <a
        href="#products"
        className="hover:text-blue-500 transition duration-300"
      >
        Products
      </a>
    </li>

    <li>
      <a
        href="#contact"
        className="hover:text-blue-500 transition duration-300"
      >
        Contact
      </a>
    </li>

  </ul>

</div>
          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Our Services
            </h3>

            <ul className="space-y-3">

              <li>Home Automation</li>
              <li>Building Automation</li>
              <li>Lighting Control</li>
              <li>Security Systems</li>
              <li>Home Theatre</li>

            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="text-blue-500 mt-1" />

                <div>
                  +91 99600 29911
                  <br />
                  +91 20 26348603
                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaEnvelope className="text-blue-500 mt-1" />

                <div>
                  sales@arhat.in
                </div>

              </div>

              <div className="flex items-start gap-4">

                <FaMapMarkerAlt className="text-blue-500 mt-1" />

                <div>
                  10, Motado Bungalow,
                  <br />
                   NPS Line, East St, opp. LIC Office,
                  <br />
                 Pune-Camp, Maharashtra 411001
                </div>

              </div>

            </div>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com/profile.php?id=100063755832932"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom Footer */}

      <div className="border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 py-6">

          <p className="text-sm text-gray-400 text-center">
            © 2026 Arhat Systems LLP. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}