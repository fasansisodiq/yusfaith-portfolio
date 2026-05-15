import React from "react";
import { cn } from "../../lib/utils";

const colorVariants = {
  blue: {
    text: "text-blue-800",
    background: "before:bg-blue-800",
  },
  traceBlue: {
    text: "text-[#007BFF]",
    background: "before:bg-[#007BFF]",
  },
  orange: {
    text: "text-orange-500",
    background: "before:bg-orange-500",
  },
  green: {
    text: "text-green-500",
    background: "before:bg-green-500",
  },
  gray: {
    text: "text-muted-foreground",
    background: "before:bg-muted-foreground",
  },
  hgreen: {
    text: "text-[#256515]",
    background: "before:bg-[#256515]",
  },
};

export const SectionTitle = ({
  subtitle,
  title,
  text,
  className,
  color = "gray",
}) => {
  const colors = colorVariants[color] || colorVariants.gray;
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      <span
        className={cn(
          "text-xs font-medium uppercase tracking-widest before:content-[''] before:block before:w-6 before:h-px flex items-center gap-3",
          colors.text,
          colors.background,
        )}
      >
        {subtitle}
      </span>
      <h2 className="text-4xl text-white font-bold capitalize">{title}</h2>
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
};
