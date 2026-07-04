"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faFileArrowDown } from "@fortawesome/free-solid-svg-icons";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-[var(--border-subtle)] bg-[var(--bg-secondary)]/95 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-transparent bg-[var(--bg-secondary)]/40 backdrop-blur-sm"
      }`}
    >
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-white"
          >
            Pranav<span className="text-[var(--accent)]">.</span>
          </Link>

          <div className="hidden items-center gap-7 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative pb-1 transition-colors hover:text-white ${
                    active
                      ? "text-white after:absolute after:-bottom-0.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[var(--accent)]"
                      : "text-[var(--text-secondary)]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex">
            <a
              href={profile.resumeUrl}
              download
              className="flex items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-medium text-white transition-colors hover:border-[var(--accent)]"
            >
              Resume
              <FontAwesomeIcon icon={faFileArrowDown} className="h-3.5 w-3.5" />
            </a>
          </div>

          <button
            onClick={toggleMenu}
            className="-mr-2 p-2 text-white focus:outline-none md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-5 w-5" />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-96 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-1 text-base font-medium">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className={`rounded-lg px-3 py-2.5 transition-colors ${
                    active
                      ? "bg-[var(--bg-primary)] text-white"
                      : "text-[var(--text-secondary)] hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
          <a
            href={profile.resumeUrl}
            download
            onClick={closeMenu}
            className="btn-primary mt-4 w-full justify-center"
          >
            Download Resume
            <FontAwesomeIcon icon={faFileArrowDown} className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}
