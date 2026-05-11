import { div } from "framer-motion/client";
import React from "react";
import { twMerge } from "tailwind-merge";

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

export const ExperienceCounter = ({
  wrapperClassName,
  className,
  titleClassName,
  subtitleClassName,
}) => {
  return (
    <div className={twMerge("flex items-center gap-6", wrapperClassName)}>
      {data.map((item) => (
        <div key={item.id} className={twMerge("flex flex-col", className)}>
          <span className={twMerge("text-count font-bold", titleClassName)}>
            {item.count}
          </span>
          <span className={twMerge("text-xs text-gray-400", subtitleClassName)}>
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
