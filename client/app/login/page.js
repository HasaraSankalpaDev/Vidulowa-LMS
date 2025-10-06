"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import Form from "@/components/ui/Form";
import { loginSchema } from "@/schemas/loginSchema";
import API from "@/utils/api";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

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
      placeholder: "Enter your password",
    },
  ];

  // Manual JWT decoding function
  const decodeJWT = (token) => {
    try {
      const base64Url = token.split(".")[1];
      const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      const jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
      return JSON.parse(jsonPayload);
    } catch (error) {
      console.error("Error decoding JWT:", error);
      throw new Error("Invalid token");
    }
  };

  const handleLogin = async (data) => {
    setLoading(true);
    try {
      // Try student login first
      let res = await API.post("students/login", data).catch(async (err) => {
        if (err.response && err.response.status === 400) {
          return await API.post("teachers/login", data);
        } else {
          throw err;
        }
      });

      const token = res.data.token;
      localStorage.setItem("token", token);
      toast.success(res.data.message);

      // Decode JWT using manual function
      const decoded = decodeJWT(token);
      const role = decoded.userType || decoded.role;

      // Redirect based on role
      if (role === "student") router.push("/student/dashboard");
      else if (role === "teacher") router.push("/teacher/dashboard");
      else if (role === "admin") router.push("/admin/dashboard");
      else router.push("/");
    } catch (err) {
      console.error(err);
      if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Something went wrong. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Toaster position="top-right" reverseOrder={false} />
      <NavBar />

      <main className="flex flex-1 items-center justify-center px-4 mt-20 mb-20">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8 mb-10">
          <h2 className="text-2xl font-bold text-center mb-2">Welcome Back!</h2>
          <p className="text-center text-gray-600 mb-6">
            Login to continue your learning journey.
          </p>

          <Form
            fields={fields}
            buttonText={loading ? "Logging in..." : "Login Now"}
            validationSchema={loginSchema}
            onSubmit={handleLogin}
          />

          <div className="mt-6 text-center text-md text-gray-600">
            Don't have an account?{" "}
            <a href="/register" className="text-blue-500 hover:underline">
              Register here
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
