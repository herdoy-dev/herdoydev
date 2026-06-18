import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-brand-600 to-coral text-white shadow-[0_8px_30px_-8px_rgba(249,115,22,0.7)] hover:shadow-[0_12px_40px_-6px_rgba(249,115,22,0.85)] hover:-translate-y-0.5",
        secondary:
          "glass text-foreground hover:bg-white/10 hover:-translate-y-0.5",
        outline:
          "border border-white/15 text-foreground hover:border-brand-400/60 hover:bg-brand-500/10",
        ghost: "text-muted hover:text-foreground hover:bg-white/5",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-13 px-8 text-base py-3.5",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

type ButtonBaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonProps = ButtonBaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children">;

type ButtonLinkProps = ButtonBaseProps &
  Omit<React.ComponentProps<typeof Link>, "children">;

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export function ButtonLink({
  className,
  variant,
  size,
  ...props
}: ButtonLinkProps) {
  return (
    <Link className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}

export { buttonVariants };
