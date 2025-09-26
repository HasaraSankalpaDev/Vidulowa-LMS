"use client";
import React from "react";

const FormCheckbox = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center justify-between">
      <span className="text-sm">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-5 w-5 rounded text-primary bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark focus:ring-primary"
      />
    </label>
  );
};

export default FormCheckbox;
