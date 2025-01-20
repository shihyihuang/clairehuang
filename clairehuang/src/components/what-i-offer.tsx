import { SkillBlock } from "./skill-block";
import { skills } from "../config/skill";
import { useState } from "react";

export const WhatIOffer = () => {
  const [selectedSkill, setSelectedSkill] = useState(5);
  console.log("WhatIOffer: ", selectedSkill);
  return (
    <div className="grid gap-m grid-cols-2 l:grid-cols-4 items-end">
      {skills.map((content, index) => (
        <div key={index} onClick={() => setSelectedSkill(index)}>
          <SkillBlock
            id={index}
            content={content}
            selectedSkill={selectedSkill}
          />
        </div>
      ))}
    </div>
  );
};
