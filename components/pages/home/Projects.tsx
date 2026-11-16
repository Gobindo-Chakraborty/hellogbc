import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import Project from "@/components/ui/Project";

export default function Projects() {
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
        <Link href="/">
          <span>View All Projects</span>
          <ArrowRight className="" />
        </Link>
      </div>
      <div>{<Project limit={6} />}</div>
    </section>
  );
}
