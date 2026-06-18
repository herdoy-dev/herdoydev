import * as React from "react";
import { cn } from "@/lib/utils";

export function Label({
  children,
  htmlFor,
  required,
}: {
  children: React.ReactNode;
  htmlFor: string;
  required?: boolean;
}) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-foreground/90">
      {children}
      {required && <span className="ml-0.5 text-brand-400">*</span>}
    </label>
  );
}

const fieldStyles =
  "w-full rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-foreground placeholder:text-muted/60 transition-colors focus:border-brand-400/60 focus:outline-none focus:ring-2 focus:ring-brand-500/20 disabled:opacity-50";

export const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(fieldStyles, error && "border-red/60 focus:ring-red/20", className)}
    {...props}
  />
));
Input.displayName = "Input";

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement> & { error?: boolean }
>(({ className, error, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(fieldStyles, "min-h-32 resize-y", error && "border-red/60", className)}
    {...props}
  />
));
Textarea.displayName = "Textarea";

export const Select = React.forwardRef<
  HTMLSelectElement,
  React.SelectHTMLAttributes<HTMLSelectElement> & { error?: boolean }
>(({ className, error, children, ...props }, ref) => (
  <select
    ref={ref}
    className={cn(
      fieldStyles,
      "appearance-none [color-scheme:dark] bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns=%22http://www.w3.org/2000/svg%22%20viewBox=%220%200%2024%2024%22%20fill=%22none%22%20stroke=%22%2394a3b8%22%20stroke-width=%222%22%3E%3Cpath%20d=%22M6%209l6%206%206-6%22/%3E%3C/svg%3E')] bg-[length:18px] bg-[right_0.9rem_center] bg-no-repeat pr-10",
      "[&>option]:bg-ink-900 [&>option]:text-foreground",
      error && "border-red/60",
      className
    )}
    {...props}
  >
    {children}
  </select>
));
Select.displayName = "Select";

export function FieldError({ children }: { children?: string }) {
  if (!children) return null;
  return (
    <p role="alert" className="mt-1.5 text-xs text-red">
      {children}
    </p>
  );
}
