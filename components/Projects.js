// import ProjectCard from "@/utils/ProjectCard";
// import Heading from "./Heading";
// import projectData from "@/constants/projects";

// export default function Projects() {
//   return (
//     <>
//       <Heading title="Projects" />
//       <div className="flex-col sm:grid sm:grid-cols-3 sm:gap-3 justify-around items-center mt-4 mx-4 ">
//         {projectData.map((project, index) => {
//           return (
//             <ProjectCard
//               name={project.name}
//               desc={project.desc}
//               githubLink={project.githubLink}
//               key={project.id}
//               id={project.id}
//               iconLink={project.iconLink}
//               icon={project.icon}
//               skills={project.skills}
//             />
//           );
//         })}
//       </div>
//     </>
//   );
// }

"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/utils/ProjectCard";
import Heading from "./Heading";
import projectData from "@/constants/projects";
import Button from "@/utils/Button";

export default function Projects() {
  const [selectedTab, setSelectedTab] = useState("personal");

  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      setSelectedTab(savedTab);
    }
  }, []);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem("selectedTab", tab);
  };

  const filteredProjects = projectData.filter((project) =>
    selectedTab === "personal"
      ? project.type === "personal"
      : project.type === "finalYear"
  );

  return (
    <>
      <Heading title="Projects" />
      <div className="mb-4 flex-1 justify-center items-center">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium items-center justify-center"
          id="default-styled-tab"
          // data-tabs-toggle="#default-styled-tab-content"
          // data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
          // data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
          role="tablist"
        >
          <li className="me-2" role="presentation">
            <button
              className={
                selectedTab === "personal"
                  ? "inline-block p-4  rounded-t-lg hover:text-gray-600  sm:text-2xl text-md text-white"
                  : "inline-block p-4  rounded-t-lg hover:text-gray-600 sm:text-2xl text-md text-[#9DA3AF]"
              }
              id="profile-styled-tab"
              data-tabs-target="#styled-profile"
              type="button"
              role="tab"
              aria-controls="profile"
              aria-selected="false"
              onClick={() => handleTabClick("personal")}
            >
              Personal Projects
            </button>
          </li>
          <li className="me-2" role="presentation">
            <button
              className={
                selectedTab === "finalYear"
                  ? "inline-block p-4  rounded-t-lg hover:text-gray-600  sm:text-2xl text-md text-white "
                  : "inline-block p-4  rounded-t-lg hover:text-gray-600 sm:text-2xl text-md text-[#9DA3AF]"
              }
              id="dashboard-styled-tab"
              data-tabs-target="#styled-dashboard"
              type="button"
              role="tab"
              aria-controls="dashboard"
              aria-selected="false"
              onClick={() => handleTabClick("finalYear")}
            >
              Final Year Project
            </button>
          </li>
        </ul>
      </div>
      <div id="default-styled-tab-content">
        {/* <div
          className={
            selectedTab === "personal"
              ? " rounded-lg bg-gray-50 dark:bg-gray-800"
              : "hidden  rounded-lg bg-gray-50 dark:bg-gray-800"
          }
          id="styled-profile"
          role="tabpanel"
          aria-labelledby="profile-tab"
        > */}
        <div
          className={
            selectedTab === "personal"
              ? "flex-col sm:flex  sm:gap-3 justify-around items-center mt-4 mx-4"
              : "hidden"
          }
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              type={project.type}
              imgUrl={project.imgUrl}
              githubLink={project.githubLink}
              key={project.id}
              id={project.id}
              iconLink={project.iconLink}
              icon={project.icon}
              skills={project.skills}
            />
          ))}
        </div>
        {/* </div> */}
        <div
          className={
            selectedTab === "finalYear"
              ? "flex-col sm:flex  sm:gap-3 justify-around items-center mt-4 mx-4"
              : "hidden"
          }
        >
          {filteredProjects.map((project) => (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              imgUrl={project.imgUrl}
              type={project.type}
              githubLink={project.githubLink}
              key={project.id}
              id={project.id}
              iconLink={project.iconLink}
              icon={project.icon}
              skills={project.skills}
              reportUrl={project.reportUrl}
              presentationUrl={project.presentationUrl}
            />
          ))}
        </div>
      </div>
    </>
  );
}
