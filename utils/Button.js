import React from "react";

export default function Button({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="text-[#B0B2B4] border sm:w-[150px] sm:text-base text-sm text-center border-gray-500 hover:border-[#EC0000] hover:text-[#ffffff] hover:cursor-pointer focus:cursor-pointer font-semibold py-2 px-4 rounded-md shadow-md focus:outline-none  "
    >
      {children}
    </button>
  );
}
