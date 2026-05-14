import React from "react";
import LearnCard from "../../../components/learn-card/LearnCard";
import { terminalData } from "../../../db/database";
import { ListItem } from "../../../components/ui/list-item";

const lists = {
  achievements: [
    "This project successfully transformed fragmented workflows into a unified ERP platform, improving efficiency across key departments like finance, inventory, sales, HR, and operations.",
    "It provided a centralized system that streamlined processes, reduced redundancy, and enhanced collaboration between teams.",
    "Seeing how multiple complex workflows came together into one seamless experience was a major milestone and a strong addition to my growth as a product designer.",
  ],
  learnings: [
    "One of the biggest lessons from this project was understanding how to design for complexity without overwhelming users.",
    "Working across multiple departments taught me how to balance different user needs, structure information clearly, and maintain consistency throughout the system.",
    "It also strengthened my ability to think in systems, not just screens, ensuring that every design decision aligned with the overall product flow.",
  ],
};

const Learn = () => {
  const { title, subtitle, description } = terminalData.learnings;
  return (
    <section className="py-24">
      <LearnCard
        title={title}
        subtitle={subtitle}
        description={description}
        className="[&>span]:text-[#256515] [&>span::before]:bg-[#256515]"
      >
        <div className="grid md:grid-cols-2 gap-8">
          <ListItem
            heading="Achievements"
            lists={lists.achievements}
            className="[&>h3]:text-[#256515] [&>ul>li>svg]:text-[#256515]"
          />
          <ListItem
            heading="Learnings"
            lists={lists.learnings}
            className="[&>h3]:text-muted-foreground"
          />
        </div>
      </LearnCard>
    </section>
  );
};

export default Learn;
