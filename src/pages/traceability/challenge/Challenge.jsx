import React from "react";
import { traceData } from "../../../db/database";
import { SectionTitle } from "../../../components/ui/section-title";

const Challenge = () => {
  const { title, description, challenges } = traceData.challenge;
  return (
    <section className="w-full py-24">
      <div className="space-y-4 lg:space-y-8">
        <SectionTitle
          title="What We Were Solving"
          subtitle={title}
          text={description}
          className="mb-12"
          color="traceBlue"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {challenges.map((item, idx) => {
          return (
            <div
              key={idx}
              className="group bg-accent-foreground border border-white/10 hover:bg-muted-foreground/50 text-gray-400 rounded-md p-6 flex flex-col space-y-4 relative overflow-hidden"
            >
              <span
                className="absolute inset-x-0 top-0 h-0.5 
      bg-linear-to-r from-transparent via-transparent to-transparent
       transition-all ease-in-out duration-300 
       group-hover:from-transparent group-hover:via-[#007BFF] group-hover:to-transparent"
              />
              <span className="absolute top-0 right-0 text-6xl font-extrabold -rotate-12 text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
                {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
              </span>
              <h3 className="text-white font-semibold">{item.title}</h3>
              <p className="text-sm">{item.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Challenge;
