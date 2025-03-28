
import { CiSearch } from "react-icons/ci"
import Navigator from "./Navigator"


function Footer() {
  
  return (
    <div className="flex  items-center gap-2 lg:gap-10 border-2 border-slate-300/40 lg:h-25 rounded-full text-slate-400 lg:w-full self-center bg-stone-700/ lg:">
      <div className="flex justify-center items-center gap-2 lg:gap-4 pl-8">
        <span className="lg:text-[2.8rem] text-slate-300/40"><CiSearch/></span>
      <input type="text" placeholder="Search in the portfolio" name="search" className="outline-0 border-0 placeholder-stone-300/80 placeholder:text-xl lg:placeholder:text-2xl w-60"/>
      </div>
      <Navigator />
    </div>
  )
}

export default Footer
