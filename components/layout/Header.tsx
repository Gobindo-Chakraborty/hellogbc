"use client";

import Link from "next/link";
import Logo from "../icons/Logo";
import Sun from "../icons/Sun";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import Moon from "../icons/Moon";

export default function Header() {
  const [open, setOpen] = useState(false);

  const [mounted, setMounted] = useState(false);

  const pathname = usePathname();

  const isContactPage = pathname === "/contact";

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    // eslint-disable-next-line   react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const isLightTheme = mounted ? resolvedTheme === "light" : false;

  return (
    <header className="fixed z-100 w-full">
      <div className="bg-secondary-bg/60 border-b-primary-border w-full border-b-2 backdrop-blur-xl">
        <div className="mx-auto flex w-11/12 max-w-384 items-center justify-between py-2.5">
          <Link href="/" aria-label="Home">
            <Logo className="text-light-blue h-auto w-4.75" />
          </Link>
          <div className="flex items-center gap-11.25">
            <button
              type="button"
              className="cursor-pointer"
              aria-label="Toggle theme"
              onClick={() => setTheme(isLightTheme ? "dark" : "light")}
            >
              {!mounted ? (
                <span className="h-auto w-4.25" />
              ) : isLightTheme ? (
                <Moon className="text-secondary-text h-auto w-4.25" />
              ) : (
                <Sun className="text-secondary-text h-auto w-4.25" />
              )}
            </button>
            <Link href={isContactPage ? "/" : "/contact"} className="hidden">
              {isContactPage ? "Go Home" : "Contact me"}
            </Link>
            <button
              type="button"
              aria-label="Toggle navigation"
              className="flex cursor-pointer flex-col gap-1"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`bg-light-blue h-0.75 w-5 rounded-full transition-all duration-300 ${open ? "translate-y-1.75 rotate-45" : ""}`}
              ></span>
              <span
                className={`bg-light-blue h-0.75 w-5 rounded-full transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`bg-light-blue h-0.75 w-5 rounded-full transition-all duration-300 ${open ? "-translate-y-1.75 -rotate-45" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`bg-primary-bg/60 fixed top-0 right-0 bottom-0 left-0 backdrop-blur-3xl ${open ? "flex" : "hidden"} -z-1 items-center justify-center text-center font-bold`}
      >
        <ul className="flex flex-col gap-10">
          <li>
            <Link
              onClick={() => setOpen(false)}
              href="/#home"
              className="text-light-blue"
            >
              Home
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="/#projects" className="">
              Projects
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="/#about" className="">
              About
            </Link>
          </li>
          <li>
            <Link onClick={() => setOpen(false)} href="/#skills" className="">
              Skills
            </Link>
          </li>
          <li className="pt-5">
            <Link
              onClick={() => setOpen(false)}
              href={isContactPage ? "/" : "/contact"}
              className="border-light-blue rounded-full border-2 px-4.75 py-3.25"
            >
              {isContactPage ? "Go Home" : "Contact me"}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
