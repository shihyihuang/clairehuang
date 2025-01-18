import { EDUCATION_LIST } from "../config/education";
import { EducationStep } from "./education-step";

const educationList = EDUCATION_LIST;

export const HowIGotHere = () => {
  return (
    <div className="max-h-screen">
      <ol className="relative border-s border-dark-navy mx-l">
        {educationList.map((content, index) => (
          <li>
            <EducationStep key={index} content={content} />
          </li>
        ))}
      </ol>
    </div>
  );
};
