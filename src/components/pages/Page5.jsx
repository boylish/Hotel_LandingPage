import React from "react";
import hotel_gym from "../../assets/hotel_gym.jpg";
import hotel_dining2 from "../../assets/hotel_dining2.jpg";
import hotel_spa from "../../assets/hotel_spa.jpg";
import { FaArrowRight } from "react-icons/fa";

const Page5 = () => {
  return (
    <div className="min-h-screen relative bg-[#f4efe7] flex flex-col justify-center items-center p-4 sm:p-6">
      {/* Mobile: Stack vertically */}
      <div className="flex flex-col w-full h-auto gap-2 sm:gap-3 md:hidden">
        {/* Gym Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group">
          <img
            src={hotel_gym}
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            alt="Hotel Gym"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-xl text-white font-semibold">Fitness</h2>
            <h3 className="text-white text-2xl sm:text-3xl font-bold px-4 py-2 rounded-lg">
              Center
            </h3>
          </div>
        </div>

        {/* Dining Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group">
          <img
            src={hotel_dining2}
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            alt="Hotel Dining"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 flex items-center justify-center flex-col">
            <h2 className="text-xl text-white font-semibold">On-Site</h2>
            <h3 className="text-white text-2xl sm:text-3xl font-bold px-4 py-2 rounded-lg">
              Dining
            </h3>
          </div>
        </div>

        {/* Spa Image */}
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group">
          <img
            src={hotel_spa}
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            alt="Hotel Spa"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h2 className="text-xl text-white font-semibold">
              Wellness Center
            </h2>
            <h3 className="text-white text-2xl sm:text-3xl font-bold px-4 py-2 rounded-lg">
              & Spa
            </h3>
          </div>
        </div>
      </div>

      {/* Desktop: Horizontal layout */}
      <div className="hidden md:flex md:h-[80vh] lg:h-[85vh] xl:h-[90vh] w-full gap-2 lg:gap-3 overflow-hidden">
        {/* Gym Image */}
        <div className="relative flex-1 overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:flex-[2] group">
          <img
            src={hotel_gym}
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            alt="Hotel Gym"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h5 className="text-white text-2xl font-semibold">Fitness</h5>
            <h3 className="text-white text-3xl xl:text-4xl font-bold  px-6 py-3 rounded-lg">
              Center
            </h3>
          </div>
        </div>

        {/* Dining Image */}
        <div className="relative flex-1 overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:flex-[2] group">
          <img
            src={hotel_dining2}
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            alt="Hotel Dining"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h5 className="text-white text-2xl font-semibold">On-Site</h5>
            <h3 className="text-white text-3xl xl:text-4xl font-bold  px-6 py-3 rounded-lg">
              Dining
            </h3>
          </div>
        </div>

        {/* Spa Image */}
        <div className="relative flex-1 overflow-hidden rounded-lg transition-all duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] hover:flex-[2] group">
          <img
            src={hotel_spa}
            className="absolute h-full w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
            alt="Hotel Spa"
          />
          <div className="absolute inset-0 bg-black/20 transition-all duration-500 group-hover:bg-black/10"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h5 className="text-white text-2xl font-semibold">
              Wellness-Center
            </h5>
            <h3 className="text-white text-3xl xl:text-4xl font-bold  px-6 py-3 rounded-lg">
              & Spa
            </h3>
          </div>
        </div>
      </div>
      <div className="flex relative pt-10 sm:absolute sm:pt-60  sm:text-white text-black z-100 justify-center items-center mt-6 md:mt-8">
        <div className="group relative inline-flex items-center justify-center border-2 border-black sm:border-white rounded-full px-6 py-3 md:px-10 md:py-5 transition-all duration-500 ease-in-out backdrop-blur-3xl overflow-hidden hover:w-16 hover:h-16 hover:px-0 hover:py-0 hover:bg-blue-900">
          {/* Text - Hidden on hover */}
          <span className="text-sm md:text-base text-black sm:text-white group-hover:opacity-0 transition-opacity duration-300 ease-in-out">
            Spa & Wellness
          </span>

          {/* Arrow Icon - Visible on hover */}
          <FaArrowRight className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out" />
        </div>
      </div>
    </div>
  );
};

export default Page5;
