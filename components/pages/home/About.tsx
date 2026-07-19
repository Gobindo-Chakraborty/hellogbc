import Ruler from "@/components/ui/Ruler";
import Image from "next/image";

export default function About() {
  return (
    <section className="mt-12.5">
      <div className="container mx-auto w-11/12">
        <article>
          <h1 className="text-heading-1 text-center text-xl font-bold">
            About Me
          </h1>
          <p className="mt-3.75 text-center font-medium">
            I specialize in building responsive, clean, and interactive user
            interfaces using modern web technologies. While frontend is my
            strongest area, I also have experience with{" "}
            <span className="text-live-view">full-stack development</span> and
            enjoy learning how complete systems work.
          </p>
          <p className="mt-7.5 text-center font-medium">
            Beyond coding, I work with tools like{" "}
            <span className="text-live-view">Figma</span> and{" "}
            <span className="text-live-view">Adobe software</span> to create
            better user experiences and visual designs.
          </p>
        </article>

        <Image
          className="mt-7.5"
          src="/assets/images/coding-and-gbc-question-mark-image.webp"
          width={1061}
          height={1000}
          alt="An illustration that shows a question mark and curiosity"
        />

        <div className="mt-7.5 flex flex-col items-center gap-5">
          <span className="text-secondary-text border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border px-4 py-1.75 text-[15px] font-medium">
            Detail Focused
          </span>
          <span className="text-secondary-text border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border px-4 py-1.75 text-[15px] font-medium">
            Continuous Learner
          </span>
          <span className="text-secondary-text border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border px-4 py-1.75 text-[15px] font-medium">
            Design + Development
          </span>
        </div>
      </div>
      <Ruler />
    </section>
  );
}
