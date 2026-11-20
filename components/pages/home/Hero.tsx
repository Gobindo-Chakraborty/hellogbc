import PauseIcon from "@/components/icons/PauseIcon";
import WebDevIcon from "@/components/icons/WebDevIcon";
import ArrowRight from "@/components/icons/ArrowRight";
import Image from "next/image";
import Link from "next/link";
import React from "@/components/icons/React";
import NextJSCircle from "@/components/icons/NextJSCircle";
import NodeJSCircle from "@/components/icons/NodeJSCircle";
import MongoDBCircle from "@/components/icons/MongoDBCircle";

export default function Hero() {
  return (
    <section className="mt-12.5 pt-12.5" id="home">
      <div>
        <div className="relative mx-auto w-11/12 max-w-307.75">
          <div className="bg-gradient-blur absolute -z-10 mt-[53.87%] h-[67.53%] min-w-full rounded-full blur-[100px]"></div>
          <Image
            className="bg-primary-bg"
            src="/assets/images/gbc-profile.png"
            alt="GBC Profile Picture"
            width={1231}
            height={1152}
          />
        </div>

        <div className="mx-auto mt-12.5 w-11/12 pl-0.5">
          <p className="text-light-blue text-xl font-medium">Hello, I’m</p>
          <h1 className="text-light-text mt-5 text-2xl font-semibold">
            Gobindo Chakraborty
          </h1>
          <p className="text-light-blue-soft mt-5 flex items-center gap-2 text-xl font-medium">
            <WebDevIcon className="h-6.75 w-6.75" />
            Web Developer
          </p>
          <p className="mt-5 text-xl leading-[150%] font-medium">
            I’m a frontend-focused web developer passionate about creating
            modern, responsive, and user-friendly experiences. I also explore
            full-stack development, UI design in Figma, and digital creativity.
          </p>

          <div className="mt-8.75 flex gap-2.5">
            <Link
              href="#about"
              className="bg-light-blue flex items-center gap-1.5 rounded-xl px-3 py-2.5"
            >
              <PauseIcon className="text-light-text h-4.5 w-4.5" />
              <span className="text-secondary-bg text-[10px] font-semibold">
                Watch Introduction
              </span>
            </Link>

            <Link
              href="#projects"
              className="border-light-blue flex items-center gap-1.25 rounded-xl border-2 px-5 py-3.5"
            >
              <span className="text-primary-text text-[10px] font-semibold">
                View My Projects
              </span>
              <ArrowRight className="text-light-blue h-auto w-2.5" />
            </Link>
          </div>

          <div className="mt-8.75 flex gap-5">
            <div className="flex items-center gap-1.25">
              <React className="h-3.75 w-3.75" />
              <span className="text-[10px] font-normal">React</span>
            </div>
            <div className="flex items-center gap-1.25">
              <NextJSCircle className="h-3.75 w-3.75" />
              <span className="text-[10px] font-normal">Next.js</span>
            </div>
            <div className="flex items-center gap-1.25">
              <NodeJSCircle className="h-3.75 w-3.75" />
              <span className="text-[10px] font-normal">Node.js</span>
            </div>
            <div className="flex items-center gap-1.25">
              <MongoDBCircle className="h-3.75 w-3.75" />
              <span className="text-[10px] font-normal">MongoDB</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-secondary-border mx-auto mt-12.5 w-11/12 rounded-[10px] border border-l-5 py-4.25 pr-1.75 pl-4.5">
        <p className="text-secondary-text text-[13px] leading-[150%]">
          I’ve an 18 letters long name and it’s hard to spell. But you can call
          me <span className="text-status-text font-bold">Gobi</span> or in
          short GBC. And I’ve no logo, so I used a Question mark with 3 dots
          representing GBC.
        </p>
      </div>
    </section>
  );
}
