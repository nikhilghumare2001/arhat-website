// ============================================================
// IMPORT ICONS
// ============================================================

import {
  FaAward,
  FaCogs,
  FaHandshake,
  FaHeadset,
  FaLeaf,
  FaShieldAlt,
} from "react-icons/fa";


// ============================================================
// WHY CHOOSE ARHAT DATA
// ============================================================

// All information for the "Why Choose Arhat" cards
// is stored inside this array.
//
// Each item contains:
// 1. Icon
// 2. Title
// 3. Description

const features = [

  // ----------------------------------------------------------
  // EXPERIENCE
  // ----------------------------------------------------------

  {
    icon: <FaAward />,
    title: "15+ Years Experience",
    description:
      "Delivering intelligent automation solutions since 2010.",
  },


  // ----------------------------------------------------------
  // CUSTOMIZED SOLUTIONS
  // ----------------------------------------------------------

  {
    icon: <FaCogs />,
    title: "Customized Solutions",
    description:
      "Every project is tailored to meet each client's unique requirements.",
  },


  // ----------------------------------------------------------
  // TECHNOLOGY PARTNERS
  // ----------------------------------------------------------

  {
    icon: <FaHandshake />,
    title: "Trusted Technology Partners",
    description:
      "Partnering with leading global automation brands.",
  },


  // ----------------------------------------------------------
  // CUSTOMER SUPPORT
  // ----------------------------------------------------------

  {
    icon: <FaHeadset />,
    title: "End-to-End Support",
    description:
      "From consultation and installation to reliable after-sales service.",
  },


  // ----------------------------------------------------------
  // ENERGY EFFICIENCY
  // ----------------------------------------------------------

  {
    icon: <FaLeaf />,
    title: "Energy Efficient",
    description:
      "Smart automation designed to improve comfort and save energy.",
  },


  // ----------------------------------------------------------
  // QUALITY AND RELIABILITY
  // ----------------------------------------------------------

  {
    icon: <FaShieldAlt />,
    title: "Quality & Reliability",
    description:
      "Professional installation backed by dependable products and service.",
  },

];


// ============================================================
// WHY CHOOSE ARHAT COMPONENT
// ============================================================

function WhyChoose() {

  return (

    <section className="bg-gray-50 py-24">

      <div className="max-w-7xl mx-auto px-6">


        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <div className="text-center mb-16">


          {/* Main Heading */}

          <h2 className="text-4xl font-bold text-gray-900">
            Why Choose Arhat
          </h2>


          {/* Blue Line */}

          <div className="w-24 h-1 bg-blue-600 mx-auto mt-5 rounded"></div>


        {/* ========================================
    INTRODUCTION
    Explains why customers can trust Arhat
======================================== */}

<p className="mt-6 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-8">
  At Arhat, we combine <b>experience</b>, <b>innovation and trusted
  technology </b> to deliver intelligent automation solutions
  designed around our clients' needs. From smart homes and
  commercial buildings to hospitality and industrial projects,
  our solutions are built to provide greater comfort, security,
  efficiency and seamless control — today and into the future.
</p>

        </div>


        {/* ==================================================
            FEATURE CARDS
        ================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">


          {/* Loop through all features */}

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >


              {/* ==================================================
                  FEATURE ICON
              ================================================== */}

              <div className="text-5xl text-blue-600 mb-6">

                {feature.icon}

              </div>


              {/* ==================================================
                  FEATURE TITLE
              ================================================== */}

              <h3 className="text-2xl font-bold mb-4">

                {feature.title}

              </h3>


              {/* ==================================================
                  FEATURE DESCRIPTION
              ================================================== */}

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


// ============================================================
// EXPORT COMPONENT
// ============================================================

export default WhyChoose;