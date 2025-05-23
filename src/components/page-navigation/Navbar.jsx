import { FaSearch } from "react-icons/fa";
import FontDesign from "../utils/FontDesign";
import Button from "../utils/Button";
import { BsEscape } from "react-icons/bs";
import { usePortState } from "../../hooks/PortfolioContext";
import { Link } from "react-scroll";

function Navbar() {
  const { showPageNav, onShowPageNav } = usePortState();
  return (
    <nav
      id="slide"
      className="fixed top-0 left-0 h-20 flex justify-between items-center shadow-2xl border-2 border-black  bg-black overflow-hidden text-white w-screen px-5 md:px-10 lg:px-20 xl:px-30"
    >
      <div className="flex justify-between items-center w-full  h-full">
        <span className="uppercase text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-extrabold ">
          <FontDesign label={"yusfaith"} />
        </span>
        <Link
          to={"ContactMe"}
          smooth={true}
          duration={500}
          spy={true}
          offset={50}
        >
          <button
            onClick={""}
            className="slider-container h-8 sm:h-10 md:h-12 lg:h-14 xl:h-15 p-1 flex flex-row justify-end items-center rounded-full border-2 border-slate-100  overflow-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            <div className=" capitalize text-[0.6rem] sm:text-xs md:text-sm  lg:text-lg xl:text-lg ">
              welcome !!! need our service? contact us
            </div>
          </button>
        </Link>
        <Button
          className="slider-container [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          to={"ContactMe"}
          label={"contact me"}
        />
        <Button
          to={""}
          label={!showPageNav ? "k" : "esc / x"}
          icon={!showPageNav ? <FaSearch /> : <BsEscape />}
          onClick={onShowPageNav}
          btnClassName={"px-4  self-start "}
        />
      </div>
    </nav>
  );
}

export default Navbar;
