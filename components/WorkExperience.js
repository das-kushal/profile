// import WorkExperienceCard from "@/utils/WorkExperienceCard";
// import Heading from "./Heading";
// import timelineData from "@/constants/work-education";

// export default function WorkExperience() {
//   return (
//     <>
//       <Heading title="Work Experience & Education" />
//       <div className="flex-col justify-around items-center mt-4 mx-5 grid grid-cols-1 ">
//         {timelineData.map((item, index) => (
//           <WorkExperienceCard
//             key={index}
//             mydate={item.date}
//             title={item.title}
//             content={item.description}
//             icon={item.icon}
//             location={item.location}
//             place={item.place}
//             logoUrl={item.logoUrl}
//           />
//         ))}
//       </div>
//     </>
//   );
// }

// import WorkExperienceCard from "@/utils/WorkExperienceCard";
// import Heading from "./Heading";
// import timelineData from "@/constants/work-education";

// export default function WorkExperience() {
//   // Separate data by type
//   const workData = timelineData.filter((item) => item.icon === "work");
//   const educationData = timelineData.filter((item) => item.icon === "school");

//   return (
//     <>
//       <Heading title="Work Experience & Education" />

//       {/* Mobile/Tablet View - Combined Timeline */}
//       <div className="lg:hidden flex-col justify-around items-center mt-4 mx-5 grid grid-cols-1">
//         {timelineData.map((item, index) => (
//           <WorkExperienceCard
//             key={index}
//             mydate={item.date}
//             title={item.title}
//             content={item.description}
//             icon={item.icon}
//             location={item.location}
//             place={item.place}
//             logoUrl={item.logoUrl}
//           />
//         ))}
//       </div>

//       {/* Desktop View - Split Timeline */}
//       <div className="hidden lg:flex gap-8 mt-4 mx-5">
//         {/* Work Experience Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#50D6A0] mb-4 text-center">
//             Work Experience
//           </h2>
//           <div className="flex-col justify-around items-center grid grid-cols-1">
//             {workData.map((item, index) => (
//               <WorkExperienceCard
//                 key={`work-${index}`}
//                 mydate={item.date}
//                 title={item.title}
//                 content={item.description}
//                 icon={item.icon}
//                 location={item.location}
//                 place={item.place}
//                 logoUrl={item.logoUrl}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Education Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#F9C74F] mb-4 text-center">
//             Education
//           </h2>
//           <div className="flex-col justify-around items-center grid grid-cols-1">
//             {educationData.map((item, index) => (
//               <WorkExperienceCard
//                 key={`education-${index}`}
//                 mydate={item.date}
//                 title={item.title}
//                 content={item.description}
//                 icon={item.icon}
//                 location={item.location}
//                 place={item.place}
//                 logoUrl={item.logoUrl}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// import WorkExperienceCard from "@/utils/WorkExperienceCard";
// import Heading from "./Heading";
// import timelineData from "@/constants/work-education";

// export default function WorkExperience() {
//   const workData = timelineData.filter((item) => item.icon === "work");
//   const educationData = timelineData.filter((item) => item.icon === "school");

//   return (
//     <>
//       <Heading title="Work Experience & Education" />

//       {/* Mobile/Tablet View - Combined Timeline */}
//       <div className="lg:hidden mt-4 mx-5">
//         <div className="relative">
//           {timelineData.map((item, index) => (
//             <WorkExperienceCard
//               key={index}
//               mydate={item.date}
//               title={item.title}
//               content={item.description}
//               icon={item.icon}
//               location={item.location}
//               place={item.place}
//               logoUrl={item.logoUrl}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Desktop View - Split Timeline */}
//       <div className="hidden lg:flex gap-8 mt-4 mx-5">
//         {/* Work Experience Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#50D6A0] mb-6 text-center">
//             Work Experience
//           </h2>
//           <div className="relative">
//             {workData.map((item, index) => (
//               <WorkExperienceCard
//                 key={`work-${index}`}
//                 mydate={item.date}
//                 title={item.title}
//                 content={item.description}
//                 icon={item.icon}
//                 location={item.location}
//                 place={item.place}
//                 logoUrl={item.logoUrl}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Education Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#F9C74F] mb-6 text-center">
//             Education
//           </h2>
//           <div className="relative">
//             {educationData.map((item, index) => (
//               <WorkExperienceCard
//                 key={`education-${index}`}
//                 mydate={item.date}
//                 title={item.title}
//                 content={item.description}
//                 icon={item.icon}
//                 location={item.location}
//                 place={item.place}
//                 logoUrl={item.logoUrl}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

import WorkExperienceCard from "@/utils/WorkExperienceCard";
import Heading from "./Heading";
import timelineData from "@/constants/work-education";

export default function WorkExperience() {
  const workData = timelineData.filter((item) => item.icon === "work");
  const educationData = timelineData.filter((item) => item.icon === "school");

  return (
    <>
      <Heading title="Work Experience & Education" />

      {/* Mobile/Tablet View - Combined Timeline */}
      <div className="lg:hidden mt-4 mx-5">
        <ol className="relative border-s border-gray-100 dark:border-gray-700">
          {timelineData.map((item, index) => (
            <WorkExperienceCard
              key={index}
              mydate={item.date}
              title={item.title}
              content={item.description}
              icon={item.icon}
              location={item.location}
              place={item.place}
              logoUrl={item.logoUrl}
            />
          ))}
        </ol>
      </div>

      {/* Desktop View - Split Timeline */}
      <div className="hidden lg:flex gap-8 mt-4 mx-5">
        {/* Work Experience Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#50D6A0] mb-6 text-center">
            Work Experience
          </h2>
          <ol className="relative border-s border-[#50D6A0]">
            {workData.map((item, index) => (
              <WorkExperienceCard
                key={`work-${index}`}
                mydate={item.date}
                title={item.title}
                content={item.description}
                icon={item.icon}
                location={item.location}
                place={item.place}
                logoUrl={item.logoUrl}
              />
            ))}
          </ol>
        </div>

        {/* Education Section */}
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#F9C74F] mb-6 text-center">
            Education
          </h2>
          <ol className="relative border-s border-[#F9C74F]">
            {educationData.map((item, index) => (
              <WorkExperienceCard
                key={`education-${index}`}
                mydate={item.date}
                title={item.title}
                content={item.description}
                icon={item.icon}
                location={item.location}
                place={item.place}
                logoUrl={item.logoUrl}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
