import About from "@/components/pages/home/About";
import Hero from "@/components/pages/home/Hero";
import Projects from "@/components/pages/home/Projects";
import WIP from "@/components/ui/WIP";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <About />
      <WIP />
    </>
  );
}
