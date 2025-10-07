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
import axios from "axios";

const RegisterPage = () => {
  const [userType, setUserType] = useState("student");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const fields = useMemo(() => {
    const allFields = [
      ...baseFields,
      ...(userType === "student" ? studentFields : teacherFields),
      phoneField,
    ];

    // Update the userType field to reflect current selection
    return allFields.map((field) =>
      field.name === "userType" ? { ...field, value: userType } : field
    );
  }, [userType]);

  const handleRegister = async (data) => {
    setLoading(true);
    const toastId = toast.loading("Registering...");

    console.log("Raw form data:", data);

    try {
      // Create payload based on user type
      let finalPayload;

      if (userType === "student") {
        // Student payload - remove confirmPassword
        const { confirmPassword, ...studentPayload } = data;
        finalPayload = {
          fullName: studentPayload.fullName,
          email: studentPayload.email,
          password: studentPayload.password,
          phone: studentPayload.phone || "",
          grade: studentPayload.grade,
          school: studentPayload.school,
          userType: studentPayload.userType,
          subject: studentPayload.subject || "",
        };
      } else {
        // Teacher payload - include confirmPassword for validation
        finalPayload = {
          fullName: data.fullName,
          email: data.email,
          password: data.password,
          confirmPassword: data.confirmPassword, // Keep this for teacher validation
          phone: data.phone || "",
          school: data.school,
          userType: data.userType,
          subject: data.subject,
        };
      }

      // Clean up payload - remove empty fields
      Object.keys(finalPayload).forEach((key) => {
        if (finalPayload[key] === "" || finalPayload[key] == null) {
          delete finalPayload[key];
        }
      });

      console.log("Final payload for backend:", finalPayload);

      const response = await axios.post(
        `http://localhost:5000/api/v1/${userType}s/register`,
        finalPayload
      );

      console.log("Registration successful:", response.data);

      toast.dismiss(toastId);
      toast.success("Registration successful! Redirecting to login...");

      setTimeout(() => router.push("/login"), 1500);
    } catch (err) {
      console.error("Full register error:", err);
      console.error("Error response data:", err.response?.data);
      console.error("Error status:", err.response?.status);

      toast.dismiss(toastId);

      if (err.response?.data?.errors) {
        // Handle Zod validation errors from backend
        err.response.data.errors.forEach((error) =>
          toast.error(`${error.field}: ${error.message}`)
        );
      } else if (err.response?.data?.message) {
        toast.error(err.response.data.message);
      } else {
        toast.error("Registration failed. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };
  const handleFieldChange = (name, value) => {
    if (name === "userType") {
      setUserType(value);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <NavBar />
      <main className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-xl bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-center mb-2">Register Now!</h2>
          <p className="text-center text-gray-600 mb-6">
            Join our learning community as a {userType}.
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
