"use client";
import React, { useState, useMemo } from "react";
import { toast, Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import NavBar from "@/components/layout/NavBar/NavBar";
import Footer from "@/components/layout/Footer/Footer";
import Form from "@/components/ui/Form";
import { registerSchema } from "@/schemas/registerSchema";
import {
  baseFields,
  studentFields,
  teacherFields,
  phoneField,
} from "@/data/RegisterData";
import API from "@/utils/api";

const RegisterPage = () => {
  const [role, setRole] = useState("student");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fields = useMemo(() => {
    return role === "student"
      ? [...baseFields, ...studentFields, phoneField]
      : [...baseFields, ...teacherFields, phoneField];
  }, [role]);

  const handleRegister = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Registering...");

    try {
      const endpoint =
        data.role === "student" ? "students/register" : "teachers/register";
      const response = await API.post(endpoint, data);

      toast.dismiss(toastId);
      toast.success("Registration successful! Redirecting...");

      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      toast.dismiss(toastId);

      // Email exists error
      if (
        err.response?.status === 409 ||
        err.response?.data?.message?.includes("already exists")
      ) {
        toast.error("Email already registered. Please use a different email.");
        return;
      }

      // Validation errors from backend (Zod)
      if (err.response?.data?.errors) {
        err.response.data.errors.forEach((e) => toast.error(e.message));
        return;
      }

      // Network errors
      if (!err.response) {
        toast.error("Network error. Please check your connection.");
        return;
      }

      // Server errors
      if (err.response?.status >= 500) {
        toast.error("Server error. Please try again later.");
        return;
      }

      // Default error
      toast.error(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleFieldChange = (name, value) => {
    if (name === "role") setRole(value);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Register Now!</h2>
          <p className="text-center text-gray-600 mb-6">
            Register to continue your learning journey.
          </p>

          <Form
            fields={fields}
            buttonText={loading ? "Registering..." : "Register Now"}
            onSubmit={handleRegister}
            onChange={handleFieldChange}
            validationSchema={registerSchema}
            disabled={loading}
          />

          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-500 hover:underline">
              Login Here
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <Toaster position="top-right" />
    </div>
  );
};

export default RegisterPage;
