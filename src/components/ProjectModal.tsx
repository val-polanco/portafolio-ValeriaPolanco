import type { Project } from "../data/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass-card relative w-full max-w-xl rounded-3xl border border-pink-500/40 p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-5 top-4 text-2xl text-slate-400 transition hover:text-white"
        >
          ×
        </button>

        <div className="space-y-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-pink-400">
              {project.period}
            </span>

            <h2 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              {project.title}
            </h2>

            <p className="mt-1 text-sm text-purple-300">
              {project.subtitle}
            </p>
          </div>

          <p className="text-sm leading-relaxed text-slate-300">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-pink-500/20 bg-pink-500/10 px-3 py-1 text-xs text-pink-300"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="border-t border-white/10 pt-5">
            <p className="text-xs leading-relaxed text-slate-400">
              Próximamente este proyecto incluirá capturas, proceso de diseño,
              enlace de demostración y repositorio cuando estén disponibles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;