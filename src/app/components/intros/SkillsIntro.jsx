"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function SkillsIntro({ onComplete }) {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".intro-line");

      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      lines.forEach((line) => {
        tl.fromTo(
          line,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        ).to(line, {
          opacity: 0,
          y: -30,
          duration: 1,
          delay: 1,
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-[var(--theme-primary)] flex flex-col items-center justify-center space-y-4"
    >
      <div className="intro-line text-6xl text-white font-bold">
        You've got requirements,
      </div>
      <div className="intro-line text-6xl text-white font-bold">
        I've got the stack.
      </div>
      <div className="intro-line text-6xl text-white font-bold">
        Here's what I bring.
      </div>
    </div>
  );
}
