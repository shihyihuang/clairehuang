import { IProject } from "../../types/project";

interface IProjectBlock {
  projects: IProject;
  selectedProject: number;
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
}

export const ProjectBlock = (props: IProjectBlock) => {
  const { projects, selectedProject, setSelectedProject } = props;

  // https://www.codewonders.dev/projects
  return (
    <div
      className={`rounded-s h-[300px] relative group overflow-hidden ${
        isNaN(selectedProject) && "hover:drop-shadow-lg active:scale-90"
      }`}
      onClick={() => {
        isNaN(selectedProject) && setSelectedProject(projects.id);
      }}>
      {/* background image */}
      <div
        className="absolute inset-0 rounded-s bg-cover bg-center bg-no-repeat transition duration-300 ease-in-out group-hover:blur-sm group-hover:brightness-50 group-hover:scale-105"
        style={{ backgroundImage: `url(${projects.background})` }}></div>
      {/* text */}
      <div className="absolute inset-0 flex flex-col justify-end items-start p-space-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-start text-white">
        <h2 className=" text-xxxl l:text-xxxxl font-bold leading-none mb-space-2">
          {projects.name}
        </h2>
        <p className="text-m l:text-l playpen-san-content">
          {projects.summary}
        </p>
      </div>
    </div>
  );
};
