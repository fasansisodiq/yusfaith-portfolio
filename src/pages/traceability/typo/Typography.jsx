import React from "react";
import TypographyCard from "../../../components/typo-card/TypographyCard";
import { traceData } from "../../../db/database";
import { SectionTitle } from "../../../components/ui/section-title";

const Typography = () => {
  const { fontFamily, fontName, description, colors } = traceData.typography;
  return (
    <section className="py-24">
      <SectionTitle
        title={fontName}
        subtitle="Typography, Iconography & Colors"
        color="traceBlue"
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
