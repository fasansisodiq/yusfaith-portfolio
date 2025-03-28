import Button from "./Button"
import {  MdOutlineCall } from "react-icons/md"
import { IoPerson } from "react-icons/io5"
import { BiBook } from "react-icons/bi"
import {Link} from 'react-scroll';
import { useScroll } from "../hooks/CustomHook";
function Navigator() { 
  const onSetActive = true
  // const {onSetActive={}} = useScroll()   
  return (
      <div className=" fixed flex lg:right-120 justify-center items-center gap-2 lg:gap-8">
        <Link to="projects" smooth={true} duration={500}  spy={true} 
      offset={50} 
      onSetActive={onSetActive}><Button 
        icon={<BiBook size={"1.4rem"}/>} label={"projects"}
        btnClassName={"lg:w-40"} 
        /></Link>
        <Link to="aboutMe" smooth={true} duration={500}  spy={true} 
      offset={50} 
      onSetActive={onSetActive}><Button icon={<IoPerson size={"1.4rem"}/>} label={"about me"} btnClassName={"lg:w-40"}/></Link>
        <Link to="ContactMe" smooth={true} duration={500}  spy={true} 
      offset={50} 
      onSetActive={onSetActive}><Button icon={<MdOutlineCall size={"1.4rem"}/>} label={"contact me"} btnClassName={"lg:w-40"}/></Link>
      </div>
  )
}

export default Navigator
