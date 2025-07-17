import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white">
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40">
        <div className="mx-auto max-w-4xl text-center">
          {/* Trust Badge with Social Proof */}
          <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <Check className="mr-2 h-4 w-4" />
            Trusted by 100+ businesses in 15+ countries
          </span>

          {/* Headline with Keywords */}
          <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl leading-20">
            <span className="block">Hire Expert Web Developers</span>
            <span className="relative inline-block bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              React & Next.js Specialists
            </span>
          </h1>

          {/* Benefit-Driven Subheading */}
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            We build <strong>fast, scalable websites</strong> that convert 40%
            more visitors. Get a custom solution with{" "}
            <strong>React, Next.js, and Node.js</strong> tailored to your
            business goals.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              asChild
              className="animate-pulse hover:animate-none"
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

            <Button variant="outline" size="lg" asChild>
              <Link
                href="/portfolio"
                aria-label="View our web development portfolio"
              >
                See Client Success Stories
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Performance Optimized Background */}
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-blue-100 to-blue-50 opacity-30"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
    </section>
  );
}
