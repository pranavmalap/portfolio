"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import ProjectsIntro from "@/app/components/intros/ProjectIntro";
import ProjectCard from "@/app/components/ProjectCard";
import { projects } from "@/data/profile";

export default function ProjectsPage() {
  const [showContent, setShowContent] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setShowContent(false);
  }, [pathname]);

  return (
    <>
      {!showContent && (
        <ProjectsIntro key={pathname} onComplete={() => setShowContent(true)} />
      )}
      {showContent && (
        <div className="section-container py-14 sm:py-20 md:py-24">
          <h1 className="font-heading text-4xl font-bold text-white">
            My Projects
          </h1>
          <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
            Real projects built during my internship and on my own time —
            spanning Laravel, Next.js, and the MERN stack.
          </p>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
