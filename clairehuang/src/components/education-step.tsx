import { IEducation } from "../types/education";

interface IEducationStep {
  content: IEducation;
}

export const EducationStep = (props: IEducationStep) => {
  const { content } = props;

  return (
    <li className="mb-6 ms-4 mt-m">
      <div className="absolute w-3 h-3 rounded-full mt-s -start-1.5 border bg-dark-navy border-dark-navy"></div>
      <div className="ml-s  text-start">
        <p className="text-xxxl md:text-xxxxxxl font-black text-dark-navy leading-tight">
          {content.degree}
        </p>
        <div className="flex items-center playpen-san-content">
          <div className="w-5/6">
            <p className="text-xl md:text-xxxl text-dark-brown pt-xs py-space-1 leading-tight">
              {content.institution}
            </p>
            <time className="text-l md:text-xl font-normal  text-base-white">
              {content.time}
            </time>
            <p className="text-l md:text-xl font-normal text-base-white leading-tight">
              {" "}
              {content.info}
            </p>
          </div>
          <img
            src={content.image}
            alt="logo"
            className="w-[120px] md:w-[200px] h-full"
          />
        </div>
      </div>
    </li>
  );
};
