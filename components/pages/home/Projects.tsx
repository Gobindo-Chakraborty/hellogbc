import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import Project from "@/components/ui/Project";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto mt-17.5 w-11/12">
      <div className="relative">
        <div>
          <p className="text-light-blue text-[13px] uppercase">My Projects</p>
          <h2 className="text-light-text mt-2.5 text-[24px] font-bold">
            Real-World Projects
          </h2>
          <p className="mt-3.75 leading-[150%]">
            A selection of websites and applications I’ve built. Each project
            helped me improve my skills and grow as a developer.
          </p>
        </div>

        <Link
          href="/projects"
          className="absolute top-0 right-0 flex shrink-0 items-center gap-1.25"
        >
          <span className="text-light-blue text-[13px]">View All Projects</span>
          <ArrowRight className="text-light-blue h-1.75 w-2.5" />
        </Link>
      </div>

      <div className="mt-7.5 flex flex-col gap-10">{<Project limit={6} />}</div>
    </section>
  );
}
