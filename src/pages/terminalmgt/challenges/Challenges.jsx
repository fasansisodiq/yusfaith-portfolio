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
              className="bg-white rounded-md p-6 flex flex-col space-y-4"
            >
              <span>{<item.icon />}</span>
              <p className="text-black!">{item.quote}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Challenges;
