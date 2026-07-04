"use client";
import { useState } from "react";
import ContactIntro from "@/app/components/intros/ContactInto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { profile } from "@/data/profile";

export default function ContactPage() {
  const [showContent, setShowContent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n— ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  }

  return (
    <>
      {!showContent && <ContactIntro onComplete={() => setShowContent(true)} />}

      {showContent && (
        <div className="section-container py-14 sm:py-20 md:py-24">
          <h1 className="font-heading text-4xl font-bold text-white">
            Get in Touch
          </h1>
          <p className="mt-4 max-w-xl text-[var(--text-secondary)]">
            Open to Working Student roles, internships, and junior developer
            positions in Germany. Feel free to reach out.
          </p>

          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <div className="space-y-4">
              <div className="card flex items-center gap-4 p-5">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="h-5 w-5 shrink-0 text-[var(--accent)]"
                />
                <a
                  href={`mailto:${profile.email}`}
                  className="min-w-0 break-words text-sm text-white"
                >
                  {profile.email}
                </a>
              </div>
              <div className="card flex items-center gap-4 p-5">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="h-5 w-5 shrink-0 text-[var(--accent)]"
                />
                <a href={`tel:${profile.phone}`} className="min-w-0 break-words text-sm text-white">
                  {profile.phone}
                </a>
              </div>
              <div className="card flex items-center gap-4 p-5">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="h-5 w-5 shrink-0 text-[var(--accent)]"
                />
                <span className="min-w-0 break-words text-sm text-white">
                  {profile.location}
                </span>
              </div>
              <div className="card flex items-center gap-6 p-5">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="text-[var(--text-secondary)] hover:text-white"
                >
                  <FontAwesomeIcon icon={faGithub} className="h-5 w-5" />
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="text-[var(--text-secondary)] hover:text-white"
                >
                  <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="card space-y-4 p-6">
              <div>
                <label className="text-sm text-[var(--text-secondary)]">
                  Name
                </label>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)]">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>
              <div>
                <label className="text-sm text-[var(--text-secondary)]">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={4}
                  value={form.message}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-lg bg-[var(--bg-primary)] px-4 py-2.5 text-sm text-white focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
                />
              </div>
              <button type="submit" className="btn-primary w-full justify-center">
                Send Message
                <FontAwesomeIcon icon={faPaperPlane} className="h-3.5 w-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
