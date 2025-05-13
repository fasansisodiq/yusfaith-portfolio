import React from "react";
import heroImg from "../../../assests/images/ysd.png";
import Button from "../../../components/ui/Button";

const Hero = () => {
  return (
    <section className="w-full h-full py-24">
      <div className="flex flex-col md:flex-row justify-between items-center h-full gap-10">
        <div className="text-center md:text-left order-2 md:order-none">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold uppercase mb-6">
            UI/UX <span className="font-rubik-dirty">Designer.</span> <br />
            Framer <span className="font-rubik-dirty">Developer.</span>
          </h2>
          <p className="mb-6 text-base lg:text-2xl">
            Shapping digital interfaces, faming functional experience.
          </p>

          <Button
            label="Available for work"
            left_icon={
              <span class="relative flex size-3">
                <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-700 opacity-75"></span>
                <span class="relative inline-flex size-3 rounded-full bg-green-700"></span>
              </span>
            }
          />
        </div>
        <div className="order-1 md:order-none">
          <div className="relative w-64 h-auto lg:w-96 xl:w-[25rem] rounded-full overflow-hidden ">
            <div className="absolute w-full h-full border-3 border-white rounded-full"></div>
            <img
              loading="lazy"
              src={heroImg}
              alt="Yusfaith"
              className="w-full h-auto object-cover mix-blend-lighten"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
