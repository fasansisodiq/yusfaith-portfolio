import React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({ icon, label, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        "flex items-center text-base font-medium capitalize px-4 py-2 rounded-3xl bg-[var(--btn-primary)] text-[var(--btn-secondary)] shadow-[inset_0_-5px_10px_0_rgba(0,0,0,0.5)]",
        className
      )}
    >
      {icon && <span className="mr-2">{icon}</span>}
      {label}
    </button>
  );
};

export default Button;
