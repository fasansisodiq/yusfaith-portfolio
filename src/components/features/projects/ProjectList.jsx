import Project from "./Project";
import ProjectTittle from "./ProjectTittle";
import { PiFigmaLogoBold } from "react-icons/pi";

function ProjectList() {
  return (
    <div className=" flex flex-col justify-center items-center text-white lg:text-5xl h-screen">
      <h1 className="self-start lg:py-10 font-semibold ">Projects</h1>
      <Project icon={<PiFigmaLogoBold />} tittle={<ProjectTittle />} />
      <Project icon={<PiFigmaLogoBold />} tittle={<ProjectTittle />} />
      <Project icon={<PiFigmaLogoBold />} tittle={<ProjectTittle />} />
    </div>
  );
}

export default ProjectList;
