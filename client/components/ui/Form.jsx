"use client";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MdError } from "react-icons/md";

const Form = ({
  fields = [],
  buttonText = "Submit",
  onSubmit,
  validationSchema,
  mode = "onChange",
  onChange,
}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setFocus,
  } = useForm({
    resolver: validationSchema ? zodResolver(validationSchema) : undefined,
    mode,
    reValidateMode: "onChange",
  });

  const firstErrorName = fields.find((f) => errors[f.name])?.name;

  useEffect(() => {
    if (firstErrorName) setFocus(firstErrorName);
  }, [firstErrorName, setFocus]);

  // Watch all fields
  const watchedFields = watch();

  // Call onChange whenever a watched field changes
  useEffect(() => {
    if (onChange) {
      Object.entries(watchedFields).forEach(([name, value]) => {
        onChange(name, value);
      });
    }
  }, [watchedFields, onChange]);

  // Base input classes
  const getInputClasses = (fieldName) => {
    const baseClasses =
      "mt-1 block w-full rounded-md border bg-[#fcfdff] px-4 py-3 focus:outline-none";
    const isFirstError = fieldName === firstErrorName;

    if (isFirstError) {
      return `${baseClasses} border-red-500 focus:border-red-500`;
    } else {
      return `${baseClasses} border-blue-100 focus:border-blue-300`;
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)} type="submit">
      {fields.map((field) => {
        const isFirstErrorField = field.name === firstErrorName;
        const fieldHasError = !!errors[field.name];

        return (
          <div key={field.name}>
            <label htmlFor={field.name} className="block text-md font-medium">
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={field.name}
                {...register(field.name)}
                rows={field.rows || 4}
                placeholder={field.placeholder || ""}
                className={getInputClasses(field.name)}
                aria-invalid={isFirstErrorField}
              />
            ) : field.type === "select" ? (
              <select
                id={field.name}
                {...register(field.name)}
                className={getInputClasses(field.name)}
              >
                <option value="">Select {field.label}</option>
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                {...register(field.name)}
                type={field.type || "text"}
                placeholder={field.placeholder || ""}
                className={getInputClasses(field.name)}
                aria-invalid={isFirstErrorField}
              />
            )}

            {/* Only show error message for the FIRST field with error */}
            {isFirstErrorField && (
              <div className="mt-2 flex items-center gap-1 text-red-600">
                <MdError className="w-5 h-5" />
                <p role="alert" className="text-md font-medium">
                  {errors[field.name]?.message}
                </p>
              </div>
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-medium py-3 rounded-md transition"
      >
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
