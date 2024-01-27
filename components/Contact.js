import Heading from "./Heading";
import contactImg from "@/public/images/contact.svg";
import ContactForm from "@/utils/ContactForm";
import Image from "next/image";

export default function Contact({ id }) {
  return (
    <>
      <Heading title="Contact Me" />
      <div className="flex justify-around items-center m-4 pt-5" id={id}>
        <div className="hidden md:flex md:w-full mr-3">
          <Image
            src={contactImg}
            alt="image of me "
            width={600}
            height={50}
            // className="shadow-md"
          />
        </div>
        <div className="flex-col p-0 w-full justify-end items-center  rounded-md ">
          <ContactForm />
        </div>
      </div>
    </>
  );
}
