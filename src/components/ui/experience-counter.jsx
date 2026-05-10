import { div } from "framer-motion/client";
import React from "react";

const data = [
  {
    id: 1,
    count: "4+",
    label: "Years of Experience",
  },
  {
    id: 2,
    count: "20+",
    label: "Projects Completed",
  },
  {
    id: 3,
    count: "50+",
    label: "Positive Reviews",
  },
];

export const ExperienceCounter = () => {
  return (
    <div className="flex items-center gap-6">
      {data.map((item) => (
        <div key={item.id} className="flex flex-col">
          <span className="text-count font-bold">{item.count}</span>
          <span className="text-xs text-gray-400">{item.label}</span>
        </div>
      ))}
    </div>
  );
};
