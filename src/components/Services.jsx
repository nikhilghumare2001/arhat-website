import {
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaFilm,
  FaLightbulb,
  FaMusic,
  FaSnowflake,
  FaCamera,
  FaBolt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaHome />,
    title: "Home Automation",
    description:
      "Control lighting, curtains, air conditioning, entertainment, and appliances from a single smart platform.",
  },
  {
    icon: <FaBuilding />,
    title: "Building Automation",
    description:
      "Smart automation solutions for offices, hotels, hospitals, and commercial buildings.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Security Systems",
    description:
      "Integrated CCTV, access control, alarm systems, and smart security monitoring.",
  },
  {
    icon: <FaFilm />,
    title: "Home Theatre",
    description:
      "Premium audio and video experiences with immersive home cinema solutions.",
  },
  {
    icon: <FaLightbulb />,
    title: "Lighting Control",
    description:
      "Create beautiful lighting scenes with intelligent dimming and scheduling.",
  },
  {
    icon: <FaMusic />,
    title: "Multiroom Audio",
    description:
      "Enjoy synchronized music throughout your home with seamless control.",
  },
  {
    icon: <FaHome />,
    title: "Curtain Automation",
    description:
      "Motorized curtains and blinds controlled by touch, remote, or voice.",
  },
  {
    icon: <FaSnowflake />,
    title: "Climate Control",
    description:
      "Automatically manage air conditioning and room temperature for maximum comfort.",
  },
  {
    icon: <FaCamera />,
    title: "Video Surveillance",
    description:
      "High-definition surveillance systems with remote monitoring and recording.",
  },
  {
    icon: <FaBolt />,
    title: "Energy Management",
    description:
      "Optimize electricity usage with smart monitoring and automation.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-slate-50 py-24 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <h2 className="text-4xl font-bold text-gray-900">
            Our Services
          </h2>

          <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded"></div>

          <p className="text-center text-gray-600 text-xl mt-6 max-w-3xl mx-auto">
            Complete smart automation solutions for homes, businesses,
            hospitality, and industrial projects.
          </p>

        </div>

        {/* Service Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">

          {services.map((service, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 text-center hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 flex flex-col items-center h-full"
            >

              {/* Icon */}
              <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl mb-6">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-7">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}