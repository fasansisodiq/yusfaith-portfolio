import React from "react";
import { ExperienceCounter } from "../../../components/ui/experience-counter";
import { CtaButtons } from "../../../components/ui/cta-buttons";
import { HeroImg } from "../../../components/ui/hero-img";

const Hero = () => {
  return (
    <section className="w-full h-full py-24">
      <div className="flex flex-col md:flex-row justify-between items-center h-full gap-10">
        <div className="text-center md:text-left order-2 md:order-0 w-full max-w-[40.313rem]">
          <span className="text-2xl mb-2 text-white/70">UI/UX Designer.</span>
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-syne font-bold capitalize mb-4">
            Abdulraheem Yusuf.
          </h2>

          <p className="mb-6 text-sm text-white/70">
            I design thoughtful digital experience, Interfaces, Dashboards, and
            Mobile apps that are both beautiful and functional. Bridging the gap
            between users and products.
          </p>

          <div className="flex flex-col gap-6">
            <ExperienceCounter />
            <CtaButtons />
          </div>
        </div>
        <div className="order-1 md:order-0">
          <HeroImg />
        </div>
      </div>
    </section>
  );
};

export default Hero;
