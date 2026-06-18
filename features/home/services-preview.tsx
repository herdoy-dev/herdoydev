import { Section, Container, SectionHeading } from "@/components/ui/section";
import { RevealGroup, Reveal } from "@/components/effects/reveal";
import { ServiceCard } from "@/components/shared/service-card";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/constants/services";

export function ServicesPreview() {
  return (
    <Section id="services">
      <Container>
        <SectionHeading
          title={<>Services built for <span className="text-gradient">scale</span></>}
          description="End-to-end product engineering — from idea to launch to growth. Pick a discipline or combine them into a full build."
        />
        <RevealGroup className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Reveal as="div" key={service.slug} className="h-full">
              <ServiceCard service={service} />
            </Reveal>
          ))}
          <Reveal as="div" className="h-full">
            <div className="flex h-full flex-col justify-center gap-4 rounded-2xl border border-dashed border-white/15 p-6 text-center">
              <p className="font-display text-lg font-semibold">
                Not sure what you need?
              </p>
              <p className="text-sm text-muted">
                Book a free consultation and we&apos;ll scope it together.
              </p>
              <ButtonLink href="/contact" variant="outline" size="sm" className="mx-auto">
                Book a Free Consultation
              </ButtonLink>
            </div>
          </Reveal>
        </RevealGroup>
      </Container>
    </Section>
  );
}
