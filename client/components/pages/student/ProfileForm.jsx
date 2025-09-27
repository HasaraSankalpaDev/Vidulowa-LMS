"use client";
import FormInput from "@/components/ui/FormInput";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { profileSchema } from "@/schemas/profileSchema ";

export default function ProfileForm() {
  // Initial user data
  const userData = {
    fullName: "Hasara",
    email: "hlk@lk.lk",
    phoneNumber: "0702000982",
    profilePicture:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuA2sdOcbQTRbhUVPQtuzGX4f04Fty2gMumNSbSVVXC6dvJRcMaFhPgbajd58KWgSVRQ44RLZmTwic2SKeVXjmlI1EYkGVnR_j-20H3_3x_a-Mjj6kubReQgi30_xBb6gK7qj5m-W-hPf83ffVvumgKFOys3cD0q6saIIs5o-5m-QIjXEhZawmqVsvX_OZJ-UPBG5sIPx1O3dE-6-Do4Ai4969sKxHQW187aR2RblCXZ1JRUP6BYvFEQIegy9p8rM5UqyioBK3aTYS9i",
  };

  const [preview, setPreview] = useState(userData.profilePicture);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(profileSchema),
    defaultValues: userData,
  });

  const onSubmit = (data) => {
    console.log("Profile updated ✅", data);
  };

  // Handle image change and update preview
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  // Handle delete image
  const handleDeleteImage = () => {
    setPreview(""); // Or set to default avatar URL
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-card-light dark:bg-card-dark p-6 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6">Profile</h2>

      <div className="space-y-6">
        <div className="flex items-center space-x-4 mb-4">
          <div className="relative">
            <img
              src={preview || "/default-avatar.png"}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover"
            />
            <span className="absolute bottom-0 right-0 bg-blue-600 rounded-full p-1 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-white cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </span>
          </div>
          <div>
            <label className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors">
              <input
                type="file"
                accept="image/png, image/jpeg, image/gif"
                className="hidden"
                {...register("profilePicture")}
                onChange={handleImageChange}
              />
              Upload new picture
            </label>
            <button
              type="button"
              className="ml-2 bg-gray-300 cursor-pointer hover:bg-gray-400 text-black font-bold py-2 px-4 rounded-md transition-colors"
              onClick={handleDeleteImage}
            >
              Delete
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            label="Full Name"
            id="fullName"
            {...register("fullName")}
            error={errors.fullName?.message}
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
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-md transition-colors"
        >
          Update Profile
        </button>
      </div>
    </form>
  );
}
