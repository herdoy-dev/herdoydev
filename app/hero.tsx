import { PageHeaderBox } from "@/components/page-header-box";
import SectionButton from "@/components/section-button";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <PageHeaderBox>
      <div className="mx-auto max-w-4xl text-center">
        <SectionButton>
          <Check className="mr-2 h-4 w-4 text-blue-400" />
          Trusted by 100+ businesses in 15+ countries
        </SectionButton>

        {/* Headline with Keywords */}
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
          <span className="block md:pb-3">Hire Expert Web Developers</span>
          <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            React & Next.js Specialists
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
          We build{" "}
          <strong className="text-blue-400">fast, scalable websites</strong>{" "}
          that convert 40% more visitors. Get a custom solution with{" "}
          <strong className="text-blue-400">React, Next.js, and Node.js</strong>{" "}
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

          <Button variant="outline" size="lg" asChild className="rounded-full">
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
    </PageHeaderBox>
  );
}
