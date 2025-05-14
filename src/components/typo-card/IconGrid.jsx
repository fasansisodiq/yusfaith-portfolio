"use client";

import {
  LuHouse,
  LuAlignJustify,
  LuCircleArrowLeft,
  LuTruck,
  LuUser,
  LuBanknote,
  LuSettings,
} from "react-icons/lu";

const icons = [
  { icon: LuHouse, name: "Transfers" },
  { icon: LuAlignJustify, name: "Requests" },
  { icon: LuCircleArrowLeft, name: "In Exit" },
  { icon: LuTruck, name: "Entry Permit" },
  { icon: LuUser, name: "Users" },
  { icon: LuBanknote, name: "Payment" },
  { icon: LuSettings, name: "Settings" },
];
export default function IconGrid() {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 my-8">
      {icons.map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-md text-black p-4 flex flex-col justify-between h-24"
        >
          <div className="mb-2 text-[#030080]">
            {<item.icon className="size-6 lg:size-8" />}
          </div>
          <span className="text-xs lg:text-md font-semibold tracking-wide">
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
