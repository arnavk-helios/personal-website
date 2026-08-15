"use client";

import { motion } from "framer-motion";

const SKILLS = ["C", "C++", "Python 3", "SQL", "Cybersecurity", "AI Models"];
const SKILLS_ROW_1 = SKILLS;
const SKILLS_ROW_2 = [...SKILLS].reverse();

function MarqueeRow({
  items,
  direction = "left",
  speedClass = "animate-marquee",
}: {
  items: string[];
  direction?: "left" | "right";
  speedClass?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden py-3">
      <div
        className={`flex w-max gap-4 ${speedClass} ${
          direction === "right" ? "[animation-direction:reverse]" : ""
        }`}
      >
        {doubled.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="flex items-center gap-2 whitespace-nowrap rounded-full border border-edge bg-surface px-6 py-3 font-mono text-sm text-fog transition-colors hover:border-signal/60 hover:text-signal"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-signal" />
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative overflow-hidden px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            02 · Stack
          </p>
          <h2 className="mt-4 text-3xl font-bold text-fog sm:text-4xl">
            What I build with
          </h2>
        </motion.div>
      </div>

      <div
        className="relative mx-auto max-w-6xl [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <MarqueeRow items={SKILLS_ROW_1} direction="left" speedClass="animate-marquee" />
        <MarqueeRow items={SKILLS_ROW_2} direction="right" speedClass="animate-marquee-slow" />
      </div>
    </section>
  );
}
