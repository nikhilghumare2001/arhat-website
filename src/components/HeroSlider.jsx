import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from "../assets/images/SmartHome_Wireless_Automation.jpg";
import slider2 from "../assets/images/slider2.jpeg";
import slider3 from "../assets/images/slider3.jpeg";
import slider4 from "../assets/images/slider4.jpg";

const slides = [
  {
    image: slider1,
    title: "Smart Home Automation",
    description:
      "Experience comfort, control and intelligence — all at your fingertips.",
  },
  {
    image: slider2,
    title: "Intelligent Lighting",
    description:
      "Create the perfect atmosphere with smart and energy-efficient lighting.",
  },
  {
    image: slider3,
    title: "Advanced Security",
    description:
      "Protect your home and business with intelligent security and surveillance.",
  },
  {
    image: slider4,
    title: "Smart Building Automation",
    description:
      "Powerful automation solutions designed for modern offices and commercial spaces.",
  },
];

function HeroSlider() {
  return (
    <section id="home">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        className="h-[420px] sm:h-[480px] md:h-[600px]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-full w-full">

              {/* Background Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Text */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white px-10 sm:px-12 md:px-6">

                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 md:mb-5 max-w-4xl">
                  {slide.title}
                </h1>

                <p className="text-base sm:text-lg md:text-xl leading-relaxed max-w-xl md:max-w-2xl">
                  {slide.description}
                </p>

                {/* Explore Button */}
                {/* 
                <a
                  href="#solutions"
                  className="mt-8 inline-block bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-lg font-semibold transition duration-300"
                >
                  Explore Solutions
                </a>
                */}

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroSlider;