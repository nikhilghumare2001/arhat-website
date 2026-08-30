// ========================================
// HERO SECTION
// This is the main introduction section
// of the Arhat website.
//
// It contains:
// 1. Main heading
// 2. Company description
// 3. Explore Solutions button
// 4. Automation image
// ========================================


// Import the hero image
import heroImage from "../assets/images/slider1.jpeg";


// ========================================
// HERO COMPONENT
// ========================================

function Hero() {

  return (

    <section className="py-24 bg-white">


      {/* ========================================
          MAIN HERO CONTAINER

          Left side  = Heading and description
          Right side = Hero image

          On large screens, both sides
          appear next to each other.
      ======================================== */}

      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          grid
          lg:grid-cols-2
          gap-12
          items-center
        "
      >


        {/* ========================================
            LEFT SIDE
            Main heading and introduction
        ======================================== */}

        <div>


          {/* Main website heading */}

          <h1
            className="
              text-5xl
              md:text-6xl
              font-bold
              leading-tight
              text-gray-900
            "
          >

            Smart Home &

            <span className="text-blue-600">
              {" "}Building Automation
            </span>

          </h1>


          {/* Short company introduction */}

          <p
            className="
              mt-6
              text-gray-600
              text-lg
              leading-8
            "
          >

            We provide intelligent automation solutions for homes,
            offices, hotels, hospitals and commercial buildings.

          </p>


          {/* ========================================
              EXPLORE SOLUTIONS BUTTON

              When the visitor clicks this button,
              the page moves to the Solutions section.
          ======================================== */}

          <a
            href="#solutions"
            className="
              inline-block
              mt-8
              bg-blue-600
              text-white
              px-7
              py-3
              rounded-lg
              hover:bg-blue-700
              transition
              duration-300
              font-semibold
            "
          >

            Explore Solutions

          </a>


        </div>


        {/* ========================================
            RIGHT SIDE
            Hero image
        ======================================== */}

        <div>

          <img
            src={heroImage}
            alt="Smart Automation"
            className="w-full rounded-2xl shadow-xl"
          />

        </div>


      </div>

    </section>
  );
}


// Export Hero component
// so it can be used in other React files.

export default Hero;