"use client";

import { useEffect, useState } from "react";
import { User, Briefcase, Boxes, GraduationCap, Wrench, Mail } from "lucide-react";

const SLOTS = [
  { id: "about", label: "About", jp: "概要", Icon: User },
  { id: "experience", label: "Experience", jp: "経験", Icon: Briefcase },
  { id: "projects", label: "Projects", jp: "制作", Icon: Boxes },
  { id: "education", label: "Education", jp: "学歴", Icon: GraduationCap },
  { id: "skills", label: "Skills", jp: "技術", Icon: Wrench },
  { id: "contact", label: "Contact", jp: "連絡", Icon: Mail },
];

export default function Hotbar() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    SLOTS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return;
      const n = Number(e.key);
      if (n >= 1 && n <= SLOTS.length) {
        document.getElementById(SLOTS[n - 1].id)?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", onKey);

    return () => {
      obs.disconnect();
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <nav aria-label="Sections" className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2">
      <ul className="mc-panel flex gap-1 p-1 sm:gap-2 sm:p-2">
        {SLOTS.map(({ id, label, jp, Icon }, i) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-label={label}
              className={`mc-slot group relative flex h-11 w-11 items-center justify-center text-cream transition-colors hover:text-lime sm:h-14 sm:w-14 ${
                active === id ? "outline outline-4 outline-cream" : ""
              }`}
            >
              <Icon size={20} />
              <span className="absolute bottom-0 right-1 font-display text-[9px] text-cream/60">
                {i + 1}
              </span>
              <span className="pointer-events-none absolute -top-11 left-1/2 hidden -translate-x-1/2 whitespace-nowrap border-2 border-cream bg-coal px-2 py-1 font-display text-[10px] uppercase opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 sm:block">
                {label} · <span className="font-jp normal-case text-shu">{jp}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
