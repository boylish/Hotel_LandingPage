import React, { useState } from "react";
import { MdStarBorder } from "react-icons/md";
import { IoMenu, IoClose, IoBriefcaseOutline } from "react-icons/io5";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="backdrop-blur-md text-white font-semibold absolute left-0 right-0 z-50 border-b border-white">
      {/* Top Section */}
      <div className="flex items-center justify-between px-4 py-4 md:px-8">
        {/* Left - Menu Button */}
        <button
          className="flex items-center gap-2 px-4 py-2 bg-blue-900 rounded-full md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose size={20} /> : <IoMenu size={20} />}
          Menu
        </button>
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-900 rounded-full">
          Menu <IoBriefcaseOutline />
        </div>

        {/* Center - Logo and Stars */}
        <div className="flex flex-col items-center gap-1 md:flex-row md:gap-8">
          <h2 className="text-sm md:text-base">2022</h2>
          <h1 className="text-lg md:text-xl">LOGO</h1>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <MdStarBorder key={i} />
            ))}
          </div>
        </div>

        {/* Right - Booking */}
        <div className="hidden md:flex items-center gap-2 px-4 py-2 bg-blue-900 rounded-full">
          Booking <IoBriefcaseOutline />
        </div>
      </div>

      {/* Bottom Nav Buttons */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row gap-4 md:gap-12 justify-center py-4 border-t border-white transition-all`}
      >
        {["ROOMS", "WELLNESS", "GASTRO", "HOTEL", "EVENTS", "CONTACT"].map(
          (item) => (
            <button
              key={item}
              className="relative group px-2 pb-1 text-sm md:text-base transition-all duration-300"
            >
              {item}
              <span className="absolute left-0 bottom-0 h-0.5 w-0 bg-white transition-all duration-300 group-hover:w-full ease-in-out"></span>
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
