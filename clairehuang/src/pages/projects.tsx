import { ProjectBlock } from "../components/project/project-block";
import { ProjectDrawer } from "../components/project/project-drawer";
import { PROJECT_LIST } from "../config/project";
import { useState, useEffect } from "react";

export const Projects = () => {
  useEffect(() => {
    document.title = "Projects | Claire";
  }, []);

  const projectList = PROJECT_LIST;
  const [selectedProject, setSelectedProject] = useState<number>(NaN);
  const isOpen = !isNaN(selectedProject);

  return (
    <div>
      <div
        className={`flex flex-col min-h-screen max-w-screen relative items-center justify-center mb-m ${
          !isNaN(selectedProject) && "opacity-10"
        }`}
        onClick={() => {
          isOpen && setSelectedProject(NaN);
        }}>
        <p className="text-[30px] md:text-[60px] l:text-[80px] py-m text-dark-navy">
          {" "}
          Projects
        </p>
        <div className="grid gap-m grid-cols-2 l:grid-cols-3 w-full px-m l:px-l">
          {projectList.map((content, index) => (
            <ProjectBlock
              key={index}
              projects={content}
              selectedProject={selectedProject}
              setSelectedProject={setSelectedProject}
            />
          ))}
        </div>
      </div>

      {!isNaN(selectedProject) && (
        <ProjectDrawer
          project={projectList[selectedProject - 1]}
          setSelectedProject={setSelectedProject}
        />
      )}
    </div>
  );
};
