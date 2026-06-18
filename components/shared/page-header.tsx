import { Container } from "@/components/ui/section";
import { Reveal } from "@/components/effects/reveal";

export function PageHeader({
  title,
  description,
  children,
}: {
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-10 h-72 w-[40rem] max-w-full -translate-x-1/2 rounded-full bg-brand-600/20 blur-[120px]"
      />
      <Container className="relative z-10">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Reveal delay={0.05}>
            <h1 className="font-display text-4xl font-bold tracking-tight text-balance sm:text-6xl">
              {title}
            </h1>
          </Reveal>
          {description ? (
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
                {description}
              </p>
            </Reveal>
          ) : null}
          {children ? <Reveal delay={0.15}>{children}</Reveal> : null}
        </div>
      </Container>
    </section>
  );
}
