import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "@/data/profile";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border-subtle)] bg-[var(--bg-secondary)]">
      <div className="section-container grid gap-10 py-10 sm:py-14 md:grid-cols-3">
        <div>
          <p className="text-lg font-bold text-white">
            {profile.name}
            <span className="text-[var(--accent)]">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm text-[var(--text-secondary)]">
            {profile.tagline}
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Navigate
          </p>
          <div className="mt-4 flex flex-col gap-2 text-sm text-[var(--text-secondary)]">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-white">
            Connect
          </p>
          <div className="-ml-2 mt-2 flex items-center gap-1">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="rounded-lg p-2 text-[var(--text-secondary)] transition-colors hover:text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-[var(--border-subtle)] py-6">
        <p className="section-container text-center text-xs text-[var(--text-secondary)]">
          © {year} {profile.name}. Built with Next.js, Tailwind CSS &amp; GSAP.
        </p>
      </div>
    </footer>
  );
}
