"use client";

import { motion } from "framer-motion";
import { skillGroups } from "@/constants/content";

export function SkillBars() {
  return (
    <div className="grid gap-8 md:grid-cols-3">
      {skillGroups.map((group) => (
        <div key={group.category} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <h3 className="font-display text-lg font-semibold text-brand-300">
            {group.category}
          </h3>
          <div className="mt-5 flex flex-col gap-5">
            {group.skills.map((skill) => (
              <div key={skill.name}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-foreground/90">{skill.name}</span>
                  <span className="font-mono text-xs text-muted">{skill.level}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/8">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-brand-600 to-cyan"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
