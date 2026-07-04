import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import type { Project } from "@/data/profile";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card flex h-full flex-col justify-between p-6 transition-transform hover:-translate-y-1 hover:border-[var(--accent)]/50">
      <div>
        <h3 className="font-heading text-lg font-semibold text-white">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-secondary)]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.link || project.github) && (
        <div className="mt-6 flex items-center gap-4 text-sm font-medium">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[var(--accent)] hover:text-[var(--accent-hover)]"
            >
              Live site
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="h-3 w-3"
              />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-[var(--text-secondary)] hover:text-white"
            >
              <FontAwesomeIcon icon={faGithub} className="h-3.5 w-3.5" />
              Code
            </a>
          )}
        </div>
      )}
    </div>
  );
}
