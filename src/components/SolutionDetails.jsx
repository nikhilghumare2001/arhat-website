// ============================================================
// IMPORT ICONS
// ============================================================

import {
  FaTimes,
  FaHome,
  FaBuilding,
  FaShieldAlt,
  FaFilm,
  FaLightbulb,
  FaSnowflake,
  FaMusic,
  FaLock,
  FaVideo,
  FaDoorOpen,
  FaCogs,
} from "react-icons/fa";


// ============================================================
// MAIN COMPONENT
// ============================================================

export default function SolutionDetails({ solution, onClose }) {

  // If no solution is selected, show nothing
  if (!solution) {
    return null;
  }


  // ==========================================================
  // HOME AUTOMATION
  // ==========================================================

  if (solution === "Home Automation") {
    return (

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">


            {/* ------------------------------------------------
                Header
            ------------------------------------------------ */}

            <div className="bg-blue-600 text-white px-8 py-10 text-center">

              {/* Home Icon */}
              <div className="flex justify-center mb-4">
                <FaHome className="text-6xl" />
              </div>

              {/* Title */}
              <h2 className="text-4xl md:text-5xl font-bold">
                Home Automation
              </h2>

              {/* Description */}
              <p className="mt-5 max-w-4xl mx-auto text-blue-100 text-lg leading-8">
                Imagine living in a home that obeys your every command.
                Control lighting, curtains, air conditioning, home theatre,
                security, appliances and much more using your smartphone
                or tablet from anywhere in the world.
              </p>

            </div>


            {/* ------------------------------------------------
                Introduction
            ------------------------------------------------ */}

            <div className="px-8 md:px-16 py-12">

              <p className="text-gray-700 text-lg leading-8 max-w-5xl mx-auto text-center">

                One touch on your tablet and the movie starts, your shades
                close and the surround sound kicks in at the perfect volume.
                When the sun goes down, your porch light turns on. And the
                whole house is securely locked at 11 p.m.

              </p>


              <p className="text-gray-700 text-lg leading-8 max-w-5xl mx-auto text-center mt-6">

                eHOME solutions makes your life more comfortable, more
                efficient, and more secure. Best of all, eHOME technology
                gives you the power to personalize your home automation
                system according to your lifestyle and budget.

              </p>


              {/* ------------------------------------------------
                  Home Automation Features
              ------------------------------------------------ */}

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">


                {/* Lighting */}
                <Feature
                  icon={<FaLightbulb />}
                  title="Lighting"
                  text="Control all the lights in your house including LED, CFL and lamps using your mobile phone."
                />


                {/* Climate */}
                <Feature
                  icon={<FaSnowflake />}
                  title="Climate"
                  text="Control the climate in your house according to your comfort by controlling your FAN and AC."
                />


                {/* Scenes */}
                <Feature
                  icon={<FaCogs />}
                  title="Scenes"
                  text="Create scenes that automatically trigger multiple devices such as lights, AC, curtains and AV."
                />


                {/* Equipment */}
                <Feature
                  icon={<FaDoorOpen />}
                  title="Equipment"
                  text="Control roller blinds, curtains, gates, garden sprinklers and other electronic appliances."
                />


                {/* Smart Lock */}
                <Feature
                  icon={<FaLock />}
                  title="Lock"
                  text="Check whether your main door is locked or open and control the lock directly from your screen."
                />


                {/* Rooms */}
                <Feature
                  icon={<FaHome />}
                  title="Rooms"
                  text="Manage an entire room using shortcuts for quick access to rooms and scenes."
                />


                {/* Multimedia */}
                <Feature
                  icon={<FaMusic />}
                  title="Multimedia"
                  text="Control your TV, SetTop Box, sound system and other multimedia devices from your smartphone."
                />


                {/* Security */}
                <Feature
                  icon={<FaShieldAlt />}
                  title="Security"
                  text="Manage alarms and monitoring systems and see who is at your door or what is happening at home."
                />


                {/* Mood Creation */}
                <Feature
                  icon={<FaLightbulb />}
                  title="Mood Creation"
                  text="Create beautiful lighting effects for your living room or bedroom to match your mood or special occasion."
                />


                {/* Door Communication */}
                <Feature
                  icon={<FaVideo />}
                  title="Door Communication"
                  text="Talk to visitors at your door and allow them to enter directly from your smartphone."
                />

              </div>

            </div>


            {/* Close Button */}
            <CloseButton onClose={onClose} />

          </div>

        </div>

      </section>
    );
  }


  // ==========================================================
  // BUILDING AUTOMATION
  // ==========================================================

  if (solution === "Building Automation") {
    return (

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">


            {/* ------------------------------------------------
                Header
            ------------------------------------------------ */}

            <div className="bg-green-600 text-white text-center px-8 py-10">

              <FaBuilding className="text-6xl mx-auto mb-4" />

              <h2 className="text-4xl md:text-5xl font-bold">
                Building Automation
              </h2>

              <p className="mt-5 max-w-5xl mx-auto text-lg leading-8 text-green-100">
                Intelligent Building Automation systems can meet the
                communication, comfort, energy management and security
                needs of modern residential and commercial buildings.
              </p>

            </div>


            {/* ------------------------------------------------
                Building Automation Features
            ------------------------------------------------ */}

            <div className="px-8 md:px-16 py-14">

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">


                {/* Communication */}
                <InfoBox
                  title="Communication"
                  items={[
                    "Communication with Door Visitors",
                    "Apartment to Apartment Calling",
                    "Apartment to Lobby",
                    "Apartment to Security Guard",
                  ]}
                />


                {/* Safety */}
                <InfoBox
                  title="Safety & Intrusion Detection"
                  items={[
                    "Panic Switch",
                    "Gas Leak / Smoke Detector",
                    "Alarm event triggers Siren and call to Security Desk",
                    "Alarm systems",
                    "View cameras in common area",
                  ]}
                />


                {/* Access Control */}
                <InfoBox
                  title="Access Control"
                  items={[
                    "View the visitor on door & grant entry",
                    "Restrict access to common areas",
                    "Entry / exit detection",
                    "Access using specific key or access code",
                  ]}
                />


                {/* Lift Control */}
                <InfoBox
                  title="Lift Control"
                  items={[
                    "Send lift to desired floor",
                    "Lift access only to authorised persons",
                  ]}
                />


                {/* Energy Management */}
                <InfoBox
                  title="Energy Management"
                  items={[
                    "Save energy",
                    "Reduce electricity costs",
                    "Manage common areas",
                    "Control lobby, passage and street lighting",
                  ]}
                />


                {/* Gate & Parking */}
                <InfoBox
                  title="Gate Automation & Parking Systems"
                  items={[
                    "Automatic gate opening for resident vehicles",
                    "Manual opening by security guard",
                  ]}
                />

              </div>

            </div>


            {/* Close Button */}
            <CloseButton onClose={onClose} />

          </div>

        </div>

      </section>
    );
  }


  // ==========================================================
  // SECURITY SYSTEMS
  // ==========================================================

  if (solution === "Security Systems") {
    return (

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">


            {/* ------------------------------------------------
                Header
            ------------------------------------------------ */}

            <div className="bg-amber-500 text-white text-center px-8 py-10">

              <FaShieldAlt className="text-6xl mx-auto mb-4" />

              <h2 className="text-4xl md:text-5xl font-bold">
                Security Systems
              </h2>

              <p className="mt-5 max-w-5xl mx-auto text-lg leading-8 text-amber-50">
                Intelligent security solutions designed to protect your
                home, family, business and property with advanced
                monitoring and access control.
              </p>

            </div>


            {/* ------------------------------------------------
                Security Features
            ------------------------------------------------ */}

            <div className="px-8 md:px-16 py-14">

              <div className="grid md:grid-cols-2 gap-10">


                {/* CCTV */}
                <InfoBox
                  title="CCTV Surveillance"
                  items={[
                    "4, 8, 16 Channel DVR and NVR systems",
                    "Dome, Bullet, PTZ and IP cameras",
                    "Remote viewing of cameras on PC / Mobile",
                  ]}
                />


                {/* Intrusion Alarm */}
                <InfoBox
                  title="Intrusion Alarm System"
                  items={[
                    "Wired and Wireless alarm systems",
                    "Automatic Dialling",
                    "PSTN and GSM based controllers",
                    "Panic, Door, Window, Motion and Vibration sensors",
                  ]}
                />


                {/* Fire Alarm */}
                <InfoBox
                  title="Fire Alarm System"
                  items={[
                    "Conventional and Addressable systems",
                    "Smoke Detectors",
                    "Manual Call Points",
                    "Sounders",
                  ]}
                />


                {/* Access Control */}
                <InfoBox
                  title="Access Control System"
                  items={[
                    "Biometric / Keypad / Card access",
                    "Single and Multi Door",
                    "Standalone / IP based",
                  ]}
                />


                {/* Time Attendance */}
                <InfoBox
                  title="Time Attendance"
                  items={[
                    "Biometric / Keypad / Card",
                    "USB and IP Connectivity",
                    "B/W and Colour LCD display",
                    "MS Access based",
                  ]}
                />

              </div>

            </div>


            {/* Close Button */}
            <CloseButton onClose={onClose} />

          </div>

        </div>

      </section>
    );
  }


  // ==========================================================
  // HOME THEATRE
  // ==========================================================

  if (solution === "Home Theatre") {
    return (

      <section className="bg-gray-100 py-20">

        <div className="max-w-7xl mx-auto px-6">

          <div className="bg-white rounded-3xl shadow-xl overflow-hidden">


            {/* ------------------------------------------------
                Header
            ------------------------------------------------ */}

            <div className="bg-orange-500 text-white text-center px-8 py-10">

              <FaFilm className="text-6xl mx-auto mb-4" />

              <h2 className="text-4xl md:text-5xl font-bold">
                Home Theatre
              </h2>

              <p className="mt-5 max-w-5xl mx-auto text-lg leading-8 text-orange-50">
                Transform your home into a premium entertainment
                destination with immersive audio, cinema-quality
                projection, acoustic design and intelligent control.
              </p>

            </div>


            {/* ------------------------------------------------
                Home Theatre Features
            ------------------------------------------------ */}

            <div className="px-8 md:px-16 py-14">

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                <TheatreItem title="Home Theatre" />

                <TheatreItem title="Immersive Sound" />

                <TheatreItem title="Acoustic Design" />

                <TheatreItem title="Digital Cinema Projectors" />

                <TheatreItem title="Media Server" />

                <TheatreItem title="Premiere Cinema" />

                <TheatreItem title="4D Seats" />

                <TheatreItem title="Luxury Seats" />

              </div>

            </div>


            {/* Close Button */}
            <CloseButton onClose={onClose} />

          </div>

        </div>

      </section>
    );
  }


  // If the solution name does not match anything above
  // then show nothing.
  return null;
}


// ============================================================
// FEATURE COMPONENT
// Used for Home Automation feature cards
// ============================================================

function Feature({ icon, title, text }) {

  return (

    <div className="bg-gray-50 rounded-2xl p-7 border border-gray-100 hover:shadow-md transition">

      {/* Icon */}
      <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-2xl mb-5">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-7">
        {text}
      </p>

    </div>
  );
}


// ============================================================
// INFO BOX COMPONENT
// Used for Building Automation and Security Systems
// ============================================================

function InfoBox({ title, items }) {

  return (

    <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">

      {/* Box Title */}
      <h3 className="text-2xl font-bold text-gray-900 mb-5">
        {title}
      </h3>

      {/* List of Information */}
      <ul className="space-y-3">

        {items.map((item, index) => (

          <li
            key={index}
            className="text-gray-600 leading-7 flex gap-3"
          >

            {/* Bullet Point */}
            <span className="text-blue-600 font-bold">
              •
            </span>

            {/* Item Text */}
            <span>
              {item}
            </span>

          </li>

        ))}

      </ul>

    </div>
  );
}


// ============================================================
// THEATRE ITEM COMPONENT
// Used for Home Theatre feature cards
// ============================================================

function TheatreItem({ title }) {

  return (

    <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition">

      {/* Theatre Icon */}
      <div className="w-16 h-16 mx-auto mb-5 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center">

        <FaFilm className="text-2xl" />

      </div>

      {/* Theatre Title */}
      <h3 className="text-xl font-bold text-gray-900">
        {title}
      </h3>

    </div>
  );
}


// ============================================================
// CLOSE BUTTON COMPONENT
// Used at the bottom of every solution
// ============================================================

function CloseButton({ onClose }) {

  return (

    <div className="border-t border-gray-200 px-8 py-8 text-center">

      <button
        onClick={onClose}
        className="inline-flex items-center gap-3 bg-gray-900 hover:bg-blue-600 text-white px-7 py-3 rounded-xl font-semibold transition"
      >

        {/* Close Icon */}
        <FaTimes />

        Close Solution

      </button>

    </div>
  );
}