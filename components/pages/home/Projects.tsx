import HTML from "@/components/icons/HTML";
import CSS from "@/components/icons/CSS";
import Image from "next/image";
import Link from "next/link";
import JavaScript from "@/components/icons/JavaScript";

export default function Projects() {
  return (
    <section className="mx-auto mt-31.25 w-10/12 xl:max-w-286.5">
      <h1 className="text-heading-1 xs:text-[2rem] mb-7.5 text-center text-xl font-bold md:mb-15">
        Real-World Projects
      </h1>
      <div className="bg-secondary-bg-dark-1 border-secondary-bg-dark-1 rounded-[10px] border">
        <p className="text-secondary-text-light-2 before:bg-live-view relative my-3.75 mr-3.5 ml-7.75 text-xs before:absolute before:-top-1 before:-bottom-1 before:-ml-4 before:w-0.5 before:content-[''] md:my-8 md:mr-13.75 md:ml-21.5 md:text-base md:before:-ml-7.5">
          I may not have worked at a company yet, but I’ve built real-world
          projects and continuously improve my skills through hands-on
          development. I focus on learning by building that helped me improve my
          frontend architecture, responsiveness, UI design, and development
          workflow.
        </p>
      </div>
      <div className="mt-12.5 flex flex-col gap-12.5">
        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/newton-preview.jpg"
            width={1200}
            height={630}
            alt="Isaac Newton portfolio website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                Portfolio :{" "}
                <span className="text-primary-text font-bold">
                  Isaac Newton
                </span>
              </h3>
              <Link
                href="https://isaac-newton.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                isaac-newton.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/isaac-newton"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://isaac-newton.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>

        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/darwin-preview.jpg"
            width={1200}
            height={630}
            alt="Charles Darwin portfolio website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                Portfolio :{" "}
                <span className="text-primary-text font-bold">
                  Charles Darwin
                </span>
              </h3>
              <Link
                href="https://charles-darwin.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                charles-darwin.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/charles-darwin"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://charles-darwin.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>

        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/curie-preview.jpg"
            width={1200}
            height={630}
            alt="Marie Curie portfolio website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                Portfolio :{" "}
                <span className="text-primary-text font-bold">Marie Curie</span>
              </h3>
              <Link
                href="https://marie-curie.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                marie-curie.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/marie-curie"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://marie-curie.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>

        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/einstein-preview.jpg"
            width={1200}
            height={630}
            alt="Albert Einstein portfolio website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                Portfolio :{" "}
                <span className="text-primary-text font-bold">
                  Albert Einstein
                </span>
              </h3>
              <Link
                href="https://albert-einstein.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                albert-einstein.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/albert-einstein"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://albert-einstein.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>

        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/everstrong-preview.jpg"
            width={1200}
            height={630}
            alt="Everstrong Steel business website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                Business :{" "}
                <span className="text-primary-text font-bold">
                  Everstrong Steel
                </span>
              </h3>
              <Link
                href="https://everstrong-steel.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                everstrong-steel.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/everstrong-steel"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://everstrong-steel.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>

        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/forgotten-preview.jpg"
            width={1200}
            height={630}
            alt="Forgotten Trails adventure website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                Adventure :{" "}
                <span className="text-primary-text font-bold">
                  Forgotten Trails
                </span>
              </h3>
              <Link
                href="https://forgotten-trails.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                forgotten-trails.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/forgotten-trails"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://forgotten-trails.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>

        <div className="border-secondary-bg-dark-1 bg-secondary-bg rounded-[10px] border">
          <Image
            className="rounded-tl-[10px] rounded-tr-[10px]"
            src="/assets/images/golvana-preview.jpg"
            width={1200}
            height={630}
            alt="Golvana e-commerce website image"
          />

          <div className="mt-5 mb-6 ml-5">
            <div className="flex flex-col gap-3.75">
              <div className="flex gap-3">
                <HTML className="h-4.25 w-auto" />
                <CSS className="h-4.25 w-auto" />
                <JavaScript className="h-4.25 w-auto" />
              </div>
              <h3 className="text-secondary-text leading-[100%]">
                E-Commerce :{" "}
                <span className="text-primary-text font-bold">Golvana</span>
              </h3>
              <Link
                href="https://golvana.hellogbc.com"
                target="_blank"
                className="text-secondary-text leading-[100%] hover:underline"
              >
                golvana.hellogbc.com
              </Link>
              <p className="text-completion-status bg-secondary-bg-dark-1 mr-auto rounded-[5px] px-3 py-1 text-sm leading-[100%]">
                Completed
              </p>
            </div>
            <div className="mt-7.5 flex gap-5">
              <Link
                className="text-heading-1 border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://github.com/Gobindo-Chakraborty/golvana"
                target="_blank"
              >
                Source Code
              </Link>
              <Link
                className="text-live-view border-secondary-bg-dark-1 bg-primary-bg hover:bg-secondary-bg-dark-1 rounded-[100px] border px-4.25 py-2.75 text-xs font-bold"
                href="https://golvana.hellogbc.com"
                target="_blank"
              >
                Live View
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
