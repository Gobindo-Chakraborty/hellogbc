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
    <div
      key={project.title}
      className="border-secondary-border bg-secondary-bg rounded-[10px] border-2 px-2.75 pt-2.5 pb-3.75"
    >
      <Image
        className="rounded-[7px]"
        src={project.image}
        width={1200}
        height={630}
        alt={project.imageAlt}
      />
      <div className="mt-5 flex flex-col gap-5">
        <h3 className="">
          <span className="text-secondary-text text-[13px]">
            {project.type}
          </span>{" "}
          :{" "}
          <span className="text-light-text text-[16px] font-semibold">
            {project.title}
          </span>
        </h3>
        <Link
          className="text-secondary-text text-[15px] hover:underline"
          href={project.liveUrl}
          target="_blank"
        >
          {project.urlText}
        </Link>
        <div className="flex items-center gap-7.5">
          <div className="flex gap-2">
            {project.technologies.map((tech) => {
              return (
                <span
                  className="text-light-blue-soft bg-soft-light-bg border-secondary-border rounded-full border px-2 py-1 text-[10px] font-bold"
                  key={tech}
                >
                  {tech}
                </span>
              );
            })}
          </div>
          <span className="text-status-text text-[10px] font-bold">
            {project.status}
          </span>
        </div>
      </div>

      <div className="mt-7.5 flex items-center gap-12.5">
        <a
          className="text-light-blue-soft flex items-center gap-1.25"
          href={project.liveUrl}
          target="_blank"
        >
          <span className="text-[13px] font-bold">Live Site</span>
          <ArrowRight className="h-1.75 w-2.5" />
        </a>
        <a
          className="text-secondary-text flex items-center gap-1.25"
          href={project.githubUrl}
          target="_blank"
        >
          <GithubFill className="h-4 w-4" />
          <span className="text-[13px] font-bold">Source Code</span>
        </a>
      </div>
    </div>
  ));
}
