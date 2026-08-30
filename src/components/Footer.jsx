// ========================================
// FOOTER COMPONENT
// This component contains:
// 1. Company information
// 2. Quick navigation links
// 3. Main services
// 4. Contact information
// 5. Social media links
// 6. Copyright
// ========================================


// Import Arhat company logo
import logo from "../assets/images/arhat_systemsLLP.png";


// Import icons from React Icons
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";


// ========================================
// FOOTER COMPONENT
// ========================================

export default function Footer() {

  return (

    <footer className="bg-gray-900 text-gray-300">


      {/* ========================================
          TOP FOOTER
          Contains four main columns
      ======================================== */}

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">


          {/* ========================================
              COLUMN 1
              COMPANY INFORMATION
          ======================================== */}

          <div>

            {/* Arhat company logo */}

            <img
              src={logo}
              alt="Arhat Systems LLP"
              className="h-20 w-auto mb-3"
            />


            {/* Company description */}

            <p className="leading-7 text-gray-400">

              Delivering intelligent home and building automation
              solutions with world-class technology, premium security
              systems, lighting control, home theatres, and energy
              management.

            </p>

          </div>


          {/* ========================================
              COLUMN 2
              QUICK LINKS
          ======================================== */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>


            <ul className="space-y-3">


              {/* Home */}

              <li>
                <a
                  href="#home"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Home
                </a>
              </li>


              {/* About */}

              <li>
                <a
                  href="#about"
                  className="hover:text-blue-500 transition duration-300"
                >
                  About
                </a>
              </li>


              {/* Services */}

              <li>
                <a
                  href="#services"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Services
                </a>
              </li>


              {/* Products */}

              <li>
                <a
                  href="#products"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Products
                </a>
              </li>


              {/* Contact */}

              <li>
                <a
                  href="#getintouch"
                  className="hover:text-blue-500 transition duration-300"
                >
                  Contact
                </a>
              </li>


            </ul>

          </div>


          {/* ========================================
              COLUMN 3
              OUR SERVICES
          ======================================== */}

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


          {/* ========================================
              COLUMN 4
              CONTACT INFORMATION
          ======================================== */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact
            </h3>


            <div className="space-y-5">


              {/* ========================================
                  PHONE NUMBER
              ======================================== */}

              <div className="flex items-start gap-4">

                <FaPhoneAlt className="text-blue-500 mt-1" />

                <div>

                  +91 99600 29911

                  <br />

                  +91 20 26348603

                </div>

              </div>


              {/* ========================================
                  EMAIL
              ======================================== */}

              <div className="flex items-start gap-4">

                <FaEnvelope className="text-blue-500 mt-1" />

                <div>
                  sales@arhat.in
                </div>

              </div>


              {/* ========================================
                  OFFICE ADDRESS
              ======================================== */}

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


            {/* ========================================
                SOCIAL MEDIA ICONS
            ======================================== */}

            <div className="flex gap-4 mt-8">


              {/* Facebook */}

              <a
                href="https://www.facebook.com/profile.php?id=100063755832932"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
              >

                <FaFacebookF />

              </a>


              {/* LinkedIn */}

              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
              >

                <FaLinkedinIn />

              </a>


              {/* Instagram */}

              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 transition flex items-center justify-center"
              >

                <FaInstagram />

              </a>


            </div>

          </div>


        </div>

      </div>


      {/* ========================================
          BOTTOM FOOTER
          Copyright information
      ======================================== */}

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