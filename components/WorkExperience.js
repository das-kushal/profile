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


// =============================================================================================================

// import Image from "next/image";
// import Heading from "./Heading";
// import timelineData from "@/constants/work-education";

// // Helper to group entries by place (company or institution)
// function groupByPlace(data) {
//   const grouped = {};
//   data.forEach(item => {
//     if (!grouped[item.place]) grouped[item.place] = [];
//     grouped[item.place].push(item);
//   });
//   return grouped;
// }

// export default function WorkExperience() {
//   const workData = timelineData.filter((item) => item.icon === "work");
//   const educationData = timelineData.filter((item) => item.icon === "school");
//   const groupedWork = groupByPlace(workData);
//   const groupedEducation = groupByPlace(educationData);

//   return (
//     <>
//       <Heading title="Work Experience & Education" />

//       {/* Mobile/Tablet View - Combined Timeline */}
//       <div className="lg:hidden mt-4 mx-5">
//         <ol className="relative border-s border-gray-700">
//           {timelineData.map((item,index) => (
//             <li key={index} className="mb-8 ms-4">
//               <div className="absolute w-3 h-3 bg-[#50D6A0] rounded-full -left-1.5 border border-white dark:border-gray-900"></div>
//               <div className="flex items-center gap-3 mb-2">
//                 <Image
//                   src={item.logoUrl}
//                   alt={`${item.place} logo`}
//                   width={32}
//                   height={32}
//                   className="w-8 h-8 rounded-md object-contain bg-white"
//                 />
//                 <span className="font-bold text-base text-white">{item.place}</span>
//                 <span className="text-xs text-gray-400">{item.location}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <span className="font-semibold text-sm text-yellow-300">{item.title}</span>
//                 <span className="text-xs text-gray-400">{item.date}</span>
//               </div>
//               <div className="text-sm text-gray-300 mt-1 mb-2">{item.description}</div>
//               {item.skills && (
//                 <div className="flex flex-wrap gap-2 mt-1">
//                   {item.skills.map((skill,idx) => (
//                     <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">
//                       {skill}
//                     </span>
//                   ))}
//                 </div>
//               )}
//             </li>
//           ))}
//         </ol>
//       </div>

//       {/* Desktop View - Split Timeline */}
//       <div className="hidden lg:flex gap-8 mt-4 mx-5">
//         {/* Work Experience Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#50D6A0] mb-6 text-center">
//             Work Experience
//           </h2>
//           {Object.entries(groupedWork).map(([company,roles],idx) => (
//             <div key={company} className="bg-white/5 rounded-xl border border-gray-700 shadow p-6 mb-8">
//               <div className="flex items-center gap-4 mb-2">
//                 <Image
//                   src={roles[0].logoUrl}
//                   alt={`${company} logo`}
//                   width={48}
//                   height={48}
//                   className="w-12 h-12 rounded-md object-contain bg-white"
//                 />
//                 <div>
//                   <div className="font-bold text-lg text-white">{company}</div>
//                   <div className="text-sm text-gray-400">{roles[0].location}</div>
//                   <div className="text-xs text-gray-400">{roles[0].icon === "work" ? "On-site" : ""}</div>
//                 </div>
//               </div>
//               <div className="pl-2 border-l border-gray-600">
//                 {roles.map((role,i) => (
//                   <div key={role.title + role.date} className="mb-6">
//                     <div className="flex items-center gap-2">
//                       <span className="font-semibold text-base text-white">{role.title}</span>
//                       <span className="text-xs text-gray-400">{role.date}</span>
//                     </div>
//                     <div className="text-sm text-gray-300 mt-1 mb-2">{role.description}</div>
//                     {role.skills && (
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {role.skills.map((skill,idx) => (
//                           <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               {idx < Object.keys(groupedWork).length - 1 && (
//                 <hr className="my-4 border-gray-700" />
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Education Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#F9C74F] mb-6 text-center">
//             Education
//           </h2>
//           {Object.entries(groupedEducation).map(([institution,degrees],idx) => (
//             <div key={institution} className="bg-white/5 rounded-xl border border-gray-700 shadow p-6 mb-8">
//               <div className="flex items-center gap-4 mb-2">
//                 <Image
//                   src={degrees[0].logoUrl}
//                   alt={`${institution} logo`}
//                   width={48}
//                   height={48}
//                   className="w-12 h-12 rounded-md object-contain bg-white"
//                 />
//                 <div>
//                   <div className="font-bold text-lg text-white">{institution}</div>
//                   <div className="text-sm text-gray-400">{degrees[0].location}</div>
//                 </div>
//               </div>
//               <div className="pl-2 border-l border-gray-600">
//                 {degrees.map((degree,i) => (
//                   <div key={degree.title + degree.date} className="mb-6">
//                     <div className="flex items-center gap-2">
//                       <span className="font-semibold text-base text-white">{degree.title}</span>
//                       <span className="text-xs text-gray-400">{degree.date}</span>
//                     </div>
//                     <div className="text-sm text-gray-300 mt-1 mb-2">{degree.description}</div>
//                     {degree.skills && (
//                       <div className="flex flex-wrap gap-2 mt-1">
//                         {degree.skills.map((skill,idx) => (
//                           <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">
//                             {skill}
//                           </span>
//                         ))}
//                       </div>
//                     )}
//                   </div>
//                 ))}
//               </div>
//               {idx < Object.keys(groupedEducation).length - 1 && (
//                 <hr className="my-4 border-gray-700" />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }



import Image from "next/image";
import Heading from "./Heading";
import timelineData from "@/constants/work-education";

function groupByPlace(data) {
  const grouped = {};
  data.forEach(item => {
    if (!grouped[item.place]) grouped[item.place] = [];
    grouped[item.place].push(item);
  });
  return grouped;
}

export default function WorkExperience() {
  const workData = timelineData.filter((item) => item.icon === "work");
  const educationData = timelineData.filter((item) => item.icon === "school");
  const groupedWork = groupByPlace(workData);
  const groupedEducation = groupByPlace(educationData);

  return (
    <>
      <Heading title="Work Experience & Education" />
      {/* Mobile/Tablet View - Combined Timeline */}
      <div className="lg:hidden mt-4 mx-5">
        <ol className="relative border-s border-gray-700">
          {timelineData.map((item,index) => (
            <li key={index} className="mb-8 ms-4">
              <div className="absolute w-3 h-3 bg-[#50D6A0] rounded-full -left-1.5 border border-white"></div>
              <div className="flex items-center gap-3 mb-2">
                <Image
                  src={item.logoUrl}
                  alt={`${item.place} logo`}
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-md object-contain bg-white"
                />
                <span className="font-bold text-base text-white">{item.place}</span>
                <span className="text-xs text-gray-400">{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`font-semibold text-sm ${item.icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]"}`}>{item.title}</span>
                <span className="text-xs text-gray-400">{item.date}</span>
              </div>
              <div className="text-sm text-gray-300 mt-1 mb-2">{item.description}</div>
              {item.skills && (
                <div className="flex flex-wrap gap-2 mt-1">
                  {item.skills.map((skill,idx) => (
                    <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>

      {/* Desktop View - Split Timeline */}
      <div className="hidden lg:flex gap-8 mt-4 mx-5">

        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#50D6A0] mb-6 text-center">
            Work Experience
          </h2>
          {Object.entries(groupedWork).map(([company,roles],idx) => (
            <div key={company} className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-2">
                <Image
                  src={roles[0].logoUrl}
                  alt={`${company} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-md object-contain bg-white"
                />
                <div>
                  <div className="font-bold text-lg text-white">{company}</div>
                  <div className="text-sm text-gray-400">{roles[0].location}</div>
                  <div className="text-xs text-gray-400">{roles[0].icon === "work" ? "On-site" : ""}</div>
                </div>
              </div>
              <div className="pl-2 border-l border-gray-600">
                {roles.map((role,i) => (
                  <div key={role.title + role.date} className="mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[#50D6A0]">{role.title}</span>
                      <span className="text-xs text-gray-400">{role.date}</span>
                    </div>
                    <div className="text-sm text-gray-300 mt-1 mb-2">{role.description}</div>
                    {role.skills && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {role.skills.map((skill,idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* {idx < Object.keys(groupedWork).length - 1 && (
                <hr className="my-4 border-gray-700" />
              )} */}
            </div>
          ))}
        </div>


        <div className="flex-1">
          <h2 className="text-2xl font-bold text-[#F9C74F] mb-6 text-center">
            Education
          </h2>
          {Object.entries(groupedEducation).map(([institution,degrees],idx) => (
            <div key={institution} className="bg-gray-900 rounded-xl border border-gray-700 shadow-2xl p-6 mb-8">
              <div className="flex items-center gap-4 mb-2">
                <Image
                  src={degrees[0].logoUrl}
                  alt={`${institution} logo`}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-md object-contain bg-white"
                />
                <div>
                  <div className="font-bold text-lg text-white">{institution}</div>
                  <div className="text-sm text-gray-400">{degrees[0].location}</div>
                </div>
              </div>
              <div className="pl-2 border-l border-gray-600">
                {degrees.map((degree,i) => (
                  <div key={degree.title + degree.date} className="mb-6">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-base text-[#F9C74F]">{degree.title}</span>
                      <span className="text-xs text-gray-400">{degree.date}</span>
                    </div>
                    <div className="text-sm text-gray-300 mt-1 mb-2">{degree.description}</div>
                    {degree.skills && (
                      <div className="flex flex-wrap gap-2 mt-1">
                        {degree.skills.map((skill,idx) => (
                          <span key={idx} className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600">
                            {skill}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              {/* {idx < Object.keys(groupedEducation).length - 1 && (
                <hr className="my-4 border-gray-700" />
              )} */}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}



// ==============================================================================================================

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
//         <ol className="relative border-s border-gray-100 dark:border-gray-700">
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
//         </ol>
//       </div>

//       {/* Desktop View - Split Timeline */}
//       <div className="hidden lg:flex gap-8 mt-4 mx-5">
//         {/* Work Experience Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#50D6A0] mb-6 text-center">
//             Work Experience
//           </h2>
//           <ol className="relative border-s border-[#50D6A0]">
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
//           </ol>
//         </div>

//         {/* Education Section */}
//         <div className="flex-1">
//           <h2 className="text-2xl font-bold text-[#F9C74F] mb-6 text-center">
//             Education
//           </h2>
//           <ol className="relative border-s border-[#F9C74F]">
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
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// }
