import Link from "next/link";

import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Twitter from "@/components/icons/Twitter";

export default function Footer() {
  return (
    <footer className="bg-secondary-darker-bg border-secondary-border w-full border-t-2">
      <div className="mx-auto mb-10 w-11/12 text-center">
        <p className="mt-10.25">
          &copy; <span className="font-bold">GBC</span> - 2026
        </p>
        <nav>
          <ul className="mt-5 flex justify-center gap-5">
            <li>
              <a
                href="https://github.com/Gobindo-Chakraborty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gobindo-chakraborty"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/hellogbc723"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="" />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mt-5">
          <ul className="flex justify-center gap-5 text-[12px]">
            <li>
              <Link href="#">Home</Link>
            </li>
            <li>
              <Link href="#">Projects</Link>
            </li>
            <li>
              <Link href="#">About</Link>
            </li>
            <li>
              <Link href="#">Skills</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
