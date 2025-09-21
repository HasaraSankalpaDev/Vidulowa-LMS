import React from "react";

const BtnClassBlue = ({ content, disabled, href }) => {
  return (
    <a
      href={href}
      disabled={disabled}
      className={`px-5 py-2 rounded-md font-semibold text-sm transition duration-400
        ${
          disabled
            ? "bg-gray-400 text-gray-200 cursor-not-allowed"
            : "bg-blue-500 text-white hover:bg-blue-600 cursor-pointer"
        }`}
    >
      {content}
    </a>
  );
};

export default BtnClassBlue;
