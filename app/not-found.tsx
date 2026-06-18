import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center">
      <Container>
        <div className="mx-auto flex max-w-xl flex-col items-center text-center">
          <span className="font-display text-[8rem] font-bold leading-none text-gradient sm:text-[12rem]">
            404
          </span>
          <h1 className="mt-2 font-display text-2xl font-semibold tracking-tight sm:text-3xl">
            Page not found
          </h1>
          <p className="mt-3 text-muted">
            The page you&apos;re looking for doesn&apos;t exist or has moved.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/">
              <Home className="h-4 w-4" /> Back home
            </ButtonLink>
            <ButtonLink href="/portfolio" variant="secondary">
              <ArrowLeft className="h-4 w-4" /> View work
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
