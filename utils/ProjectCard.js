// import { FaExternalLinkAlt } from "react-icons/fa";
// // import ReactMarkdown from "react-markdown";
// export default function ProjectCard({ name, desc, skills, githubLink }) {
//   return (
//     <div className=" group flex flex-col overflow-hidden  w-full h-full p-5  mb-4  outline-none bg-gray-900 shadow-2xl border border-gray-700 rounded-md hover:border-red-500 cursor-pointer">
//       <div className="flex-1 justify-center items-center">
//         {/* <div className="flex flex-col"> */}
//         {/* <div className="mb-4"> */}
//         <h2 className="sm:text-xl font-bold mt-2 text-yellow-300">{name}</h2>
//         {/* </div> */}

//         <p
//           className="py-4 leading-relaxed text-[#B0B2B4] group-hover:text-white text-md "
//           //   dangerouslySetInnerHTML={{ __html: desc }}
//         >
//           {desc}
//         </p>
//         {/* <ReactMarkdown>{desc}</ReactMarkdown> */}

//         <div className="flex mt-4 gap-3 flex-wrap">
//           {skills.map((skill, index) => (
//             <button
//               key={index}
//               className="text-[#4EA642] bg-gray-800 hover:bg-gray-700  sm:p-2 p-1 text-sm sm:text-md shadow-xl rounded-md"
//             >
//               {skill}
//             </button>
//           ))}
//         </div>
//         {/* </div> */}
//       </div>

//       <div className="mt-4">
//         <a
//           href={githubLink}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="  text-[#B0B2B4] hover:text-white hover:underline"
//         >
//           Github Link <FaExternalLinkAlt className="inline-block ml-1" />
//         </a>
//       </div>
//     </div>
//   );
// }

"use client";
import { FaExternalLinkAlt } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";
import Button from "./Button";

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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);
  const [isPresentationOpen, setIsPresentationOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const openReport = () => setIsReportOpen(true);
  const closeReport = () => setIsReportOpen(false);

  const openPresentation = () => setIsPresentationOpen(true);
  const closePresentation = () => setIsPresentationOpen(false);
  return (
    <>
      <div className="group flex flex-col sm:flex-row sm:justify-center sm:items-center overflow-hidden w-full h-full p-5 sm:p-2 mb-4 outline-none bg-gray-900 shadow-2xl border border-gray-700 rounded-md hover:border-red-500 cursor-pointer">
        <div className="sm:w-1/3 w-full mb-4 sm:mb-0 sm:mr-4 max-h-64 overflow-hidden rounded-md  p-0 ">
          <Image
            src={imgUrl}
            alt={name}
            width={800}
            height={300}
            className="w-full h-full object-contain p-0"
            onClick={openModal}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start sm:p-4">
          <h2 className="sm:text-xl font-bold mt-2 text-yellow-300">{name}</h2>
          <p className="py-4 leading-relaxed text-[#B0B2B4] group-hover:text-white text-md">
            {desc}
          </p>
          <div className="flex mt-4 gap-3 flex-wrap">
            {skills.map((skill, index) => (
              <button
                key={index}
                className="text-[#4EA642] bg-gray-800 hover:bg-gray-700 sm:p-2 p-1 text-sm sm:text-md shadow-xl rounded-md"
              >
                {skill}
              </button>
            ))}
          </div>
          <div className="flex w-full justify-start items-center sm:gap-10 gap-4">
            <div className="mt-4">
              <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#B0B2B4] hover:text-white hover:underline"
              >
                Github Link <FaExternalLinkAlt className="inline-block ml-1" />
              </a>
            </div>
            {type === "finalYear" && (
              <div className="mt-4">
                <Button onClick={openReport}>Report</Button>
              </div>
            )}
            {type === "finalYear" && (
              <div className="mt-4">
                <Button onClick={openPresentation}>Presentation</Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
          onClick={closeModal}
        >
          <div
            className="relative bg-gray-800 rounded-lg p-1"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              className="absolute top-2 right-2 text-black"
              onClick={closeModal}
            >
              &times;
            </button> */}
            <Image
              src={imgUrl}
              alt={name}
              width={900}
              height={800}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      )}

      {isReportOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
          onClick={closeReport}
        >
          <div
            className="relative bg-gray-800 rounded-lg p-1 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              className="absolute top-2 right-2 text-white"
              onClick={closeReport}
            >
              &times;
            </button> */}
            <iframe src={reportUrl} className="w-full h-[90vh]" />
          </div>
        </div>
      )}
      {isPresentationOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-2"
          onClick={closePresentation}
        >
          <div
            className="relative bg-gray-800 rounded-lg p-1 w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* <button
              className="absolute top-2 right-2 text-white"
              onClick={closePresentation}
            >
              &times;
            </button> */}
            <iframe src={presentationUrl} className="w-full h-[90vh]" />
          </div>
        </div>
      )}
    </>
  );
}
