import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

export function ServiceCard({
  service,
  href,
}: {
  service: Service;
  href?: string;
}) {
  const Icon = service.icon;
  const link = href ?? `/services#${service.slug}`;
  return (
    <Link href={link} className="block h-full" data-cursor="hover">
      <GlassCard className="flex h-full flex-col">
        <div
          className={cn(
            "mb-5 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br text-white shadow-lg transition-transform duration-300 group-hover:scale-110",
            service.accent
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="font-display text-xl font-semibold tracking-tight">
          {service.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {service.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {service.features.slice(0, 4).map((f) => (
            <span
              key={f}
              className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs text-muted"
            >
              {f}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-1.5 text-sm font-medium text-brand-300 transition-colors group-hover:text-brand-200">
          Explore service
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </GlassCard>
    </Link>
  );
}
