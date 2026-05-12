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
    <section className="w-full h-full lg:h-screen flex flex-col text-center items-center justify-center py-24">
      <div className="w-full flex flex-col items-center gap-12">
        <div className="flex flex-col items-center gap-3">
          <span className="w-fit flex items-center bg-purple-50/10 border border-purple-500/70 text-xs tracking-wide uppercase text-purple-500/70 p-2 rounded-full">
            <IconPointFilled size={12} className="mr-1" />
            Terminal Management System
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-7xl font-black uppercase text-purple-300 tracking-[-0.265rem]">
            Eb<span className="text-blue-700">ute</span>
          </h2>
          <p className="text-sm uppercase tracking-[4px] text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="w-full md:max-w-165 border border-white/10 rounded-3xl ">
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
      <div className="w-full md:full md:max-w-191.5 border border-white/20 shadow-sm shadow-white/20 mt-6 rounded-lg">
        <img
          loading="lazy"
          src={heroImg}
          alt={imageAlt}
          className="w-full h-full"
        />
      </div>
    </section>
  );
};

export default IntroCard;

const InfoCard = ({ label, value }) => {
  return (
    <div className="flex flex-col gap-2 px-6 py-2">
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
