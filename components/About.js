import Heading from "./Heading";

export default function About() {
  return (
    <>
      <Heading title="About.me" />
      <p className="sm:text-xl text-[#b0b2b4] mx-4 p-3 sm:p-0">
        Hello there, I am Kushal, currently a{" "}
        <span className="text-[#FAD700]">Software Engineer @ Wells Fargo</span>,
        Hyderabad. I did{" "}
        <span className="text-[#FAD700]">
          Computer Science & Engineering (with Hons.) from Jadavpur University
        </span>{" "}
        2024, I am a full stack developer with a keen interest in Data
        Structures and Algorithms and has solved 1300+ problems on Leetcode. I
        was also an{" "}
        <span className="text-[#FAD700]">Intern Analyst @ Wells Fargo</span>,
        Bangalore during the summer of 2023 where I worked on React (for
        frontend) and Flask (for backend). I like to code and listen music in my
        free time.
      </p>
    </>
  );
}
