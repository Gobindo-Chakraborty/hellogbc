import ArrowRight from "@/components/icons/ArrowRight";
import Link from "next/link";

export default function About() {
  return (
    <section>
      <p>About Me</p>
      <h2>My Journey & Perspective - Unfiltered</h2>
      <p>
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
        className="aspect-video w-full rounded-xl"
      >
        <source src="/assets/videos/gbc-intro.mp4" type="video/mp4" />
        Your browser does not support the video element.
      </video>
      <p>A web developer from - Cumilla, Bangladesh</p>
      <div>
        <button type="button">
          Download Resume <ArrowRight className="rotate-90" />
        </button>
        <Link href="/">More Info...</Link>
      </div>
    </section>
  );
}
