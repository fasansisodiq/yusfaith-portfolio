"use client";

import FontWeights from "./FontWeights";
import IconGrid from "./IconGrid";
//hooks
import { useEffect } from "react";
//utilities
import { loadGoogleFont } from "../../utils/font-loader";

const alphabet = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "0123456789!@#$%^&*()",
};

export default function TypographyCard({
  fontFamily,
  fontName,
  description,
  colors,
}) {
  // Load the font using the utility function
  useEffect(() => {
    console.log("Loading font:", fontFamily);
    loadGoogleFont(fontFamily, ["400", "700"]);
  }, [fontFamily]);

  return (
    <section className="bg-black text-white mt-24" style={{ fontFamily }}>
      <div className="space-y-4 lg:space-y-8">
        <h3 className="text-md lg:text-lg tracking-wider text-gray-300 uppercase">
          Typography, Iconography & Colors
        </h3>

        <hr className="border-gray-700" />

        <h4 className="text-2xl lg:text-5xl font-semibold uppercase tracking-wide">
          {fontName}
        </h4>
      </div>
      <hr className="border-gray-700 my-6" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-base lg:text-2xl leading-relaxed">{description}</p>

          <div className="space-y-2">
            <p className="text-sm lg:text-lg">{alphabet.uppercase}</p>
            <p className="text-sm lg:text-lg">{alphabet.lowercase}</p>
            <p className="text-sm lg:text-lg">{alphabet.numbers}</p>
          </div>
        </div>
        <FontWeights />
      </div>

      <hr className="border-gray-700 my-6" />

      <IconGrid />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-8">
        {colors.map((color, index) => {
          const colorMap = {
            "#FFFFFF": "text-black",
            "#EEEEEE": "text-black",
          };
          const textColor = colorMap[color.hex] || "text-gray";
          return (
            <div
              key={index}
              className="h-16 rounded-md flex items-center justify-center"
              style={{ backgroundColor: color.hex }}
            >
              <span
                className={`font-mono text-lg font-semibold ${
                  textColor ? textColor : "text-white"
                }`}
              >
                {color.hex}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
