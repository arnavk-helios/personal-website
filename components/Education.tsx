"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const SCHOOLS = [
  {
    name: "Bachelor's Degree in Computer Science",
    school: "Dnyan Prasad Global University by DYP Unitech Society, Pune, Maharashtra",
    period: "2025 – 2029",
  },
  {
    name: "12th Grade (HSC)",
    school: "Pratibha Junior College, Pune, Maharashtra",
    period: "2023 – 2025",
  },
  {
    name: "10th Grade (CBSE)",
    school: "RMD International School, Pune, Maharashtra",
    period: "Graduated 2023",
  },
];

export default function Education() {
  return (
    <section id="education" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading jp="学歴" title="Education" />
        <motion.ul
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="mc-panel"
        >
          {SCHOOLS.map((s, i) => (
            <li
              key={s.name}
              className={`flex flex-col gap-1 border-b-2 border-stone/60 p-6 last:border-none sm:flex-row sm:items-center sm:justify-between ${
                i === 0 ? "border-l-8 border-l-lime" : ""
              }`}
            >
              <div>
                <h3 className={`font-display uppercase ${i === 0 ? "text-lg text-cream" : "text-base text-cream/80"}`}>
                  {s.name}
                </h3>
                <p className="mt-1 text-sm text-cream/60">{s.school}</p>
              </div>
              <p className="text-sm text-lime">{s.period}</p>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
