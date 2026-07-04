import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import AskAI from "./components/AskAI";
import { profile, skills, projects } from "@/data/profile";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <>
      <Hero />

      {/* About */}
      <section className="section-container py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <h2 className="font-heading text-3xl font-bold text-white md:col-span-1">
            About Me
          </h2>
          <p className="text-base leading-relaxed text-[var(--text-secondary)] md:col-span-2 md:text-lg">
            {profile.about}
          </p>
        </div>
      </section>

      {/* Skills preview */}
      <section className="section-container py-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-white">
            Tech Stack
          </h2>
          <Link
            href="/skills"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            All skills
            <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((group) => (
            <div key={group.category} className="card p-5">
              <p className="text-sm font-semibold uppercase tracking-wider text-[var(--highlight)]">
                {group.category}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[var(--bg-primary)] px-3 py-1 text-xs text-[var(--text-secondary)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured projects */}
      <section className="section-container py-24">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="font-heading text-3xl font-bold text-white">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-hover)]"
          >
            View all
            <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" />
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>

      {/* Ask AI */}
      <section className="section-container py-24">
        <div className="mb-10 text-center">
          <h2 className="font-heading text-3xl font-bold text-white">
            Ask AI about Pranav
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-[var(--text-secondary)]">
            A small assistant trained only on this profile — ask about
            projects, skills, or why you should hire him.
          </p>
        </div>
        <AskAI />
      </section>
    </>
  );
}
