/**
 * Global animated background — mesh gradient blobs + grid + noise.
 * Pure CSS animation, renders as a fixed full-screen Server Component.
 */
export function BackgroundFX() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-ink-950"
    >
      {/* sunset aurora blobs */}
      <div className="absolute -left-[10%] -top-[10%] h-[55vh] w-[55vh] rounded-full bg-brand-600/30 blur-[120px] animate-aurora" />
      <div
        className="absolute right-[-10%] top-[20%] h-[50vh] w-[50vh] rounded-full bg-coral/25 blur-[130px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-[-15%] left-[30%] h-[45vh] w-[45vh] rounded-full bg-cyan/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      {/* grid */}
      <div className="absolute inset-0 grid-bg mask-fade-b opacity-60" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#050509_100%)]" />
    </div>
  );
}
