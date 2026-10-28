import { Download, Sparkles } from "lucide-react";

function Hero() {
  return (
    <section className="relative z-10 flex min-h-screen items-center justify-center px-6 pb-12 pt-28">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-12">

        <div className="space-y-6 text-center md:col-span-7 md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-[#72113a]/30 px-4 py-1.5 text-xs font-semibold text-pink-300">
            <span className="h-2 w-2 animate-pulse rounded-full bg-pink-400" />

            <span>
              Ingeniería Multimedia 9.º Semestre (UAO) • Cali / Yumbo •
              Híbrido o Remoto
            </span>
          </div>

          <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">
            Hola, soy{" "}
            <span className="text-gradient">
              Valeria Polanco
            </span>
          </h1>

          <p className="text-lg font-normal leading-relaxed text-slate-300 sm:text-xl">
            <strong className="text-white">
              UX/UI Designer, Frontend Developer & Digital Content Creator.
            </strong>{" "}
            Transformo ideas complejas en aplicaciones web interactivas,
            sistemas UX/UI centrados en el usuario, modelado 3D y narrativas
            audiovisuales potenciadas con IA.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start">
            <a
              href="#proyectos"
              className="flex items-center gap-2 rounded-full bg-gradient-to-r from-[#72113a] via-pink-600 to-purple-600 px-7 py-3.5 font-semibold shadow-xl shadow-pink-600/25 transition hover:scale-105"
            >
              <span>Ver mis proyectos</span>
              <Sparkles className="h-4 w-4" />
            </a>

            <a
              href="/Hoja-de-vida-Valeria_Polanco_2026_Oct.pdf"
              download
              className="glass-card flex items-center gap-2 rounded-full px-6 py-3.5 font-semibold hover:border-pink-400"
            >
              <Download className="h-4 w-4 text-pink-400" />
              <span>Descargar CV</span>
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-center md:text-left">
            <div>
              <p className="text-xl font-bold text-pink-400 sm:text-2xl">
                10+ Proyectos
              </p>
              <p className="text-xs text-slate-400">
                UX/UI, React, 3D & Cine
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-purple-400 sm:text-2xl">
                Bilingüe B2/C1
              </p>
              <p className="text-xs text-slate-400">
                US Market Exp • Duolingo 129
              </p>
            </div>

            <div>
              <p className="text-xl font-bold text-blue-400 sm:text-2xl">
                Full Creative
              </p>
              <p className="text-xs text-slate-400">
                Figma + Código + Blender
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center md:col-span-5">
          <div className="group relative w-72 sm:w-80">
            <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-[#72113a] via-pink-500 to-blue-500 opacity-75 blur-xl transition duration-500 group-hover:opacity-100" />

            <div className="glass-card relative flex flex-col items-center space-y-4 rounded-3xl p-5 text-center">
              <div className="h-56 w-48 overflow-hidden rounded-2xl border-2 border-pink-500/50">
                <img
                  src="/perfil.jpg"
                  alt="Valeria Polanco"
                  className="h-full w-full object-cover"
                />
              </div>

              <div>
                <h3 className="text-lg font-bold">
                  Valeria (Val) Polanco
                </h3>

                <p className="text-xs font-medium text-pink-400">
                  Universidad Autónoma de Occidente (UAO)
                </p>
              </div>

              <div className="flex flex-wrap justify-center gap-1.5">
                <span className="rounded-full border border-pink-500/30 bg-pink-500/20 px-2.5 py-1 text-[11px] text-pink-300">
                  React.js
                </span>

                <span className="rounded-full border border-purple-500/30 bg-purple-500/20 px-2.5 py-1 text-[11px] text-purple-300">
                  Figma & Framer
                </span>

                <span className="rounded-full border border-blue-500/30 bg-blue-500/20 px-2.5 py-1 text-[11px] text-blue-300">
                  Blender 3D
                </span>

                <span className="rounded-full border border-pink-500/30 bg-[#72113a]/70 px-2.5 py-1 text-[11px] text-pink-200">
                  Adobe Suite
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;