import ListItem from "@/components/list-item";
import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Briefcase, Globe, Users } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title:
    "About Our Web Development Agency | herdoydev - React & Next.js Experts",
  description:
    "Meet the team behind 100+ successful web projects. We combine technical excellence with business strategy to deliver results.",
  keywords: [
    "web development team",
    "about our developers",
    "React.js experts",
    "Next.js specialists",
    "web agency story",
    "herdoydev founders",
  ],
  openGraph: {
    title: "About Our Web Development Team | herdoydev",
    description:
      "5+ years building high-performance websites with React, Next.js and Node.js. 98% client satisfaction rate.",
    url: "https://herdoydev.com/about",
    images: [
      {
        url: "https://herdoydev.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev development team at work",
      },
    ],
  },
};

const stats = [
  { id: 1, name: "Projects delivered", value: "100+", icon: <Briefcase /> },
  { id: 2, name: "Client satisfaction", value: "98%", icon: <Users /> },
  { id: 3, name: "Countries served", value: "15+", icon: <Globe /> },
  { id: 4, name: "Tech certifications", value: "12", icon: <Award /> },
];

const teamMembers = [
  {
    name: "Herdoy Almamun",
    role: "Founder & Lead Developer",
    linkedin: "https://www.linkedin.com/in/herdoydev",
    bio: "React/Next.js specialist with 5+ years building scalable web applications. Focused on performance optimization and clean architecture.",
    image: "/herdoy.jpg",
    expertise: ["React", "Node.js", "AWS", "Performance"],
  },
  {
    name: "Kawsar Ahamad",
    role: "UX/UI Designer",
    bio: "Transforms complex workflows into intuitive interfaces. Specializes in conversion-focused design systems.",
    linkedin: "https://www.linkedin.com/in/kawsar-ahamad-918468188",
    image: "/kawsar.jpg",
    expertise: ["Figma", "UI Design", "UX Research", "Prototyping"],
  },
  {
    name: "Anichur Rahman",
    role: "Full Stack Developer",
    bio: "Builds robust backend systems with TypeScript and Node.js. Database optimization expert.",
    linkedin: "https://www.linkedin.com/in/anichur-rahman-shamim-604400293",
    image: "/shamim.jpg",
    expertise: ["Node.js", "PostgreSQL", "API Design", "DevOps"],
  },
];

const values = [
  {
    title: "Technical Excellence",
    description: "We obsess over clean code, performance, and scalability.",
    icon: "💻",
  },
  {
    title: "Business Alignment",
    description: "Every line of code serves your strategic goals.",
    icon: "📈",
  },
  {
    title: "Transparent Process",
    description: "Weekly demos, no hidden fees, clear communication.",
    icon: "🔍",
  },
  {
    title: "Continuous Learning",
    description: "We stay ahead of industry trends so you don't have to.",
    icon: "🎓",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <link rel="canonical" href="https://herdoydev.com/about" />
      </Head>

      <main>
        <PageHeaderBox>
          <div className="mx-auto max-w-4xl text-center">
            <SectionButton>Since 2018</SectionButton>
            <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="block">Web Development</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Done Right
              </span>
            </h1>
            <p className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto">
              We&apos;re a team of React and Next.js specialists building
              websites that <strong>load faster</strong>,{" "}
              <strong>convert better</strong>, and{" "}
              <strong>scale effortlessly</strong>.
            </p>
          </div>
        </PageHeaderBox>

        {/* About Content */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Image Column */}
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/about/team-working.jpeg"
                    alt="herdoydev development team collaborating on code review"
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
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  More Than Just Developers
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-400">
                    Founded in 2018, we&apos;ve evolved from a freelance
                    collective to a trusted web development partner for startups
                    and enterprises worldwide. What began as a passion for
                    coding has grown into a full-service agency with one goal:{" "}
                    <strong>
                      delivering measurable business results through technology
                    </strong>
                    .
                  </p>
                  <p className="text-lg text-gray-400">
                    Unlike typical agencies, we combine{" "}
                    <strong>deep technical expertise</strong> with{" "}
                    <strong>business strategy</strong>. Every project starts
                    with understanding your KPIs, competitive landscape, and
                    growth objectives.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {stats.map((stat) => (
                    <ListItem
                      key={stat.id}
                      icon={stat.icon}
                      title={stat.value}
                      description={stat.name}
                    />
                  ))}
                </div>

                <div className="mt-12">
                  <Button size="lg" asChild className="group">
                    <Link href="/case-studies" className="group">
                      See Our Client Results
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                How We Work
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Our Core Principles
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                The foundation of every project we undertake
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <ThemedCard key={index}>
                  <div className="text-3xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Meet The Team
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Experts Behind Your Project
              </h2>
              <p className="mt-4 text-lg text-gray-400">
                Senior-level talent dedicated to your success
              </p>
            </div>

            <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {teamMembers.map((member) => (
                <ThemedCard key={member.name} className="!p-0 overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-400 mb-4">{member.bio}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-gray-400"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={member.linkedin}
                      target="_blank"
                      className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
                    >
                      Connect on LinkedIn
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </ThemedCard>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-card/40 backdrop-blur-2xl">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Build Something Great?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Get a free 30-minute consultation with our technical lead to
              discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button
                asChild
                className="border bg-transparent !text-primary border-primary"
                size="lg"
              >
                <Link href="/contact">Schedule Call</Link>
              </Button>
              <Button asChild size="lg">
                <Link href="/process">Our Process</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
