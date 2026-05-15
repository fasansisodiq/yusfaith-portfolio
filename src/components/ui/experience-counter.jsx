import React from "react";
import { cn } from "../../lib/utils";

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
    <div className={cn("flex items-center gap-6", wrapperClassName)}>
      {data.map((item) => (
        <div key={item.id} className={cn("grid", className)}>
          <span className={cn("text-count font-bold", titleClassName)}>
            {item.count}
          </span>
          <span
            className={cn(
              "text-sm text-muted-foreground font-medium",
              subtitleClassName,
            )}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};
