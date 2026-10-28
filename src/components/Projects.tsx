import { useState } from "react";
import {
  projects,
  type Project,
  type ProjectCategory,
} from "../data/projects";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";

type Filter = "all" | ProjectCategory;

function Projects() {
  const [filter, setFilter] = useState<Filter>("all");

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  const filters: { label: string; value: Filter }[] = [
    { label: "Todos", value: "all" },
    { label: "UX/UI & Desarrollo Web", value: "uxweb" },
    { label: "Audiovisual & Marketing", value: "media" },
    { label: "Modelado & Animación 3D", value: "3d" },
  ];

  return (
    <section
      id="proyectos"
      className="relative z-10 mx-auto max-w-6xl px-6 py-20"
    >
      <div className="mb-10 space-y-3 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-pink-400">
          Portafolio Completo
        </span>

        <h2 className="text-3xl font-bold sm:text-5xl">
          Proyectos & Casos de Estudio
        </h2>

        <p className="mx-auto max-w-2xl text-sm text-slate-400 sm:text-base">
          Explora mis proyectos por categoría y conoce las herramientas,
          procesos y decisiones detrás de cada propuesta.
        </p>
      </div>

      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {filters.map((item) => {
          const isActive = filter === item.value;

          return (
            <button
              key={item.value}
              onClick={() => setFilter(item.value)}
              className={`rounded-full px-5 py-2.5 text-xs font-semibold transition sm:text-sm ${
                isActive
                  ? "bg-gradient-to-r from-[#72113a] via-pink-600 to-purple-600 text-white shadow-lg shadow-pink-600/30"
                  : "glass-card text-slate-300 hover:border-pink-400 hover:text-white"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => setSelectedProject(project)}
          />
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;