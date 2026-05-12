import React from "react";
import { GoDotFill } from "react-icons/go";
import { SectionTitle } from "../../../components/ui/section-title";
import { ReactComponent as GeometryTriangle } from "../../../assests/ebute/svgs/geometry-triangle.svg";
import { ReactComponent as Crane } from "../../../assests/ebute/svgs/crane.svg";
import { ReactComponent as Satellite } from "../../../assests/ebute/svgs/satellite.svg";

const challenges = [
  {
    icon: GeometryTriangle,
    title: "Inefficient Use of Space",
    description:
      "Limited container space is often mismanaged due to lack of real-time tracking.",
    flip: true,
  },
  {
    icon: Crane,
    title: "Manual Yard Operations",
    description:
      "Dependence on manual processes leads to delays, inaccuracies, and increased operational costs.",
    flip: true,
  },
  {
    icon: Satellite,
    title: "Fragmented Communication",
    description:
      "Customers, terminal management, and administrative teams struggle with misaligned or delayed updates, hampering overall productivity.",
    flip: false,
  },
];

const Challenges = () => {
  return (
    <section className="pt-24">
      <SectionTitle
        title="What We Were Solving"
        subtitle="The Challenge"
        text="Container terminals often face the following operational challenges:"
        className="[&>span]:text-blue-700 mb-12"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {challenges.map((challenge, index) => (
          <ChallengeCard
            key={index}
            icon={challenge.icon}
            title={challenge.title}
            description={challenge.description}
            flip={challenge.flip}
            className="relative border border-muted-foreground/10 p-6 rounded-xl space-y-4 bg-accent-foreground"
          />
        ))}
      </div>
      <p className="text-base p-6 bg-muted-foreground/10 rounded-lg text-muted-foreground border border-blue-500/50">
        These issues motivated the development of EBUTE, a centralized digital
        platform designed to improve container space utilization, optimize yard
        operations, and enhance communication between stakeholders.
      </p>
    </section>
  );
};

export default Challenges;

const ChallengeCard = ({ icon: Icon, title, description, flip }) => {
  const FlippedIcon = ({ icon: Icon, flip = false, ...props }) => (
    <Icon style={{ transform: flip ? "scaleX(-1)" : "none" }} {...props} />
  );
  return (
    <div className="relative border border-muted-foreground/10 p-6 rounded-xl space-y-4 bg-accent-foreground overflow-hidden">
      <span className="absolute inset-0 h-0.5  bg-linear-to-r from-purple-500 to-blue-500" />
      <div className="h-9 w-9 flex items-center justify-center border border-purple-500/20 bg-purple-50/10 rounded-lg shrink-0">
        <FlippedIcon icon={Icon} flip={flip} className="size-4" />
      </div>
      <h4 className="text-sm font-semibold mt-8">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};
