import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";
import { projects } from "@/data/projects";
import Image from "next/image";
import GithubFill from "@/components/icons/GithubFill";

type ProjectProps = {
  limit?: number;
};

export default function Project({ limit }: ProjectProps) {
  const displayedProjects = limit ? projects.slice(0, limit) : projects;

  return displayedProjects.map((project) => (
    <div key={project.title}>
      <Image
        src={project.image}
        width={1200}
        height={630}
        alt={project.imageAlt}
      />
      <h3>
        {project.type} : <span>{project.title}</span>
      </h3>
      <Link href={project.liveUrl} target="_blank">
        {project.urlText}
      </Link>
      <div>
        {project.technologies.map((tech) => {
          return <span key={tech}>{tech}</span>;
        })}
        <span>{project.status}</span>
      </div>
      <div>
        <Link href={project.liveUrl} target="_blank">
          Live Site <ArrowRight className="" />
        </Link>
        <Link href={project.githubUrl} target="_blank">
          <GithubFill className="" />
          Source Code
        </Link>
      </div>
    </div>
  ));
}
