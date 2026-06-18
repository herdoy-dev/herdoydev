export default function Loading() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center">
      <div className="flex flex-col items-center gap-5">
        <div className="relative h-14 w-14">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-brand-600 to-brand-500 opacity-20 blur-md" />
          <div className="absolute inset-0 grid place-items-center rounded-2xl border border-white/10 glass">
            <span className="font-display text-xl font-bold text-brand-300">{">"}</span>
          </div>
          <div className="absolute inset-0 animate-spin rounded-2xl border-2 border-transparent border-t-brand-400" />
        </div>
        <p className="shimmer-text font-mono text-sm">Loading…</p>
      </div>
    </div>
  );
}
