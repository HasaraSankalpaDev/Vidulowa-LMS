"use client";
import React from "react";

const AdminForm = ({
  title = "Form",
  fields = [],
  buttonText = "Submit",
  onSubmit,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white shadow rounded-lg p-6 lg:col-span-2">
        <h2 className="text-lg font-semibold mb-4">{title}</h2>
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {fields.map((field, idx) => (
              <div key={idx} className={field.fullWidth ? "md:col-span-2" : ""}>
                <label
                  className="block text-sm font-medium mb-1"
                  htmlFor={field.name}
                >
                  {field.label}
                </label>
                <input
                  id={field.name}
                  type={field.type || "text"}
                  placeholder={field.placeholder || ""}
                  defaultValue={field.defaultValue || ""}
                  className="border rounded-lg px-3 py-2 w-full focus:ring-1 focus:ring-blue-400 focus:outline-none"
                />
              </div>
            ))}
          </div>

          <div className="mt-4 text-right">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {buttonText}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminForm;
