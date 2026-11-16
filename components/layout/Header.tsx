import Link from "next/link";
import Logo from "../icons/Logo";
import Sun from "../icons/Sun";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <Logo className="text-light-blue" />
      </Link>

      <nav>
        <ul>
          <li>Home</li>
          <li>Projects</li>
          <li>About</li>
          <li>Skills</li>
        </ul>
      </nav>

      <div>
        <button type="button">
          <Sun className="text-secondary-text" />
        </button>
        <Link href="">Contact me</Link>
      </div>
    </header>
  );
}
