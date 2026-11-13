"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import PixelTorii from "./PixelTorii";

const PLAYER = [
  { jp: "名前", en: "name", value: "Arnav Kshirsagar" },
  { jp: "専攻", en: "major", value: "B.Tech Computer Science & Engineering" },
  { jp: "所属", en: "clubs", value: "Kryptonex Technical Club · Google Developer Group" },
  { jp: "チーム", en: "team", value: "HACKHORIZON_STR (Smart India Hackathon)" },
  { jp: "拠点", en: "base", value: "Pune, India" },
  { jp: "目標", en: "goal", value: "Internship in Japan" },
];

export default function About() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading jp="概要" title="About" />
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="space-y-5 leading-relaxed text-cream/75"
          >
            <p>
              I&apos;m <span className="text-cream">Arnav Kshirsagar</span>, a B.Tech Computer
              Science and Engineering student in Pune with a growing focus on cybersecurity. I like
              understanding how systems break, then building ones that don&apos;t.
            </p>
            <p>
              I lead <span className="text-cream">Team HACKHORIZON_STR</span> as Team Leader at the
              Smart India Hackathon, and I&apos;m interested in open-source networking and secure
              systems.
            </p>
            <p>
              I&apos;m now looking for an <span className="text-lime">internship in Japan</span>,
              where I can learn from engineers who treat quality and reliability as a craft.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mc-panel relative p-6 sm:p-8"
          >
            <PixelTorii size={4} className="absolute right-5 top-5 text-shu" />
            <p className="mb-5 font-display text-sm uppercase text-lime">
              Player <span className="font-jp normal-case text-shu">プレイヤー</span>
            </p>
            <dl>
              {PLAYER.map((row) => (
                <div
                  key={row.en}
                  className="flex flex-col gap-1 border-b-2 border-stone/60 py-3 last:border-none sm:flex-row sm:items-baseline sm:gap-4"
                >
                  <dt className="w-28 shrink-0">
                    <span className="font-jp text-shu">{row.jp}</span>{" "}
                    <span className="text-xs text-cream/50">{row.en}</span>
                  </dt>
                  <dd className="text-sm text-cream">{row.value}</dd>
                </div>
              ))}
            </dl>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
