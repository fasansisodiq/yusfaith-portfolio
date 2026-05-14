import React from "react";
import TypographyCard from "../../../components/typo-card/TypographyCard";
import { quicklistData } from "../../../db/database";
import { SectionTitle } from "../../../components/ui/section-title";

const colors = [{ hex: "#256515" }, { hex: "#C0F0B0" }, { hex: "#FFFFFF" }];

const Typography = () => {
  const { fontFamily } = quicklistData.typography;
  return (
    <section className="py-24">
      <SectionTitle
        title="PLUS JAKARTA"
        subtitle="Typography, Iconography & Colors"
        color="hgreen"
      />
      <TypographyCard
        fontFamily={fontFamily}
        fontName={"PLUS JAKARTA"}
        description={
          "Plus Jakarta Sans is a fresh take on geometric sans serif styles, designed by Gumpita Rahayu from Tokotype."
        }
        colors={colors}
      />
    </section>
  );
};

export default Typography;
