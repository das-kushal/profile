import WorkExperienceCard from "@/utils/WorkExperienceCard";
import Heading from "./Heading";
import timelineData from "@/constants/work-education";

export default function WorkExperience() {
  return (
    <>
      <Heading title="Work Experience & Education" />
      <div className="flex-col justify-around items-center mt-4 mx-5 grid grid-cols-1 ">
        {timelineData.map((item, index) => (
          <WorkExperienceCard
            key={index}
            mydate={item.date}
            title={item.title}
            content={item.description}
            icon={item.icon}
            location={item.location}
            place={item.place}
          />
        ))}
      </div>
    </>
  );
}
