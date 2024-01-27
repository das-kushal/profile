"use client";
import React from "react";
import SocialIcon from "./SocialIcon";
import socialLinks from "@/constants/social";

import { useForm, ValidationError } from "@formspree/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xqkvqkdo");

  const notify = () => toast.success("Your message was sent successfully!!");
  const btnRef = React.useRef(null);
  const inpRef = React.useRef(null);
  const nameRef = React.useRef(null);
  const emailRef = React.useRef(null);
  if (state.succeeded) {
    inpRef.current.value = "";
    nameRef.current.value = "";
    emailRef.current.value = "";
    btnRef.current.click();
  }
  return (
    <>
      <div className=" mx-auto  sm:pr-0 sm:pl-5 px-2 rounded-md  w-full">
        <h2 className="sm:text-2xl text-lg font-semibold mb-6 text-center text-[#FAD700]">
          Let's Connect
        </h2>
        <span className="flex w-full justify-around items-center mb-4">
          {socialLinks.map((socialLink) => {
            return (
              <SocialIcon
                key={socialLink.id}
                href={socialLink.href}
                target="_blank"
                icon={socialLink.icon}
                text={""}
              />
            );
          })}
        </span>
        <form onSubmit={handleSubmit} className="text-black">
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[#fad700] text-sm font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              ref={nameRef}
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-2 border border-gray-700 bg-[#33383D] placeholder-gray-20 focus:bg-white rounded-md focus:outline-none focus:border-[#ec0000] shadow-md"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-[#fad700] text-sm font-semibold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              ref={emailRef}
              name="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border border-gray-700 bg-[#33383D] focus:bg-white  rounded-md focus:outline-none focus:border-[#ec0000] shadow-md"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-[#fad700] text-sm font-semibold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              ref={inpRef}
              placeholder="Your Message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-700 bg-[#33383D] focus:bg-white  rounded-md resize-none focus:outline-none focus:border-[#ec0000] shadow-md"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              disabled={state.submitting}
              className="text-[#B0B2B4] border sm:w-[150px]  text-center border-gray-500 hover:border-[#EC0000] hover:text-[#ffffff] hover:cursor-pointer focus:cursor-pointer font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none  "
            >
              {state.submitting ? "Submitting" : "Submit"}
            </button>
          </div>
        </form>

        <ToastContainer />
        <button className="hidden" ref={btnRef} onClick={notify}></button>
      </div>
    </>
  );
}
