import React from "react";
import Heading from "./Heading";
import skillSet from "@/constants/skills";
import SkillCard from "@/utils/SkillCard";

export default function Skills() {
  return (
    <>
      <Heading title="Skills" />
      <div className="sm:grid sm:grid-cols-4 flex flex-wrap gap-2 mx-4">
        {skillSet.map((skill, index) => {
          return (
            <SkillCard
              name={skill.name}
              imgUrl={skill.imageUrl}
              key={index}
              id={index}
            />
            // <Button key={index}>{skill.name}</Button>
          );
        })}
      </div>
    </>
  );
}
