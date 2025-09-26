"use client";
import FormInput from "@/components/ui/FormInput";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/schemas/profileSchema ";

export default function ProfileForm() {
  // Define initial user data
  const userData = {
    fullName: "Hasara",
    email: "hlk@lk.lk",
    phoneNumber: "0702000982",
  };

  // Initialize useForm with defaultValues from userData
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: userData, // Use userData directly for initial form values
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Profile updated ✅", data);
    // Optionally, perform further actions like API calls
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Full Name"
            id="fullName"
            {...register("fullName")} // Spread register to handle input binding
            error={errors.fullName?.message} // Pass validation error
          />
          <FormInput
            label="Email Address"
            id="email"
            type="email"
            {...register("email")}
            error={errors.email?.message}
          />
        </div>

        <FormInput
          label="Phone Number"
          id="phoneNumber"
          type="tel"
          {...register("phoneNumber")}
          error={errors.phoneNumber?.message}
        />
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}
