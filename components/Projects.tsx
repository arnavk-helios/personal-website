"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const PROJECTS = [
  {
    title: "What the Hack",
    sub: "AI-based Network Attack Forecasting",
    meta: ["SIH 2026", "Problem Statement SIH26153", "NTRO"],
    theme: "Theme: Blockchain & Cybersecurity · Category: Software",
    desc: "Explainable early-warning system that forecasts likely cyberattacks from network-traffic behavior before they fully materialize. Groups traffic into short windows, extracts behavioral features, predicts attack risk 1–5 minutes ahead, and gives security analysts ranked, human-readable reasons and recommended actions.",
    tags: ["Early warning", "Explainable AI", "Network traffic"],
    featured: true,
  },
  {
    title: "DevSecOps Code Review Automator",
    sub: "Multi-agent AI security pipeline",
    meta: [],
    theme: "",
    desc: "Multi-agent AI pipeline that intercepts GitHub pull requests, runs Static Application Security Testing (SAST), coordinates specialized LLM agent reviews, alerts engineering channels, and logs full execution audit trails.",
    tags: ["SAST", "LLM agents", "GitHub PRs"],
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading jp="制作" title="Projects" />
        <div className="grid gap-10 md:grid-cols-2">
          {PROJECTS.map((p, i) => {
            const f = p.featured;
            return (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ x: -4, y: -4 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`${f ? "mc-panel-lime" : "mc-panel"} flex flex-col p-6 sm:p-8`}
              >
                {p.meta.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {p.meta.map((m) => (
                      <span key={m} className="border-2 border-coal px-2 py-0.5 font-display text-[10px] uppercase">
                        {m}
                      </span>
                    ))}
                  </div>
                )}
                <h3 className="font-display text-xl uppercase sm:text-2xl">{p.title}</h3>
                <p className={`mt-1 text-sm ${f ? "text-coal/80" : "text-lime"}`}>{p.sub}</p>
                {p.theme && <p className="mt-2 text-xs text-coal/70">{p.theme}</p>}
                <p className={`mt-5 text-sm leading-relaxed ${f ? "text-coal/90" : "text-cream/75"}`}>
                  {p.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2 pt-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className={`border-2 px-2 py-0.5 text-xs ${f ? "border-coal" : "border-cream/40 text-cream/80"}`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
