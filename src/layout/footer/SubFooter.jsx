//icons
import {
  FaInstagram,
  FaBehance,
  FaDribbble,
  FaXTwitter,
  FaLinkedin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const socialLinks = [
  {
    icon: FaInstagram,
    name: "Instagram",
    link: "https://www.instagram.com/",
  },
  {
    icon: FaBehance,
    name: "Behance",
    link: "https://www.behance.net/",
  },
  {
    icon: FaDribbble,
    name: "Dribbble",
    link: "https://dribbble.com/",
  },
  {
    icon: FaXTwitter,
    name: "X",
    link: "https://x.com/",
  },
  {
    icon: FaLinkedin,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/",
  },
];

const SubFooter = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full text-white pb-32 gap-6">
      <div className="order-2 md:order-none text-sm md:text-base">
        Abdulraheem Yuusuf 2024 ⓒ
      </div>
      <div className="order-1 md:order-none flex items-center justify-center">
        {socialLinks.map((data, index) => (
          <Link
            key={index}
            to={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl mx-2 text-gray-800 hover:text-gray-600 transition duration-300"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-900 transition duration-300">
              <data.icon color="#fff" className="size-4 " />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SubFooter;
