import React from "react";
import { Button } from "@/components/ui/button";
import { ExperienceCounter } from "../../../components/ui/experience-counter";
import { CtaButtons } from "../../../components/ui/cta-buttons";
import { HeroImg } from "../../../components/ui/hero-img";

const Hero = () => {
  return (
    <section className="w-full h-full py-24">
      <div className="flex flex-col md:flex-row justify-between items-center h-full gap-10">
        <div className="text-center md:text-left order-2 md:order-0 w-full max-w-[40.313rem]">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold uppercase mb-6">
            Abdulraheem Yusuf.
          </h2>
          <span className="text-2xl">
            UI/UX <span className="font-rubik-dirty"> Designer.</span>
          </span>
          <p className="mb-6 text-sm">
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
