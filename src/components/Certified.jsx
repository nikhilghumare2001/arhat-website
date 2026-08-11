import {
  FaCertificate,
  FaAward,
  FaHandshake,
  FaTools,
} from "react-icons/fa";

const features = [
  {
    icon: <FaCertificate />,
    title: "Certified Engineers",
    description:
      "Professionally trained and certified to install world-class smart automation systems.",
  },
  {
    icon: <FaAward />,
    title: "14+ Years Experience",
    description:
      "Delivering premium automation solutions for homes, offices, hotels, and industries since 2010.",
  },
  {
    icon: <FaHandshake />,
    title: "Global Technology Partners",
    description:
      "Working with globally trusted brands to provide reliable and future-ready automation solutions.",
  },
  {
    icon: <FaTools />,
    title: "Professional Support",
    description:
      "From consultation and installation to commissioning and after-sales service, we've got you covered.",
  },
];

export default function Certified() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-900">
          Certified • Trained • Expert
        </h2>

        <div className="w-28 h-1 bg-blue-600 rounded mx-auto mt-4"></div>

        <p className="text-center text-gray-600 text-xl mt-6 max-w-4xl mx-auto leading-9">
          Arhat is professionally trained and certified to design, install and
          maintain intelligent automation solutions. From luxury homes and
          commercial buildings to hotels, we deliver reliable, innovative and
          future-ready systems using globally trusted technology partners.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-lg p-8 text-center hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl mx-auto mb-6">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {item.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}