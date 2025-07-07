import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Briefcase, Globe, Users } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "About Us | herdoydev - Web Development Agency",
  description:
    "Learn about herdoydev - our mission, values, and the team behind your premium web development solutions.",
  keywords: [
    "web development agency",
    "about our company",
    "development team",
    "herdoydev story",
    "web design experts",
  ],
  openGraph: {
    title: "About Us | herdoydev - Web Development Agency",
    description:
      "Meet the team and learn what makes herdoydev different in the web development industry.",
    url: "https://herdoydev.com/about",
    images: [
      {
        url: "https://herdoydev.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "herdoydev Team",
      },
    ],
  },
};

const stats = [
  { id: 1, name: "Projects delivered", value: "100+", icon: Briefcase },
  { id: 2, name: "Satisfied clients", value: "85+", icon: Users },
  { id: 3, name: "Countries served", value: "15+", icon: Globe },
  { id: 4, name: "Industry awards", value: "5", icon: Award },
];

const teamMembers = [
  {
    name: "John Herdoy",
    role: "Founder & Lead Developer",
    bio: "With over 10 years of experience in web development, John specializes in React and Node.js architectures.",
    image: "/testimonials/david.jpg",
  },
  {
    name: "Sarah Chen",
    role: "UX/UI Designer",
    bio: "Sarah transforms complex user flows into intuitive interfaces with a focus on accessibility.",
    image: "/testimonials/sarah.png",
  },
  {
    name: "Michael Rodriguez",
    role: "Full Stack Developer",
    bio: "Michael builds robust backend systems and seamless API integrations.",
    image: "/testimonials/david.jpg",
  },
  {
    name: "Emily Wilson",
    role: "Project Manager",
    bio: "Emily ensures projects are delivered on time and exceed client expectations.",
    image: "/testimonials/sarah.png",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We stay ahead of industry trends to deliver cutting-edge solutions.",
  },
  {
    title: "Transparency",
    description: "Clear communication and honest advice guide every project.",
  },
  {
    title: "Excellence",
    description: "We're committed to the highest standards in code and design.",
  },
  {
    title: "Collaboration",
    description:
      "Your vision combined with our expertise creates exceptional results.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
      </Head>

      <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-b from-blue-50 to-white py-24">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Our Story
              </span>
              <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                Building Digital Excellence Since 2018
              </h1>
              <p className="mt-4 text-lg text-gray-600">
                Combining technical expertise with creative vision to deliver
                exceptional web solutions.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
              {/* Image Column */}
              <div className="relative">
                <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl bg-gray-100">
                  <Image
                    src="/about/team-working.jpeg"
                    alt="herdoydev team working together"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-8 -right-8 hidden lg:block">
                  <div className="rounded-2xl bg-blue-600 p-6 text-white shadow-xl">
                    <h3 className="text-2xl font-bold">5+ Years</h3>
                    <p className="mt-1 text-sm">Industry Experience</p>
                  </div>
                </div>
              </div>

              {/* Content Column */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Who We Are
                </h2>
                <div className="space-y-6">
                  <p className="text-lg text-gray-600">
                    Founded by a team of passionate developers and designers,
                    herdoydev has grown from a small studio to a trusted partner
                    for businesses worldwide. Our approach blends cutting-edge
                    technology with user-centered design principles.
                  </p>
                  <p className="text-lg text-gray-600">
                    What sets us apart is our commitment to understanding your
                    unique challenges before writing a single line of code. We
                    believe great digital products emerge from collaboration,
                    transparency, and shared goals.
                  </p>
                </div>

                {/* Stats */}
                <div className="mt-12 grid grid-cols-2 gap-8">
                  {stats.map((stat) => {
                    const Icon = stat.icon;
                    return (
                      <div key={stat.id} className="flex items-start">
                        <div className="rounded-lg bg-blue-50 p-3">
                          <Icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                          <h3 className="text-2xl font-bold text-gray-900">
                            {stat.value}
                          </h3>
                          <p className="mt-1 text-sm text-gray-600">
                            {stat.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-12">
                  <Button size="lg" asChild>
                    <Link href="/contact" className="group">
                      Get to Know Us
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Our Principles
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Core Values That Drive Us
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                These fundamental beliefs shape everything we do at herdoydev.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="text-4xl font-bold text-blue-600 mb-4">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-3xl text-center mb-16">
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
                Meet The Team
              </span>
              <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
                The Minds Behind Your Digital Success
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Our diverse team brings together expertise in development,
                design, and strategy.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center">
                  <div className="relative aspect-square overflow-hidden rounded-xl mb-6">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={400}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold">{member.name}</h3>
                  <p className="text-blue-600 mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Let&apos;s discuss how we can help you achieve your business goals
              through exceptional web solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
              >
                <Link href="/portfolio">See Our Work</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
