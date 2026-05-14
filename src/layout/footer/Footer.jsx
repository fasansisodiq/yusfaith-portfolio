import { cn } from "../../lib/utils";
import SubFooter from "./SubFooter";

const Footer = ({ isHidden }) => {
  return (
    <footer className="w-full text-white">
      <div className="max-w-container mx-auto px-4 sm:px-6 lg:px-8 xl:px-0">
        <div
          className={cn(
            "flex flex-col items-center justify-center w-full gap-2.5 ",
            isHidden && "hidden",
          )}
        >
          <span className="text-sm text-muted-foreground tracking-wide">
            Got a project in mind?
          </span>
          <span className="text-5xl lg:text-8xl xl:text-[116px] text-center uppercase font-extrabold">
            Let’s <br />
            <span className="text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)]">
              talk
            </span>
          </span>
          <span className="text-sm text-muted-foreground">
            Mail me @ :
            <a
              className="ml-2 underline tracking-wider text-white"
              href="mailto:yusfaith0102@gmail.com"
            >
              Yusfaith0102@gmail.com
            </a>
          </span>
        </div>
        <SubFooter />
      </div>
    </footer>
  );
};

export default Footer;
