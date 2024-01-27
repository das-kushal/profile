import { FaExternalLinkAlt } from "react-icons/fa";
// import ReactMarkdown from "react-markdown";
export default function ProjectCard({ name, desc, skills, githubLink }) {
  return (
    <div className=" group flex flex-col overflow-hidden  w-full h-full p-5  mb-4  outline-none bg-gray-900 shadow-2xl border border-gray-700 rounded-md hover:border-red-500 cursor-pointer">
      <div className="flex-1 justify-center items-center">
        {/* <div className="flex flex-col"> */}
        {/* <div className="mb-4"> */}
        <h2 className="sm:text-xl font-bold mt-2 text-yellow-300">{name}</h2>
        {/* </div> */}

        <p
          className="py-4 leading-relaxed text-[#B0B2B4] group-hover:text-white text-md "
          //   dangerouslySetInnerHTML={{ __html: desc }}
        >
          {desc}
        </p>
        {/* <ReactMarkdown>{desc}</ReactMarkdown> */}

        <div className="flex mt-4 gap-3 flex-wrap">
          {skills.map((skill, index) => (
            <button
              key={index}
              className="text-[#4EA642] bg-gray-800 hover:bg-gray-700  sm:p-2 p-1 text-sm sm:text-md shadow-xl rounded-md"
            >
              {skill}
            </button>
          ))}
        </div>
        {/* </div> */}
      </div>

      <div className="mt-4">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="  text-[#B0B2B4] hover:text-white hover:underline"
        >
          Github Link <FaExternalLinkAlt className="inline-block ml-1" />
        </a>
      </div>
    </div>
  );
}
