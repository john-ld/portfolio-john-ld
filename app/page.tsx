import About from "@/components/About/About";
import Contact from "@/components/Contact/Contact";
import Hero from "@/components/Hero/Hero";
import Projects from "@/components/Projects/Projects";
import MatrixRain from "@/components/theme/MatrixRain";

export default function Home() {
  return (
    <main className="min-h-[85vh]">
      <div className="py-40 relative group max-md:py-8">
        <MatrixRain />
        <Hero />
      </div>
      <div className="bg-card py-20 border-t" id="about">
        <About />
      </div>
      <div className="py-20 border-t" id="projects">
        <Projects />
      </div>
      <div className="bg-card py-20 border-y" id="contact">
        <Contact />
      </div>
    </main>
  );
}
