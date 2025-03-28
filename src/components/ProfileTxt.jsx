import Button from "./Button"
import FontDesign from "./FontDesign"


function ProfileTxt() {
  return (
    <div className="flex flex-col justify-start items-start  gap-7 text-white">
      <span className="uppercase font-bold lg:text-6xl">ui/ux <FontDesign label={"designer"}/></span>
      <span className="uppercase font-bold lg:text-6xl">framer <FontDesign label={"developer"}/> </span>
      <span className="text-slate-100/40 lg:text-2xl">Shapping digital interfaces, faming functional experience</span>
      <Button label={'Available for work'}
      icon={<span className="relative flex size-3.5">
  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
  <span className="relative inline-flex size-3.5 rounded-full bg-emerald-800"></span>
</span>
      }
      btnClassName={'lg:w-50'}
       />
    </div>
  )
}

export default ProfileTxt
{/* <span className="w-5 h-5 bg-green-800 border-2 border-green-800 rounded-4xl"></span> */}