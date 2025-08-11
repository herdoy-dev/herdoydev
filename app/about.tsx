import ArrowButton from "@/components/arrow-button";
import ListItem from "@/components/list-item";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import { Award, Briefcase, Globe, Users } from "lucide-react";
import Image from "next/image";

const stats = [
  { id: 1, name: "Web Projects Delivered", value: "100+", icon: <Briefcase /> },
  { id: 2, name: "Client Satisfaction Rate", value: "98%", icon: <Users /> },
  { id: 3, name: "Countries Served", value: "15+", icon: <Globe /> },
  { id: 4, name: "Industry Recognitions", value: "5+", icon: <Award /> },
];

export function About() {
  return (
    <section className="py-24" id="about">
      <div className="container mx-auto px-4">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
              <Image
                src="/about/team-working.jpeg"
                alt="herdoydev web development team collaborating on project"
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-8 -right-8 hidden lg:block">
              <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-xl">
                <h3 className="text-2xl font-bold">5+ Years</h3>
                <p className="mt-1 text-sm">Building Web Excellence</p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div>
            <SectionButton>Why Choose Us</SectionButton>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Web Development Experts <br className="hidden sm:inline" />
              <span className="text-blue-600">Focused on Your Growth</span>
            </h2>
            <p className="mt-6 text-lg text-gray-400">
              We&apos;re not just coders - we&apos;re strategic partners who
              build
              <strong> high-converting websites</strong> and
              <strong> scalable web applications</strong> with React, Next.js,
              and Node.js.
            </p>

            <div className="mt-8 space-y-6">
              <p className="text-gray-400">
                Since 2018, we&apos;ve helped startups and enterprises transform
                their digital presence. Our full-stack expertise means we handle
                everything from UI/UX design to backend architecture and DevOps.
              </p>
              <p className="text-gray-400">
                <strong>94% of our clients</strong> see measurable business
                improvements within 3 months of launch. We achieve this through
                performance-optimized code and data-driven design.
              </p>
            </div>

            {/* Stats - Now with Better Microcopy */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <ListItem
                  key={stat.id}
                  title={stat.value}
                  icon={stat.icon}
                  description={stat.name}
                  iconSize={10}
                />
              ))}
            </div>

            <div className="mt-12">
              <ArrowButton
                label=" See Our Success Stories"
                href="/case-studies"
              />
            </div>
          </div>
        </div>

        {/* Value Proposition Cards with Glass Effect */}
        <div className="mt-24 grid gap-12 md:grid-cols-3">
          <ThemedCard>
            <h3 className="text-xl font-semibold text-gray-100">
              End-to-End Solutions
            </h3>
            <p className="mt-4 text-gray-300">
              From initial strategy to post-launch optimization, we handle every
              aspect of web development so you can focus on your business.
            </p>
          </ThemedCard>
          <ThemedCard>
            <h3 className="text-xl font-semibold text-gray-100">
              Performance First
            </h3>
            <p className="mt-4 text-gray-300">
              Our websites load 3x faster than industry averages, directly
              improving SEO rankings and conversion rates.
            </p>
          </ThemedCard>
          <ThemedCard>
            <h3 className="text-xl font-semibold text-gray-100">
              Transparent Process
            </h3>
            <p className="mt-4 text-gray-300">
              Weekly updates, dedicated project managers, and clear pricing - no
              surprises, just results.
            </p>
          </ThemedCard>
        </div>
      </div>
    </section>
  );
}
