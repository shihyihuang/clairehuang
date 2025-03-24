import { IWork } from "../../types/work";
import { Chip } from "../chip";
import { MdOpenInNew } from "react-icons/md";

interface IWorkStep {
  content: IWork;
}

export const WorkStep = (props: IWorkStep) => {
  const { content } = props;

  return (
    <li className="mb-6 ms-4 mt-m ">
      <div className="absolute w-3 h-3 rounded-full mt-s -start-1.5 border bg-dark-navy border-dark-navy"></div>
      <div className="ml-s  text-start">
        <div className="flex flex-row items-center gap-s">
          <p className="text-xxl md:text-xxxxxxl font-black text-dark-navy leading-tight">
            {content.position}
          </p>
          {content.url && (
            <a
              href={content.url}
              className="hover:scale-110 hover:drop-shadow-xl active:scale-90 cursor-pointer"
              target="_blank"
              rel="noreferrer">
              <MdOpenInNew className="text-xxl md:text-xxxxxl font-black text-dark-navy leading-tight" />
            </a>
          )}
        </div>
        <div className="flex flex-col playpen-san-content">
          <div className="flex flex-col md:flex-row justify-between w-full md:items-center text-dark-brown">
            <p className="text-l md:text-xxxl pt-xs py-space-1 leading-tight">
              {content.company}
            </p>
            <time className="text-m md:text-xl font-normal">
              {content.time}
            </time>
          </div>
          <div className="flex flex-row flex-wrap gap-x-space-1 gap-y-xs py-xs l:py-s ">
            {content.skills.map((skill, index) => (
              <Chip key={index} content={skill} />
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};
