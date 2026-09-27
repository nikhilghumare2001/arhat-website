import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider0 from "../assets/images/Sliders/Hall_HD.png";
import slider1 from "../assets/images/Sliders/Slider_1.png";
import slider2 from "../assets/images/Sliders/Slider_2.png";
import slider3 from "../assets/images/Sliders/Slider_3.png";
import slider4 from "../assets/images/Sliders/Slider_4.png";
import slider5 from "../assets/images/Sliders/Slider_5.png";

const slides = [
  {
    image: slider0,
    title: "World of Smart Home Automation",
    description: "Transforming homes with cutting-edge automation technology. Discover seamless integration of lighting, security, climate, and entertainment systems.",
  },
  {
    image: slider1,
    title: "Smart Home Automation",
    description: "Experience comfort, control and intelligence — all at your fingertips.",
  },
  {
    image: slider2,
    title: "Intelligent Lighting",
    description: "Create the perfect atmosphere with intelligent lighting designed for comfort and energy efficiency.",
  },
  {
    image: slider3,
    title: "Advanced Security",
    description: "Protect your home and business with intelligent surveillance, access control and security solutions.",
  },
  {
    image: slider4,
    title: "Smart Building Automation",
    description: "Optimize comfort, efficiency and control with intelligent automation for modern buildings.",
  },
  {
    image: slider5,
    title: "Electrical Distribution & Control",
    description: "Safe, reliable and smart electrical distribution solutions engineered for modern homes and commercial spaces.",
  },
];

function HeroSlider() {
  return (
    <section id="home" className="w-full">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="h-[420px] sm:h-[480px] md:h-[600px]"
      >
        {slides.map((slide, index) => {
          const isFirstSlide = index === 0; // Only for World of Smart Home Automation

          return (
            <SwiperSlide key={index}>
              <div className="relative h-full w-full overflow-hidden">
                <img src={slide.image} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/30"></div>

                {/* TEXT CONTAINER */}
                <div className={`
                  absolute inset-0 flex px-6
                  ${isFirstSlide? 'items-center justify-center text-center' : 'items-end justify-end bottom-10 right-6 sm:right-10 md:right-14 pb-10'}
                `}>

                  {/* If first slide - NO BORDER BOX */}
                  {isFirstSlide? (
                    <div className="max-w-3xl">
                      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg">
                        {slide.title}
                      </h1>
                      <p className="text-base sm:text-lg md:text-xl text-gray-100 leading-relaxed drop-shadow-md">
                        {slide.description}
                      </p>
                    </div>
                  ) : (
                    // Other slides - With Border Box (Your Old Design)
                    <div className="max-w-xl">
                      <div className="bg-black/60 backdrop-blur-sm border-l-4 border-blue-500 rounded-lg px-5 py-4 sm:px-7 sm:py-5 text-white shadow-xl">
                        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">
                          {slide.title}
                        </h1>
                        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-200">
                          {slide.description}
                        </p>
                      </div>
                    </div>
                  )}

                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
}

export default HeroSlider;