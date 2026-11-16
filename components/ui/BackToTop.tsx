"use client";

import BackToTopIcon from "@/components/icons/BackToTopIcon";

export default function BackToTop() {
  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }}
      className="border-secondary-border bg-primary-bg/50 fixed right-2.5 bottom-10 z-10 cursor-pointer rounded-[3px] border"
    >
      <BackToTopIcon className="text-secondary-text mx-2 my-3 h-auto w-4.25" />
    </button>
  );
}
