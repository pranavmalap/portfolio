"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function ContactInto({ onComplete }) {
  const containerRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const lines = gsap.utils.toArray(".intro-line");

      const tl = gsap.timeline({
        onComplete: onComplete,
      });

      // "Don't be Shy" animation
      tl.fromTo(
        lines[0],
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
      )
        .to(lines[0], {
          opacity: 0,
          y: -30,
          duration: 1,
          delay: 1,
        })

        // "Say Hii!" animation
        .fromTo(
          lines[1],
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
        )
        .to(lines[1], {
          opacity: 0,
          y: -30,
          duration: 1,
          delay: 1,
        });
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="h-screen bg-[var(--theme-primary)] flex flex-col items-center justify-center space-y-4"
    >
      <div className="intro-line text-6xl text-white font-bold">
        Don't be Shy
      </div>
      <div className="intro-line text-6xl text-white font-bold">Say Hii!</div>
    </div>
  );
}
