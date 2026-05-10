import React from "react";
import { twMerge } from "tailwind-merge";

export const SectionTitle = ({ subtitle, title, className }) => {
  return (
    <div className={twMerge("flex flex-col gap-4", className)}>
      <span className="text-gray-500 text-xs font-normal">{subtitle}</span>
      <h2 className="text-4xl text-white font-bold">{title}</h2>
    </div>
  );
};
