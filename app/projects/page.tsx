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

        <div className="group absolute top-0 right-0 h-max w-max">
          <button
            type="button"
            className="flex shrink-0 cursor-pointer items-center gap-1.25"
          >
            <span className="text-light-blue text-[13px]">
              Filter Categories
            </span>
            <FilterIcon className="text-light-blue h-4 w-4 shrink-0" />
          </button>

          <div className="bg-secondary-bg border-secondary-border absolute right-0 hidden w-max rounded-[10px] border-2 p-3.75 leading-[100%] shadow-[-3px_3px_4px_0px_rgba(9,38,65,0.4)] group-focus-within:block group-hover:block">
            <h3 className="text-[14px] font-bold">
              Total ( <span className="text-light-blue">7</span> )
            </h3>

            <label className="mt-3.75 ml-3.75 block cursor-pointer text-[14px] font-semibold">
              <input
                className="accent-primary-text cursor-pointer"
                type="checkbox"
                name="categories"
                id="categories"
                defaultChecked
              />
              <span className="ml-1.75">Websites</span> ({" "}
              <span className="text-light-blue">7</span> )
            </label>

            <div className="mt-3.75 ml-6.25 flex flex-col gap-3.75">
              <label className="cursor-pointer text-[14px]">
                <input
                  className="accent-primary-text cursor-pointer"
                  type="checkbox"
                  name="categories"
                  id="categories"
                />
                <span className="ml-1.75">Portfolio</span> ({" "}
                <span className="text-light-blue">4</span> )
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-7.5 flex flex-col gap-10">{<Project />}</div>
    </section>
  );
}
