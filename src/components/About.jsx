// Import icons from React Icons
import {
  FaBuilding,
  FaHome,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";


// ========================================
// ABOUT SECTION
// This section tells visitors about Arhat,
// our experience, technology and approach.
// ========================================

function About() {
  return (
    <section id="about" className="bg-white py-24">

      <div className="max-w-7xl mx-auto px-6">


        {/* ========================================
            SECTION HEADING
            Main title of the About section
        ======================================== */}

        <div className="text-center mb-16">

         
            <h2 className="text-4xl font-bold text-gray-900">
            About Arhat
          </h2>

          {/* Blue line below the heading */}
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>

        </div>


        {/* ========================================
    COMPANY DESCRIPTION
    Basic information about Arhat
======================================== */}

<div className="max-w-4xl mx-auto text-center">

  {/* Company Tagline */}
  <h3 className="text-2xl md:text-2xl font-bold text-gray-900">
    Delivering Intelligent Automation Solutions Since 2010
  </h3>

  {/* Company Description */}
  <p className="mt-6 text-lg md:text-xl text-gray-600 leading-8">
    Founded in <b>2010</b>, Arhat has
    been providing intelligent automation and control solutions for
    residential, commercial, hospitality, and industrial projects.
  </p>

  <p className="mt-5 text-lg md:text-xl text-gray-600 leading-8">
    We specialize in integrating
      <b>lighting, climate control, audio-video, security, and energy management
   </b> into one simple and intuitive platform.
  </p>

  <p className="mt-5 text-lg md:text-xl text-gray-600 leading-8">
    At Arhat, we believe technology should make everyday living smarter,
    safer, and more comfortable. By collaborating with leading technology
    partners, we deliver reliable, innovative, and cost-effective
    automation solutions designed around each client's unique requirements.
  </p>

</div>


        {/* ========================================
            COMPANY HIGHLIGHTS
            Four important points about Arhat
        ======================================== */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">


          {/* ========================================
              HIGHLIGHT 1
              Company Experience
          ======================================== */}

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">

            {/* Building icon */}
            <FaBuilding className="text-5xl text-blue-600 mx-auto mb-5" />

            <h3 className="font-bold text-xl text-gray-900 mb-3">
              Founded in 2010
            </h3>

            <p className="text-gray-600 leading-7">
              Delivering automation excellence for over 15 years.
            </p>

          </div>


          {/* ========================================
              HIGHLIGHT 2
              Smart Automation
          ======================================== */}

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">

            {/* Home automation icon */}
            <FaHome className="text-5xl text-blue-600 mx-auto mb-5" />

            <h3 className="font-bold text-xl text-gray-900 mb-3">
              Smart Automation
            </h3>

            <p className="text-gray-600 leading-7">
              Intelligent control for homes and commercial spaces.
            </p>

          </div>


          {/* ========================================
              HIGHLIGHT 3
              Technology Partners
          ======================================== */}

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">

            {/* Partnership icon */}
            <FaHandshake className="text-5xl text-blue-600 mx-auto mb-5" />

            <h3 className="font-bold text-xl text-gray-900 mb-3">
              Trusted Partners
            </h3>

            <p className="text-gray-600 leading-7">
              Working with globally recognized technology brands.
            </p>

          </div>


          {/* ========================================
              HIGHLIGHT 4
              Innovation
          ======================================== */}

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300">

            {/* Innovation icon */}
            <FaLightbulb className="text-5xl text-blue-600 mx-auto mb-5" />

            <h3 className="font-bold text-xl text-gray-900 mb-3">
              Innovative Solutions
            </h3>

            <p className="text-gray-600 leading-7">
              Customized systems designed for every client.
            </p>

          </div>


        </div>

      </div>

    </section>
  );
}


// Export About component
export default About;