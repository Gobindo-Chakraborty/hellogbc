import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="mx-auto mt-20 w-11/12">
      <p className="text-light-blue text-[13px] uppercase">About Me</p>
      <h2 className="text-light-text mt-2.5 text-[15px] font-bold">
        My Journey & Perspective - Unfiltered
      </h2>
      <p className="text-primary-text mt-3.75 leading-[150%]">
        I specialize in building responsive, clean, and interactive user
        interfaces using modern web technologies. While frontend is my strongest
        area, I also have experience with full-stack development and enjoy
        learning how complete systems work.
      </p>
      <video
        controls
        playsInline
        preload="none"
        poster="/assets/images/gbc-thumbnail.jpg"
        className="mt-10 aspect-video w-full rounded-[7px]"
      >
        <source src="/assets/videos/gbc-intro.mp4" type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <p className="text-primary-text mt-2.5 text-[13px] leading-[150%]">
        A web developer from - Cumilla, Bangladesh
      </p>
      <div className="mt-6.25 flex items-center gap-12.5">
        <button
          type="button"
          className="border-light-blue flex items-center gap-1.25 rounded-xl border-2 py-4 pr-4.25 pl-5.25"
        >
          <span className="text-primary-text text-[10px] font-semibold">
            Download Resume
          </span>
          <ArrowRight className="text-light-blue h-1.75 w-2.5 rotate-90" />
        </button>

        <Link
          className="text-light-blue text-[10px] font-semibold"
          href="/about"
        >
          More Info...
        </Link>
      </div>
    </section>
  );
}
