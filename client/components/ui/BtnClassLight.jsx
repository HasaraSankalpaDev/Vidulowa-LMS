import React from "react";

const BtnClassLight = ({ content, href }) => {
  return (
    <a
      href={href}
      className="px-6 py-2 cursor-pointer  rounded-md font-semibold text-sm text-blue-600 bg-blue-50 hover:bg-blue-100 transition duration-400"
    >
      {content}
    </a>
  );
};

export default BtnClassLight;
