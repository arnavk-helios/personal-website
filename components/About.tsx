"use client";

import { motion } from "framer-motion";

const FACTS = [
  { label: "role", value: "B.Tech CSE Student" },
  { label: "team", value: "HACKHORIZON_STR" },
  { label: "event", value: "Smart India Hackathon" },
  { label: "focus", value: "Networking & Secure Systems" },
];

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            01 · About
          </p>
          <h2 className="mt-4 text-3xl font-bold text-fog sm:text-4xl">
            Who I am
          </h2>
          <p className="mt-6 max-w-md text-balance leading-relaxed text-ash">
            I&apos;m Arnav Kshirsagar, a B.Tech Computer Science and
            Engineering student who likes taking systems apart to understand
            how they fail — and then building them to not fail. I spend most
            of my time between code, networks, and whatever the next
            hackathon throws at me.
          </p>
          <p className="mt-4 max-w-md text-balance leading-relaxed text-ash">
            I currently lead{" "}
            <span className="text-fog">Team HACKHORIZON_STR</span> as Team
            Leader for the{" "}
            <span className="text-fog">Smart India Hackathon</span>, where
            I coordinate scope, architecture, and delivery under a hard
            clock. Outside of that, I&apos;m drawn to open-source
            networking projects and secure-systems design — the kind of
            problems where a small oversight has a very loud consequence.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-2xl border border-edge bg-surface/60 p-6 font-mono text-sm shadow-[0_0_60px_-15px_rgba(47,243,208,0.15)] backdrop-blur-sm sm:p-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-[#FF5F57]" />
              <span className="h-3 w-3 rounded-full bg-[#FEBC2E]" />
              <span className="h-3 w-3 rounded-full bg-[#28C840]" />
              <span className="ml-3 text-xs text-ash">profile.json</span>
            </div>
            <dl className="space-y-3">
              {FACTS.map((fact, i) => (
                <motion.div
                  key={fact.label}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.05 * i }}
                  className="flex flex-wrap items-baseline gap-x-2 border-b border-edge/60 pb-3 last:border-none last:pb-0"
                >
                  <dt className="text-pulse">&quot;{fact.label}&quot;:</dt>
                  <dd className="text-fog">&quot;{fact.value}&quot;</dd>
                </motion.div>
              ))}
            </dl>
          </div>

          <motion.div
            aria-hidden="true"
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-4 -top-4 h-20 w-20 rounded-full bg-pulse/20 blur-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
