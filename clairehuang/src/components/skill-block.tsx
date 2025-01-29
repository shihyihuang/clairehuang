import { ISkill } from "../types/skill";
import { FaDatabase, FaChrome } from "react-icons/fa6";
import { FaLaptopCode, FaCloud } from "react-icons/fa";

interface ISkillBlock {
  id: number;
  content: ISkill;
  selectedSkill: number;
}

const getTypeIcon = (id: number) => {
  switch (id) {
    case 0:
    default:
      return <FaLaptopCode />;
    case 1:
      return <FaChrome />;
    case 2:
      return <FaDatabase />;
    case 3:
      return <FaCloud />;
  }
};
export const SkillBlock = (props: ISkillBlock) => {
  const { id, content, selectedSkill } = props;
  const isSelected = id === selectedSkill;

  return (
    <div
      className={`flex flex-col items-center justify-center cursor-pointer bg-dark-brown 
          rounded-s p-s transition-all duration-700 ease-in-out hover:shadow-lg hover:-translate-y-1 active:scale-90
          ${isSelected ? "h-[280px]" : "h-[200px]"}
        `}>
      <p className="text-center text-xxxxl text-base-white px-space-1 py-s leading-none">
        {content.type}
      </p>

      <div
        className={`overflow-hidden transition-opacity duration-1000 ease-in-out ${
          isSelected ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}>
        <p className="text-center playpen-san-content text-ml text-light-brown">
          {content.skills}
        </p>
      </div>
      {!isSelected && (
        <div className={` text-base-white text-xxxxl mb-l`}>
          {getTypeIcon(id)}
        </div>
      )}
    </div>
  );
};
