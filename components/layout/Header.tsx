"use client";

import Logo from "../icons/Logo";
import Link from "next/link";
import Sun from "../icons/Sun";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="relative w-full">
      <div className="bg-secondary-bg relative z-50 w-full">
        <div className="mx-auto flex w-11/12 max-w-316.25 items-center justify-between py-3 md:py-4.5">
          <Link className="" href="/" aria-label="Home">
            <Logo className="xs:w-4.75 h-auto w-4" />
          </Link>
          <div className="flex items-center gap-9.5">
            <button
              className="cursor-pointer"
              type="button"
              aria-label="Toggle theme"
            >
              <Sun className="text-secondary-text xs:h-5 xs:w-5 h-4.25 w-4.25" />
            </button>
            <button
              type="button"
              className="border-secondary-bg-light-1 xs:px-4 xs:py-2 xs:text-base cursor-pointer rounded-full border px-3.25 py-1.5 text-xs leading-none font-bold"
            >
              Contact me
            </button>
            <button
              className="xs:gap-1.5 flex cursor-pointer flex-col gap-1 md:hidden"
              type="button"
              aria-label="Toggle navigation"
              onClick={() => setOpen(!open)}
            >
              <span
                className={`bg-primary-text h-0.75 w-5 rounded-full transition-all duration-300 ${open ? "xs:translate-y-2.25 translate-y-1.75 rotate-45" : ""} xs:w-6`}
              ></span>
              <span
                className={`bg-primary-text h-0.75 w-5 rounded-full transition-all duration-200 ${open ? "opacity-0" : "opacity-100"} xs:w-6`}
              ></span>
              <span
                className={`bg-primary-text h-0.75 w-5 rounded-full transition-all duration-300 ${open ? "xs:-translate-y-2.25 -translate-y-1.75 -rotate-45" : ""} xs:w-6`}
              ></span>
            </button>
          </div>
        </div>
      </div>

      <nav
        className={`bg-secondary-bg/60 border-completion-status absolute top-0 left-0 flex h-auto w-full justify-center border-b ${open ? "translate-y-0 duration-300" : "-translate-y-full duration-600"} z-20 backdrop-blur-xl transition-all ease-out md:fixed md:top-6 md:left-1/2 md:z-70 md:w-fit md:-translate-x-2/3 md:translate-y-0 md:border-0 md:bg-transparent md:backdrop-blur-none md:transition-none min-[52rem]:-translate-x-1/2`}
      >
        <ul className="text-secondary-text mt-25 mb-12 flex list-none flex-col items-center gap-10 text-base md:mt-0 md:mb-0 md:flex-row">
          <li className="text-primary-text font-bold">
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
