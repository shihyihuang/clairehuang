import { IProject } from "../../types/project";
import { FaAngleDown } from "react-icons/fa6";
import { Chip } from "../chip";
import { MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { ImageSlider } from "./image-slider";

interface IProjectDrawer {
  project: IProject;
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectDrawer = (props: IProjectDrawer) => {
  const { project, setSelectedProject } = props;
  return (
    <div className="fixed bottom-0 left-0 w-full h-[75vh] bg-light-brown flex flex-col z-3">
      <FaAngleDown
        className="text-[40px] text-dark-brown mt-xs hover:scale-110 active:scale-90 cursor-pointer self-center"
        onClick={() => {
          setSelectedProject(NaN);
        }}
      />

      <div className="overflow-y-auto w-full flex flex-col items-center text-center px-s">
        <div className="flex flex-row text-xxxxxxl md:text-[40px] text-dark-navy items-center gap-s font-bold ">
          <p className=" text-dark-navy py-xs md:py-s leading-none">
            {project.name}
          </p>
          {project.website && (
            <a
              href={project.website}
              className="hover:scale-110 hover:drop-shadow-xl active:scale-90 cursor-pointer"
              target="_blank"
              rel="noreferrer">
              <MdOpenInNew />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              className="hover:scale-110 hover:drop-shadow-xl active:scale-90 cursor-pointer"
              target="_blank"
              rel="noreferrer">
              <FaGithub />
            </a>
          )}
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-x-space-1 gap-y-xs py-xs l:py-s ">
          {project.skills.map((skill, index) => (
            <Chip key={index} content={skill} />
          ))}
        </div>

        <p className="playpen-san-content text-l md:text-xl l:text-xxxl leading-tight text-dark-navy px-s l:px-xl py-xs">
          {project.about}
        </p>

        <div className="py-s ">
          {project.video && (
            <video
              src={project.video}
              className="w-[70vh] l:w-[90vh] rounded-m"
              controls
              autoPlay
            />
          )}
          {project.images && project.images.length > 0 && (
            <ImageSlider images={project.images} projectName={project.name} />
          )}
        </div>
      </div>
    </div>
  );
};
