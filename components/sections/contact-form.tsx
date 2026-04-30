"use client";

import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import * as z from "zod";
import { db } from "@/firebase";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-wrapper";

type Status = "idle" | "submitting" | "success" | "error";

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters." })
    .max(80, { message: "Name must be 80 characters or fewer." }),
  email: z.email({ message: "Please enter a valid email address." }),
  subject: z
    .string()
    .trim()
    .min(3, { message: "Subject must be at least 3 characters." })
    .max(120, { message: "Subject must be 120 characters or fewer." }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters." })
    .max(2000, { message: "Message must be 2000 characters or fewer." }),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const emptyForm: ContactFormValues = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(emptyForm);
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (fieldErrors[id as keyof ContactFormValues]) {
      setFieldErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");

    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const errors: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof ContactFormValues | undefined;
        if (key && !errors[key]) errors[key] = issue.message;
      }
      setFieldErrors(errors);
      setStatus("idle");
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    try {
      await addDoc(collection(db, "contacts"), {
        ...result.data,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm(emptyForm);
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Failed to send message."
      );
    }
  };

  return (
    <section className="py-20 md:py-28" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="fade-up" className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            Contact Us
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s start a{" "}
            <span className="gradient-text">conversation</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Have a project in mind? We&apos;d love to hear about it.
          </p>
        </MotionDiv>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          <MotionDiv animation="slide-left" className="lg:col-span-3">
            <Card className="border-border/50">
              <CardContent className="p-6 md:p-8">
                <form className="space-y-5" onSubmit={handleSubmit} noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="h-11"
                        value={form.name}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.name}
                        aria-describedby={fieldErrors.name ? "name-error" : undefined}
                      />
                      {fieldErrors.name && (
                        <p id="name-error" className="mt-1.5 text-xs text-destructive">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        className="h-11"
                        value={form.email}
                        onChange={handleChange}
                        aria-invalid={!!fieldErrors.email}
                        aria-describedby={fieldErrors.email ? "email-error" : undefined}
                      />
                      {fieldErrors.email && (
                        <p id="email-error" className="mt-1.5 text-xs text-destructive">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry"
                      className="h-11"
                      value={form.subject}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.subject}
                      aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                    />
                    {fieldErrors.subject && (
                      <p id="subject-error" className="mt-1.5 text-xs text-destructive">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      aria-invalid={!!fieldErrors.message}
                      aria-describedby={fieldErrors.message ? "message-error" : undefined}
                    />
                    {fieldErrors.message && (
                      <p id="message-error" className="mt-1.5 text-xs text-destructive">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    disabled={status === "submitting"}
                    className="gradient-bg border-0 hover:opacity-90 w-full h-12 disabled:opacity-60"
                  >
                    {status === "submitting" ? "Sending..." : "Send Message"}
                  </Button>
                  {status === "success" && (
                    <p className="text-sm text-green-600 dark:text-green-400 text-center">
                      Thanks! Your message has been sent.
                    </p>
                  )}
                  {status === "error" && (
                    <p className="text-sm text-destructive text-center">
                      {errorMsg || "Something went wrong. Please try again."}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </MotionDiv>

          <MotionDiv animation="slide-right" className="lg:col-span-2 space-y-4">
            {[
              {
                icon: Mail,
                title: "Email",
                detail: "contact@herdoydev.com",
                href: "mailto:contact@herdoydev.com",
              },
              {
                icon: MapPin,
                title: "Location",
                detail: "Dhaka, Bangladesh",
                href: "#",
              },
              {
                icon: Phone,
                title: "Phone",
                detail: "+880 1622-465404",
                href: "#",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.href}
                className="flex items-start gap-4 p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 hover:bg-card transition-all duration-300"
              >
                <div className="size-10 rounded-lg gradient-bg flex items-center justify-center shrink-0">
                  <item.icon className="size-5 text-white" />
                </div>
                <div>
                  <p className="text-sm font-semibold">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </div>
              </a>
            ))}
          </MotionDiv>
        </div>
      </div>
    </section>
  );
}
