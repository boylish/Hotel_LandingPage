import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hotel_package from "../../assets/hotel_package.jpg";
import hotel_fun from "../../assets/hotel_fun.jpg";
import hotel_fun2 from "../../assets/hotel_fun2.jpg";

const Page4 = () => {
  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "0px",
    slidesToShow: 2.2,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 2 } },
      { breakpoint: 1024, settings: { slidesToShow: 1.5 } },
      { breakpoint: 768, settings: { slidesToShow: 1.2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };

  const Card = ({ image, bgColor, season, title, price }) => (
    <div className="px-10">
      <div
        className={`${bgColor} relative rounded-md overflow-hidden flex justify-center items-center h-[250px] sm:h-[350px] md:h-[450px] lg:h-[550px]`}
      >
        <div className="absolute text-white font-lg flex flex-col justify-between h-[50%] items-center z-10 p-4 text-center">
          <h4>{season}</h4>
          <h1 className="text-2xl font-semibold">{title}</h1>
          <h4>{price}</h4>
          <div className="flex gap-4 mt-2">
            <button className="px-4 py-1 bg-white text-black rounded">More</button>
            <button className="px-4 py-1 bg-white text-black rounded">Box</button>
          </div>
        </div>
        <img
          src={image}
          className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-125"
          alt="hotel"
        />
      </div>
    </div>
  );

  return (
    <div className="bg-[#f4efe7] min-h-screen p-6 flex flex-col gap-24 pt-50 pb-40">
      <h1 className="text-4xl md:text-6xl font-semibold mb-8 text-center">
        Stay Packages
      </h1>
      <Slider {...settings}>
        <Card
          image={hotel_package}
          bgColor="bg-amber-700"
          season="All Seasons"
          title="Royal Weekend Escape Package"
          price="From BHD 250 / Per Person / 3 Nights"
        />
        <Card
          image={hotel_fun}
          bgColor="bg-red-700"
          season="All Seasons"
          title="Family Fun Staycation"
          price="From BHD 150 / 4 person / 2 Nights"
        />
        <Card
          image={hotel_fun2}
          bgColor="bg-green-700"
          season="All Seasons"
          title="Family Fun Staycation"
          price="From BHD 150 / 4 Person / 2 Nights"
        />
      </Slider>
      <div className="w-full border-t-2 opacity-30"></div>
    </div>
  );
};

export default Page4;
