import React from "react";
import { GoDotFill } from "react-icons/go";

const ChallengesData = {
  title: "The Challenge",
  description:
    "Container terminals often face the following operational challenges:",
  challenges: [
    {
      title: "Inefficient Use of Space",
      description:
        "Limited container space is often mismanaged due to lack of real-time tracking.",
    },
    {
      title: "Manual Yard Operations",
      description:
        "Dependence on manual processes leads to delays, inaccuracies, and increased operational costs.",
    },
    {
      title: "Fragmented Communication",
      description:
        "Customers, terminal management, and administrative teams struggle with misaligned or delayed updates, hampering overall productivity.",
    },
  ],
  conclusion:
    "These issues motivated the development of EBUTE, a centralized digital platform designed to improve container space utilization, optimize yard operations, and enhance communication between stakeholders.",
};

const Challenges = () => {
  return (
    <section className="pt-24">
      <div className="space-y-4 lg:space-y-10 mb-6 lg:mb-24">
        <h3 className="text-2xl lg:text-5xl font-semibold">
          {ChallengesData.title}
        </h3>

        <p className="text-base lg:text-2xl w-full lg:max-w-[612px]">
          {ChallengesData.description}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {ChallengesData.challenges.map((challenge, index) => (
          <div
            key={index}
            className="relative border border-white p-6 rounded-xl space-y-4"
          >
            <GoDotFill
              color="#fff"
              className="absolute top-4 left-4 size-6 lg:size-8"
            />
            <h4 className="text-lg lg:text-2xl font-semibold mt-8">
              {challenge.title}
            </h4>
            <p className="text-base">{challenge.description}</p>
          </div>
        ))}
      </div>
      <p className="text-base lg:text-2xl w-full lg:max-w-[748px]">
        {ChallengesData.conclusion}
      </p>
    </section>
  );
};

export default Challenges;
