import abb from "../assets/images/Partners/abb_logo.jpg";
import control4 from "../assets/images/Partners/control4_logo.jpg";
import elan from "../assets/images/Partners/elan_logo.jpg";
import hikvision from "../assets/images/Partners/hikvision.jpg";
import legrand from "../assets/images/Partners/legrand.jpg";
import lutron from "../assets/images/Partners/lutron_logo.jpg";
import nice from "../assets/images/Partners/nice_logo.jpg";
import rti from "../assets/images/Partners/rti_logo.jpg";
import schneider from "../assets/images/Partners/schenider_logo.jpg";
import knx from "../assets/images/Partners/knx_logo.jpg"

const partners = [
  abb,
  control4,
  elan,
  hikvision,
  legrand,
  lutron,
  nice,
  rti,
  schneider,
  knx,
];

function Partners() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900">
            Our Technology Partners
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            We collaborate with globally trusted brands to deliver reliable,
            innovative, and future-ready smart automation solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {partners.map((logo, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 flex items-center justify-center hover:shadow-xl transition duration-300 hover:-translate-y-2"
            >
              <img
                src={logo}
                alt="Partner Logo"
                className="h-16 object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Partners;
