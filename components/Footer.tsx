"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, ArrowUpRight } from "lucide-react";

const LINKS = [
  {
    label: "GitHub",
    handle: "arnavk-helios",
    href: "https://github.com/arnavk-helios",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    handle: "arnav-kshirsagar-1135b5386",
    href: "https://www.linkedin.com/in/arnav-kshirsagar-1135b5386",
    Icon: Linkedin,
  },
];

export default function Footer() {
  return (
    <footer id="footer" className="relative border-t border-edge px-6 py-20 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-signal">
            03 · Connect
          </p>
          <h2 className="text-3xl font-bold text-fog sm:text-4xl">
            Let&apos;s build something secure.
          </h2>
          <p className="max-w-md text-balance text-ash">
            Open to internships, collaborations, and anything involving
            networks, security, or a good hackathon deadline.
          </p>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
          {LINKS.map(({ label, handle, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer noopener"
              whileHover={{ scale: 1.08, y: -6 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              className="group flex w-full max-w-xs items-center gap-4 rounded-2xl border border-edge bg-surface px-6 py-4 transition-colors hover:border-signal/50 sm:w-auto"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-edge bg-surface-2 text-fog transition-colors group-hover:border-signal group-hover:text-signal">
                <Icon size={20} strokeWidth={1.75} />
              </span>
              <span className="flex flex-1 flex-col text-left">
                <span className="font-mono text-xs uppercase tracking-widest text-ash">
                  {label}
                </span>
                <span className="text-sm text-fog">{handle}</span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-ash transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-signal"
              />
            </motion.a>
          ))}
        </div>

        <p className="mt-16 text-center font-mono text-xs text-ash">
          designed &amp; built by Arnav Kshirsagar · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
