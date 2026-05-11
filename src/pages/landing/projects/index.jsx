import {
  IconAnchor,
  IconLink,
  IconGridPattern,
  IconHome2,
  IconMosque,
  IconCreditCard,
} from "@tabler/icons-react";
//images
import EbuteImg from "../../../assests/images/EbuteImg.png";
import ErpImg from "../../../assests/images/ErpImg.png";
import TraceImg from "../../../assests/images/TraceImg.png";
import { LuFigma } from "react-icons/lu";
import { div } from "framer-motion/client";
import { SectionTitle } from "../../../components/ui/section-title";
import { Link } from "../misc/Link";
import { MobileLink } from "../misc/MobileLink";

const projectData = [
  {
    icon: IconAnchor,
    heading: "Ebute",
    subheading: "Terminal management system for port operations",
    imgSrc: EbuteImg,
    linkText: "Enterprise",
    href: "/ebute",
  },
  {
    icon: IconLink,
    heading: "Traceability",
    subheading:
      "The Traceability App is designed to help businesses track supply chains",
    imgSrc: ErpImg,
    linkText: "Saas",
    href: "/traceability",
  },
  {
    icon: IconGridPattern,
    heading: "ERP",
    subheading: "Terminal management ERP built for multi-department operations",
    imgSrc: TraceImg,
    linkText: "Enterprise",
    href: "/terminal-management",
  },
  {
    icon: IconHome2,
    heading: "Quicklist",
    subheading: "Leasing, renting, and selling of Properties",
    imgSrc: TraceImg,
    linkText: "PropTech",
    href: "/quicklist",
  },
  {
    icon: IconMosque,
    heading: "Hon.Iyepe",
    subheading:
      "Communication and engagement between Hon. Iyepe and constituents",
    imgSrc: TraceImg,
    linkText: "Community",
    href: "/quicklist",
  },
];

export const ProjectList = () => {
  return (
    <section className="py-24">
      <SectionTitle title="Projects" subtitle="Work" className="mb-12" />
      <div className="hidden md:block mx-auto max-w-7xl">
        {projectData.map((project, index) => (
          <Link
            sn={index + 1 < 10 ? `0${index + 1}` : index + 1}
            icon={project.icon}
            heading={project.heading}
            subheading={project.subheading}
            imgSrc={project.imgSrc}
            linkText={project.linkText}
            href={project.href}
          />
        ))}
      </div>
      <div className="md:hidden">
        {projectData.map((project, index) => (
          <MobileLink
            sn={index + 1 < 10 ? `0${index + 1}` : index + 1}
            icon={project.icon}
            heading={project.heading}
            subheading={project.subheading}
            imgSrc={project.imgSrc}
            linkText={project.linkText}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};
