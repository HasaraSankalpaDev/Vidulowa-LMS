"use client";
import Footer from "@/components/layout/Footer/Footer";
import NavBar from "@/components/layout/NavBar/NavBar";
import Form from "@/components/ui/Form";
import { loginSchema } from "@/schemas/loginSchema";
import React from "react";

const LoginPage = () => {
  const fields = [
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
  ];

  const handleLogin = (data) => {
    console.log("Login Data:", data);
    alert("Success");
  };

  return (
    <div className="min-h-screen flex flex-col ">
      {/* Navbar */}
      <NavBar />

      {/* Centered login form */}
      <main className="flex flex-1 items-center justify-center px-4 mt-20 mb-20">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-6">
            Login to continue your learning journey.
          </p>

          {/* Form component */}
          <Form
            fields={fields}
            buttonText="Login Now"
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          />

          <div className="mt-6 text-center text-md text-gray-600">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
