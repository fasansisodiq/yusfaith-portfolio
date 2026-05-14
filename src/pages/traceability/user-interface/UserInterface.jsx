import React from "react";
import UseCard from "../../../components/use-card/UseCard";
import { SectionTitle } from "../../../components/ui/section-title";
//data
import { traceData } from "../../../db/database";

const UserInterface = () => {
  const { title, subtitle, image } = traceData.userInterface;
  return (
    <section className="py-24">
      <SectionTitle
        title={title}
        subtitle={subtitle}
        className="mb-12 [&>p]:max-w-4xl"
        color="traceBlue"
      />
      <div className="w-full flex items-center justify-center">
        <img src={image} alt={title} className={`w-full max-w-5xl h-auto`} />
      </div>
    </section>
  );
};

export default UserInterface;
