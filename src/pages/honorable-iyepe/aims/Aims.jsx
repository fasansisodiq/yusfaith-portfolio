import React from "react";
import { SectionTitle } from "../../../components/ui/section-title";
import { IconCheck } from "@tabler/icons-react";
import aimsImg from "../../../assests/images/honAims.png";

const aimsData = [
  "Unified hub for Hajj, education, sessions & matchmaking",
  "Real-time admin dashboard with revenue analytics",
  "Mobile-first experience for all community members",
  "Secure transaction management & booking flows",
];

const Aims = () => {
  return (
    <section className="py-24">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-15">
        <div>
          <SectionTitle
            title="Building Smart Home Listing"
            subtitle="PROJECT AIMS & OBJECTIVES"
            text="To design and implement a centralized platform that enhances efficiency, accuracy, and collaboration across all departments and service verticals within Hon Iyepe's ecosystem."
            color="hgreen"
            className="mb-10"
          />

          <ul className="mt-8">
            {aimsData.map((aim, index) => (
              <li key={index} className="flex items-start space-x-2 mb-4">
                <IconCheck className="text-[#256515]" stroke={1} />
                <span className="text-sm text-muted-foreground">{aim}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex place-content-center mx-auto">
          <img loading="lazy" decoding="async" src={aimsImg} alt="Aims" />
        </div>
      </div>
    </section>
  );
};

export default Aims;
