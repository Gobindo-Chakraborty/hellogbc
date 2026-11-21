import FilterIcon from "@/components/icons/FilterIcon";
import Project from "@/components/ui/Project";

export default function ProjectPage() {
  return (
    <section id="projects" className="mx-auto mt-12.5 mb-20 w-11/12 pt-12.5">
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

        <button
          type="button"
          className="absolute top-0 right-0 flex shrink-0 cursor-pointer items-center gap-1.25"
        >
          <span className="text-light-blue text-[13px]">Filter Categories</span>
          <FilterIcon className="text-light-blue h-4 w-4 shrink-0" />
        </button>
      </div>

      <div className="mt-7.5 flex flex-col gap-10">{<Project />}</div>
    </section>
  );
}
