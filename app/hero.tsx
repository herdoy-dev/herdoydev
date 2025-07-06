import { Button } from "@/components/ui/button";
import Image from "next/image";

function Hero() {
  return (
    <section className="w-full bg-white py-20">
      <div className="container mx-auto flex flex-col-reverse items-center justify-between px-4 md:flex-row">
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Crafting Digital Experiences that Drive Results
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            We build blazing-fast, SEO-optimized websites and apps tailored for
            startups, entrepreneurs, and businesses.
          </p>
          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-start justify-center">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              View Portfolio
            </Button>
          </div>
        </div>

        <div className="relative w-full max-w-md h-[300px] md:h-[400px] mb-10 md:mb-0">
          <Image
            src="/hero-illustration.svg"
            alt="Web development illustration"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
