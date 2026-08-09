import mobile from "../assets/images/arhat_logo_phone_mockup.png";

import FeatureCard from "./FeatureCard";

import {
  FaLightbulb,
  FaSnowflake,
  FaShieldAlt,
  FaTv,
  FaLock,
  FaDoorOpen,
  FaCouch,
  FaBolt,
  FaPalette,
  FaMobileAlt,
} from "react-icons/fa";

export default function HomeAutomation({ onClose }) {
  return (
    <section className="bg-white rounded-3xl shadow-xl p-8 md:p-14 relative">

      {/* Close Button */}

      <button
        type="button"
        onClick={onClose}
        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-red-100 text-gray-600 hover:text-red-600 text-2xl flex items-center justify-center transition duration-200"
        aria-label="Close Home Automation"
      >
        ×
      </button>

      {/* Heading */}

      <div className="text-center mb-12">

        <p className="text-blue-600 font-semibold uppercase tracking-wider mb-3">
          Home Automation
        </p>

        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
          Smart Living, Simplified
        </h2>

        <p className="text-gray-600 mt-6 max-w-4xl mx-auto leading-8">
          Imagine living in a home that obeys your every command.
          Control lighting, curtains, air conditioning, home theatre,
          security, appliances and much more using your smartphone
          or tablet from anywhere in the world.
        </p>

      </div>

      {/* Phone + Features */}

      <div className="relative max-w-6xl mx-auto h-[900px] hidden md:block">

        {/* LEFT */}

        <FeatureCard
          icon={<FaLightbulb />}
          title="Lighting"
          top="40px"
          left="20px"
        />

        <FeatureCard
          icon={<FaShieldAlt />}
          title="Security"
          top="250px"
          left="0"
        />

        <FeatureCard
          icon={<FaLock />}
          title="Smart Lock"
          top="470px"
          left="30px"
        />

        <FeatureCard
          icon={<FaBolt />}
          title="Equipment"
          bottom="110px"
          left="20px"
        />

        <FeatureCard
          icon={<FaPalette />}
          title="Mood Creation"
          bottom="0"
          left="160px"
        />

        {/* PHONE */}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

          <img
            src={mobile}
            alt="Arhat Home Automation Mobile App"
            className="h-[680px] object-contain drop-shadow-2xl"
          />

        </div>

        {/* RIGHT */}

        <FeatureCard
          icon={<FaSnowflake />}
          title="Climate"
          top="40px"
          right="20px"
        />

        <FeatureCard
          icon={<FaTv />}
          title="Multimedia"
          top="250px"
          right="0"
        />

        <FeatureCard
          icon={<FaDoorOpen />}
          title="Door Communication"
          top="470px"
          right="30px"
        />

        <FeatureCard
          icon={<FaCouch />}
          title="Rooms"
          bottom="110px"
          right="20px"
        />

        <FeatureCard
          icon={<FaMobileAlt />}
          title="Scenes"
          bottom="0"
          right="160px"
        />

      </div>

      {/* Mobile Layout */}

      <div className="md:hidden">

        <div className="flex justify-center mb-10">

          <img
            src={mobile}
            alt="Arhat Home Automation Mobile App"
            className="h-[550px] object-contain drop-shadow-2xl"
          />

        </div>

        <div className="grid grid-cols-2 gap-4">

          <FeatureCard
            icon={<FaLightbulb />}
            title="Lighting"
          />

          <FeatureCard
            icon={<FaSnowflake />}
            title="Climate"
          />

          <FeatureCard
            icon={<FaShieldAlt />}
            title="Security"
          />

          <FeatureCard
            icon={<FaTv />}
            title="Multimedia"
          />

          <FeatureCard
            icon={<FaLock />}
            title="Smart Lock"
          />

          <FeatureCard
            icon={<FaCouch />}
            title="Rooms"
          />

          <FeatureCard
            icon={<FaMobileAlt />}
            title="Scenes"
          />

          <FeatureCard
            icon={<FaBolt />}
            title="Equipment"
          />

          <FeatureCard
            icon={<FaPalette />}
            title="Mood Creation"
          />

          <FeatureCard
            icon={<FaDoorOpen />}
            title="Door Communication"
          />

        </div>

      </div>

      {/* Close Button Bottom */}

      <div className="text-center mt-12">

        <button
          type="button"
          onClick={onClose}
          className="px-7 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-100 transition"
        >
          Close Solution
        </button>

      </div>

    </section>
  );
}