import React from "react";

import { terminalData } from "../../../db/database";

const Challenges = () => {
  return (
    <section className="pt-24 lg:pt-38">
      <div className="space-y-4 lg:space-y-10 mb-6 lg:mb-24">
        <h3 className="flex flex-col text-2xl lg:text-5xl font-semibold uppercase">
          {terminalData.challenge.title}
        </h3>
        <p className="text-base lg:text-2xl w-full lg:max-w-[748px]">
          {terminalData.challenge.description}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {terminalData.challenge.challanges.map((item, idx) => {
          return (
            <div
              key={idx}
              className="bg-white rounded-md p-6 flex flex-col space-y-4"
            >
              <span>{<item.icon />}</span>
              <p className="!text-black">{item.quote}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Challenges;
