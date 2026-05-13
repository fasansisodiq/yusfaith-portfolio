"use client";

import FontWeights from "./FontWeights";
//hooks
import { useEffect } from "react";
//utilities
import { loadGoogleFont } from "../../utils/font-loader";
import { SectionTitle } from "../ui/section-title";

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
    loadGoogleFont(fontFamily, ["400", "700"]);
  }, [fontFamily]);

  return (
    <section className="bg-black text-white py-24" style={{ fontFamily }}>
      <SectionTitle
        title={fontName}
        subtitle="Typography, Iconography & Colors"
        className="mb-12"
        color="blue"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>

          <div className="space-y-2 text-xs text-muted-foreground">
            <p>{alphabet.uppercase}</p>
            <p>{alphabet.lowercase}</p>
            <p>{alphabet.numbers}</p>
          </div>
        </div>
        <FontWeights />
      </div>

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
