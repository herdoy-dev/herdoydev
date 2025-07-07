import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Briefcase, Globe, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { id: 1, name: "Projects delivered", value: "100+", icon: Briefcase },
  { id: 2, name: "Satisfied clients", value: "85+", icon: Users },
  { id: 3, name: "Countries served", value: "15+", icon: Globe },
  { id: 4, name: "Industry awards", value: "5", icon: Award },
];

export function About() {
  return (
    <section className="py-24 bg-white" id="about">
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
            <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              Our Story
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Building Digital Excellence Since 2018
            </h2>
            <p className="mt-6 text-lg text-gray-600">
              At herdoydev, we combine technical expertise with creative vision
              to deliver exceptional web solutions that drive real business
              results.
            </p>

            <div className="mt-8 space-y-6">
              <p className="text-gray-600">
                Founded by a team of passionate developers and designers,
                we&apos;ve grown from a small studio to a trusted partner for
                businesses worldwide. Our approach blends cutting-edge
                technology with user-centered design principles.
              </p>
              <p className="text-gray-600">
                What sets us apart is our commitment to understanding your
                unique challenges before writing a single line of code. We
                believe great digital products emerge from collaboration,
                transparency, and shared goals.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-2 gap-8">
              {stats.map((stat) => (
                <div key={stat.id} className="flex items-start">
                  <div className="rounded-lg bg-blue-50 p-3">
                    <stat.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {stat.value}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">{stat.name}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link href="/about" className="group">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Team Principles */}
        <div className="mt-24 grid gap-12 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
            <p className="mt-4 text-gray-600">
              To empower businesses through innovative web solutions that solve
              real problems and create meaningful connections with their
              audiences.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              Our Approach
            </h3>
            <p className="mt-4 text-gray-600">
              We follow a rigorous process that balances creativity with
              methodology, ensuring we deliver on time and exceed expectations.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Our Values</h3>
            <p className="mt-4 text-gray-600">
              Integrity, innovation, and impact guide every project we
              undertake. We measure our success by our clients success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
