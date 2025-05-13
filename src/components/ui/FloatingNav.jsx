import { twMerge } from "tailwind-merge";
import { FaBookOpen, FaUser, FaEnvelope } from "react-icons/fa6";
import Button from "./Button";

const navLinks = [
  { icon: <FaBookOpen />, name: "Projects", href: "#projects" },
  { icon: <FaUser />, name: "About Me", href: "#aboutMe" },
  { icon: <FaEnvelope />, name: "Contact Me", href: "#contactMe" },
];

const FloatingNav = ({ className }) => {
  return (
    <nav
      className={twMerge(
        "sticky bottom-0 left-0 w-full flex items-center justify-center gap-4 pb-4 z-50",
        className
      )}
    >
      {navLinks.map((link, index) => (
        <Button
          key={index + 1}
          label={link.name}
          left_icon={link.icon}
          onClick={() => {
            window.location.href = link.href;
          }}
          className="hover:scale-115 hover:-translate-y-2.5 hidden md:block"
          btnclassName="cursor-pointer"
        />
      ))}
    </nav>
  );
};

export default FloatingNav;
