import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Footer from "@/components/Footer";
import Hotbar from "@/components/Hotbar";
import Achievements from "@/components/Achievements";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Education />
      <Skills />
      <Footer />
      <Hotbar />
      <Achievements />
    </main>
  );
}
