import React from "react";
import LearnCard from "../../../components/learn-card/LearnCard";
import { ebuteData } from "../../../db/database";

const lists = [
  "One of the most valuable lessons I gained from this experience was the importance of time management and staying focused under tight deadlines.",

  "That experience taught me a lot about planning, prioritizing, and managing expectations - skills that have been pivotal in every project since.",

  "Designing for enterprise operations required deep collaboration with developers and domain experts to ensure accuracy in every flow and interaction.",

  "Built a scalable design system using Montserrat and a purple-blue palette that now serves as the foundation for all Ebute product interfaces",
];

const Learn = () => {
  const { title, subtitle, description } = ebuteData.learnings;
  return (
    <LearnCard title={title} subtitle={subtitle} description={description}>
      <ul className="flex flex-col">
        {lists.map((list, idx) => (
          <li
            key={idx}
            className="relative text-sm flex items-center gap-2 p-4.5 border-b border-muted-foreground/10"
          >
            <span className="absolute top-1/2 left-0 transform -translate-y-1/2 text-muted-foreground">
              {idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
            </span>
            <span className="ml-4.5">{list}</span>
          </li>
        ))}
      </ul>
    </LearnCard>
  );
};

export default Learn;
