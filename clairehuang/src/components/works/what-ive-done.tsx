import { WORK_LIST } from "../../config/work";
import { WorkStep } from "./work-step";

const workList = WORK_LIST;
interface IWhatIveDone {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const WhatIveDone = (props: IWhatIveDone) => {
  const { isOpen, setIsOpen } = props;

  return (
    <div className="max-h-screen">
      <ol className="relative border-s border-dark-navy mx-m">
        {workList.map((work, index) => (
          <li>
            <WorkStep
              key={index}
              content={work}
              isOpen={isOpen}
              setIsOpen={setIsOpen}
            />
          </li>
        ))}
      </ol>
    </div>
  );
};
