const technologies = [
  "Figma & Framer",
  "React.js • HTML5 • CSS3 • JavaScript",
  "Node.js • MySQL • Python",
  "Blender 3D • Unity",
  "Premiere Pro • After Effects • Photoshop",
  "Seguridad Digital • MinTIC 2026",
];

function TechMarquee() {
  const repeatedTechnologies = [...technologies, ...technologies];

  return (
    <section className="relative z-10 overflow-hidden border-y border-white/10 bg-black/40 py-5">
      <div className="animate-marquee flex w-max items-center gap-10">
        {repeatedTechnologies.map((technology, index) => (
          <div
            key={`${technology}-${index}`}
            className="flex shrink-0 items-center gap-3 text-sm font-semibold text-slate-300"
          >
            <span className="h-2 w-2 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500" />
            <span>{technology}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TechMarquee;