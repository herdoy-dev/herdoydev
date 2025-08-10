import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import SplitText from "@/components/SplitText";
import Link from "next/link";
import Aurora from "@/components/Aurora";

export function Hero() {
  const color1 = "#155dfc";
  const color2 = "#B19EEF";
  const color3 = "#5227FF";
  return (
    <section className="h-dvh relative">
      <div className="absolute inset-0 -z-10">
        <Aurora colorStops={[color1, color2, color3]} />
      </div>
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center rounded-full bg-gray-700 px-4 py-2 text-sm font-medium text-blue-400">
            <Check className="mr-2 h-4 w-4 text-blue-400" />
            Trusted by 100+ businesses in 15+ countries
          </span>

          {/* Headline with Keywords */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-20 text-white">
            <SplitText
              text="Hire Expert Web Developers"
              className="block"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
            <SplitText
              text="React & Next.js Specialists"
              className="relative inline-block text-primary"
              delay={100}
              duration={0.6}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 40 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="center"
            />
          </h1>

          {/* Benefit-Driven Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            We build{" "}
            <strong className="text-blue-400">fast, scalable websites</strong>{" "}
            that convert 40% more visitors. Get a custom solution with{" "}
            <strong className="text-blue-400">
              React, Next.js, and Node.js
            </strong>{" "}
            tailored to your business goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="animate-pulse hover:animate-none rounded-full text-white"
            >
              <Link
                href="/contact"
                className="group"
                aria-label="Get a free web development consultation"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              asChild
              className="rounded-full"
            >
              <Link
                href="/portfolio"
                aria-label="View our web development portfolio"
                className="text-gray-400 hover:text-gray-500"
              >
                See Client Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
