"use client";

import { useRef, useState, MouseEvent } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function MagneticButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduce = useReducedMotion();
  const [pos, setPos] = useState({ x: 0, y: 0 });

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      x: (e.clientX - rect.left - rect.width / 2) * 0.3,
      y: (e.clientY - rect.top - rect.height / 2) * 0.3,
    });
  }

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPos({ x: 0, y: 0 })}
      animate={{ x: pos.x, y: pos.y }}
      whileTap={{ scale: 0.96 }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.4 }}
      className="group relative inline-flex items-center gap-3 border-4 border-[#141414] bg-lime px-7 py-3 font-display text-sm uppercase text-coal shadow-[6px_6px_0_#141414] transition-[box-shadow,background-color] hover:bg-cream hover:shadow-[2px_2px_0_#141414]"
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 border-2 border-dashed border-lime opacity-0 transition-opacity group-hover:opacity-100"
      />
      {children}
    </motion.a>
  );
}
