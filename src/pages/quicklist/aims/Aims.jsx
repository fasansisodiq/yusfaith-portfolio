import React from "react";
import { SectionTitle } from "../../../components/ui/section-title";
import { IconCheck } from "@tabler/icons-react";
import aimsImg from "../../../assests/images/qkaims.png";

const aimsData = [
  "Centralized dashboard for real-time container tracking",
  "Automated yard space allocation and booking flows",
  "Unified communications for agents, customs & management",
  "Data-driven reports on revenue, utilization & performance",
];

const Aims = () => {
  return (
    <section className="py-24">
      <div>
        <SectionTitle
          title="Building Smart Home Listing"
          subtitle="PROJECT AIMS & OBJECTIVES"
          text="To design and implement a centralized ERP system that enhances efficiency, accuracy, and collaboration across all departments within Starlink Global Ideal Limited."
          color="orange"
          className="mb-10"
        />

        <div className="flex place-content-center mx-auto">
          <img loading="lazy" decoding="async" src={aimsImg} alt="Aims" />
        </div>
      </div>
    </section>
  );
};

export default Aims;
