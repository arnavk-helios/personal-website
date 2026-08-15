"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import NetworkBackground from "./NetworkBackground";
import TypingText from "./TypingText";
import MagneticButton from "./MagneticButton";

const Hero: React.FC = () => {
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
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-edge bg-surface/60 px-4 py-1.5 font-mono text-xs uppercase tracking-wider text-muted backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
            </span>
            Available for collaborations
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl font-bold tracking-tight text-text sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m <span className="text-accent">Arnav</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 h-12 text-xl font-medium text-muted sm:text-2xl"
          >
            <TypingText />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
          >
            B.Tech Computer Science student specializing in secure systems,
            Python development, and exploring modern AI architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            {/* The variants have been removed here to fix the error */}
            <MagneticButton href="#projects">
              View Work
            </MagneticButton>
            <MagneticButton href="#contact">
              Get in Touch
            </MagneticButton>
          </motion.div>
        </div>

        {/* Floating Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-64 w-64 rounded-full border border-edge bg-surface/80 p-2 shadow-2xl backdrop-blur sm:h-80 sm:w-80"
          >
            <div className="relative h-full w-full overflow-hidden rounded-full border border-edge/60 bg-surface">
              <Image
                src="/profile-placeholder.svg"
                alt="Arnav Kshirsagar"
                fill
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
