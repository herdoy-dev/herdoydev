"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "@/components/motion-wrapper";

export function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <MotionDiv animation="scale-in">
          <div className="relative overflow-hidden rounded-3xl gradient-bg px-6 py-16 md:px-16 md:py-24 text-center">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight"
              >
                Ready to build something
                <br />
                amazing together?
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-5 text-lg text-white/80 max-w-xl mx-auto"
              >
                Whether you need a custom app or want to try one of our products,
                we&apos;d love to hear from you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-primary hover:bg-white/90 text-base px-8 h-12 w-full sm:w-auto border-0"
                >
                  <Link href="/contact">
                    Contact Us
                    <ArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white text-base px-8 h-12 w-full sm:w-auto"
                >
                  <Link href="/products">
                    <Download className="mr-2 size-4" />
                    Download Apps
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
}
