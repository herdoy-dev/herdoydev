import { ArrowRight } from "lucide-react";
import { Section, Container, SectionHeading } from "@/components/ui/section";
import { RevealGroup, Reveal } from "@/components/effects/reveal";
import { ProjectCard } from "@/components/shared/project-card";
import { ButtonLink } from "@/components/ui/button";
import { featuredProjects } from "@/constants/projects";

export function FeaturedProjects() {
  return (
    <Section id="work">
      <Container>
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            title={<>Projects that <span className="text-gradient-brand">shipped</span></>}
            description="A few products I've designed, built, and scaled. Each one solved a real problem in production."
          />
          <Reveal>
            <ButtonLink href="/portfolio" variant="outline" className="group shrink-0">
              All projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </ButtonLink>
          </Reveal>
        </div>

        <RevealGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.slice(0, 6).map((project) => (
            <Reveal as="div" key={project.slug}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </RevealGroup>
      </Container>
    </Section>
  );
}
