import { usePortState } from "../../../hooks/PortfolioContext";
import Project from "./Project";
import ProjectTittle from "./ProjectTittle";
import { PiFigmaLogoBold } from "react-icons/pi";

function ProjectList() {
  const { showPageNav } = usePortState();
  return (
    <div
      className={` flex flex-col justify-center items-center text-white  ${
        showPageNav ? "h-screen" : "h-fit sm:pt-10 lg:pt-20"
      }`}
    >
      <h1 className="self-start py-10 font-semibold text-2xl sm:text-3xl lg:text-5xl xl:text-5xl">
        Projects
      </h1>
      <Project icon={<PiFigmaLogoBold />} tittle={<ProjectTittle />} />
      <Project icon={<PiFigmaLogoBold />} tittle={<ProjectTittle />} />
      <Project icon={<PiFigmaLogoBold />} tittle={<ProjectTittle />} />
    </div>
  );
}

export default ProjectList;
