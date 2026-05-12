import { usePortState } from "../../../hooks/PortfolioContext";
import BorderHider from "../../ui/BorderHider";
import { LuSend } from "react-icons/lu";

import Input from "../../utils/Input";
import { SectionTitle } from "../../ui/section-title";
import { IconLink, IconMapPin, IconMail } from "@tabler/icons-react";
import { ContactForm } from "../../ui/contact-form";

const contactInfo = [
  {
    icon: IconMail,
    text: "yusfaith0102@gmail.com",
  },
  {
    icon: IconMapPin,
    text: "Lagos, Nigeria",
  },
  {
    icon: IconLink,
    text: "Available on Behance & LinkedIn",
  },
];

function ContactMe({ icon: IconComponent, text }) {
  const { showPageNav } = usePortState();
  return (
    <section
      id="contactMe"
      className={`w-full  ${showPageNav ? "h-screen" : "py-24"} text-white `}
    >
      <SectionTitle
        title="contact me"
        subtitle="Get in touch"
        className="mb-8"
      />

      <div className="flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex flex-col gap-12">
          <p className="text-white/70">
            Have a project in mind or want to collaborate? I'd love to hear from
            you. Let's create something great together.
          </p>

          <ul className="grid gap-3">
            {contactInfo.map((info, index) => (
              <li key={index} className="flex items-center gap-4">
                <span className="w-8 h-8 flex items-center justify-center rounded-md border border-white/10 bg-card-foreground">
                  <info.icon className="size-4" stroke={1.5} />
                </span>
                <span className="text-white/70">{info.text}</span>
              </li>
            ))}
          </ul>
        </div>
        <ContactForm className="w-full max-w-[47.296rem]" />
      </div>
    </section>
  );
}

export default ContactMe;
