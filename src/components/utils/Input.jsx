// import BorderHider from "./BorderHider";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import BorderHider from "../ui/BorderHider";

function Input({ type, placeholder, className }) {
  return (
    <BorderHider>
      <input
        className={twMerge(
          "text-sm sm:text-lg md:text-xl placeholder:text-sm md:placeholder:text-xl placeholder:text-white placeholder:capitalize w-full h-10 lg:h-15  outline-0   pl-4",
          className
        )}
        type={type}
        placeholder={placeholder}
      />
    </BorderHider>
  );
}

export default Input;
