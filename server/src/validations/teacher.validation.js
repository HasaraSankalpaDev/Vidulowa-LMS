import * as z from "zod";

export const registerTeacherSchema = z
  .object({
    fullName: z.string().nonempty("Full Name is required").min(5),
    email: z.string().nonempty("Email is required").email("Invalid email"),
    password: z
      .string()
      .nonempty("Password is required")
      .min(8)
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "Password must include uppercase, lowercase, number, and special character"
      ),
    cPassword: z.string().nonempty("Confirm Password is required"),
    phone: z
      .string()
      .nonempty("Phone is required")
      .regex(
        /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/,
        "Invalid Phone Number"
      ),
    subject: z.string().nonempty("Subject is required"),
    school: z.string().nonempty("School is required"),
  })
  .refine((data) => data.password === data.cPassword, {
    message: "Passwords do not match",
    path: ["cPassword"],
  });

export const loginTeacherSchema = z.object({
  email: z.string().nonempty("Email is required").email("Invalid email"),
  password: z.string().nonempty("Password is required").min(8),
});
