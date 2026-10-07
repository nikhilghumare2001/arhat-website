import { useEffect, useState } from "react";
import SmartRoom from "./SmartRoom";
import AutomationStep from "./AutomationStep";
import ScenePanel from "./ScenePanel";

// Smart home automation steps
const steps = [
  {
    title: "Welcome Home",
    description:
      "Your smart home is ready to create the perfect environment.",
  },
  {
    title: "Lighting Control",
    description:
      "Lights turn on automatically to create a comfortable atmosphere.",
  },
  {
    title: "Motorized Curtains",
    description:
      "Curtains open smoothly and bring natural light into the room.",
  },
  {
    title: "Climate Control",
    description:
      "The AC and fan adjust automatically for your comfort.",
  },
  {
    title: "Morning Scene",
    description:
      "Start your day with the perfect combination of light, curtains and climate.",
  },
  {
    title: "Evening Scene",
    description:
      "Create a relaxing evening environment with intelligent lighting and curtains.",
  },
  {
    title: "Movie Night",
    description:
      "Lights dim, curtains close and your home theatre prepares for the movie.",
  },
  {
    title: "Good Night",
    description:
      "Lights turn off, curtains close and selected systems switch to night mode.",
  },
  {
    title: "Away Mode",
    description:
      "Security activates while unnecessary lights, AC and appliances turn off.",
  },
];

function SmartHomeExperience() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("smart-home-experience");

      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = section.offsetHeight;
      const viewportHeight = window.innerHeight;

      // Calculate how far the user has scrolled through the section
      const scrollDistance = -rect.top;
      const availableScroll = sectionHeight - viewportHeight;

      if (availableScroll <= 0) return;

      const progress = Math.max(
        0,
        Math.min(1, scrollDistance / availableScroll)
      );

      // Convert scroll progress into an automation step
      const step = Math.min(
        steps.length - 1,
        Math.floor(progress * steps.length)
      );

      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section
      id="smart-home-experience"
      className="relative bg-slate-50"
    >
      {/* Section heading */}
      <div className="max-w-7xl mx-auto px-6 pt-24 pb-12 text-center">
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          Smart Living Experience
        </p>

        <h2 className="mt-3 text-4xl md:text-5xl font-bold text-gray-900">
          Experience Smart Living
        </h2>

        <p className="mt-5 max-w-3xl mx-auto text-lg text-gray-600 leading-8">
          See how intelligent automation transforms your everyday lifestyle
          through lighting, curtains, climate control, entertainment and
          security.
        </p>
      </div>

      {/* Sticky automation area */}
      <div className="min-h-[400vh]">
        <div className="sticky top-0 h-screen flex items-center overflow-hidden">
          <div className="max-w-7xl w-full mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-10 items-center">

              {/* Left information */}
              <div className="hidden lg:block">
                <AutomationStep
                  step={activeStep + 1}
                  totalSteps={steps.length}
                  title={steps[activeStep].title}
                  description={steps[activeStep].description}
                />
              </div>

              {/* Smart room */}
              <div className="lg:col-span-2">
                <SmartRoom activeStep={activeStep} />
              </div>

            </div>

            {/* Mobile information */}
            <div className="lg:hidden mt-6">
              <AutomationStep
                step={activeStep + 1}
                totalSteps={steps.length}
                title={steps[activeStep].title}
                description={steps[activeStep].description}
              />
            </div>

            {/* Scene information */}
            <div className="hidden xl:block absolute right-8 bottom-10">
              <ScenePanel activeStep={activeStep} />
            </div>
          </div>
        </div>
      </div>

      {/* Final message */}
      <div className="py-24 text-center bg-white">
        <p className="text-blue-600 font-semibold uppercase tracking-wider">
          One System
        </p>

        <h3 className="mt-3 text-3xl md:text-4xl font-bold text-gray-900">
          Complete Control
        </h3>

        <p className="mt-5 max-w-2xl mx-auto text-gray-600 text-lg">
          Lighting, climate, curtains, security and entertainment —
          intelligently connected through one automation system.
        </p>
      </div>
    </section>
  );
}

export default SmartHomeExperience;