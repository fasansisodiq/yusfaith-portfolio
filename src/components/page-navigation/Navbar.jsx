import { FaSearch } from "react-icons/fa";
import FontDesign from "../utils/FontDesign";
import Button from "../utils/Button";

function Navbar({ onShowPageNav }) {
  return (
    <nav
      id="slide"
      className="fixed top-0 left-0 lg:h-20  flex justify-between items-center shadow-2xl border-2 border-slate-950  bg-slate-950 overflow-hidden text-white p-4 w-screen lg:px-50"
    >
      <div className="flex justify-between items-center w-full  h-full">
        <span className="uppercase lg:text-5xl font-extrabold ">
          <FontDesign label={"yusfaith"} />
        </span>
        <div className="slider-container w-50 h-10 lg:h-15 p-1 lg:w-200 flex flex-row justify-end items-center rounded-full border-2 border-slate-100  overflow-auto  [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className=" capitalize text-sm lg:text-lg ">
            welcome to yusfaith !!! &nbsp;&nbsp;need our service? &nbsp;contact
            us
          </div>
        </div>
        <Button
          label={"ctrl k"}
          icon={<FaSearch />}
          onClick={onShowPageNav}
          btnClassName={"px-4  self-start "}
        />
      </div>
    </nav>
  );
}

export default Navbar;
