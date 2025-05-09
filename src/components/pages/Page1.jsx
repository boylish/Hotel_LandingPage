import React from "react";
import { motion } from "framer-motion";
import hotel1 from "../../assets/hotel1.jpg";
import hotel2 from "../../assets/hotel2.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Page1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    fade: true,
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Slider {...settings}>
        {[hotel1, hotel2].map((image, index) => (
          <div key={index}>
            <motion.div
              className="w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />
          </div>
        ))}
      </Slider>

      {/* Overlay Text with Framer Motion */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50 z-10 text-center px-4">
        <motion.h1
          className="text-white text-3xl sm:text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hotel
        </motion.h1>

        <motion.h1
          className="text-white text-3xl sm:text-5xl md:text-7xl font-bold"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Royal Phoenicia
        </motion.h1>

        <motion.h4
          className="text-white mt-4 text-sm sm:text-base font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          YOUR FAVOURITE PLACE. OUR FAMILY STORY
        </motion.h4>
      </div>
    </div>
  );
};

export default Page1;
