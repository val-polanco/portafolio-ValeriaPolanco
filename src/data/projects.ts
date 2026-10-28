export type ProjectCategory = "uxweb" | "media" | "3d";

export interface Project {
  id: string;
  category: ProjectCategory;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    id: "uniflow",
    category: "uxweb",
    title: "UniFlow | Academic Management",
    subtitle: "Academic Management Web App",
    period: "Ago 2026 - Sept 2026",
    description:
      "Diseño UX/UI y desarrollo en React.js de una aplicación para la organización académica de materias, horarios y seguimiento estudiantil en la UAO.",
    tags: ["React.js", "UX/UI", "Web Dev"],
  },
  {
    id: "synapse",
    category: "uxweb",
    title: "Synapse — Ecosistema Multimedia",
    subtitle: "App Móvil + Dispositivo Wearable",
    period: "Jun 2025 - Dic 2025",
    description:
      "Propuesta integral compuesta por aplicación móvil y dispositivo wearable desarrollada bajo marco ágil Scrum y diseño centrado en el usuario.",
    tags: ["Figma", "Scrum", "Wearable UX"],
  },
  {
    id: "arrendamientos",
    category: "uxweb",
    title: "Solución Digital Arrendamientos",
    subtitle: "Investigación UX & Evaluación Heurística",
    period: "Ene 2025 - May 2025",
    description:
      "Investigación UX, arquitectura de información, prototipado en Figma y evaluación heurística para optimizar la experiencia de alquiler.",
    tags: ["UX Research", "Figma", "Heurística"],
  },
  {
    id: "bancolombia",
    category: "uxweb",
    title: "Recreación Web Bancolombia",
    subtitle: "Frontend Code Challenge",
    period: "Ene 2025 - May 2025",
    description:
      "Recreación práctica de la interfaz y flujos de la plataforma web de Bancolombia construida desde cero mediante HTML5, CSS3 y JavaScript.",
    tags: ["HTML5", "CSS3", "JavaScript"],
  },
  {
    id: "farallones",
    category: "uxweb",
    title: "Web Interactiva Farallones de Cali",
    subtitle: "Web Interactiva + Motion Graphics",
    period: "Ene 2023 - Jun 2023",
    description:
      "Experiencia web educativa e interactiva sobre la biodiversidad del Parque Nacional Natural Farallones integrando HTML y animaciones en After Effects.",
    tags: ["HTML", "After Effects"],
  },
  {
    id: "rinconcito",
    category: "media",
    title: "Rinconcito Guzmán & PISTONS Store",
    subtitle: "Branding & Reels IA",
    period: "2025 - Ago 2026",
    description:
      "Creación de guion, fotografía de producto, edición de audio/video en Premiere Pro y uso de IA para impulsar marcas de ropa y glamping en redes.",
    tags: ["Premiere Pro", "Fotografía", "IA Content"],
  },
  {
    id: "corto",
    category: "media",
    title: 'Cortometraje "Sombras de un hombre"',
    subtitle: "Dirección & Producción Cinematográfica",
    period: "May 2025 - Jul 2025",
    description:
      "Dirección general, escritura de guion, diseño de iluminación, captura de sonido directo y edición de video para cine independiente.",
    tags: ["Dirección de Cine", "Iluminación", "Audio"],
  },
  {
    id: "blender_anim",
    category: "3d",
    title: "Animación Corta 3D en Blender",
    subtitle: "Character Lighting & 3D Render",
    period: "Jul 2023 - Nov 2023",
    description:
      "Desarrollo de escena 3D, composición atmosférica con iluminación neón violeta/rosa, texturizado y renderizado de animación corta en Blender.",
    tags: ["Blender 3D", "Animación 3D"],
  },
  {
    id: "blender_cam",
    category: "3d",
    title: "Modelado de Cámara en Blender",
    subtitle: "Product Modeling & Texturing",
    period: "Jul 2023 - Nov 2023",
    description:
      "Modelado detallado hard-surface de cámara fotográfica clásica en Blender con materiales realistas, iluminación de estudio y render de producto.",
    tags: ["Modelado 3D", "Shading", "Render"],
  },
];