"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";
import { Container } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Magnetic } from "@/components/ui/magnetic";
import { EASE } from "@/lib/motion";

const ROLES = ["Web Applications", "Mobile Apps", "AI Agents", "SaaS Platforms"];

function useTypewriter(words: string[], speed = 80, pause = 1600) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    const done = !deleting && text === current;
    const cleared = deleting && text === "";
    const delay = done ? pause : deleting ? speed / 2 : speed;

    const timeout = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText((t) =>
          deleting ? current.slice(0, t.length - 1) : current.slice(0, t.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [text, deleting, index, words, speed, pause]);

  return text;
}

const codeSnippets = [
  { code: "const scale = () => ship()", top: "18%", left: "6%", delay: 0 },
  { code: "await agent.run(task)", top: "62%", left: "3%", delay: 1.2 },
  { code: "export default App", top: "26%", right: "5%", delay: 0.6 },
  { code: "<Suspense fallback />", top: "70%", right: "7%", delay: 1.8 },
];

export function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden pt-28">
      {/* hero glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/3 h-[60vh] w-[60vh] -translate-x-1/2 rounded-full bg-brand-600/25 blur-[140px] animate-glow-pulse"
      />

      {/* floating code snippets (desktop) */}
      {codeSnippets.map((s, i) => (
        <motion.div
          key={i}
          aria-hidden
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -16, 0] }}
          transition={{
            opacity: { delay: 0.6 + i * 0.15, duration: 0.8 },
            y: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: s.delay },
          }}
          className="absolute hidden rounded-xl glass px-3 py-2 font-mono text-xs text-brand-200/80 lg:block"
          style={{ top: s.top, left: s.left, right: s.right }}
        >
          {s.code}
        </motion.div>
      ))}

      <Container className="relative z-10">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.08 }}
            className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-6xl md:text-7xl"
          >
            Building Scalable{" "}
            <span className="text-gradient">Web Apps</span>, Mobile Apps &{" "}
            <span className="text-gradient-brand">AI Solutions</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-5 flex items-center gap-2 font-mono text-sm text-muted sm:text-base"
          >
            <span className="text-brand-400">{">"}</span>
            <span>I build</span>
            <span className="text-foreground">{typed}</span>
            <span className="inline-block h-5 w-[2px] animate-pulse bg-brand-400" />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.18 }}
            className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg"
          >
            I help startups and businesses build modern digital products that
            scale — from first commit to millions of users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.28 }}
            className="mt-9 flex flex-col items-center gap-3 sm:flex-row"
          >
            <Magnetic>
              <ButtonLink href="/contact" size="lg" className="group">
                Book a Project
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </ButtonLink>
            </Magnetic>
            <Magnetic strength={0.25}>
              <ButtonLink href="/portfolio" size="lg" variant="secondary">
                View Portfolio
              </ButtonLink>
            </Magnetic>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex items-center gap-3 text-sm text-muted"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber text-amber" />
              ))}
            </div>
            <span>Trusted by 30+ founders & teams worldwide</span>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
