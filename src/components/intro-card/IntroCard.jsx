import { IconPointFilled } from "@tabler/icons-react";
import heroImg from "../../assests/images/ebuteContainer.png";

const infoData = [
  { label: "Role", value: "UI/UX Designer" },
  { label: "Type", value: "Enterprise Platform" },
  { label: "Industry", value: "Logistic & Port" },
  { label: "Year", value: "2024" },
];

const IntroCard = ({ title, description, image, imageAlt }) => {
  return (
    <section className="w-full h-full py-24">
      <div className="w-full lg:h-screen flex flex-col text-center items-center justify-center gap-12 mt-12 lg:-mt-24">
        <div className="flex flex-col items-center gap-2 md:gap-0">
          <span className="w-fit flex items-center bg-purple-50/10 border border-blue-500/20 text-xs tracking-wide uppercase text-blue-500/70 p-2 rounded-full">
            <IconPointFilled size={14} className="mr-1 animate-pulse" />
            Terminal Management System
          </span>
          <h2 className="font-black uppercase text-[clamp(72px,12vw,160px)] leading-0.9">
            Eb<span className="text-blue-700">ute</span>
          </h2>
          <p className="text-sm uppercase tracking-[4px] text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="w-full md:max-w-165 border border-white/10 rounded-3xl bg-accent-foreground/50">
          <div className="grid divide-y md:divide-y-0 md:grid-cols-4 divide-white/10 divide-x-0 md:divide-x md:divide-white/10 items-center ">
            {infoData.map((info, index) => (
              <InfoCard
                key={index + Math.random()}
                label={info.label}
                value={info.value}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:full md:max-w-250 md:mx-auto bg-linear-to-br from-blue-500 via-transparent via-50% to-[#EB5017] p-0.5 shadow-sm shadow-white/20 mt-12 lg:-mt-40 rounded-xl">
        <img
          loading="lazy"
          src={heroImg}
          alt={imageAlt}
          className="w-full h-full rounded-lg"
        />
      </div>
    </section>
  );
};

export default IntroCard;

const InfoCard = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 p-3 lg:p-6">
      <span
        className="text-xs tracking-widest text-muted-foreground
      "
      >
        {label}
      </span>
      <span className="text-[13px] font-medium whitespace-nowrap">{value}</span>
    </div>
  );
};
