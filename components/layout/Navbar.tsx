"use client";

import Link from "next/link";

type NavbarProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Navbar({ open, setOpen }: NavbarProps) {
  return (
    <nav className="z-10">
      <div
        className={`absolute top-0 left-0 flex bg-secondary-bg w-full h-auto  justify-center border-b border-completion-status ${open ? "translate-y-0" : "-translate-y-full"} transition-all duration-300 z-20`}
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
      </div>
    </nav>
  );
}
