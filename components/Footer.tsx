"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import PixelTorii from "./PixelTorii";

const LINKS = [
  { label: "GitHub", handle: "arnavk-helios", href: "https://github.com/arnavk-helios", Icon: Github },
  {
    label: "LinkedIn",
    handle: "arnav-kshirsagar-1135b5386",
    href: "https://www.linkedin.com/in/arnav-kshirsagar-1135b5386",
    Icon: Linkedin,
  },
  { label: "Email", handle: "arnavk0807@gmail.com", href: "mailto:arnavk0807@gmail.com", Icon: Mail },
];

export default function Footer() {
  return (
    <footer id="contact" className="px-6 pb-32 pt-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <SectionHeading jp="連絡" title="Contact" />

        <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-display text-2xl uppercase text-cream sm:text-3xl">
              Let&apos;s build something secure.
            </p>
            <p className="mt-3 font-jp text-lg text-sakura">よろしくお願いします。</p>
          </div>
          <PixelTorii size={6} className="text-shu" />
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {LINKS.map(({ label, handle, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer noopener"
              whileHover={{ scale: 1.06, y: -6 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 12 }}
              className="mc-panel group flex items-center gap-4 p-4"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center border-4 border-[#141414] bg-lime text-coal">
                <Icon size={22} strokeWidth={2} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-display text-xs uppercase text-cream/60">{label}</span>
                <span className="block truncate text-sm text-cream">{handle}</span>
              </span>
              <ArrowUpRight size={16} className="text-cream/50 transition-colors group-hover:text-lime" />
            </motion.a>
          ))}
        </div>

        <p className="mt-16 text-center font-display text-[11px] uppercase text-cream/40">
          Built by Arnav Kshirsagar · Pune · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
