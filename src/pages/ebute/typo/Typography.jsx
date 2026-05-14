import React from "react";
import TypographyCard from "../../../components/typo-card/TypographyCard";
import { ebuteData } from "../../../db/database";
import { SectionTitle } from "../../../components/ui/section-title";

const Typography = () => {
  const { fontFamily, fontName, description, colors } = ebuteData.typography;
  return (
    <section className="py-24">
      <SectionTitle
        title={fontName}
        subtitle="Typography, Iconography & Colors"
        color="blue"
      />
      <TypographyCard
        fontFamily={fontFamily}
        fontName={fontName}
        description={description}
        colors={colors}
      />
    </section>
  );
};

export default Typography;
