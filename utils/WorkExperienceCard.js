// export default function WorkExperienceCard({
//   title,
//   place,
//   location,
//   content,
//   mydate,
//   icon,
// }) {
//   const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";
//   return (
//     <>
//       <div
//         // className="bg-gray-900 border-2 border-gray-700 rounded-lg p-4  h-[100%]   hover:border-red-500 cursor-pointer shadow-2xl"

//         className="group relative bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-red-500 cursor-pointer shadow-xl h-[100%] mb-2 flex flex-col justify-between "
//       >
//         <div>
//           <h3 className={`${iconColor} text-lg font-bold mb-2 `}>{title}</h3>
//           <p className="text-gray-500 mb-2">
//             <strong>{place}</strong> - {location}
//           </p>
//           <p className="text-[#B0B2B4] mb-5  sm:text-lg group-hover:text-white">
//             {content}
//           </p>
//           <div className="absolute right-2 bottom-2">
//             <p className="text-sm text-gray-500 ">{mydate}</p>
//             {/* Add any additional elements here, such as buttons, links, etc. */}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function WorkExperienceCard({
  title,
  place,
  location,
  content,
  mydate,
  icon,
}) {
  const iconColor = icon === "work" ? "text-[#50D6A0]" : "text-[#F9C74F]";
  // const iconStyle = icon === "work" ? "💼" : "";
  return (
    <ol className="relative border-l border-gray-200 dark:border-gray-700">
      <div className="bg-gray-900 border border-gray-700 rounded-lg p-4 hover:border-red-500 cursor-pointer shadow-xl h-[100%] mb-2 flex flex-col justify-between  ml-6">
        <span className="absolute flex items-center justify-center w-4 h-4  rounded-full -left-2   ring-white dark:ring-gray-900 bg-[#ec0000d0]"></span>
        <h3
          className={`flex items-center mb-1 text-lg font-semibold ${iconColor}`}
        >
          {title}
        </h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
          {mydate}
        </time>
        <p className="text-base font-normal text-gray-500 dark:text-gray-400 mb-2">
          <strong>{place}</strong> - {location}
        </p>
        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
          {content}
        </p>
      </div>
    </ol>
  );
}
