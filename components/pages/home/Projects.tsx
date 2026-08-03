import Image from "next/image";
import Link from "next/link";

import {
  HTML,
  CSS,
  JavaScript,
  React,
  TailwindCSS,
  TypeScript,
  NextJS,
  MongoDB,
} from "@/components/icons";

import { projects } from "@/data/projects";

import Ruler from "@/components/ui/Ruler";

const icons = {
  HTML,
  CSS,
  JavaScript,
  React,
  TailwindCSS,
  TypeScript,
  NextJS,
  MongoDB,
};

export default function Projects() {
  return (
    <section className="mt-31.25 w-full" id="projects">
      <div className="container mx-auto w-10/12 xl:max-w-286.5">
        <h1 className="text-heading-1 xs:text-2xl mb-7.5 text-center text-xl font-bold sm:text-[2rem] md:mb-15">
          Real-World Projects
        </h1>
        <div className="bg-secondary-bg-dark-1 border-secondary-bg-dark-1 rounded-[10px] border">
          <p className="text-secondary-text-light-2 before:bg-live-view relative my-3.75 mr-3.5 ml-7.75 text-xs before:absolute before:-top-1 before:-bottom-1 before:-ml-4 before:w-0.5 before:content-[''] md:my-8 md:mr-13.75 md:ml-21.5 md:text-base md:before:-ml-7.5">
            I may not have worked at a company yet, but I’ve built real-world
            projects and continuously improve my skills through hands-on
            development. I focus on learning by building that helped me improve
            my frontend architecture, responsiveness, UI design, and development
            workflow.
          </p>
        </div>
        <div className="mt-12.5 flex flex-wrap justify-center gap-12.5">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border-secondary-bg-dark-1 bg-secondary-bg max-w-130.75 rounded-[10px] border"
            >
              <Image
                className="rounded-tl-[10px] rounded-tr-[10px]"
                src={project.image}
                width={1200}
                height={630}
                alt={project.imageAlt}
              />
              <div className="mt-5 mb-6 ml-5">
                <div className="flex flex-col gap-3.75">
                  <div className="flex gap-3">
                    {project.technologies.map((tech) => {
                      const Icon = icons[tech];
                      return <Icon key={tech} className="h-4.25 w-auto" />;
                    })}
                  </div>
                  <h3 className="text-secondary-text leading-[100%]">
                    {project.type} :{" "}
                    <span className="text-primary-text font-bold">
                      {project.title}
                    </span>
                  </h3>
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    className="text-secondary-text leading-[100%] hover:underline"
                  >
                    {project.urlText}
                  </Link>
                  <p
                    className={`${project.status === "Completed" ? "text-completion-status" : "text-secondary-text"} bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]`}
                  >
                    {project.status}
                  </p>
                </div>
                <div className="mt-7.5 flex gap-5">
                  <Link
                    className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                    href={project.githubUrl}
                    target="_blank"
                  >
                    Source Code
                  </Link>
                  <Link
                    className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                    href={project.liveUrl}
                    target="_blank"
                  >
                    Live View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Ruler />
    </section>
  );
}
