type Technology =
  | "HTML"
  | "CSS"
  | "JavaScript"
  | "React"
  | "TailwindCSS"
  | "TypeScript"
  | "NextJS"
  | "MongoDB";

export interface ProjectProps {
  title: string;
  type: string;
  image: string;
  imageAlt: string;
  liveUrl: string;
  urlText: string;
  githubUrl: string;
  status: "Completed" | "In Progress";
  technologies: Technology[];
}
