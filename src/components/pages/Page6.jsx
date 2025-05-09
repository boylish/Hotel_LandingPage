import React from "react";
import { motion } from "framer-motion";
import hotel_payment from "../../assets/hotel_payment.jpg";
import hotel_room from "../../assets/hotel_room.jpg";
import hotel_dining2 from "../../assets/hotel_dining2.jpg";

const Page6 = () => {
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        when: "beforeChildren",
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="h-[150vh] py-8 sm:py-12 px-4 sm:px-8 lg:px-16 flex flex-col justify-evenly items-center bg-white overflow-hidden">
  
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="flex flex-col gap-4 sm:gap-6 items-center text-center w-full max-w-4xl mx-auto"
      >
        <motion.div
          variants={itemVariants}
          className="border p-2 hover:scale-105 transition-transform duration-300"
          whileHover={{ rotate: 2 }}
        >
          <div className="border p-3 sm:p-4">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">IV</h1>
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight"
        >
          Exceptional Gastronomy <br className="hidden sm:block" /> served in
          elegant spaces
        </motion.h1>
      </motion.div>

     
      <motion.div
        className="mt-8 sm:mt-12 flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-10 w-full max-w-7xl"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true, margin: "-100px" }}
      >
    

        <div className="w-full lg:w-1/2 h-[450px] overflow-y-auto space-y-4 pr-2 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] p-2 rounded-xl shadow-md">
          {[hotel_payment, hotel_room, hotel_dining2].map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="w-full h-[200px] sm:h-[350px] md:h-[400px] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <img
                src={img}
                alt={`hotel_img_${idx}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

      
        <motion.div
          className="w-full lg:w-1/2 px-2 sm:px-4 lg:px-6"
          variants={{
            hidden: { opacity: 0, x: 40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: {
                duration: 0.8,
                ease: "easeOut",
              },
            },
          }}
        >
          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 sm:mb-6"
            whileHover={{ x: 5 }}
          >
            About Us
          </motion.h2>
          <motion.p
            className="text-xs sm:text-sm md:text-base font-medium text-gray-600 leading-relaxed sm:leading-loose"
            variants={containerVariants}
          >
            {[
              "Royal furniture hotel offers an area of top-tier facilities designed to enhance the comfort and convenience of every guest. The hotel features a luxurious spa and wellness centre where guests can indulge in soothing treatments and rejuvenating massages.",
              "For those seeking to maintain their fitness routine, the fully equipped gym provides a space for exercise, while the outdoor pool offers a relaxing environment to unwind.",
              "Dining at the hotel is a pleasure with an on-site restaurant, offering a diverse selection of cuisines in an elegant atmosphere. Additionally, the hotel provides business facilities, including meeting rooms and event spaces, ideal for corporate travellers.",
            ].map((paragraph, idx) => (
              <motion.span
                key={idx}
                variants={itemVariants}
                className="block mb-4 last:mb-0"
              >
                {paragraph}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Page6;
