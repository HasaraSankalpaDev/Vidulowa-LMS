import * as z from "zod";

export const contactSchema = z.object({
  username: z
    .string()
    .nonempty("Name is required")
    .min(2, "Name must be at least 2 characters"),

  email: z
    .string()
    .nonempty("Email is required")
    .email("Invalid Email Address"),

  subject: z
    .string()
    .nonempty("Subject is required")
    .min(3, "Subject must be at least 3 characters"),

  message: z
    .string()
    .nonempty("Message is required")
    .min(10, "Message must be at least 10 characters"),
});
