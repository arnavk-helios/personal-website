"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

export default function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    setPos({ x: relX * 0.35, y: relY * 0.35 });
  }

  function handleMouseLeave() {
    setPos({ x: 0, y: 0 });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="group relative isolate inline-flex items-center gap-2 overflow-hidden rounded-full border border-signal/40 bg-surface px-8 py-3.5 font-mono text-sm font-medium text-fog transition-colors hover:text-ink"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 scale-x-0 bg-signal transition-transform duration-300 ease-out origin-left group-hover:scale-x-100"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 rounded-full opacity-0 shadow-[0_0_35px_8px_rgba(47,243,208,0.55)] transition-opacity duration-300 group-hover:opacity-100"
      />
      {children}
    </motion.a>
  );
}
