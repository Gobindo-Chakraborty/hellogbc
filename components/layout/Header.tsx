"use client";

import Logo from "../icons/Logo";
import Link from "next/link";
import Sun from "../icons/Sun";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full relative">
      <div className="w-full bg-secondary-bg relative z-50">
        <div className="container flex justify-between mx-auto py-3 w-11/12">
          <Link className="" href="/" aria-label="Home">
            <Logo className="w-4 h-auto" />
          </Link>
          <div className="flex gap-9.5 items-center">
            <button
              className="cursor-pointer "
              type="button"
              aria-label="Toggle theme"
            >
              <Sun className="w-4.25 h-4.25 text-secondary-text" />
            </button>
            <button
              type="button"
              className="cursor-pointer py-1.5 px-3.25 border border-secondary-bg-light-1 rounded-full text-xs font-bold "
            >
              Contact me
            </button>
            <button
              className="flex flex-col gap-1 cursor-pointer "
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`w-5 h-0.75 bg-primary-text rounded-full transition-all duration-300 ${open ? "rotate-45 translate-y-1.75" : ""}`}
              ></span>
              <span
                className={`w-5 h-0.75 bg-primary-text rounded-full transition-all duration-200 ${open ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`w-5 h-0.75 bg-primary-text rounded-full transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.75" : ""}`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`absolute top-0 left-0 flex bg-secondary-bg/60 w-full h-auto  justify-center border-b border-completion-status ${open ? "translate-y-0 duration-300" : "-translate-y-full  duration-600"} transition-all ease-out backdrop-blur-xl z-20`}
      >
        <ul className="mt-25 mb-12 list-none flex flex-col items-center gap-10 text-secondary-text">
          <li className="font-bold text-primary-text">
            <Link
              href="#"
              onClick={() => {
                setOpen(false);
              }}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => {
                setOpen(false);
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => {
                setOpen(false);
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#"
              onClick={() => {
                setOpen(false);
              }}
            >
              Skills
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
