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
      <div>
        <Link href="#">Home</Link>
        <Link href="#">Projects</Link>
        <Link href="#">About</Link>
        <Link href="#">Skills</Link>
      </div>
    </footer>
  );
}
