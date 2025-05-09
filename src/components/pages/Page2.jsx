import React from "react";
import hotel3 from "../../assets/hotel3.jpg";
import hotel4 from "../../assets/hotel4.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
};

const Page2 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <div className="min-h-screen md:h-[200vh] flex flex-col gap-4 md:gap-8 bg-gradient-to-b from-white-50 to-[#f4efe7]">
      <motion.div
        className="flex flex-col justify-center items-center gap-20 md:gap-40 pt-10 md:pt-30"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div className="border-1 p-2" variants={itemVariants}>
          <div className="border-1">
            <h2 className="text-2xl md:text-4xl font-bold p-4">I</h2>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center text-center gap-4 md:gap-6 px-4"
          variants={containerVariants}
        >
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            The Stay at Wellness & pool hotel
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            RoyalPhoenicia measn enjoying every moment
          </motion.h1>
          <motion.h1
            className="text-3xl md:text-5xl font-bold"
            variants={itemVariants}
          >
            Relax. Find inspiration. Be fascinated
          </motion.h1>
        </motion.div>

        <motion.div
          className="group relative border-2 border-blue-900 rounded-full px-8 md:px-12 py-2 md:py-4 transition-all duration-500 ease-in-out overflow-hidden hover:bg-blue-900 hover:w-16 hover:h-16 hover:px-0 hover:py-0 flex items-center justify-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          variants={itemVariants}
        >
          {/* Text - Hidden on hover */}
          <span className="text-sm md:text-base text-blue-900 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
            Hotel
          </span>

          {/* Arrow Icon - Visible on hover */}
          <FaArrowRight className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
        </motion.div>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        className="flex items-center justify-center px-4 md:px-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.div
          className="relative w-full md:w-[80vw] h-[50vh] md:h-[80vh] rounded-lg overflow-hidden mb-10"
          variants={imageVariants}
        >
          <Slider {...settings}>
            <div>
              <motion.div
                className="w-full h-[50vh] md:h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${hotel3})` }}
                whileInView={{ scale: 1.02 }}
                viewport={{ once: true }}
              />
            </div>
            <div>
              <motion.div
                className="w-full h-[50vh] md:h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: `url(${hotel4})` }}
                whileInView={{ scale: 1.02 }}
                viewport={{ once: true }}
              />
            </div>
          </Slider>

          {/* Overlay text on the slider */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 z-10">
            <motion.div
              className="border-1 p-2 md:p-4 backdrop-blur-sm md:backdrop-blur-2xl"
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="bg-white p-2 md:p-4">
                <motion.div
                  className="text-center flex flex-col gap-2 md:gap-4 border-1 px-4 py-8 md:px-10 md:py-14"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.h4
                    className="text-sm md:text-base"
                    variants={itemVariants}
                  >
                    Favourite hotel
                  </motion.h4>
                  <motion.h4
                    className="text-sm md:text-base"
                    variants={itemVariants}
                  >
                    Buisness and Event Spaces
                  </motion.h4>
                  <motion.h4
                    className="text-sm md:text-base"
                    variants={itemVariants}
                  >
                    Diverse Dining Options
                  </motion.h4>
                  <motion.h4
                    className="text-sm md:text-base"
                    variants={itemVariants}
                  >
                    Multiple Swimming Pools
                  </motion.h4>
                  <motion.h4
                    className="text-sm md:text-base"
                    variants={itemVariants}
                  >
                    Family-Friendly Amenities
                  </motion.h4>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page2;
