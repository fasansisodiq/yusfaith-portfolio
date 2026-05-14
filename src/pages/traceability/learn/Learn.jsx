import React from "react";
import LearnCard from "../../../components/learn-card/LearnCard";
import { traceData } from "../../../db/database";

const lists = [
  "This project marked the very first task I undertook upon joining Ebute truck management App. Looking back at the design now, I’m filled with gratitude for how far I’ve come and proud of the work, despite its imperfections.",

  "One of the most valuable lessons I gained from this experience was the importance of time management.",

  "That experience taught me a lot about planning, prioritizing, and managing expectations, Skills that have been crucial in every project since.",
];

const Learn = () => {
  const { title, subtitle, description } = traceData.learnings;
  return (
    <section className="py-24">
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
              <span className="ml-4.5 text-muted-foreground">{list}</span>
            </li>
          ))}
        </ul>
      </LearnCard>
    </section>
  );
};

export default Learn;
