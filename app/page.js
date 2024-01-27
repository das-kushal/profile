import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";

import Link from "next/link";

import { GoChevronUp } from "react-icons/go";

export default function Home() {
  return (
    <div className="flex-col justify-center items-center mx-auto max-w-[1200px]">
      <Landing id="top" />
      <br />
      <About />
      <br />
      <WorkExperience />
      <br />
      <Skills />
      <br />
      <Projects />
      <br />
      <Contact id="contact" />
      <Footer />

      {/* <div className="relative"> */}
      <Link href="#top" className="fixed bottom-2 right-2">
        <GoChevronUp className="bg-black text-red-500 text-4xl opacity-40 hover:opacity-100" />
      </Link>
      {/* </div> */}
    </div>
  );
}
