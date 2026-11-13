"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Trophy } from "lucide-react";

const TOASTS: Record<string, { title: string; body: string }> = {
  experience: { title: "Advancement Made!", body: "Outreach & Partnership Lead" },
  skills: { title: "Advancement Made!", body: "Google Cybersecurity Certificate" },
};

export default function Achievements() {
  const [toast, setToast] = useState<{ title: string; body: string } | null>(null);

  useEffect(() => {
    const seen = new Set<string>();
    let timer: ReturnType<typeof setTimeout>;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const id = e.target.id;
          if (e.isIntersecting && !seen.has(id) && TOASTS[id]) {
            seen.add(id);
            setToast(TOASTS[id]);
            clearTimeout(timer);
            timer = setTimeout(() => setToast(null), 4000);
          }
        });
      },
      { threshold: 0.35 }
    );

    Object.keys(TOASTS).forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => {
      obs.disconnect();
      clearTimeout(timer);
    };
  }, []);

  return (
    <div role="status" aria-live="polite" className="pointer-events-none fixed right-4 top-4 z-50">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
            className="mc-panel flex items-center gap-3 p-3"
          >
            <span className="flex h-10 w-10 items-center justify-center bg-lime text-coal">
              <Trophy size={20} />
            </span>
            <span>
              <span className="block font-display text-[11px] uppercase text-lime">{toast.title}</span>
              <span className="block text-sm text-cream">{toast.body}</span>
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
