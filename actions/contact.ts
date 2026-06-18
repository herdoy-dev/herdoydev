"use server";

import { contactSchema, type ContactFormState } from "@/schemas/contact";
import { createLead } from "@/services/leads";

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company") ?? "",
    budget: formData.get("budget"),
    service: formData.get("service"),
    message: formData.get("message"),
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    const errors: ContactFormState["errors"] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof typeof errors;
      if (key && !errors[key]) errors[key] = issue.message;
    }
    return {
      status: "error",
      message: "Please fix the highlighted fields.",
      errors,
    };
  }

  try {
    await createLead(parsed.data);
    return {
      status: "success",
      message: "Thanks! Your message is in — I'll get back to you within 24 hours.",
    };
  } catch {
    return {
      status: "error",
      message: "Something went wrong sending your message. Please email me directly.",
    };
  }
}
