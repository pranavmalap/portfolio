"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-subtle)] bg-[var(--bg-secondary)]/80 backdrop-blur-md">
      <div className="section-container">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-lg font-bold tracking-tight text-white">
            Pranav<span className="text-[var(--accent)]">.</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-medium md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors hover:text-white ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none md:hidden"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isOpen ? faXmark : faBars} className="h-5 w-5" />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
            isOpen ? "max-h-72 pb-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className={`transition-colors hover:text-white ${
                  pathname === link.href
                    ? "text-white"
                    : "text-[var(--text-secondary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
