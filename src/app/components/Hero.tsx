"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "@/data/profile";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".hero-eyebrow",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          ".hero-name",
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.8 },
          "-=0.3"
        )
        .fromTo(
          ".hero-role",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.4"
        )
        .fromTo(
          ".hero-tagline",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.6 },
          "-=0.4"
        )
        .fromTo(
          ".hero-cta",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.12 },
          "-=0.3"
        )
        .fromTo(
          ".hero-social",
          { opacity: 0 },
          { opacity: 1, duration: 0.5 },
          "-=0.2"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="hero-glow relative flex min-h-dvh flex-col items-center justify-center overflow-hidden px-6 py-20 text-center"
    >
      <div className="section-container flex flex-col items-center">
        <p className="hero-eyebrow mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[var(--text-secondary)] sm:tracking-[0.3em] md:text-sm">
          Working Student &amp; Internship Ready
        </p>

        <h1 className="hero-name gradient-text text-4xl font-bold leading-tight sm:text-5xl md:text-7xl">
          {profile.name}
        </h1>

        <h2 className="hero-role mt-4 text-xl font-semibold text-[var(--accent)] md:text-2xl">
          {profile.role}
        </h2>

        <p className="hero-tagline mt-6 max-w-2xl text-base text-[var(--text-secondary)] md:text-lg">
          {profile.tagline}
        </p>

        <div className="mt-10 flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:gap-4">
          <Link
            href="/projects"
            className="hero-cta btn-primary w-full justify-center sm:w-auto"
          >
            View Projects
            <FontAwesomeIcon icon={faArrowRight} className="h-3.5 w-3.5" />
          </Link>
          <Link
            href="/contact"
            className="hero-cta btn-secondary w-full justify-center sm:w-auto"
          >
            Contact Me
          </Link>
          <a
            href={profile.resumeUrl}
            download
            className="hero-cta btn-secondary w-full justify-center sm:w-auto"
          >
            Download CV
            <FontAwesomeIcon icon={faFileArrowDown} className="h-3.5 w-3.5" />
          </a>
        </div>

        <div className="hero-social mt-12 flex items-center gap-6 text-[var(--text-secondary)]">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} className="h-6 w-6" />
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
}
