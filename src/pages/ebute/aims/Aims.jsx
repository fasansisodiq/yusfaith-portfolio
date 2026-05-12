import React from "react";
import { SectionTitle } from "../../../components/ui/section-title";
import { IconCheck } from "@tabler/icons-react";
import aimsImg from "../../../assests/images/aimsImg.png";

const aimsData = [
  "Centralized dashboard for real-time container tracking",
  "Automated yard space allocation and booking flows",
  "Unified communications for agents, customs & management",
  "Data-driven reports on revenue, utilization & performance",
];

const Aims = () => {
  return (
    <section className="pt-24">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-15">
        <div>
          <SectionTitle
            title="Building Smarter Terminal Ops"
            subtitle="PROJECT AIMS & OBJECTIVES"
            text=" The aim of this project was to design a digital platform that streamlines
      operations at container terminals, addressing inefficiencies in yard
      management and improving productivity for all stakeholders."
          />
          <ul className="mt-8">
            {aimsData.map((aim, index) => (
              <li key={index} className="flex items-start space-x-2 mb-4">
                <IconCheck className="text-blue-700 mt-1" stroke={1} />
                <span className="text-sm text-muted-foreground">{aim}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="shrink-0">
          <img loading="lazy" decoding="async" src={aimsImg} alt="Aims" />
        </div>
      </div>
    </section>
  );
};

export default Aims;
