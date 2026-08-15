"use client";

import { useEffect, useState } from "react";

const PHRASES = [
  "B.Tech CS Student",
  "Cybersecurity Enthusiast",
  "Python & SQL Developer",
  "AI Explorer",
];

const TYPE_SPEED = 65;
const DELETE_SPEED = 35;
const HOLD_TIME = 1400;
const GAP_TIME = 400;

export default function TypingText() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting" | "gap">(
    "typing"
  );

  useEffect(() => {
    const current = PHRASES[phraseIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (text.length < current.length) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length + 1)),
          TYPE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("holding"), HOLD_TIME);
      }
    } else if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (text.length > 0) {
        timeout = setTimeout(
          () => setText(current.slice(0, text.length - 1)),
          DELETE_SPEED
        );
      } else {
        timeout = setTimeout(() => setPhase("gap"), GAP_TIME);
      }
    } else if (phase === "gap") {
      setPhraseIndex((i) => (i + 1) % PHRASES.length);
      setPhase("typing");
    }

    return () => clearTimeout(timeout);
  }, [text, phase, phraseIndex]);

  return (
    <span className="inline-flex items-baseline">
      <span>{text}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.05em] animate-blink bg-signal"
      />
    </span>
  );
}
