import * as z from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .nonempty("Full Name is required")
      .min(5, "Name must have minimum 5 characters"),
    email: z
      .string()
      .nonempty("Email is required")
      .email("Invalid Email Address"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8, "Password must be at least 8 characters long")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    phone: z
      .string()
      .nonempty("Phone is required")
      .min(8, "Phone must be at least 10 characters long")
      .regex(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid Phone Number"
      ),
    cPassword: z.string().nonempty("Confirm Password is required"),
    role: z.enum(["student", "teacher"], {
      required_error: "Role is required",
    }),
    grade: z.string().optional(),
    school: z.string().optional(),
    subject: z.string().optional(),
  })
  .refine((data) => data.password === data.cPassword, {
    message: "Passwords do not match",
    path: ["cPassword"],
  })
  .refine(
    (data) =>
      (data.role === "student" && data.grade && data.school) ||
      (data.role === "teacher" && data.subject && data.school),
    {
      message: "Please fill all required fields for your role",
      path: ["role"],
    }
  );
