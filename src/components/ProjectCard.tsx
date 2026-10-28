import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <article
      onClick={onClick}
      className="glass-card group flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-3xl"
    >
      <div>
        <div className="relative flex h-48 flex-col justify-between bg-gradient-to-br from-[#72113a] via-purple-900 to-blue-950 p-5">
          <span className="w-fit rounded-full border border-pink-400/30 bg-black/50 px-3 py-1 text-[10px] font-bold uppercase text-pink-200">
            {project.period}
          </span>

          <div>
            <h4 className="text-xl font-extrabold tracking-tight">
              {project.title}
            </h4>

            <p className="text-xs text-pink-200">
              {project.subtitle}
            </p>
          </div>
        </div>

        <div className="space-y-2.5 p-6">
          <h3 className="text-lg font-bold transition group-hover:text-pink-400">
            {project.title}
          </h3>

          <p className="text-xs leading-relaxed text-slate-300">
            {project.description}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5 px-6 pb-5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-pink-500/15 px-2.5 py-0.5 text-[11px] text-pink-300"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}

export default ProjectCard;