import Button from "../utils/Button";
import { MdOutlineCall } from "react-icons/md";
import { IoPerson } from "react-icons/io5";
import { BiBook } from "react-icons/bi";

function ScrollBtns({ searchQuery }) {
  return (
    <div className=" fixed flex lg:right-120 justify-center items-center gap-2 lg:gap-8">
      <Button
        to={"projects"}
        icon={<BiBook size={"1.4rem"} />}
        key={"Projects"}
        label={"projects"}
        btnClassName={"lg:w-40"}
      />
      <Button
        to="aboutMe"
        icon={<IoPerson size={"1.4rem"} />}
        label={"about me"}
        btnClassName={"lg:w-40"}
      />
      <Button
        to="ContactMe"
        icon={<MdOutlineCall size={"1.4rem"} />}
        label={"contact me"}
        btnClassName={"lg:w-40"}
      />
    </div>
  );
}

export default ScrollBtns;
