"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import PixelBackground from "./PixelBackground";
import TypingText from "./TypingText";
import MagneticButton from "./MagneticButton";

const container = { hidden: {}, show: { transition: { staggerChildren: 0.1 } } };
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pb-32 pt-20 sm:px-10 lg:px-16"
    >
      <div className="absolute inset-0">
        <PixelBackground />
        <div className="pixel-grid absolute inset-0 [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_40%,transparent_100%)]" />
      </div>

      <p
        aria-hidden="true"
        className="vertical-jp absolute right-6 top-1/4 hidden font-jp text-sm tracking-[0.5em] text-cream/40 lg:block"
      >
        サイバーセキュリティ
      </p>

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 lg:grid-cols-[1.25fr_0.75fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={item}
            className="inline-flex items-center gap-3 border-2 border-cream/40 bg-panel px-3 py-2 font-display text-[11px] uppercase"
          >
            <span className="h-2 w-2 animate-blink bg-lime" />
            <span className="font-jp normal-case text-shu">インターンシップ希望</span>
            <span className="text-cream/50">·</span>
            Open to internships in Japan
          </motion.p>

          <motion.p variants={item} className="mt-6 font-jp text-lg text-sakura">
            こんにちは、アルナヴです。
          </motion.p>

          <motion.h1
            variants={item}
            className="mt-3 font-display text-[clamp(2.4rem,8vw,4.75rem)] uppercase leading-[0.95] text-cream [text-shadow:4px_4px_0_#141414]"
          >
            Arnav
            <br />
            <span className="text-lime">Kshirsagar</span>
          </motion.h1>

          <motion.div variants={item} className="mt-5 h-8 font-body text-lg text-lime sm:text-xl">
            <span className="text-cream/50">&gt; whoami: </span>
            <TypingText />
          </motion.div>

          <motion.p variants={item} className="mt-5 max-w-xl leading-relaxed text-cream/70">
            Cybersecurity student in Pune building secure systems, leading tech-club outreach, and
            working on AI-driven threat forecasting. Looking for a hands-on internship in Japan.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-col items-start gap-6 sm:flex-row sm:items-center"
          >
            <MagneticButton href="#projects">
              View my work
              <span aria-hidden="true">→</span>
            </MagneticButton>
            <a
              href="/ArnavKshirsagarResume.pdf"
              target="_blank"
              rel="noreferrer noopener"
              className="text-sm text-cream underline decoration-stone decoration-2 underline-offset-4 transition-colors hover:text-lime"
            >
              Resume (PDF) ↗
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto"
        >
          <div
            aria-hidden="true"
            className="pixel-circle absolute -right-8 -top-8 h-48 w-48 bg-shu sm:h-64 sm:w-64"
          />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            className="relative h-56 w-56 drop-shadow-[8px_8px_0_#141414] sm:h-72 sm:w-72"
          >
            <div className="pixel-clip h-full w-full bg-cream p-1.5">
              <div className="pixel-clip-sm relative h-full w-full overflow-hidden">
                <Image
                  src="/arnavkshirsagar.jpeg"
                  alt="Arnav Kshirsagar"
                  fill
                  sizes="(min-width: 640px) 288px, 224px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -left-4 flex h-14 w-14 -rotate-6 items-center justify-center border-4 border-shu bg-coal font-jp text-3xl text-shu"
            >
              守
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
