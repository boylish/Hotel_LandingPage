import React from "react";
import { LuConciergeBell } from "react-icons/lu";
import { MdPool } from "react-icons/md";
import { BsDoorClosed } from "react-icons/bs";
import hotel_night from "../../assets/hotel_night.jpg";
import Marquee from "react-fast-marquee";

const Page7 = () => {
  return (
    <div className="min-h-screen py-16 md:py-40 border-t-2 border-gray-300 pt-8 md:pt-30 px-8 md:px-20 flex flex-col gap-16 md:gap-20 bg-gradient-to-b from-white-50 via-black-100 to-[#3a6a89]">
      <div className="flex flex-col md:flex-row justify-around items-center md:items-start gap-8 md:gap-0">
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 w-full md:w-auto">
          <LuConciergeBell className="text-xl md:text-4xl font-normal" />
          <h2 className="text-xl md:text-5xl font-normal text-center">
            Restaurant
          </h2>
          <h4 className="text-sm md:text-lg font-semibold opacity-60 text-center">
            Royal Phoenicia Hotel offers an array of top-tier facilities designed to
            enhance the comfort and convenience of every guest.
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 w-full md:w-auto">
          <MdPool className="text-xl md:text-4xl font-normal" />
          <h2 className="text-xl md:text-5xl font-normal text-center">POOL</h2>
          <h4 className="text-sm md:text-lg font-semibold opacity-60 text-center">
            Royal Phoenicia Hotel offers Fatures multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.
          </h4>
        </div>
        <div className="flex flex-col justify-center items-center gap-2 md:gap-4 w-full md:w-auto">
          <BsDoorClosed className="text-xl md:text-4xl font-normal" />
          <h2 className="text-xl md:text-5xl font-normal text-center">ROOM</h2>
          <h4 className="text-sm md:text-lg font-semibold opacity-60 text-center">
            Royal Phoenicia Hotel in Manama, Bahrain, Offers a variety of spacious and well-equipped rooms to suit diverse guest preferences.
          </h4>
        </div>
      </div>

      <div className="pt-4 md:pt-10 flex flex-col items-center justify-center relative">
        <img
          src={hotel_night}
          className="h-[40vh] md:h-[80vh] w-[95vw] md:w-[75vw] object-cover relative"
          alt="Hotel Night"
        />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <Marquee
            speed={100}
            gradient={false}
            className="text-white text-3xl md:text-7xl overflow-hidden"
          >
            This is a marquee using react-fast-marquee
          </Marquee>
        </div>

        <div className="absolute overflow-y-scroll overflow-hidden max-h-[550px]  h-[40vh] flex flex-col self-center gap-5 [&::-webkit-scrollbar]:hidden z-[100] px-2 ">
          <div className="border-2 h-[320px] p-5 w-[300px]    backdrop-blur ">
            <div className="h-[300px] w-full max-w-[300px] bg-white border-2 shrink-0 p-4 flex flex-col items-center text-center mx-auto">
              <div className="h-full flex flex-col justify-center p-4 gap-4 items-center">
                <h2 className="text-2xl md:text-3xl">For Companies</h2>
                <h4 className="text-sm md:text-base">
                  Host your Royal Phoenicia offers an array of top-tier
                  facilities designed to enhance the comfort and convenience of
                  every guest.
                </h4>
                <button className="text-lg md:text-2xl">Boo</button>
              </div>
            </div>
          </div>

          <div className="border-2 h-[320px] p-5 w-[300px]    backdrop-blur ">
            <div className="h-[300px] w-full max-w-[300px] bg-white border-2 shrink-0 p-4 flex flex-col items-center text-center mx-auto">
              <div className="h-full flex flex-col justify-center p-4 gap-4 items-center">
                <h2 className="text-2xl md:text-3xl">Family Gathering</h2>
                <h4 className="text-sm md:text-base">
                 We Know how much your event means to you- be it a jubliee, anniversary , or wedding, we're here to maeke every detail count with elegance , care experiencs tailored just for you.
                </h4>
                <button className="text-lg md:text-2xl">Boo</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Page7;
