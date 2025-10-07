import * as z from "zod";

export const registerSchema = z
  .object({
    userType: z.enum(["student", "teacher"]),
    fullName: z.string().min(2, "Full name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string().min(1, "Please confirm your password"),
    phone: z.string().optional(),
    grade: z.string().optional(),
    school: z.string().min(1, "School is required"),
    subject: z.string().optional(),
  })
  .refine(
    (data) => {
      if (data.userType === "student") {
        return !!data.grade && data.grade.trim() !== "";
      }
      return true;
    },
    {
      message: "Grade is required for students",
      path: ["grade"],
    }
  )
  .refine(
    (data) => {
      if (data.userType === "teacher") {
        return !!data.subject && data.subject.trim() !== "";
      }
      return true;
    },
    {
      message: "Subject is required for teachers",
      path: ["subject"],
    }
  )
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });
