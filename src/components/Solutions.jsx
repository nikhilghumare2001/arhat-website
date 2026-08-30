// ============================================================
// IMPORT REACT
// ============================================================

import { useState } from "react";


// ============================================================
// IMPORT ICONS
// ============================================================

import {
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaFilm,
} from "react-icons/fa";


// ============================================================
// IMPORT COMPONENTS
// ============================================================

// SolutionCard displays each solution as a card
import SolutionCard from "./SolutionCard";

// SolutionDetails displays detailed information
// when the user clicks "View Solution"
import SolutionDetails from "./SolutionDetails";


// ============================================================
// SOLUTIONS DATA
// ============================================================

// All solution information is stored in this array.
// Each object represents one solution card.

const services = [

  // ----------------------------------------------------------
  // HOME AUTOMATION
  // ----------------------------------------------------------

  {
    icon: <FaHome />,
    title: "Home Automation",
    description:
      "Control lighting, curtains, air conditioning and entertainment systems from a single smart interface.",
  },


  // ----------------------------------------------------------
  // BUILDING AUTOMATION
  // ----------------------------------------------------------

  {
    icon: <FaBuilding />,
    title: "Building Automation",
    description:
      "Integrated automation solutions for commercial buildings, offices and hotels with energy efficiency.",
  },


  // ----------------------------------------------------------
  // SECURITY SYSTEMS
  // ----------------------------------------------------------

  {
    icon: <FaShieldAlt />,
    title: "Security Systems",
    description:
      "Advanced CCTV, intrusion detection, access control and remote monitoring for complete safety.",
  },


  // ----------------------------------------------------------
  // HOME THEATRE
  // ----------------------------------------------------------

  {
    icon: <FaFilm />,
    title: "Home Theatre",
    description:
      "Create a premium cinematic experience with immersive audio, video and intelligent control systems.",
  },

];


// ============================================================
// MAIN SOLUTIONS COMPONENT
// ============================================================

export default function Solutions() {

  // This state stores the solution selected by the user.
  //
  // null = no solution is selected
  // "Home Automation" = Home Automation is selected
  // "Building Automation" = Building Automation is selected
  //
  const [selectedSolution, setSelectedSolution] = useState(null);


  // ==========================================================
  // SHOW SOLUTION DETAILS
  // ==========================================================

  // If the user clicks "View Solution",
  // show the detailed solution page.

  if (selectedSolution) {

    return (

      <SolutionDetails

        // Send the selected solution name
        // to SolutionDetails component.
        solution={selectedSolution}


        // When the user clicks Close,
        // remove the selected solution.
        onClose={() => setSelectedSolution(null)}

      />

    );
  }


  // ==========================================================
  // MAIN SOLUTIONS SECTION
  // ==========================================================

  // If no solution is selected,
  // show the main solution cards.

  return (

    <section
      id="solutions"
      className="bg-gray-100 py-24"
    >

      <div className="max-w-7xl mx-auto px-6">


        {/* ==================================================
            SECTION HEADING
        ================================================== */}

        <div className="text-center">


          {/* Main Heading */}

          <h2 className="text-4xl font-bold text-gray-900">
            Our Solutions
          </h2>


          {/* Blue Line Under Heading */}

          <div className="w-28 h-1 bg-blue-600 mx-auto mt-4 rounded-full"></div>


          {/* Introduction */}

          <p className="max-w-4xl mx-auto mt-6 text-lg leading-8 text-gray-700">

            Smart technology designed around the way you live and work.
            We deliver intelligent automation, control and security
            solutions for homes, commercial buildings, hospitality and
            industrial environments.

            Our integrated systems combine comfort, convenience, safety,
            energy efficiency and seamless control in one powerful ecosystem.

          </p>

        </div>


        {/* ==================================================
            SOLUTION CARDS
        ================================================== */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">


          {/* Loop through all solutions */}

          {services.map((service) => (

            <SolutionCard

              // Unique key for React
              key={service.title}


              // Send icon to SolutionCard
              icon={service.icon}


              // Send title to SolutionCard
              title={service.title}


              // Send description to SolutionCard
              description={service.description}


              // When user clicks "View Solution",
              // save the selected solution name.
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