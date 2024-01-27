import ProjectCard from "@/utils/ProjectCard";
import Heading from "./Heading";
import projectData from "@/constants/projects";

export default function Projects() {
  return (
    <>
      <Heading title="Projects" />
      <div className="flex-col sm:grid sm:grid-cols-3 sm:gap-3 justify-around items-center mt-4 mx-4 ">
        {projectData.map((project, index) => {
          return (
            <ProjectCard
              name={project.name}
              desc={project.desc}
              githubLink={project.githubLink}
              key={project.id}
              id={project.id}
              iconLink={project.iconLink}
              icon={project.icon}
              skills={project.skills}
            />
          );
        })}
      </div>
    </>
  );
}
