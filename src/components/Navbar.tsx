import { ExternalLink } from "lucide-react";

function Navbar() {
  return (
    <header className="fixed top-5 left-1/2 z-40 w-[94%] max-w-6xl -translate-x-1/2">
      <nav className="glass-card flex items-center justify-between rounded-full px-6 py-3.5">
        <a
          href="#"
          className="flex items-center gap-2.5 text-xl font-bold tracking-tight"
        >
          <span className="h-3 w-3 animate-ping rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500" />

          <span>
            Valeria<span className="text-pink-500">.</span>polanco
          </span>
        </a>

        <div className="hidden items-center gap-7 text-sm font-medium text-slate-300 md:flex">
          <a
            href="#proyectos"
            className="transition hover:text-pink-400"
          >
            Proyectos
          </a>

          <a
            href="#habilidades"
            className="transition hover:text-purple-400"
          >
            Stack & 3D
          </a>

          <a
            href="#experiencia"
            className="transition hover:text-blue-400"
          >
            Trayectoria
          </a>

          <a
            href="#contacto"
            className="transition hover:text-pink-400"
          >
            Contacto
          </a>
        </div>

        <div className="flex items-center gap-3">
          <button className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3.5 py-1.5 text-xs font-bold transition hover:bg-pink-500/30">
            ES / EN
          </button>

          <a
            href="https://www.linkedin.com/in/valeria-polanco23280811/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#72113a] via-pink-600 to-purple-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-pink-600/30 transition hover:opacity-90 sm:text-sm"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            <span>LinkedIn</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;