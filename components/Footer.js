import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center mb-4 text-[#afb0b1] text-semibold">
        <p className="text-sm ">Created by Kushal with &hearts;</p>
        <p className="text-sm ">
          &nbsp; All Rights Reserved &copy; {currentYear}
        </p>
      </div>
    </>
  );
}
