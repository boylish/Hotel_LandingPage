import React from "react";
import { RiInstagramFill } from "react-icons/ri";
import { FaYoutube, FaFacebook } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="min-h-[80vh] border-t border-gray-300 bg-[#3a6a89] text-white flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="w-full md:w-[70%] flex flex-col md:flex-row justify-between items-center px-8 py-10 gap-10">
        {/* Left Columns */}
        <div className="flex flex-col gap-6 text-left">
          <section className="text-2xl md:text-4xl font-semibold flex gap-3">
            <h1>I</h1>
            <h1>Rooms</h1>
          </section>
          <section className="text-2xl md:text-4xl font-semibold flex gap-3">
            <h1>II</h1>
            <h1>Wellness</h1>
          </section>
          <section className="text-2xl md:text-4xl font-semibold flex gap-3">
            <h1>III</h1>
            <h1>Gastro</h1>
          </section>
          <section className="text-2xl md:text-4xl font-semibold flex gap-3">
            <h1>IV</h1>
            <h1>Hotel</h1>
          </section>
          <section className="text-2xl md:text-4xl font-semibold flex gap-3">
            <h1>V</h1>
            <h1>Events</h1>
          </section>
        </div>

        {/* More Info Section */}
        <div className="flex flex-col gap-2 text-left">
          <h2 className="pb-4 text-2xl md:text-3xl font-semibold">More About Rooms</h2>
          <h4 className="text-base md:text-lg">120 comfortable rooms</h4>
          <h4 className="text-base md:text-lg">Dinings</h4>
          <h4 className="text-base md:text-lg">Packages</h4>
          <h4 className="text-base md:text-lg">Pools</h4>
        </div>
      </div>

      {/* Right Section - Dark Green Area */}
      <div className="bg-[#1b3d5d] w-full md:w-[30%] text-center flex flex-col items-center justify-center px-6 py-10 gap-5">
        <h1 className="text-2xl font-bold">logo</h1>

        <h1 className="text-base md:text-lg font-semibold leading-tight">
          Wellness & Pools <br /> Hotel Royal Phoenicia
        </h1>

        <h3 className="text-sm leading-6">
          Building 1288 <br /> Road 3931, Block 339 <br /> Umm AI Hasam - Manama <br /> Bahrain
        </h3>

        <h3 className="text-sm">
          +973 1730 7307 <br /> info@gmail.com
        </h3>

        <button className="flex items-center gap-2 justify-center border px-4 py-2 rounded-md text-sm md:text-base hover:bg-white hover:text-[#1b3d5d] transition">
          Contacts <FaArrowRightLong />
        </button>

        <div className="flex gap-4 text-xl justify-center">
          <RiInstagramFill />
          <FaFacebook />
          <FaYoutube />
        </div>
      </div>
    </div>
  );
};

export default Footer;
