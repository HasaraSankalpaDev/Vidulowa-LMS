// src/validations/teacher.validation.js
import * as z from "zod";

export const registerTeacherSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
  phone: z.string().optional(),
  school: z.string().min(1, "School is required"),
  subject: z.string().min(1, "Subject is required"),
});

export const loginTeacherSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required"),
});
