import React from "react";

import { terminalData } from "../../../db/database";
import { SectionTitle } from "../../../components/ui/section-title";

const Challenges = () => {
  return (
    <section className="py-24 ">
      <SectionTitle
        title="Problems We're Solving"
        subtitle={terminalData.challenge.title}
        text={terminalData.challenge.description}
        className="mb-12"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {terminalData.challenge.challanges.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-accent-foreground border border-white/10 hover:bg-muted-foreground/50 text-gray-400 rounded-md p-6 flex flex-col space-y-4"
            >
              <span>{<item.icon size={24} />}</span>
              <p className="text-white">{item.quote}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Challenges;
