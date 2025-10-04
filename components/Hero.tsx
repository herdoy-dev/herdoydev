import { ArrowRight, Sparkles } from "lucide-react";
import Aurora from "./Aurora";
import { Button, buttonVariants } from "./ui/button";
import SplitText from "./SplitText";
import Link from "next/link";
import { cn } from "@/lib/utils";

function Hero() {
  return (
    <>
      <div className="w-full md:h-[860px] h-[800px] relative mb-6">
        <Aurora
          colorStops={["#000000", "#1aa64b", "#1db954", "#33c065", "#4ac776"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
        <section className="min-h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 absolute md:top-0 top-16 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border bg-background/50 backdrop-blur-sm text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>AI-Powered Digital Solutions</span>
            </div>

            {/* Main Heading */}
            <div className="flex flex-col gap-4">
              <SplitText
                text="Your Business,"
                className="font-semibold text-center text-3xl md:text-7xl"
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
                text="Powered by AI + Web"
                className="font-semibold text-center text-primary text-3xl md:text-7xl"
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
            </div>

            {/* Description */}
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              More than just websites—I create digital experiences that combine
              sleek design, seamless performance, and AI-driven automation to
              help you stay ahead.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Link
                href="/#portfolio"
                className={cn(buttonVariants({ size: "lg" }), "mr-2")}
              >
                View Portfolio
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/#contact"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                Get Started
              </Link>
            </div>

            {/* Stats or Additional Info */}
            <div className="grid grid-cols-3 gap-8 pt-16 text-center">
              <div>
                <div className="text-2xl md:text-5xl font-bold text-primary">
                  50+
                </div>
                <div className="text-sm md:text-lg text-muted-foreground">
                  Projects
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-5xl font-bold text-primary">
                  24/7
                </div>
                <div className="text-sm md:text-lg text-muted-foreground">
                  AI Support
                </div>
              </div>
              <div>
                <div className="text-2xl md:text-5xl font-bold text-primary">
                  100%
                </div>
                <div className="text-sm md:text-lg text-muted-foreground">
                  Satisfaction
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Hero;
