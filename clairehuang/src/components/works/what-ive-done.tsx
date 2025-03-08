import { WORK_LIST } from "../../config/work";
import { WorkStep } from "./work-step";

const workList = WORK_LIST;

export const WhatIveDone = () => {
  return (
    <div className="max-h-screen">
      <ol className="relative border-s border-dark-navy mx-m">
        {workList.map((work, index) => (
          <li>
            <WorkStep key={index} content={work} />
          </li>
        ))}
      </ol>
    </div>
  );
};
