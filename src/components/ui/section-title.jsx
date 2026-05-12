import React from "react";
import { twMerge } from "tailwind-merge";

export const SectionTitle = ({ subtitle, title, text, className }) => {
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      <span className="text-gray-500 text-xs font-medium uppercase tracking-widest">
        {subtitle}
      </span>
      <h2 className="text-4xl text-white font-bold capitalize">{title}</h2>
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
};
