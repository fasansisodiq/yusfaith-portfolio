import React from "react";
import EbuteDashboard from "../../../assests/images/EbuteDashboard.png";

const IntroSection = () => {
  return (
    <section className="w-full h-full lg:h-screen flex flex-col items-center justify-center pt-24 lg:-mt-20">
      <div className="text-center space-y-4 lg:space-y-8 mb-4 lg:mb-12">
        <h2 className="text-3xl lg:text-7xl font-semibold">Ebute</h2>
        <p className="text-base lg:text-3xl">
          Optimizing Container Terminal Operations
        </p>
      </div>
      <div className="w-full flex items-center justify-center">
        <img
          loading="lazy"
          src={EbuteDashboard}
          alt="Ebute App Dashboard"
          className="w-full max-w-3xl h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default IntroSection;
