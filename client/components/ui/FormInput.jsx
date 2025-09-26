"use client";
import React from "react";

const FormInput = ({
  label,
  type = "text",
  id,
  error,
  placeholder,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium mb-2">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        className={`mt-1 block w-full rounded-md border border-blue-50 bg-[#fcfdff] focus:border-blue-100 px-4 py-3 focus:outline-none 
          ${
            error
              ? "border-red-500"
              : "border-blue-100 focus:border-blue-300 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
          }
          transition-colors duration-200`}
        {...props} // Spread react-hook-form props (e.g., onChange, value, onBlur)
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
