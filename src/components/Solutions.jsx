import { useState } from "react";

import {
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaFilm,
} from "react-icons/fa";

import SolutionCard from "./SolutionCard";
import SolutionDetails from "./SolutionDetails";

const services = [
  {
    icon: <FaHome />,
    title: "Home Automation",
    description:
      "Control lighting, curtains, air conditioning and entertainment systems from a single smart interface.",
  },

  {
    icon: <FaBuilding />,
    title: "Building Automation",
    description:
      "Integrated automation solutions for commercial buildings, offices and hotels with energy efficiency.",
  },

  {
    icon: <FaShieldAlt />,
    title: "Security Systems",
    description:
      "Advanced CCTV, intrusion detection, access control and remote monitoring for complete safety.",
  },

  {
    icon: <FaFilm />,
    title: "Home Theatre",
    description:
      "Create a premium cinematic experience with immersive audio, video and intelligent control systems.",
  },
];

export default function Solutions() {

  const [selectedSolution, setSelectedSolution] = useState(null);

  // ==============================
  // DETAIL PAGE
  // ==============================

  if (selectedSolution) {
    return (
      <SolutionDetails
        solution={selectedSolution}
        onClose={() => setSelectedSolution(null)}
      />
    );
  }

  // ==============================
  // SOLUTION CARDS
  // ==============================

  return (
    <section
      id="solutions"
      className="bg-gray-100 py-24"
    >

      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center">

          <h2 className="text-5xl font-bold text-gray-900">
            Our Solutions
          </h2>

          <div className="w-28 h-1 bg-blue-600 mx-auto mt-5 rounded-full"></div>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            We design and deliver intelligent automation solutions
            for homes, commercial buildings, hospitality and industries.
          </p>

        </div>


        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {services.map((service) => (

            <SolutionCard
              key={service.title}
              icon={service.icon}
              title={service.title}
              description={service.description}
              onView={() =>
                setSelectedSolution(service.title)
              }
            />

          ))}

        </div>

      </div>

    </section>
  );
}