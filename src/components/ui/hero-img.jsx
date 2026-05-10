import React from "react";
import heroImg from "../../assests/images/ysd.png";

export const HeroImg = () => {
  return (
    <div className="relative w-64 h-auto lg:w-96 xl:w-100 rounded-full overflow-hidden ">
      <div className="absolute w-full h-full border-3 border-white rounded-full"></div>
      <img
        loading="lazy"
        src={heroImg}
        alt="Yusfaith"
        className="w-full h-auto object-cover mix-blend-lighten"
      />
    </div>
  );
};
