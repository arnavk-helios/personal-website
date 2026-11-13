"use client";

import { motion } from "framer-motion";

export default function SectionHeading({ jp, title }: { jp: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="mb-12"
    >
      <p className="font-jp text-xl text-shu">{jp}</p>
      <h2 className="mt-1 font-display text-3xl uppercase text-cream sm:text-5xl">{title}</h2>
      <div className="mt-4 h-2 w-24 bg-lime shadow-[4px_4px_0_#141414]" />
    </motion.div>
  );
}
