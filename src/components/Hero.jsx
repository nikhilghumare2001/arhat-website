import heroImage from "../assets/images/slider1.jpeg";

function Hero() {
  return (
    <section className="py-24 bg-white">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900">
            Smart Home &
            <span className="text-blue-600">
              {" "}Building Automation
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            We provide intelligent automation solutions for homes,
            offices, hotels, hospitals and commercial buildings.
          </p>

          <a
            href="#solutions"
            className="inline-block mt-8 bg-blue-600 text-white px-7 py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-semibold"
          >
            Explore Solutions
          </a>

        </div>

        {/* Right Side */}
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

export default Hero;