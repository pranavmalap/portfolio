"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SkillsIntro from "@/app/components/intros/SkillsIntro";
import { skills } from "@/data/profile";

export default function SkillsPage() {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
  }, [pathname]);

  return (
    <>
      {!showContent && (
        <SkillsIntro key={pathname} onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <div className="section-container py-24">
          <h1 className="font-heading text-4xl font-bold text-white">
            Skills &amp; Tech Stack
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
            Technologies I use regularly, from frontend interfaces to backend
            APIs and databases.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {skills.map((group) => (
              <div key={group.category} className="card p-6">
                <p className="text-sm font-semibold uppercase tracking-wider text-[var(--highlight)]">
                  {group.category}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[var(--bg-primary)] px-3 py-1.5 text-sm text-[var(--text-secondary)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
