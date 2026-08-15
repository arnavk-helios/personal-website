"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import NetworkBackground from "./NetworkBackground";
import TypingText from "./TypingText";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 sm:px-10 lg:px-16">
      <div className="absolute inset-0">
        <NetworkBackground />
        <div className="absolute inset-0 grid-fade" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-ink/40 to-ink" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
        {/* Text column */}
        <div className="flex-1 text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-edge bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-ash"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-signal" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Open to opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-balance text-4xl font-bold leading-tight text-fog sm:text-5xl lg:text-6xl"
          >
            Arnav Kshirsagar
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-8 font-mono text-lg text-signal sm:text-xl"
          >
            <span className="text-ash">$ whoami --role </span>
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mx-auto mt-6 max-w-xl text-balance text-base leading-relaxed text-ash lg:mx-0"
          >
            Building secure systems and exploring networks, one commit at a
            time — currently leading a team through the Smart India
            Hackathon.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <MagneticButton href="#about">
              View my work
              <svg
                aria-hidden="true"
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticButton>
            
              href="#footer"
              className="font-mono text-sm text-ash underline decoration-edge underline-offset-4 transition-colors hover:text-signal"
            >
              get in touch →
            </a>
          </motion.div>
        </div>

        {/* Floating profile picture */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative shrink-0"
        >
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative h-56 w-56 sm:h-72 sm:w-72"
          >
            <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-signal/40 via-pulse/30 to-transparent blur-2xl" />
            <div className="absolute inset-0 rounded-full border border-edge bg-surface p-1.5">
              <div className="relative h-full w-full overflow-hidden rounded-full border border-signal/30">
                <Image
                  src="/profile-placeholder.svg"
                  alt="Placeholder profile portrait — replace with your own photo"
                  fill
                  sizes="(min-width: 640px) 288px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.9 }}
        className="relative z-10 mx-auto mt-16 flex flex-col items-center gap-2 text-ash"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.3em]">
          scroll
        </span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="block h-8 w-[1px] bg-gradient-to-b from-signal to-transparent"
        />
      </motion.div>
    </section>
  );
}
