// ========================================
// HERO SLIDER COMPONENT
//
// This section displays 5 main Arhat solutions
// as a full-width image slider.
//
// Features:
// 1. Automatic slide change
// 2. Previous / Next navigation
// 3. Clickable pagination dots
// 4. Responsive height for mobile and desktop
// 5. Title and description at bottom-right
// ========================================


// ========================================
// IMPORT SWIPER
// Swiper is used to create the image slider.
// ========================================

import { Swiper, SwiperSlide } from "swiper/react";


// Swiper features
import {
  Autoplay,
  Pagination,
  Navigation,
} from "swiper/modules";


// ========================================
// SWIPER CSS
// These files provide the default slider
// styling, navigation arrows and dots.
// ========================================

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// ========================================
// IMPORT SLIDER IMAGES
// All slider images are stored inside
// the Sliders folder.
// ========================================

import slider1 from "../assets/images/Sliders/Slider_1.png";
import slider2 from "../assets/images/Sliders/Slider_2.png";
import slider3 from "../assets/images/Sliders/Slider_3.png";
import slider4 from "../assets/images/Sliders/Slider_4.png";
import slider5 from "../assets/images/Sliders/Slider_5.png";


// ========================================
// SLIDER DATA
//
// Each slide contains:
// - image
// - title
// - description
//
// This makes it easy to change the
// slider content later.
// ========================================

const slides = [

  // Slide 1
  {
    image: slider1,
    title: "Smart Home Automation",
    description:
      "Experience comfort, control and intelligence — all at your fingertips.",
  },


  // Slide 2
  {
    image: slider2,
    title: "Intelligent Lighting",
    description:
      "Create the perfect atmosphere with intelligent lighting designed for comfort and energy efficiency.",
  },


  // Slide 3
  {
    image: slider3,
    title: "Advanced Security",
    description:
      "Protect your home and business with intelligent surveillance, access control and security solutions.",
  },


  // Slide 4
  {
    image: slider4,
    title: "Smart Building Automation",
    description:
      "Optimize comfort, efficiency and control with intelligent automation for modern buildings.",
  },


  // Slide 5
  {
    image: slider5,
    title: "Electrical Distribution & Control",
    description:
      "Safe, reliable and smart electrical distribution solutions engineered for modern homes and commercial spaces.",
  },

];


// ========================================
// HERO SLIDER COMPONENT
// ========================================

function HeroSlider() {

  return (

    // Main Home section
    <section
      id="home"
      className="w-full"
    >


      {/* ========================================
          SWIPER SLIDER

          autoplay  → Changes slides automatically
          pagination → Shows clickable dots
          navigation → Shows next/previous arrows
          loop       → Starts again after last slide
      ======================================== */}

      <Swiper

        // Enable Swiper features
        modules={[
          Autoplay,
          Pagination,
          Navigation,
        ]}


        // Automatically change slide
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}


        // Pagination dots
        pagination={{
          clickable: true,
        }}


        // Previous / Next arrows
        navigation={true}


        // Continue from first slide after last
        loop={true}


        // Responsive slider height
        className="
          h-[420px]
          sm:h-[480px]
          md:h-[600px]
        "
      >


        {/* ========================================
            DISPLAY ALL SLIDES
        ======================================== */}

        {slides.map((slide, index) => (

          <SwiperSlide key={index}>


            {/* ========================================
                SLIDE CONTAINER
            ======================================== */}

            <div className="
              relative
              h-full
              w-full
              overflow-hidden
            ">


              {/* ========================================
                  BACKGROUND IMAGE
              ======================================== */}

              <img
                src={slide.image}
                alt={slide.title}
                className="
                  absolute
                  inset-0
                  w-full
                  h-full
                  object-cover
                "
              />


              {/* ========================================
                  DARK OVERLAY

                  Makes the image slightly darker
                  so the text is easier to read.
              ======================================== */}

              <div className="
                absolute
                inset-0
                bg-black/30
              "></div>


              {/* ========================================
                  DESCRIPTION BOX

                  The title and description are
                  displayed at the bottom-right
                  of the image.
              ======================================== */}

              <div className="
                absolute
                bottom-10
                right-6
                sm:right-10
                md:right-14
                max-w-xl
              ">


                {/* Description background box */}

                <div className="
                  bg-black/60
                  backdrop-blur-sm
                  border-l-4
                  border-blue-500
                  rounded-lg
                  px-5
                  py-4
                  sm:px-7
                  sm:py-5
                  text-white
                  shadow-xl
                ">


                  {/* ========================================
                      SLIDE TITLE
                  ======================================== */}

                  <h1 className="
                    text-xl
                    sm:text-2xl
                    md:text-3xl
                    font-bold
                    mb-2
                  ">

                    {slide.title}

                  </h1>


                  {/* ========================================
                      SLIDE DESCRIPTION
                  ======================================== */}

                  <p className="
                    text-sm
                    sm:text-base
                    md:text-lg
                    leading-relaxed
                    text-gray-200
                  ">

                    {slide.description}

                  </p>


                </div>

              </div>


            </div>

          </SwiperSlide>

        ))}

      </Swiper>

    </section>
  );
}


// ========================================
// EXPORT COMPONENT
// This allows HeroSlider to be used
// in App.jsx or Home.jsx.
// ========================================

export default HeroSlider;