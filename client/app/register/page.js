"use client";
import Footer from "@/components/layout/Footer/Footer";
import NavBar from "@/components/layout/NavBar/NavBar";
import Form from "@/components/ui/Form";
import { registerSchema } from "@/schemas/registerSchema";
import React, { useState, useMemo } from "react";

const RegisterPage = () => {
  const [role, setRole] = useState("student");

  // Base fields for all users
  const baseFields = [
    {
      name: "fullName",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "Enter your email address",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter a secure password",
    },
    {
      name: "cPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
    },
    {
      name: "role",
      label: "Role",
      type: "select",
      options: ["student", "teacher"],
    },
  ];

  // Extra fields for student
  const studentFields = [
    {
      name: "grade",
      label: "Grade / Level",
      type: "select",
      options: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
      ],
    },
    {
      name: "school",
      label: "School / University",
      type: "text",
      placeholder: "Enter your school or university name",
    },
  ];

  // Extra fields for teacher
  const teacherFields = [
    {
      name: "subject",
      label: "Subject Expertise",
      type: "select",
      options: [
        "Mathematics",
        "Science",
        "Combined Science",
        "English Language",
        "Sinhala",
        "Tamil",
        "History",
        "Geography",
        "Citizenship Education",
        "Religion & Ethics",
        "Physics",
        "Chemistry",
        "Biology",
        "Commerce",
        "Accounting",
        "Business Studies",
        "Economics",
        "Political Science",
        "Information Technology (IT)",
        "Information and Communication Technology (ICT)",
        "Agriculture",
        "Buddhism",
        "Hinduism",
        "Christianity",
        "Islam",
        "Art",
        "Music",
        "Drama",
        "Home Science",
        "Design & Technology",
        "Health & Physical Education",
        "French",
        "German",
        "Japanese",
        "Chinese",
        "Technical Drawing",
        "Environmental Science",
      ],
    },

    {
      name: "school",
      label: "School / University",
      type: "text",
      placeholder: "Enter your school or university name",
    },
  ];

  //  extra field
  const phoneField = {
    name: "phone",
    label: "Phone Number",
    type: "tel",
    placeholder: "Enter your phone number",
  };

  const fields = useMemo(() => {
    if (role === "student")
      return [...baseFields, ...studentFields, phoneField];
    if (role === "teacher")
      return [...baseFields, ...teacherFields, phoneField];
    return [...baseFields, phoneField];
  }, [role]);

  const handleRegister = (data) => {
    console.log("Register Data:", data);
    alert("Registration Success!");
  };

  const handleFieldChange = (name, value) => {
    if (name === "role") {
      setRole(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex flex-1 items-center justify-center px-4 mt-5 mb-15">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-center mb-2">Register Now!</h2>
          <p className="text-center text-gray-600 mb-6">
            Register to continue your learning journey.
          </p>

          <Form
            fields={fields}
            buttonText="Register Now"
            onSubmit={handleRegister}
            onChange={handleFieldChange}
            validationSchema={registerSchema}
          />

          <div className="mt-6 text-center text-md text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login Now here
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterPage;
