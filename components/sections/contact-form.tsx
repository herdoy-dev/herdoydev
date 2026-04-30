"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import * as z from "zod";
import { db } from "@/firebase";

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

const inputClass =
  "w-full bg-transparent border-0 border-b border-border focus:border-foreground rounded-none px-0 py-3 text-base placeholder:text-muted-foreground/60 focus:outline-none focus:ring-0 transition-colors";

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
    <section className="relative py-24 md:py-36 hairline-t" id="contact">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16 md:mb-20">
          <div className="col-span-12 md:col-span-3">
            <p className="eyebrow">— 100 / Direct line</p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="serif text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight">
              Send us a <span className="serif-italic">letter.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">
              Project briefs, ideas, partnerships, or simply a hello — they all
              land in the same inbox. We reply within two working days.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-6 md:gap-10">
          {/* Contact details rail */}
          <aside className="col-span-12 md:col-span-3">
            <ul className="space-y-8">
              <li>
                <p className="eyebrow mb-2">By email</p>
                <a
                  href="mailto:contact@herdoydev.com"
                  className="text-sm font-medium link-line inline-flex items-center gap-1.5"
                >
                  <Mail className="size-3.5" />
                  contact@herdoydev.com
                </a>
              </li>
              <li>
                <p className="eyebrow mb-2">In person</p>
                <p className="text-sm font-medium inline-flex items-center gap-1.5">
                  <MapPin className="size-3.5" />
                  Dhaka, Bangladesh
                </p>
                <p className="mono text-[11px] tracking-wider text-muted-foreground mt-1">
                  GMT+6 / 09:00–18:00
                </p>
              </li>
              <li>
                <p className="eyebrow mb-2">Status</p>
                <p className="text-sm font-medium inline-flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-500" />
                  Accepting projects
                </p>
              </li>
            </ul>
          </aside>

          {/* Form */}
          <form
            className="col-span-12 md:col-span-9"
            onSubmit={handleSubmit}
            noValidate
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              <Field
                id="name"
                label="Name"
                num="01"
                value={form.name}
                error={fieldErrors.name}
                onChange={handleChange}
                placeholder="Jane Doe"
              />
              <Field
                id="email"
                label="Email"
                num="02"
                type="email"
                value={form.email}
                error={fieldErrors.email}
                onChange={handleChange}
                placeholder="jane@studio.com"
              />
            </div>

            <Field
              id="subject"
              label="Subject"
              num="03"
              value={form.subject}
              error={fieldErrors.subject}
              onChange={handleChange}
              placeholder="A new product, a redesign, a brief…"
              className="mt-2"
            />

            <div className="mt-6">
              <label htmlFor="message" className="flex items-baseline gap-3 mb-3">
                <span className="mono num text-[10px] tracking-widest text-muted-foreground">
                  / 04
                </span>
                <span className="text-sm font-medium">Message</span>
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell us about the product, the audience, the timeline."
                value={form.message}
                onChange={handleChange}
                aria-invalid={!!fieldErrors.message}
                aria-describedby={
                  fieldErrors.message ? "message-error" : undefined
                }
                className={`${inputClass} resize-y`}
              />
              {fieldErrors.message && (
                <p
                  id="message-error"
                  className="mono text-[11px] tracking-wider uppercase text-destructive mt-2"
                >
                  ! {fieldErrors.message}
                </p>
              )}
            </div>

            <div className="mt-12 pt-6 hairline-t flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="mono text-[11px] tracking-wider uppercase text-muted-foreground">
                We never share your details. PGP available on request.
              </p>
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group inline-flex items-center justify-center gap-1.5 px-6 h-12 bg-foreground text-background text-sm font-medium rounded-sm hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {status === "submitting" ? "Sending…" : "Send the letter"}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {status === "success" && (
              <p className="mono text-[11px] tracking-wider uppercase text-emerald-700 dark:text-emerald-400 mt-4">
                ✓ Received. We&apos;ll write back shortly.
              </p>
            )}
            {status === "error" && (
              <p className="mono text-[11px] tracking-wider uppercase text-destructive mt-4">
                ! {errorMsg || "Something went wrong. Please try again."}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  id,
  label,
  num,
  type = "text",
  value,
  onChange,
  placeholder,
  error,
  className = "",
}: {
  id: string;
  label: string;
  num: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={id} className="flex items-baseline gap-3 mb-1">
        <span className="mono num text-[10px] tracking-widest text-muted-foreground">
          / {num}
        </span>
        <span className="text-sm font-medium">{label}</span>
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-error` : undefined}
        className="w-full bg-transparent border-0 border-b border-border focus:border-foreground rounded-none px-0 py-3 text-base placeholder:text-muted-foreground/60 focus:outline-none focus:ring-0 transition-colors"
      />
      {error && (
        <p
          id={`${id}-error`}
          className="mono text-[11px] tracking-wider uppercase text-destructive mt-2"
        >
          ! {error}
        </p>
      )}
    </div>
  );
}
