import { z } from "zod";

export const passwordSchema = z
  .object({
    currentPassword: z
      .string()
      .nonempty("Current Password is required")
      .min(8, "Current password must be at least 8 characters"),
    newPassword: z
      .string()
      .nonempty("New Password is required")
      .min(8, "New password must be at least 8 characters")
      .regex(
        /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        "New password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
    confirmPassword: z
      .string()
      .nonempty("Confirm Password is required")
      .min(8, "Confirm password must be at least 8 characters"),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
