import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechMarquee from "./components/TechMarquee";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="min-h-screen bg-[#050308] text-white">
      <Navbar />
      <Hero />
      <TechMarquee />
      <Projects />
    </main>
  );
}

export default App;