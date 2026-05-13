import { HeroCard } from "../../../components/hero-card";
import heroImg from "../../../assests/images/qklist.png";

const data = {
  badge: "Real Estate Platform",
  title: "Quicklist Property Hub",
  highlight: {
    type: "last",
    count: 2,
  },
  description:
    "A high-performance real estate ecosystem designed to streamline the selling, leasing, and renting of residential and commercial properties — connecting property seekers with verified listings while providing agents with robust tools to manage their portfolios.",
  tags: [
    "UX Design",
    "Admin Dashboard",
    "Agent Portal",
    "Real Estate",
    "Prop Tech",
  ],
  image: "heroImg",
};

const Overview = () => {
  return (
    <section className="w-full mt-24 ">
      <HeroCard
        badge={data.badge}
        title={data.title}
        highlight={data.highlight}
        description={data.description}
        tags={data.tags}
        image={heroImg}
        color="orange"
      />
    </section>
  );
};

export default Overview;
