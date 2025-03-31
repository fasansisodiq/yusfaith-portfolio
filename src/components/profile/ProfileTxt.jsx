import Button from "../utils/Button";
import FontDesign from "../utils/FontDesign";

function ProfileTxt() {
  return (
    <div className="flex flex-col justify-start  gap-7 text-white">
      <span className="uppercase font-bold lg:text-6xl">
        ui/ux <FontDesign label={"designer"} dot={"yes"} />
      </span>
      <span className="uppercase font-bold lg:text-6xl">
        framer <FontDesign label={"developer"} dot={"yes"} />{" "}
      </span>
      <span className="text-slate-100/40 lg:text-2xl">
        Shapping digital interfaces, faming functional experience
      </span>
      <Button
        label={"Available for work"}
        icon={
          <span className="relative flex size-3.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-75"></span>
            <span className="relative inline-flex size-3.5 rounded-full bg-emerald-800"></span>
          </span>
        }
        btnClassName={"lg:w-50"}
      />
    </div>
  );
}

export default ProfileTxt;
