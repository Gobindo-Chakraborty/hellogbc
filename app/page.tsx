import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/Projects";
import About from "@/components/pages/home/About";
import Skills from "@/components/pages/home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <div>
        <About />
        <Skills />
      </div>
    </>
  );
}
