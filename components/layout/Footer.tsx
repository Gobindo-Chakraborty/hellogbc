import Link from "next/link";

import Github from "@/components/icons/Github";
import Linkedin from "@/components/icons/Linkedin";
import Twitter from "@/components/icons/Twitter";

export default function Footer() {
  return (
    <footer>
      <p>
        &copy; <span>GBC</span> - 2026
      </p>

      <nav>
        <ul className="">
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

      <nav>
        <ul>
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
    </footer>
  );
}
