import React from "react";
import { SectionTitle } from "../../../components/ui/section-title";
import { ReactComponent as LockKey } from "../../../assests/ebute/svgs/lockkey.svg";
import { ReactComponent as Message } from "../../../assests/ebute/svgs/messagebubble.svg";
import { ReactComponent as Magnifier } from "../../../assests/ebute/svgs/magnifier.svg";
import { ReactComponent as Lock } from "../../../assests/ebute/svgs/lock.svg";

const challenges = [
  {
    icon: LockKey,
    title: "User Trust & Property Verification",
    description:
      "Users struggle to find listings. Scammers appear suddenly, and there's a lack of verified agent tools on the platform.",
  },
  {
    icon: Message,
    title: "Fragmented Communication Channels",
    description:
      "Interactions happen across calls, messaging and third-party apps, making communication hard to manage and track.",
  },
  {
    icon: Magnifier,
    title: "Complex Property Search & Discovery",
    description:
      "Users struggle to find relevant listings due to poor filtering, cluttered options and lack of personalization.",
  },
  {
    icon: Lock,
    title: "Lack of Transaction Transparency & Security",
    description:
      "Unclear processes and opaque payment statuses leave users confused about completing deals on the platform.",
  },
];

const Challenges = () => {
  return (
    <section className="py-24">
      <SectionTitle
        title="4 Core Problems Addressed"
        subtitle="The Challenge"
        text="Here are 4 common challenges affecting real estate ERP systems:"
        className=" mb-12"
        color="hgreen"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    </section>
  );
};

export default Challenges;

const ChallengeCard = ({ icon: Icon, title, description, flip }) => {
  const FlippedIcon = ({ icon: Icon, flip = false, ...props }) => (
    <Icon style={{ transform: flip ? "scaleX(-1)" : "none" }} {...props} />
  );
  return (
    <div className="group relative border border-muted-foreground/10 p-6 rounded-xl space-y-4 bg-accent-foreground hover:bg-muted-foreground/30 overflow-hidden">
      <span
        className="absolute inset-x-0 top-0 h-0.5 
      bg-linear-to-r from-transparent via-transparent to-transparent
       transition-all ease-in-out duration-300 
       group-hover:from-transparent group-hover:via-[#256515] group-hover:to-transparent"
      />

      <div className="h-9 w-9 flex items-center justify-center border border-[#256515]/20 bg-[#256515]/10 rounded-lg shrink-0">
        <FlippedIcon icon={Icon} flip={flip} className="size-4" />
      </div>

      <h4 className="text-sm font-semibold mt-8">{title}</h4>
      <p className="text-xs text-muted-foreground">{description}</p>
    </div>
  );
};
