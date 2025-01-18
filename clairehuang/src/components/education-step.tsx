import { IEducation } from "../types/education";

interface IEducationStep {
  content: IEducation;
}

export const EducationStep = (props: IEducationStep) => {
  const { content } = props;

  return (
    <li className="mb-10 ms-4">
      <div className="absolute w-3 h-3 rounded-full mt-s -start-1.5 border bg-dark-navy border-dark-navy"></div>
      <div className="ml-s">
        <p className="text-xxxl md:text-xxxxxl font-bold text-dark-navy">
          {content.degree}
        </p>
        <div className="flex items-center justify-between mr-s md:mr-xl">
          <div>
            <p className="text-xxl md:text-xxxxxl font-medium text-dark-brown">
              {content.institution}
            </p>
            <time className="text-l md:text-xl font-semibold text-base-white">
              {content.time}
            </time>
            <p className="text-l md:text-xl font-semibold text-base-white">
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
