import React from "react";
import hotel_room from "../../assets/hotel_room.jpg";
import hotel3 from "../../assets/hotel3.jpg";
import hotel_dining from "../../assets/hotel_dining.jpg";
import { FaArrowRight } from "react-icons/fa";

const Page3 = () => {
  return (
    <div className="w-full py-8 md:py-30 px-4 min-h-screen border-t-2 bg-gradient-to-b from-[#f4efe7] to-white flex flex-col justify-evenly">
      {/* Section Title */}
      <div className="flex items-center justify-center mb-8 md:mb-12">
        <div className="p-2 border border-gray-500">
          <h2 className="text-2xl md:text-4xl font-bold p-4">II</h2>
        </div>
      </div>

      {/* Image Cards */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-between">
        {/* Card 1 */}
        <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] aspect-square overflow-hidden group">
          <img
            src={hotel_room}
            alt="Room"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white to-[#f4efe7] border-l-2 border-b-2 border-gray-500 transition-opacity duration-500 group-hover:opacity-0 z-10" />
          <h1 className="absolute inset-0 flex items-center justify-center text-[#1b3d5d] group-hover:text-white text-3xl md:text-3xl font-bold z-20 transition-all duration-300 group-hover:scale-125">
            Rooms
          </h1>
        </div>

        {/* Card 2 */}
        <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] aspect-square overflow-hidden group">
          <img
            src={hotel3}
            alt="Pool"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white to-[#f4efe7] border-l-2 border-b-2 border-gray-500 transition-opacity duration-500 group-hover:opacity-0 z-10" />
          <h1 className="absolute inset-0 flex items-center justify-center text-[#1b3d5d] group-hover:text-white text-3xl md:text-3xl font-bold z-20 transition-all duration-300 group-hover:scale-125">
            Pool
          </h1>
        </div>

        {/* Card 3 */}
        <div className="relative w-full sm:w-[45%] md:w-[30%] lg:w-[30%] xl:w-[30%] aspect-square overflow-hidden group">
          <img
            src={hotel_dining}
            alt="Dining"
            className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-all duration-500 scale-100 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-white to-[#f4efe7] border-l-2 border-b-2 border-gray-500 transition-opacity duration-500 group-hover:opacity-0 z-10" />
          <h1 className="absolute inset-0 flex items-center justify-center text-[#1b3d5d] group-hover:text-white text-3xl md:text-3xl font-bold z-20 transition-all duration-300 group-hover:scale-125">
            Dining
          </h1>
        </div>
      </div>

      {/* Button */}
      <div className="flex justify-center items-center mt-6 md:mt-8">
        <div className="group relative inline-flex items-center justify-center border-2 border-blue-900 rounded-full px-6 py-3 md:px-10 md:py-5 transition-all duration-500 ease-in-out overflow-hidden hover:w-16 hover:h-16 hover:px-0 hover:py-0 hover:bg-blue-900">
          {/* Text - Hidden on hover */}
          <span className="text-sm md:text-base text-blue-900 group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
            Accomodation
          </span>

          {/* Arrow Icon - Visible on hover */}
          <FaArrowRight className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Page3;
