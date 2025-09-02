import Image from "next/image";
import myImg from "@/public/images/me.jpg";
import landingImg from "@/public/images/landing.svg";
import Button from "../utils/Button";
import Link from "next/link";

import socialLinks from "@/constants/social";
import SocialIcon from "../utils/SocialIcon";

import { FaExternalLinkAlt } from "react-icons/fa";

export default function Landing({ id }) {
  return (
    <>
      <div id={id} className="flex justify-center items-center mt-10 pt-5">
        <div
          className="flex-col  w-full justify-center items-center 

         "
        >
          <div className="items-center mb-2 flex justify-center">
            <div className="relative w-[200px] h-[200px] flex justify-center items-center">
              <svg
                width="200"
                height="200"
                viewBox="0 0 200 200"
                className="absolute inset-0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gradient for border path */}

                  {/* Clip path for the image */}
                  <clipPath id="dynamic-blob-clip">
                    <path
                      d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                    130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                    97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                    0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                      style={{
                        transition: "0.3s",
                      }}
                      scale={0.3}
                    />
                  </clipPath>
                </defs>

                {/* Image inside blob */}
                <image
                  href={myImg.src}
                  width="200"
                  height="200"
                  clipPath="url(#dynamic-blob-clip)"
                  preserveAspectRatio="xMidYMid slice"
                />

                {/* Blob outline animation */}
                {/* <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                  130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                  97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                  0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                  transform="translate(75 75) scale(1)"
                  fill="none"
                  stroke="url(#sw-gradient)"
                  strokeWidth="2"
                  className="animate-pulse"
                /> */}
              </svg>
            </div>

            {/* <Image
              src={myImg}
              alt="image of me "
              width={150}
              height={150}
              // border-[#ec0000d0]
              className="shadow-2xl  "
              style={{ borderRadius: "50%", overflow: "hidden" }}
            /> */}
          </div>
          <div className="flex-col items-center justify-center">
            <h1 className="text-4xl sm:text-6xl font-light text-center text-[#FAD700] hover:text-white mb-3">
              Kushal Das
            </h1>
            <h2 className="text-2xl sm:text-4xl text-center mb-2">
              <span className="text-[#ec0000d0] hover:text-white">
                Web & App Developer
              </span>
            </h2>
            <h2 className="sm:text-3xl text-xl text-center text-[#b0b2b4]">
              Software Engineer
              <span className="text-[#ec0000d0] hover:text-white">
                <br /> Wells Fargo
              </span>
            </h2>
          </div>

          {/*  add the social links here */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-5 mx-4">
            <span className="flex  w-full justify-around sm:gap-5 items-center">
              <Link
                href="https://drive.google.com/file/d/1etF3XFAILozDI_JyP1CrDWRrD48Wsef9/view"
                target="_blank"
              >
                <Button cl="text-white  sm:w-[150px] sm:text-base text-sm text-center border-gray-700  hover:cursor-pointer focus:cursor-pointer font-semibold py-2 px-4 rounded-xl shadow-2xl focus:outline-none  hover:bg-yellow-800 bg-yellow-600">
                  <span className="flex justify-center gap-2 items-center">
                    Resume <FaExternalLinkAlt className="text-xs sm:text-sm" />
                  </span>
                </Button>
              </Link>
              <Link href="#contact">
                <Button>Contact Me</Button>
              </Link>
            </span>
            <span className="flex w-full justify-around items-center sm:mt-0 mt-5">
              {socialLinks.map((socialLink) => {
                return (
                  <SocialIcon
                    key={socialLink.id}
                    href={socialLink.href}
                    target="_blank"
                    icon={socialLink.icon}
                    text={socialLink.text}
                  />
                );
              })}
            </span>
          </div>
        </div>

        <div className="hidden lg:flex lg:w-full mr-3">
          <Image
            src={landingImg}
            alt="image of me "
            width={600}
            height={50}
          // className="shadow-md"
          />
        </div>
      </div>
    </>
  );
}
