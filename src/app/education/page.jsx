"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import EducationIntro from "../components/intros/EducationIntro";
import { education, activities, languages } from "@/data/profile";

export default function EducationPage() {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
  }, [pathname]);

  return (
    <>
      {!showContent && (
        <EducationIntro
          key={pathname}
          onComplete={() => setShowContent(true)}
        />
      )}
      {showContent && (
        <div className="section-container py-14 sm:py-20 md:py-24">
          <h1 className="font-heading text-4xl font-bold text-white">
            Education
          </h1>

          <div className="mt-12 space-y-6">
            {education.map((item) => (
              <div key={item.degree} className="card p-6">
                <p className="font-heading text-lg font-semibold text-white">
                  {item.degree}
                </p>
                <p className="mt-1 text-[var(--accent)]">{item.institution}</p>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  {item.period}
                </p>
              </div>
            ))}
          </div>

          <h2 className="font-heading mt-12 text-2xl font-bold text-white md:mt-16">
            Extracurricular
          </h2>
          <div className="mt-6 space-y-6">
            {activities.map((activity) => (
              <div key={activity.role} className="card p-6">
                <p className="font-heading text-lg font-semibold text-white">
                  {activity.role}
                </p>
                <p className="mt-1 text-[var(--accent)]">{activity.org}</p>
                <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[var(--text-secondary)]">
                  {activity.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <h2 className="font-heading mt-12 text-2xl font-bold text-white md:mt-16">
            Languages
          </h2>
          <div className="mt-6 flex flex-wrap gap-4">
            {languages.map((lang) => (
              <span
                key={lang.name}
                className="rounded-full border border-[var(--border-subtle)] px-4 py-2 text-sm text-[var(--text-secondary)]"
              >
                {lang.name} · {lang.level}
              </span>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
