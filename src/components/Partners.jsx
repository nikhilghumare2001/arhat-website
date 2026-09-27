// Import all technology partner logos
import abb from "../assets/images/Partners/abb_logo.jpg";
import control4 from "../assets/images/Partners/control4_logo.jpg";
import elan from "../assets/images/Partners/elan_logo.jpg";
import hikvision from "../assets/images/Partners/hikvision.jpg";
import legrand from "../assets/images/Partners/legrand.jpg";
import lutron from "../assets/images/Partners/lutron_logo.jpg";
import nice from "../assets/images/Partners/nice_logo.jpg";
import rti from "../assets/images/Partners/rti_logo.jpg";
import schneider from "../assets/images/Partners/schenider_logo.jpg";
import knx from "../assets/images/Partners/knx_logo.jpg";

const partners = [
  abb, control4, elan, hikvision, legrand,
  lutron, nice, rti, schneider, knx,
];

function Partners() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">Our Technology Partners</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with globally trusted brands to deliver reliable,
            innovative, and future-ready smart automation solutions.
          </p>
        </div>

        {/* Moving Strip */}
        <div className="relative w-full overflow-hidden">
          <div className="flex w-max animate-scroll">

            {/* Double the list for seamless loop */}
            {[...partners,...partners].map((logo, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-6 mx-4 flex items-center justify-center min-w-[180px] h-[100px]"
              >
                <img
                  src={logo}
                  alt="Technology Partner Logo"
                  className="h-12 object-contain grayscale hover:grayscale-0 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
       .animate-scroll {
          animation: scroll 25s linear infinite;
        }
       .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default Partners;