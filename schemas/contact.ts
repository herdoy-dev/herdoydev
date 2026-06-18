import { z } from "zod";
import { budgetOptions } from "@/constants/content";
import { services } from "@/constants/services";

const serviceTitles = services.map((s) => s.title) as [string, ...string[]];

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Please enter your name")
    .max(80, "That name is a little too long"),
  email: z.string().email("Enter a valid email address"),
  company: z
    .string()
    .max(120, "Company name is too long")
    .optional()
    .or(z.literal("")),
  budget: z.enum(budgetOptions, {
    message: "Select a project budget",
  }),
  service: z.enum(serviceTitles, {
    message: "Select a service",
  }),
  message: z
    .string()
    .min(10, "Tell me a bit more — at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message?: string;
  errors?: Partial<Record<keyof ContactInput, string>>;
};
