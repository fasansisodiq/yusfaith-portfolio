import Button from "../utils/Button";
import { MdOutlineCall } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BiBook } from "react-icons/bi";

function ScrollBtns() {
  return (
    <div
      className={` fixed flex right-12 sm:right-12 lg:right-108 justify-center items-center gap-2 lg:gap-8`}
    >
      <Button
        to={"projects"}
        icon={<BiBook />}
        key={"Projects"}
        label={"projects"}
      />
      <Button to="aboutMe" icon={<IoPerson />} label={"about me"} />
      <Button to="ContactMe" icon={<MdOutlineCall />} label={"contact me"} />
    </div>
  );
}

export default ScrollBtns;
