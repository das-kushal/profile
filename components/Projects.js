"use client";
import { useState,useEffect,useRef } from "react";
import ProjectCard from "@/utils/ProjectCard";
import Heading from "./Heading";
import projectData from "@/constants/projects";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const [selectedTab,setSelectedTab] = useState("personal");
  const [selectedProject,setSelectedProject] = useState(null);

  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTab");
    if (savedTab) {
      setSelectedTab(savedTab);
    }
  },[]);

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    localStorage.setItem("selectedTab",tab);
  };

  const filteredProjects = projectData.filter((project) =>
    selectedTab === "personal"
      ? project.type === "personal"
      : project.type === "finalYear"
  );

  const videoRef = useRef(null);

  useEffect(() => {
    if (selectedProject && videoRef.current) {
      // scroll into view smoothly  && window.innerWidth <= 768
      videoRef.current.scrollIntoView({ behavior: "smooth",block: "center" });
      // start playing (just in case)
      // videoRef.current.play().catch(() => { });
    }
  },[selectedProject]);

  return (
    <>
      <Heading title="Projects" />
      {!selectedProject ? (
        <div className="mb-4 flex-1 justify-center items-center">

          <div className="flex justify-center mb-4">
            <button
              className={`inline-block p-4 rounded-t-lg hover:text-gray-600 sm:text-2xl text-md ${selectedTab === "personal"
                ? "text-white"
                : "text-[#9DA3AF]"
                }`}
              onClick={() => handleTabClick("personal")}
            >
              Personal Projects
            </button>
            <button
              className={
                `inline-block p-4 rounded-t-lg hover:text-gray-600 sm:text-2xl text-md ${selectedTab === "finalYear"
                  ? "text-white"
                  : "text-[#9DA3AF]"}`
              }
              onClick={() => handleTabClick("finalYear")}
            >
              Final Year Project
            </button>
          </div>

          <div id="default-styled-tab-content">
            <div className="flex-col sm:flex  sm:gap-3 justify-around items-center mt-4 mx-4">
              {filteredProjects.map((project) => (
                <div key={project.id} className="w-full">
                  <ProjectCard {...project} onImageClick={() => setSelectedProject(project)} />
                </div>
              ))}
            </div>
          </div>
        </div>



      ) : (
        <div className="p-4">
          <button onClick={() => setSelectedProject(null)} className="text-blue-500 hover:underline mb-2 block">
            ← Back to projects
          </button>
          {/*  */}
          <h2 className="text-xl font-bold text-yellow-300 mb-2 text-center" ref={selectedProject.videoUrl ? null : videoRef}>{selectedProject.name}</h2>
          {/* TODO make the video player advanced and video streaming better */}
          {selectedProject.videoUrl && (
            <video
              src={selectedProject.videoUrl}
              ref={videoRef}
              controls
              autoPlay

              className="w-full max-w-[800px] md:h-[450px] h-[200px]  rounded mb-4 object-contain mx-auto"

            // className="w-full rounded mb-4"
            />
          )}
          {/* <Image src={selectedProject.imgUrl} alt={selectedProject.name} fill className="rounded mb-4 contain-strict" /> */}
          <p className="text-gray-300 mb-4">{selectedProject.desc}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedProject.skills.map((skill,i) => (
              <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">{skill}</span>
            ))}
          </div>
          {selectedProject.githubLink && (
            <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-md">
              <FaGithub className="text-sm" /> <span> View Code on GitHub </span>
            </a>
          )}
        </div>
      )}




    </>
  );
}


// {/* <div className="mb-4 flex-1 justify-center items-center">
// <ul
//   className="flex flex-wrap -mb-px text-sm font-medium items-center justify-center"
//   id="default-styled-tab"
//   // data-tabs-toggle="#default-styled-tab-content"
//   // data-tabs-active-classes="text-purple-600 hover:text-purple-600 dark:text-purple-500 dark:hover:text-purple-500 border-purple-600 dark:border-purple-500"
//   // data-tabs-inactive-classes="dark:border-transparent text-gray-500 hover:text-gray-600 dark:text-gray-400 border-gray-100 hover:border-gray-300 dark:border-gray-700 dark:hover:text-gray-300"
//   role="tablist"
// >
//   <li className="me-2" role="presentation">
//     <button
//       className={
//         selectedTab === "personal"
//           ? "inline-block p-4  rounded-t-lg hover:text-gray-600  sm:text-2xl text-md text-white"
//           : "inline-block p-4  rounded-t-lg hover:text-gray-600 sm:text-2xl text-md text-[#9DA3AF]"
//       }
//       id="profile-styled-tab"
//       data-tabs-target="#styled-profile"
//       type="button"
//       role="tab"
//       aria-controls="profile"
//       aria-selected="false"
//       onClick={() => handleTabClick("personal")}
//     >
//       Personal Projects
//     </button>
//   </li>
//   <li className="me-2" role="presentation">
// <button
//   className={
//     selectedTab === "finalYear"
//       ? "inline-block p-4  rounded-t-lg hover:text-gray-600  sm:text-2xl text-md text-white "
//       : "inline-block p-4  rounded-t-lg hover:text-gray-600 sm:text-2xl text-md text-[#9DA3AF]"
//   }
//   id="dashboard-styled-tab"
//   data-tabs-target="#styled-dashboard"
//   type="button"
//   role="tab"
//   aria-controls="dashboard"
//   aria-selected="false"
//   onClick={() => handleTabClick("finalYear")}
// >
//   Final Year Project
// </button>
//   </li>
// </ul>
// </div>
// <div id="default-styled-tab-content">
// {/* <div
// className={
// selectedTab === "personal"
//   ? " rounded-lg bg-gray-50 dark:bg-gray-800"
//   : "hidden  rounded-lg bg-gray-50 dark:bg-gray-800"
// }
// id="styled-profile"
// role="tabpanel"
// aria-labelledby="profile-tab"
// > */}
// <div
//   className={
//     selectedTab === "personal"
//       ? "flex-col sm:flex  sm:gap-3 justify-around items-center mt-4 mx-4"
//       : "hidden"
//   }
// >
//   {filteredProjects.map((project) => (
//     <ProjectCard
//       name={project.name}
//       desc={project.desc}
//       type={project.type}
//       imgUrl={project.imgUrl}
//       githubLink={project.githubLink}
//       key={project.id}
//       id={project.id}
//       iconLink={project.iconLink}
//       icon={project.icon}
//       skills={project.skills}
//     />
//   ))}
// </div>
// {/* </div> */}
// <div
//   className={
//     selectedTab === "finalYear"
//       ? "flex-col sm:flex  sm:gap-3 justify-around items-center mt-4 mx-4"
//       : "hidden"
//   }
// >
//   {filteredProjects.map((project) => (
//     <ProjectCard
//       name={project.name}
//       desc={project.desc}
//       imgUrl={project.imgUrl}
//       type={project.type}
//       githubLink={project.githubLink}
//       key={project.id}
//       id={project.id}
//       iconLink={project.iconLink}
//       icon={project.icon}
//       skills={project.skills}
//       reportUrl={project.reportUrl}
//       presentationUrl={project.presentationUrl}
//     />
//   ))}
// </div>
// </div> */}