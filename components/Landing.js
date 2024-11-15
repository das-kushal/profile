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
            <Image
              src={myImg}
              alt="image of me "
              width={150}
              height={150}
              className="shadow-md border-2 border-[#ec0000d0]"
              style={{ borderRadius: "50%", overflow: "hidden" }}
            />
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
              Program Associate
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
                <Button>
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

        <div className="hidden md:flex md:w-full mr-3">
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
