"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SectionHeading from "./SectionHeading";

const TECH = ["C", "C++", "Python 3", "SQL", "Bash", "Cybersecurity", "AI Models"];
const SOFT = [
  "Partnership Development",
  "Professional Outreach",
  "Team Leadership",
  "Event Coordination",
  "Problem Solving",
];

function Row({
  items,
  reverse = false,
  slow = false,
}: {
  items: string[];
  reverse?: boolean;
  slow?: boolean;
}) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div className="overflow-hidden py-3">
      <div
        className={`flex w-max gap-4 hover:[animation-play-state:paused] ${
          slow ? "animate-marquee-slow" : "animate-marquee"
        } ${reverse ? "[animation-direction:reverse]" : ""}`}
      >
        {repeated.map((s, i) => (
          <span
            key={`${s}-${i}`}
            className="flex items-center gap-3 whitespace-nowrap border-4 border-[#141414] bg-panel px-5 py-3 font-display text-sm uppercase text-cream shadow-[4px_4px_0_#141414]"
          >
            <span className="h-2 w-2 bg-lime" />
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading jp="技術" title="Skills" />
      </div>

      <div className="mx-auto max-w-6xl [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <Row items={TECH} />
        <Row items={SOFT} reverse slow />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="mc-panel relative mx-auto mt-14 flex max-w-6xl items-center gap-5 overflow-hidden p-6"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 animate-shimmer bg-[linear-gradient(110deg,transparent_40%,rgba(166,240,77,0.2)_50%,transparent_60%)] bg-[length:200%_100%]"
        />
        <div className="relative flex h-14 w-14 shrink-0 items-center justify-center border-4 border-[#141414] bg-lime text-coal">
          <Award size={28} />
        </div>
        <div className="relative">
          <p className="font-jp text-sm text-shu">資格</p>
          <p className="font-display text-base uppercase text-cream sm:text-lg">
            Google Cybersecurity Professional Certificate
          </p>
        </div>
      </motion.div>
    </section>
  );
}
