import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/Projects";
import Skills from "@/components/pages/home/Skills";
import WIP from "@/components/ui/WIP";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <WIP />
    </>
  );
}
