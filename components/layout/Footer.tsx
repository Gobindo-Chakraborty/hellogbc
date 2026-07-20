import Link from "next/link";

import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Twitter from "@/components/icons/Twitter";

export default function Footer() {
  return (
    <footer className="mt-10 flex flex-col items-center gap-5 pb-10">
      <p className="text-secondary-text leading-[100%]">
        &copy; <span className="font-bold">GBC</span> - 2026
      </p>
      <div className="flex items-baseline gap-5">
        <Link href="https://github.com/Gobindo-Chakraborty" target="_blank">
          <Github className="" />
        </Link>

        <Link
          href="https://www.linkedin.com/in/gobindo-chakraborty"
          target="_blank"
        >
          <Linkedin className="" />
        </Link>

        <Link href="https://x.com/hellogbc723" target="_blank">
          <Twitter className="" />
        </Link>
      </div>
      <div className="text-secondary-text flex gap-7.5">
        <Link href="#">License</Link>
        <Link href="#">Terms of Use</Link>
      </div>
    </footer>
  );
}
