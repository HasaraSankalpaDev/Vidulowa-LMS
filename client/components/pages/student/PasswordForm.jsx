"use client";
import React from "react";
import FormInput from "@/components/ui/FormInput";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { passwordSchema } from "@/schemas/passwordSchema ";

export default function PasswordForm() {
  // Define initial form data (empty for passwords)
  const defaultValues = {
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };

  // Initialize useForm with defaultValues
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordSchema),
    defaultValues,
    mode: "onBlue", // Validate in real-time
  });

  // Handle form submission
  const onSubmit = (data) => {
    console.log("Password updated ✅", data);
    // TODO: Call your API to update the password
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Change Password</h2>

      <div className="space-y-6">
        <FormInput
          label="Current Password"
          id="currentPassword"
          type="password"
          placeholder="Enter current password"
          {...register("currentPassword")}
          error={errors.currentPassword?.message}
        />
        <FormInput
          label="New Password"
          id="newPassword"
          type="password"
          placeholder="Enter new password"
          {...register("newPassword")}
          error={errors.newPassword?.message}
        />
        <FormInput
          label="Confirm New Password"
          id="confirmPassword"
          type="password"
          placeholder="Confirm new password"
          {...register("confirmPassword")}
          error={errors.confirmPassword?.message}
        />
      </div>

      <div className="mt-6 text-right">
        <button
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md hover:bg-primary/90 transition-colors"
        >
          Change Password
        </button>
      </div>
    </form>
  );
}
