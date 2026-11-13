"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const ROLES = [
  {
    role: "Cybersecurity Member",
    org: "Google Developer Group",
    period: "Jul 2026 – Present",
    place: "",
    bullets: [
      "Contribute to the community's cybersecurity vertical: threat detection, secure coding practices and vulnerability analysis.",
      "Join workshops, study sessions and hands-on security exercises to build practical skills.",
      "Apply Google Cybersecurity training to security-focused projects with fellow members.",
    ],
  },
  {
    role: "Outreach and Partnership Lead",
    org: "Kryptonex Technical Club",
    period: "Sep 2025 – Present",
    place: "Pune, Maharashtra",
    bullets: [
      "Lead outreach to build technical partnerships with industry professionals, sponsors and organizations.",
      "Organize and promote technical events and workshops that connect students with the tech industry.",
      "Drive student engagement and club growth by building relationships with external stakeholders.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading jp="経験" title="Experience" />
        <ul className="space-y-10">
          {ROLES.map((r, i) => (
            <motion.li
              key={r.role}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mc-panel p-6 sm:p-8"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-display text-xl uppercase text-cream sm:text-2xl">{r.role}</h3>
                  <p className="mt-1 text-lime">{r.org}</p>
                </div>
                <p className="text-sm text-cream/60 sm:text-right">
                  {r.period}
                  {r.place && <span className="block">{r.place}</span>}
                </p>
              </div>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-cream/75">
                {r.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 bg-lime" />
                    {b}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
