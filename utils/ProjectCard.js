// // import { FaExternalLinkAlt } from "react-icons/fa";
// // // import ReactMarkdown from "react-markdown";
// // export default function ProjectCard({ name, desc, skills, githubLink }) {
// //   return (
// //     <div className=" group flex flex-col overflow-hidden  w-full h-full p-5  mb-4  outline-none bg-gray-900 shadow-2xl border border-gray-700 rounded-md hover:border-red-500 cursor-pointer">
// //       <div className="flex-1 justify-center items-center">
// //         {/* <div className="flex flex-col"> */}
// //         {/* <div className="mb-4"> */}
// //         <h2 className="sm:text-xl font-bold mt-2 text-yellow-300">{name}</h2>
// //         {/* </div> */}

// //         <p
// //           className="py-4 leading-relaxed text-[#B0B2B4] group-hover:text-white text-md "
// //           //   dangerouslySetInnerHTML={{ __html: desc }}
// //         >
// //           {desc}
// //         </p>
// //         {/* <ReactMarkdown>{desc}</ReactMarkdown> */}

// //         <div className="flex mt-4 gap-3 flex-wrap">
// //           {skills.map((skill, index) => (
// //             <button
// //               key={index}
// //               className="text-[#4EA642] bg-gray-800 hover:bg-gray-700  sm:p-2 p-1 text-sm sm:text-md shadow-xl rounded-md"
// //             >
// //               {skill}
// //             </button>
// //           ))}
// //         </div>
// //         {/* </div> */}
// //       </div>

// //       <div className="mt-4">
// //         <a
// //           href={githubLink}
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="  text-[#B0B2B4] hover:text-white hover:underline"
// //         >
// //           Github Link <FaExternalLinkAlt className="inline-block ml-1" />
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }

// "use client";
// import { FaExternalLinkAlt } from "react-icons/fa";
// import Image from "next/image";
// import { useState } from "react";
// import Button from "./Button";

// export default function ProjectCard({
//   name,
//   desc,
//   skills,
//   githubLink,
//   imgUrl,
//   type,
//   reportUrl,
//   presentationUrl,
// }) {
//   const [isModalOpen,setIsModalOpen] = useState(false);
//   const [isReportOpen,setIsReportOpen] = useState(false);
//   const [isPresentationOpen,setIsPresentationOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   const openReport = () => setIsReportOpen(true);
//   const closeReport = () => setIsReportOpen(false);

//   const openPresentation = () => setIsPresentationOpen(true);
//   const closePresentation = () => setIsPresentationOpen(false);
//   return (
//     <>
//       <div className="flex  flex-col sm:flex-row sm:justify-center sm:items-center overflow-hidden w-full h-full  mb-4 outline-none bg-gray-900 shadow-2xl border border-gray-700 rounded-xl hover:border-red-500 cursor-pointer">
//         <div className="relative max-h-64 overflow-hidden flex-1  p-0 m-0 h-64  ">
//           <Image
//             src={imgUrl}
//             alt={name}
//             width={800}
//             height={300}
//             className="h-48 object-cover "
//             onClick={openModal}
//           />
//         </div>
//         <div className="flex-2 flex flex-col justify-center items-start sm:p-4 p-5 ">
//           <h2 className="sm:text-xl font-bold mt-2 text-yellow-300">{name}</h2>
//           <p className="py-4 leading-relaxed text-[#B0B2B4] group-hover:text-white text-md">
//             {desc}
//           </p>
//           <div className="flex mt-4 gap-3 flex-wrap">
//             {skills.map((skill,index) => (
//               <button
//                 key={index}
//                 className="text-[#4EA642] bg-gray-800 hover:bg-gray-700 sm:p-2 p-1 text-sm sm:text-md shadow-xl rounded-md"
//               >
//                 {skill}
//               </button>
//             ))}
//           </div>
//           <div className="flex w-full justify-start items-center sm:gap-10 gap-4">
//             <div className="mt-4">
//               <a
//                 href={githubLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-[#B0B2B4] hover:text-white hover:underline"
//               >
//                 Github Link <FaExternalLinkAlt className="inline-block ml-1" />
//               </a>
//             </div>
//             {type === "finalYear" && (
//               <div className="mt-4">
//                 <Button onClick={openReport}>Report</Button>
//               </div>
//             )}
//             {type === "finalYear" && (
//               <div className="mt-4">
//                 <Button onClick={openPresentation}>Presentation</Button>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>


//       {isModalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
//           onClick={closeModal}
//         >
//           <div
//             className="relative bg-gray-800 rounded-lg p-1"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* <button
//               className="absolute top-2 right-2 text-black"
//               onClick={closeModal}
//             >
//               &times;
//             </button> */}
//             <Image
//               src={imgUrl}
//               alt={name}
//               width={900}
//               height={800}
//               className="w-full h-auto object-cover"
//             />
//           </div>
//         </div>
//       )}

//       {isReportOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
//           onClick={closeReport}
//         >
//           <div
//             className="relative bg-gray-800 rounded-lg p-1 w-full max-w-4xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* <button
//               className="absolute top-2 right-2 text-white"
//               onClick={closeReport}
//             >
//               &times;
//             </button> */}
//             <iframe src={reportUrl} className="w-full h-[90vh]" />
//           </div>
//         </div>
//       )}
//       {isPresentationOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
//           onClick={closePresentation}
//         >
//           <div
//             className="relative bg-gray-800 rounded-lg p-1 w-full max-w-4xl"
//             onClick={(e) => e.stopPropagation()}
//           >
//             {/* <button
//               className="absolute top-2 right-2 text-white"
//               onClick={closePresentation}
//             >
//               &times;
//             </button> */}
//             <iframe src={presentationUrl} className="w-full h-[90vh]" />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// "use client";
// import { FaExternalLinkAlt,FaGithub,FaFileAlt } from "react-icons/fa";
// import { MdSlideshow } from "react-icons/md"; // Replace FaPresentation
// import Image from "next/image";
// import { useState } from "react";

// export default function ProjectCard({
//   name,
//   desc,
//   skills,
//   githubLink,
//   imgUrl,
//   type,
//   reportUrl,
//   presentationUrl,
// }) {
//   const [isModalOpen,setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <>
//       <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 mb-4 sm:m-0 shadow-lg cursor-pointer">
//         {/* Project Image */}
//         <div className="relative h-48 overflow-hidden" onClick={openModal}>
//           <Image
//             src={imgUrl}
//             alt={name}
//             fill
//             className="object-cover group-hover:scale-105 transition-transform duration-300"
//           />

//           {/* Project type badge */}
//           {type && (
//             <div className="absolute top-3 left-3 z-10">
//               <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-900/90 backdrop-blur-sm text-yellow-300 border border-gray-600">
//                 {type === "finalYear" ? "Final Year" : "Project"}
//               </span>
//             </div>
//           )}
//         </div>

//         {/* Content Section */}
//         <div className="p-4">
//           <h3 className="text-lg font-bold text-yellow-300 mb-2 line-clamp-2">{name}</h3>

//           <p className="text-sm text-gray-300 mb-4 line-clamp-3 leading-relaxed">
//             {desc}
//           </p>

//           {/* Skills/Tech Stack */}
//           <div className="flex flex-wrap gap-2 mb-4">
//             {skills.map((skill,index) => (
//               <span
//                 key={index}
//                 className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600"
//               >
//                 {skill}
//               </span>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div className="flex items-center justify-between">
//             {/* GitHub Link */}
//             <a
//               href={githubLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
//             >
//               <FaGithub className="text-sm" />
//               <span>Code</span>
//             </a>

//             {/* Final Year Project Buttons */}
//             <div className="flex items-center gap-2">
//               {type === "finalYear" && reportUrl && (
//                 <a
//                   href={reportUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg text-xs transition-colors"
//                 >
//                   <FaFileAlt className="text-xs" />
//                   <span>Report</span>
//                 </a>
//               )}

//               {type === "finalYear" && presentationUrl && (
//                 <a
//                   href={presentationUrl}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-lg text-xs transition-colors"
//                 >
//                   <MdSlideshow className="text-xs" /> {/* Replaced FaPresentation */}
//                   <span>Slides</span>
//                 </a>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Image Modal */}
//       {typeof window !== "undefined" && isModalOpen && (
//         <div
//           className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
//           onClick={closeModal}
//         >
//           <div
//             className="relative bg-gray-800 rounded-lg p-1 max-w-4xl max-h-[90vh] overflow-hidden"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <Image
//               src={imgUrl}
//               alt={name}
//               width={900}
//               height={600}
//               className="w-full h-auto object-contain"
//             />
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

"use client";
import { FaExternalLinkAlt,FaGithub,FaFileAlt } from "react-icons/fa";
import { MdSlideshow } from "react-icons/md"; // Replace FaPresentation
import Image from "next/image";
import { useState,useEffect,useRef } from "react";

export default function ProjectCard({
  name,
  desc,
  skills,
  githubLink,
  imgUrl,
  type,
  reportUrl,
  presentationUrl,
}) {
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [isExpanded,setIsExpanded] = useState(false);
  const [isClamped,setIsClamped] = useState(false);
  const textRef = useRef(null);

  const toggleExpand = () => setIsExpanded(!isExpanded);

  useEffect(() => {
    if (textRef.current) {
      const isOverflowing =
        textRef.current.scrollHeight > textRef.current.clientHeight;
      setIsClamped(isOverflowing);
    }
  },[desc]);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-700 hover:border-red-500 mb-4 sm:m-2 shadow-lg cursor-pointer flex flex-col sm:flex-row w-full ">
        {/* Project Image */}
        <div className="relative h-48 sm:h-auto sm:w-1/3 overflow-hidden" onClick={openModal}>
          <Image
            src={imgUrl}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />

          {/* Project type badge */}
          {type && (
            <div className="absolute top-3 left-3 z-10">
              <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-900/90 backdrop-blur-sm text-yellow-300 border border-gray-600">
                {type === "finalYear" ? "Final Year" : "Project"}
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-4 sm:w-2/3">
          <h3 className="text-lg font-bold text-yellow-300 mb-2 line-clamp-2">{name}</h3>
          <div className="text-sm text-gray-300 mb-4 ">
            <p
              ref={textRef}
              className={`${isExpanded ? "" : "line-clamp-3"} flex-1`}
            >
              {desc}
            </p>
            {isClamped && (
              <button
                onClick={toggleExpand}
                className="text-blue-500 hover:underline text-sm"
              >
                {isExpanded ? "Read Less" : "Read More"}
              </button>
            )}
          </div>


          {/* Skills/Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {skills.map((skill,index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-gray-800 text-green-400 rounded-md border border-gray-600"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between">
            {/* GitHub Link */}
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <FaGithub className="text-sm" />
              <span>Code</span>
            </a>

            {/* Final Year Project Buttons */}
            <div className="flex items-center gap-2">
              {type === "finalYear" && reportUrl && (
                <a
                  href={reportUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded-lg text-xs transition-colors"
                >
                  <FaFileAlt className="text-xs" />
                  <span>Report</span>
                </a>
              )}

              {type === "finalYear" && presentationUrl && (
                <a
                  href={presentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 bg-purple-600 hover:bg-purple-700 text-white px-2 py-1 rounded-lg text-xs transition-colors"
                >
                  <MdSlideshow className="text-xs" />
                  <span>Slides</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {typeof window !== "undefined" && isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
          onClick={closeModal}
        >
          <div
            className="relative bg-gray-800 rounded-lg p-1 max-w-4xl max-h-[90vh] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imgUrl}
              alt={name}
              width={900}
              height={600}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
}