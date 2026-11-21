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
                className="hover:text-light-blue-soft"
              >
                <Github className="h-5.5 w-5.5" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gobindo-chakraborty"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-blue-soft"
              >
                <Linkedin className="h-4 w-4.25" />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/hellogbc723"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-blue-soft"
              >
                <Twitter className="h-4.25 w-4.25" />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="mt-5">
          <ul className="flex justify-center gap-5 text-[12px]">
            <li>
              <Link className="hover:underline" href="#home">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="#skills">
                Skills
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
