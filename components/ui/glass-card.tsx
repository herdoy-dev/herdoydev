"use client";

import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Glass card with a mouse-tracking radial spotlight glow.
 * Use for interactive service / project / feature cards.
 */
export function GlassCard({
  children,
  className,
  spotlight = true,
}: {
  children: React.ReactNode;
  className?: string;
  spotlight?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState({ x: 0, y: 0, active: false });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!spotlight) return;
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setCoords((c) => ({ ...c, active: false }))}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 backdrop-blur-md transition-colors duration-300 hover:border-white/20",
        className
      )}
    >
      {spotlight ? (
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: coords.active
              ? `radial-gradient(380px circle at ${coords.x}px ${coords.y}px, rgba(249,115,22,0.16), transparent 70%)`
              : undefined,
          }}
        />
      ) : null}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
