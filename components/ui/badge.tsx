import { cn } from "@/lib/utils";

export function Badge({
  children,
  className,
  icon: Icon,
}: {
  children: React.ReactNode;
  className?: string;
  icon?: React.ComponentType<{ className?: string }>;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-brand-200 backdrop-blur",
        className
      )}
    >
      {Icon ? <Icon className="h-3.5 w-3.5 text-brand-400" /> : null}
      {children}
    </span>
  );
}
