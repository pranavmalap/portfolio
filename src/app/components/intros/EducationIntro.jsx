"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function EducationIntro({ onComplete }) {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".intro-line");

      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // Animate each line one by one
      lines.forEach((line, index) => {
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
        Learning never stops,
      </div>
      <div className="intro-line text-6xl text-white font-bold">
        It just graduates.
      </div>
      <div className="intro-line text-6xl text-white font-bold">
        Here's where it began.
      </div>
    </div>
  );
}
