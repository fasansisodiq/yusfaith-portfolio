import React from "react";
import heroImg from "../../assests/images/yusuf.jpg";

export const HeroImg = () => {
  return (
    <div className="image relative group aspect-[5/6] max-w-[500px] w-full order-1 md:order-2">
      <div className="relative w-full h-full rounded-2xl overflow-hidden border border-white/20">
        <img
          loading="lazy"
          decoding="async"
          className="relative w-full h-full rounded-2xl object-cover object-bottom z-10 hover:scale-105 transition-transform ease-in-out duration-300"
          src={heroImg}
          alt="Adewale Mudasiru"
        />
      </div>
      <div className="absolute inset-0 rounded-2xl bg-white/20 rotate-3 group-hover:rotate-6 transition-transform duration-300" />
    </div>
  );
};
