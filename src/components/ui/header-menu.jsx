import React from "react";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

export const HeaderMenu = ({ className }) => {
  return (
    <div className={twMerge("hidden md:flex items-center gap-6", className)}>
      {menuItems.map((item) => {
        const isActive = window.location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className={twMerge(
              "text-white hover:text-gray-300 transition-colors",
              isActive && "text-gray-300",
            )}
          >
            {item.name}
          </Link>
        );
      })}
    </div>
  );
};
