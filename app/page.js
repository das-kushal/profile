// // import About from "@/components/About";
// // import Contact from "@/components/Contact";
// // import Footer from "@/components/Footer";
// // import Landing from "@/components/Landing";
// // import Projects from "@/components/Projects";
// // import Skills from "@/components/Skills";
// // import WorkExperience from "@/components/WorkExperience";

// // import Link from "next/link";

// // import { GoChevronUp } from "react-icons/go";

// // export default function Home() {
// //   return (
// //     <div className="flex-col justify-center items-center mx-auto max-w-[1200px]">
// //       <Landing id="top" />
// //       <br />
// //       <About />
// //       <br />
// //       <WorkExperience />
// //       <br />
// //       <Skills />
// //       <br />
// //       <Projects />
// //       <br />
// //       <Contact id="contact" />
// //       <Footer />

// //       {/* <div className="relative"> */}
// //       <Link href="#top" className="fixed bottom-2 right-2">
// //         <GoChevronUp className="bg-black text-red-500 text-4xl opacity-40 hover:opacity-100" />
// //       </Link>
// //       {/* </div> */}
// //     </div>
// //   );
// // }

// import About from "@/components/About";
// import Contact from "@/components/Contact";
// import Footer from "@/components/Footer";
// import Landing from "@/components/Landing";
// import Projects from "@/components/Projects";
// import Skills from "@/components/Skills";
// import WorkExperience from "@/components/WorkExperience";
// import Navbar from "@/components/Navbar";

// import Link from "next/link";
// import { GoChevronUp } from "react-icons/go";

// export default function Home() {
//   return (
//     <>
//       <Navbar />
//       <div className="flex-col justify-center items-center mx-auto max-w-[1200px] pt-20">
//         <section id="top">
//           <Landing />
//         </section>
//         <br />
//         <section id="about">
//           <About />
//         </section>
//         <br />
//         <section id="experience">
//           <WorkExperience />
//         </section>
//         <br />
//         <section id="skills">
//           <Skills />
//         </section>
//         <br />
//         <section id="projects">
//           <Projects />
//         </section>
//         <br />
//         <section id="contact">
//           <Contact />
//         </section>
//         <Footer />

//         <Link href="#top" className="fixed bottom-4 right-4 z-40">
//           <GoChevronUp className="bg-gray-900/80 backdrop-blur-sm text-red-500 text-4xl p-2 rounded-full border border-gray-700 opacity-70 hover:opacity-100 hover:bg-gray-800 transition-all duration-300" />
//         </Link>
//       </div>
//     </>
//   );
// }

import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Navbar from "@/components/Navbar";

import Link from "next/link";
import { GoChevronUp } from "react-icons/go";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Add padding-top to account for fixed navbar */}
      <div className="flex-col justify-center items-center mx-auto max-w-[1200px] md:pt-24">
        <section id="top" className="scroll-mt-20">
          <Landing />
        </section>
        <br />
        <section id="about" className="scroll-mt-20">
          <About />
        </section>
        <br />
        <section id="experience" className="scroll-mt-20">
          <WorkExperience />
        </section>
        <br />
        <section id="skills" className="scroll-mt-20">
          <Skills />
        </section>
        <br />
        <section id="projects" className="scroll-mt-20">
          <Projects />
        </section>
        <br />
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
        <Footer />

        <Link href="#top" className="fixed bottom-4 right-4 z-40">
          <GoChevronUp className="bg-gray-900/80 backdrop-blur-sm text-red-500 text-4xl p-2 rounded-full border border-gray-700 opacity-70 hover:opacity-100 hover:bg-gray-800 transition-all duration-300" />
        </Link>
      </div>
    </>
  );
}
