import {
  FaAward,
  FaCogs,
  FaHandshake,
  FaHeadset,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";

const features = [
  {
    icon: <FaAward />,
    title: "15+ Years Experience",
    description:
      "Delivering intelligent automation solutions since 2010.",
  },
  {
    icon: <FaCogs />,
    title: "Customized Solutions",
    description:
      "Every project is tailored to meet each client's unique requirements.",
  },
  {
    icon: <FaHandshake />,
    title: "Trusted Technology Partners",
    description:
      "Partnering with leading global automation brands.",
  },
  {
    icon: <FaHeadset />,
    title: "End-to-End Support",
    description:
      "From consultation and installation to reliable after-sales service.",
  },
  {
    icon: <FaLeaf />,
    title: "Energy Efficient",
    description:
      "Smart automation designed to improve comfort and save energy.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality & Reliability",
    description:
      "Professional installation backed by dependable products and service.",
  },
];

function WhyChoose() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Arhat
          </h2>

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>

          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted automation experts delivering smart,
            reliable and future-ready solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl text-blue-600 mb-6">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600 leading-7">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default WhyChoose;