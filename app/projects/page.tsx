import FilterIcon from "@/components/icons/FilterIcon";
import Project from "@/components/ui/Project";

export default function ProjectPage() {
  return (
    <section>
      <div>
        <div>
          <p>My Projects</p>
          <h2>Real-World Projects</h2>
          <p>
            A selection of websites and applications I’ve built. Each project
            helped me improve my skills and grow as a developer.
          </p>
        </div>
        <div>
          <button type="button">
            Filter Categories <FilterIcon className="" />
          </button>
        </div>
      </div>
      <div>{<Project />}</div>
    </section>
  );
}
