import SectionButton from "@/components/section-button";
import ThemedCard from "@/components/themed-card";
import { Button } from "@/components/ui/button";
import { CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function CaseStudyDetailPage() {
  return (
    <>
      <Head>
        <title>TechCorp SaaS Platform Redesign | herdoydev Case Study</title>
        <meta
          name="description"
          content="How we transformed TechCorp's enterprise SaaS platform with a complete UI/UX overhaul, resulting in 230% increased engagement."
        />
      </Head>

      <article className="max-w-6xl mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="text-gray-400 hover:text-white"
          >
            <Link href="/case-studies" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Case Studies
            </Link>
          </Button>
        </div>

        {/* Header */}
        <header className="mb-12">
          <SectionButton>Enterprise SaaS</SectionButton>
          <h1 className="text-4xl font-bold tracking-tight mb-4 text-white">
            TechCorp SaaS Platform Redesign
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Transforming an outdated enterprise platform into a modern,
            high-performance application
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="text-gray-200">
              <Link href="#results">View Key Results</Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="text-gray-200 border-gray-600 hover:bg-gray-800"
            >
              <Link href="https://techcorp.com" target="_blank" rel="noopener">
                Visit Live Site
                <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative aspect-[16/9] rounded-xl overflow-hidden mb-12 bg-gray-800">
          <Image
            src="/about/team-working.jpeg"
            alt="TechCorp Platform Dashboard"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Project Overview
              </h2>
              <div className="prose prose-lg max-w-none text-gray-400">
                <p>
                  TechCorp is a leading provider of enterprise HR software
                  serving Fortune 500 companies. Their platform had become
                  outdated over 8 years of incremental updates, resulting in
                  poor user adoption and increasing churn rates.
                </p>
                <p>
                  We partnered with TechCorp to completely reimagine their
                  platform&apos;s user experience while modernizing the
                  technical infrastructure to support future growth.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-gray-500">Client</h3>
                <p className="text-lg text-white">TechCorp</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">Industry</h3>
                <p className="text-lg text-white">Enterprise HR Software</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Project Duration
                </h3>
                <p className="text-lg text-white">6 Months</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-gray-500">
                  Technologies
                </h3>
                <p className="text-lg text-white">
                  React, Node.js, GraphQL, AWS
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">The Challenge</h2>
          <div className="prose prose-lg max-w-none text-gray-400 mb-8">
            <p>
              TechCorp&apos;s platform suffered from years of feature additions
              without cohesive design strategy. Key pain points included:
            </p>
            <ul>
              <li>45% of users required training to complete basic tasks</li>
              <li>Average session duration of just 3.2 minutes</li>
              <li>15% month-over-month churn rate</li>
              <li>8+ second average page load times</li>
            </ul>
          </div>
          <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-800">
            <Image
              src="/about/team-working.jpeg"
              alt="TechCorp platform before redesign"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/50">
              <span className="bg-gray-900 px-3 py-1 rounded-full text-sm font-medium text-white">
                Before Redesign
              </span>
            </div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">Our Approach</h2>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              User Research & Discovery
            </h3>
            <div className="prose prose-lg max-w-none text-gray-400 mb-6">
              <p>We conducted extensive user research including:</p>
              <ul>
                <li>200+ user interviews across different roles</li>
                <li>Task analysis with real users</li>
                <li>Heatmap and session recording analysis</li>
                <li>Competitive platform benchmarking</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/about/team-working.jpeg"
                  alt="User research session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/about/team-working.jpeg"
                  alt="Research findings"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4 text-white">
              Design System Implementation
            </h3>
            <div className="prose prose-lg max-w-none text-gray-400 mb-6">
              <p>
                Created a comprehensive design system to ensure consistency
                across all components:
              </p>
              <ul>
                <li>200+ reusable UI components</li>
                <li>Accessibility-focused color palette</li>
                <li>Responsive layout grids</li>
                <li>Detailed interaction states</li>
              </ul>
            </div>
            <div className="relative aspect-[16/9] rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/about/team-working.jpeg"
                alt="Design system components"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">
              Technical Implementation
            </h3>
            <div className="prose prose-lg max-w-none text-gray-400 mb-6">
              <p>Modernized the tech stack with performance as a priority:</p>
              <ul>
                <li>Migrated from legacy jQuery to React with TypeScript</li>
                <li>Implemented GraphQL API for efficient data fetching</li>
                <li>Optimized critical rendering path</li>
                <li>Introduced comprehensive testing suite</li>
              </ul>
            </div>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/about/team-working.jpeg"
                  alt="Code example"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/about/team-working.jpeg"
                  alt="Performance metrics"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-800">
                <Image
                  src="/about/team-working.jpeg"
                  alt="Testing suite"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Key Results */}
        <section id="results" className="mb-16">
          <ThemedCard>
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Key Results
              </h2>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-4xl font-bold text-blue-400 mb-2">230%</p>
                  <p className="text-gray-400">Increase in user engagement</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-4xl font-bold text-blue-400 mb-2">40%</p>
                  <p className="text-gray-400">Reduction in bounce rate</p>
                </div>
                <div className="bg-card p-6 rounded-lg">
                  <p className="text-4xl font-bold text-blue-400 mb-2">3.2s</p>
                  <p className="text-gray-400">Faster average load time</p>
                </div>
              </div>
              <div className="prose prose-lg max-w-none text-gray-400">
                <p>
                  The redesigned platform led to significant business outcomes
                  for TechCorp:
                </p>
                <ul>
                  <li>60% reduction in customer support tickets</li>
                  <li>35% increase in upsell conversions</li>
                  <li>28% improvement in NPS score</li>
                  <li>Reduced server costs by 40% through optimization</li>
                </ul>
              </div>
            </CardContent>
          </ThemedCard>
        </section>

        {/* Testimonial */}
        <section className="mb-16">
          <ThemedCard>
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <div className="relative aspect-square rounded-full overflow-hidden max-w-[200px] mx-auto">
                    <Image
                      src="/about/team-working.jpeg"
                      alt="Michael Chen"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="md:w-2/3">
                  <blockquote className="text-gray-400 text-lg italic mb-6">
                    &quot;Working with herdoydev was transformative for our
                    business. They didn&apos;t just deliver a new interface -
                    they delivered a platform that became our competitive
                    advantage in the market. The engagement metrics speak for
                    themselves, but equally important was how they became true
                    partners throughout the process.&quot;
                  </blockquote>
                  <div>
                    <p className="font-semibold text-lg text-white">
                      Michael Chen
                    </p>
                    <p className="text-blue-400">CEO, TechCorp</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </ThemedCard>
        </section>

        {/* Gallery */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-6 text-white">
            Project Gallery
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/about/team-working.jpeg"
                alt="Dashboard view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/about/team-working.jpeg"
                alt="Mobile responsive view"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/about/team-working.jpeg"
                alt="Reporting interface"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-gray-800">
              <Image
                src="/about/team-working.jpeg"
                alt="Admin panel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className=" text-white rounded-xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Platform?
          </h2>
          <p className="text-xl mb-6 max-w-2xl mx-auto text-blue-100">
            Let&apos;s discuss how we can help you achieve similar results for
            your business.
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="text-gray-900"
          >
            <Link href="/contact">Get Started</Link>
          </Button>
        </section>
      </article>
    </>
  );
}
