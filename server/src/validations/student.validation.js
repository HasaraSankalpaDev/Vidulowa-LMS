// src/validations/student.validation.js
import * as z from "zod";

export const registerSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .optional(),
  grade: z.string().min(1, "Grade is required"),
  school: z.string().min(1, "School is required"),
  subject: z.string().min(1, "Subject is required").optional(),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
