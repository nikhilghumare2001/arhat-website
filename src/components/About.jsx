import {
  FaBuilding,
  FaHome,
  FaHandshake,
  FaLightbulb,
} from "react-icons/fa";

function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            About Arhat
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="mt-6 text-xl text-gray-600">
            Delivering Intelligent Automation Solutions Since 2010
          </p>
        </div>

        {/* Company Description */}
        <div className="max-w-1xl mx-auto space-y-8 text-lg leading-9 text-gray-700 text-center text-gray-700">

          <p>
            Founded in <strong>2010</strong>, Arhat has been providing
            intelligent automation and control solutions for residential,
            commercial, hospitality, and industrial projects. We specialize
            in integrating lighting, climate control, audio-video,
            security, and energy management into one simple and intuitive platform.
          </p>

          <p>
            At Arhat, we believe technology should make everyday living
            smarter, safer, and more comfortable. By collaborating with
            leading technology partners, we deliver reliable, innovative,
            and cost-effective automation solutions designed around each
            client's unique requirements.
          </p>

        </div>

        {/* Highlights */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-20">

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
            <FaBuilding className="text-5xl text-blue-600 mx-auto mb-5" />
            <h3 className="font-bold text-xl">
              Founded in 2010
            </h3>
                          <p>"Delivering automation excellence for over 15 years."</p>

          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
            <FaHome className="text-5xl text-blue-600 mx-auto mb-5" />
            <h3 className="font-bold text-xl">
              Smart Automation
            </h3>
            <p>"Intelligent control for homes and commercial spaces."</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
            <FaHandshake className="text-5xl text-blue-600 mx-auto mb-5" />
            <h3 className="font-bold text-xl">
              Trusted Partners
            </h3>
            <p>"Working with globally recognized technology brands."</p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
            <FaLightbulb className="text-5xl text-blue-600 mx-auto mb-5" />
            <h3 className="font-bold text-xl">
              Innovative Solutions
            </h3>
            <p>"Customized systems designed for every client."</p>
          </div>
         <div className="text-center mt-16">

         </div>
        </div>
      </div>
    </section>
  );
}

export default About;