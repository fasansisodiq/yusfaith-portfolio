//images
import contactImg from "../../assests/images/contactImg.png";
import SubFooter from "./SubFooter";

const Footer = ({ isHidden }) => {
  return (
    <footer
      className={`"h-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-0 bg-amber-300" ${
        isHidden ? "hidden" : "block text-white"
      }`}
    >
      <div className="flex items-center justify-center w-full h-full">
        <div className="flex flex-col space-y-3 w-full text-center sm:text-left">
          <span className="text-base lg:text-3xl tracking-wide">
            Got a project in mind?
          </span>
          <span className="text-5xl lg:text-7xl xl:text-8xl uppercase font-medium">
            Let’s talk
          </span>
          <span className="text-sm lg:text-xl">
            Mail me @ :
            <a
              className="ml-2 underline tracking-wider"
              href="mailto:yusfaith0102@gmail.com"
            >
              Yusfaith0102@gmail.com
            </a>
          </span>
        </div>
        <div className="hidden sm:flex w-full h-full justify-end items-center">
          <img
            loading="lazy"
            src={contactImg}
            alt="contact"
            className="w-full max-w-2xl h-auto object-cover blur-sm"
          />
        </div>
      </div>
      <SubFooter />
    </footer>
  );
};

export default Footer;
