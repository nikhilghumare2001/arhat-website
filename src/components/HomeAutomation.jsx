// ========================================
// HOME AUTOMATION COMPONENT
//
// This section explains the Home Automation
// solution offered by Arhat.
//
// It contains:
// 1. Section heading
// 2. Home automation description
// 3. Mobile app image
// 4. Feature cards around the mobile
// 5. Responsive mobile layout
// 6. Close buttons
// ========================================


// ========================================
// IMPORT MOBILE APP IMAGE
// ========================================

import mobile from "../assets/images/arhat_logo_phone_mockup.png";


// ========================================
// IMPORT REUSABLE FEATURE CARD
// ========================================

import FeatureCard from "./FeatureCard";


// ========================================
// IMPORT ICONS
// These icons represent different
// home automation features.
// ========================================

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


// ========================================
// HOME AUTOMATION COMPONENT
//
// onClose is received from the parent
// component and is used to close this
// solution section.
// ========================================

export default function HomeAutomation({ onClose }) {

  return (

    <section
      className="
        bg-white
        rounded-3xl
        shadow-xl
        p-8
        md:p-14
        relative
      "
    >


      {/* ========================================
          TOP CLOSE BUTTON
          Allows the user to close the
          Home Automation solution.
      ======================================== */}

      <button
        type="button"
        onClick={onClose}
        className="
          absolute
          top-6
          right-6
          w-10
          h-10
          rounded-full
          bg-gray-100
          hover:bg-red-100
          text-gray-600
          hover:text-red-600
          text-2xl
          flex
          items-center
          justify-center
          transition
          duration-200
        "
        aria-label="Close Home Automation"
      >
        ×
      </button>


      {/* ========================================
          SECTION HEADING
      ======================================== */}

      <div className="text-center mb-12">


        {/* Small heading */}

        <p className="
          text-blue-600
          font-semibold
          uppercase
          tracking-wider
          mb-3
        ">
          Home Automation
        </p>


        {/* Main heading */}

        <h2 className="
          text-4xl
          md:text-5xl
          font-bold
          text-gray-900
        ">
          Smart Living, Simplified
        </h2>


        {/* Description */}

        <p className="
          text-gray-600
          mt-6
          max-w-4xl
          mx-auto
          leading-8
        ">
          Imagine living in a home that obeys your every command.
          Control lighting, curtains, air conditioning, home theatre,
          security, appliances and much more using your smartphone
          or tablet from anywhere in the world.
        </p>


      </div>


      {/* ========================================
          DESKTOP FEATURE LAYOUT
          
          This layout is visible on medium
          and large screens.
          
          The mobile phone is placed in the
          center and feature cards are arranged
          around it.
      ======================================== */}

      <div
        className="
          relative
          max-w-6xl
          mx-auto
          h-[900px]
          hidden
          md:block
        "
      >


        {/* ========================================
            LEFT SIDE FEATURE CARDS
        ======================================== */}


        {/* Lighting */}

        <FeatureCard
          icon={<FaLightbulb />}
          title="Lighting"
          top="40px"
          left="20px"
        />


        {/* Security */}

        <FeatureCard
          icon={<FaShieldAlt />}
          title="Security"
          top="250px"
          left="0"
        />


        {/* Smart Lock */}

        <FeatureCard
          icon={<FaLock />}
          title="Smart Lock"
          top="470px"
          left="30px"
        />


        {/* Equipment */}

        <FeatureCard
          icon={<FaBolt />}
          title="Equipment"
          bottom="110px"
          left="20px"
        />


        {/* Mood Creation */}

        <FeatureCard
          icon={<FaPalette />}
          title="Mood Creation"
          bottom="0"
          left="160px"
        />


        {/* ========================================
            CENTER MOBILE APP
        ======================================== */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
          "
        >

          <img
            src={mobile}
            alt="Arhat Home Automation Mobile App"
            className="
              h-[680px]
              object-contain
              drop-shadow-2xl
            "
          />

        </div>


        {/* ========================================
            RIGHT SIDE FEATURE CARDS
        ======================================== */}


        {/* Climate */}

        <FeatureCard
          icon={<FaSnowflake />}
          title="Climate"
          top="40px"
          right="20px"
        />


        {/* Multimedia */}

        <FeatureCard
          icon={<FaTv />}
          title="Multimedia"
          top="250px"
          right="0"
        />


        {/* Door Communication */}

        <FeatureCard
          icon={<FaDoorOpen />}
          title="Door Communication"
          top="470px"
          right="30px"
        />


        {/* Rooms */}

        <FeatureCard
          icon={<FaCouch />}
          title="Rooms"
          bottom="110px"
          right="20px"
        />


        {/* Scenes */}

        <FeatureCard
          icon={<FaMobileAlt />}
          title="Scenes"
          bottom="0"
          right="160px"
        />


      </div>


      {/* ========================================
          MOBILE LAYOUT
          
          On mobile devices, the desktop
          positioning is removed.
          
          The phone appears first and the
          feature cards are displayed below
          in a two-column grid.
      ======================================== */}

      <div className="md:hidden">


        {/* ========================================
            MOBILE APP IMAGE
        ======================================== */}

        <div className="flex justify-center mb-10">

          <img
            src={mobile}
            alt="Arhat Home Automation Mobile App"
            className="
              h-[550px]
              object-contain
              drop-shadow-2xl
            "
          />

        </div>


        {/* ========================================
            MOBILE FEATURE CARDS
        ======================================== */}

        <div className="grid grid-cols-2 gap-4">


          {/* Lighting */}

          <FeatureCard
            icon={<FaLightbulb />}
            title="Lighting"
          />


          {/* Climate */}

          <FeatureCard
            icon={<FaSnowflake />}
            title="Climate"
          />


          {/* Security */}

          <FeatureCard
            icon={<FaShieldAlt />}
            title="Security"
          />


          {/* Multimedia */}

          <FeatureCard
            icon={<FaTv />}
            title="Multimedia"
          />


          {/* Smart Lock */}

          <FeatureCard
            icon={<FaLock />}
            title="Smart Lock"
          />


          {/* Rooms */}

          <FeatureCard
            icon={<FaCouch />}
            title="Rooms"
          />


          {/* Scenes */}

          <FeatureCard
            icon={<FaMobileAlt />}
            title="Scenes"
          />


          {/* Equipment */}

          <FeatureCard
            icon={<FaBolt />}
            title="Equipment"
          />


          {/* Mood Creation */}

          <FeatureCard
            icon={<FaPalette />}
            title="Mood Creation"
          />


          {/* Door Communication */}

          <FeatureCard
            icon={<FaDoorOpen />}
            title="Door Communication"
          />


        </div>

      </div>


      {/* ========================================
          BOTTOM CLOSE BUTTON
          
          This gives the visitor another way
          to close the solution section.
      ======================================== */}

      <div className="text-center mt-12">

        <button
          type="button"
          onClick={onClose}
          className="
            px-7
            py-3
            rounded-xl
            border
            border-gray-300
            text-gray-700
            font-semibold
            hover:bg-gray-100
            transition
          "
        >
          Close Solution
        </button>

      </div>


    </section>
  );
}