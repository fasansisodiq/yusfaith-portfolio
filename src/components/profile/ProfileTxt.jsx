import Button from "../utils/Button";
import FontDesign from "../utils/FontDesign";

function ProfileTxt() {
  const styles =
    "uppercase font-bold text-lg  sm:text-2xl md:text-3xl  lg:text-4xl xl:text-5xl flex gap-2 lg:gap-6";
  return (
    <div className="w-fit flex flex-col  gap-2 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-7 text-white ">
      <span className="animate-slide-right slide-right flex flex-col gap-2 sm:gap-5 md:gap-6 lg:gap-7 xl:gap-7">
        <span className={`${styles}`}>
          <span>ui/ux</span>
          <FontDesign label={"designer"} dot={"yes"} />
        </span>
        <span className={`${styles}`}>
          <span>framer </span>
          <FontDesign label={"developer"} dot={"yes"} />
        </span>
      </span>
      <span className=" animate-slide-left slide-left text-slate-100/40 text-[0.8rem] text-wrap sm:text-sm md:text-lg lg:text-lg xl:text-xl">
        Shapping digital interfaces, faming functional experience.
      </span>
      <Button
        btnClassName={"animate-rotate-clockwise rotate"}
        label={"Available for work"}
        icon={
          <span className="relative flex  size-2 sm:size-2.5 md:size-3 lg:size-3.5 xl:size-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex size-2 sm:size-2.5 md:size-3 lg:size-3.5 xl:size-3.5 rounded-full bg-emerald-800"></span>
          </span>
        }
      />
    </div>
  );
}

export default ProfileTxt;
