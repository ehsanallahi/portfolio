import { z } from "zod";

/** Shared by the client form and the API route, so validation never drifts. */
export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Please enter your name")
    .max(80, "Name must be 80 characters or fewer"),
  email: z
    .string()
    .trim()
    .max(254, "Email is too long")
    .pipe(z.email("Please enter a valid email address")),
  subject: z
    .string()
    .trim()
    .min(3, "Please add a short subject")
    .max(120, "Subject must be 120 characters or fewer"),
  message: z
    .string()
    .trim()
    .min(20, "Please write at least 20 characters")
    .max(5000, "Message must be 5,000 characters or fewer"),
});

export type ContactInput = z.input<typeof contactSchema>;
export type ContactData = z.output<typeof contactSchema>;

