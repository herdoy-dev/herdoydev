"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2, Send, AlertCircle } from "lucide-react";
import { submitContact } from "@/actions/contact";
import type { ContactFormState } from "@/schemas/contact";
import { Label, Input, Textarea, Select, FieldError } from "@/components/ui/field";
import { budgetOptions } from "@/constants/content";
import { services } from "@/constants/services";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-600 to-coral font-medium text-white shadow-[0_8px_30px_-8px_rgba(249,115,22,0.7)] transition-all hover:-translate-y-0.5 disabled:opacity-60 sm:w-auto sm:px-8"
    >
      {pending ? (
        <>
          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
          Sending…
        </>
      ) : (
        <>
          Send Message
          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContact, initialState);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state.status]);

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-green/30 bg-green/5 p-10 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-full bg-green/15 text-green">
          <CheckCircle2 className="h-7 w-7" />
        </span>
        <h3 className="font-display text-xl font-semibold">Message sent!</h3>
        <p className="max-w-sm text-sm text-muted">{state.message}</p>
      </div>
    );
  }

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-5" noValidate>
      {state.status === "error" && state.message && (
        <div
          role="alert"
          className="flex items-center gap-2.5 rounded-xl border border-red/30 bg-red/5 px-4 py-3 text-sm text-red"
        >
          <AlertCircle className="h-4 w-4 shrink-0" />
          {state.message}
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="name" required>Name</Label>
          <Input id="name" name="name" placeholder="Jane Doe" autoComplete="name" error={!!state.errors?.name} />
          <FieldError>{state.errors?.name}</FieldError>
        </div>
        <div>
          <Label htmlFor="email" required>Email</Label>
          <Input id="email" name="email" type="email" placeholder="jane@company.com" autoComplete="email" error={!!state.errors?.email} />
          <FieldError>{state.errors?.email}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="company">Company</Label>
        <Input id="company" name="company" placeholder="Acme Inc. (optional)" autoComplete="organization" error={!!state.errors?.company} />
        <FieldError>{state.errors?.company}</FieldError>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="budget" required>Project Budget</Label>
          <Select id="budget" name="budget" defaultValue="" error={!!state.errors?.budget}>
            <option value="" disabled>Select a range</option>
            {budgetOptions.map((b) => (
              <option key={b} value={b}>{b}</option>
            ))}
          </Select>
          <FieldError>{state.errors?.budget}</FieldError>
        </div>
        <div>
          <Label htmlFor="service" required>Service Interested In</Label>
          <Select id="service" name="service" defaultValue="" error={!!state.errors?.service}>
            <option value="" disabled>Select a service</option>
            {services.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
          </Select>
          <FieldError>{state.errors?.service}</FieldError>
        </div>
      </div>

      <div>
        <Label htmlFor="message" required>Message</Label>
        <Textarea id="message" name="message" placeholder="Tell me about your project, goals, and timeline…" error={!!state.errors?.message} />
        <FieldError>{state.errors?.message}</FieldError>
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted">I&apos;ll reply within 24 hours.</p>
        <SubmitButton />
      </div>
    </form>
  );
}
