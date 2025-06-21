// import React from "react";
// import Heading from "./Heading";
// import skillSet from "@/constants/skills";
// import SkillCard from "@/utils/SkillCard";

// export default function Skills() {
//   return (
//     <>
//       <Heading title="SkillSet" />
//       <div className="sm:grid sm:grid-cols-3 flex flex-wrap gap-2 mx-4">
//         {skillSet.map((skill, index) => {
//           return (
//             <SkillCard
//               name={skill.name}
//               imgUrl={skill.imageUrl}
//               key={index}
//               id={index}
//             />
//             // <Button key={index}>{skill.name}</Button>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import React from "react";
import Heading from "./Heading";
import skillSet from "@/constants/skills";
import SkillCard from "@/utils/SkillCard";

export default function Skills() {
  // Group skills by type
  const skillsByType = skillSet.reduce((acc, skill) => {
    const type = skill.type;
    if (!acc[type]) {
      acc[type] = [];
    }
    acc[type].push(skill);
    return acc;
  }, {});

  // Define type display names and colors
  const typeConfig = {
    language: {
      title: "Programming Languages",
      color: "text-[#50D6A0]",
    },
    framework: {
      title: "Framework & Library",
      color: "text-[#F9C74F]",
    },
    database: {
      title: "Database & Tools",
      color: "text-[#FF6B6B]",
    },
  };

  // Define the order of categories
  const categoryOrder = ["language", "framework", "database"];

  return (
    <>
      <Heading title="SkillSet" />
      <div className="mx-4 space-y-8">
        {categoryOrder.map((type) => {
          const skills = skillsByType[type];
          if (!skills || skills.length === 0) return null;

          return (
            <div key={type} className="mb-8">
              <h2
                className={`text-2xl font-bold mb-4 text-center ${
                  typeConfig[type]?.color || "text-white"
                }`}
              >
                {typeConfig[type]?.title ||
                  type.charAt(0).toUpperCase() + type.slice(1)}
              </h2>
              <div className="sm:grid sm:grid-cols-3 lg:grid-cols-4 flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <SkillCard
                    name={skill.name}
                    imgUrl={skill.imageUrl}
                    key={skill.id}
                    id={skill.id}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
