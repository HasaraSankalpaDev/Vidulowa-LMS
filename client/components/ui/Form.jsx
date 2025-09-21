// components/ui/Form.jsx
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
  mode = "onBlur",
}) => {
  const {
    register,
    handleSubmit,
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

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {fields.map((field) => {
        const showThisError = field.name === firstErrorName;
        const fieldHasAnyError = !!errors[field.name];

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
                className={`mt-1 block w-full rounded-md border border-blue-100 bg-[#fcfdff] focus:border-blue-300 px-4 py-3 focus:outline-none `}
                aria-invalid={fieldHasAnyError}
              />
            ) : (
              <input
                id={field.name}
                {...register(field.name)}
                type={field.type || "text"}
                placeholder={field.placeholder || ""}
                className="mt-1 block w-full rounded-md border border-blue-100 bg-[#fcfdff] focus:border-blue-300 px-4 py-3 focus:outline-none"
                aria-invalid={fieldHasAnyError}
              />
            )}

            {showThisError && (
              <div className="mt-2 flex items-center gap-1 text-red-600">
                <MdError className="w-5 h-" />
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
