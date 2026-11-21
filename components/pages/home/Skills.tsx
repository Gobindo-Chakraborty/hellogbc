import FrontendIcon from "@/components/icons/FrontendIcon";
import BackendIcon from "@/components/icons/BackendIcon";
import OtherToolsIcon from "@/components/icons/OtherToolsIcon";
import Technology from "@/components/ui/Technology";

import HTML from "@/components/icons/HTML";
import CSS from "@/components/icons/CSS";
import JavaScript from "@/components/icons/JavaScript";
import TypeScript from "@/components/icons/TypeScript";
import TailwindCSS from "@/components/icons/TailwindCSS";
import React from "@/components/icons/React";
import NextJS from "@/components/icons/NextJS";
import Git from "@/components/icons/Git";
import VScode from "@/components/icons/VScode";
import Figma from "@/components/icons/Figma";
import Photoshop from "@/components/icons/Photoshop";
import Illustrator from "@/components/icons/Illustrator";
import NodeJS from "@/components/icons/NodeJS";
import ExpressJS from "@/components/icons/ExpressJS";
import MongoDB from "@/components/icons/MongoDB";
import Docker from "@/components/icons/Docker";
import Jest from "@/components/icons/Jest";
import Vitest from "@/components/icons/Vitest";

export default function Skills() {
  return (
    <section className="mx-auto mt-25 mb-24.25 w-11/12" id="skills">
      <p className="text-light-blue text-[13px] uppercase">Skills</p>
      <h2 className="text-light-text mt-2.5 text-[15px] font-bold">
        Technologies and tools I work with
      </h2>
      <p className="text-primary-text mt-3.75 leading-[150%]">
        Beyond coding, I work with tools like Figma and Adobe software to create
        better user experiences and visual designs.
      </p>
      <div className="mt-10">
        <div className="flex gap-2.5">
          <div className="bg-bright-light-bg inline-block self-start rounded-[10px] px-3.25 py-3.5">
            <FrontendIcon className="text-primary-text h-auto w-6.5" />
          </div>
          <div>
            <h3 className="text-light-text text-[13px] font-semibold">
              Frontend
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <Technology Path={HTML} name="HTML" aria-label="HTML" />
              <Technology Path={CSS} name="CSS" aria-label="CSS" />
              <Technology
                Path={JavaScript}
                name="JavaScript"
                aria-label="JavaScript"
              />
              <Technology
                Path={TypeScript}
                name="TypeScript"
                aria-label="TypeScript"
              />
              <Technology
                Path={TailwindCSS}
                name="TailwindCSS"
                aria-label="TailwindCSS"
              />
              <Technology Path={React} name="React" aria-label="React" />
              <Technology Path={NextJS} name="NextJS" aria-label="NextJS" />
            </div>
          </div>
        </div>

        <div className="mt-8.75 flex gap-2.5">
          <div className="bg-bright-light-bg inline-block self-start rounded-[10px] px-3.25 py-3.5">
            <BackendIcon className="text-primary-text h-6.25 w-auto" />
          </div>
          <div>
            <h3 className="text-light-text text-[13px] font-semibold">
              Backend & Database
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <Technology Path={NodeJS} name="NodeJS" aria-label="NodeJS" />
              <Technology
                Path={ExpressJS}
                name="ExpressJS"
                aria-label="ExpressJS"
              />
              <Technology Path={MongoDB} name="MongoDB" aria-label="MongoDB" />
            </div>
          </div>
        </div>

        <div className="mt-8.75 flex gap-2.5">
          <div className="bg-bright-light-bg inline-block self-start rounded-[10px] px-3.25 py-3.5">
            <OtherToolsIcon className="text-primary-text h-auto w-5.75" />
          </div>
          <div>
            <h3 className="text-light-text text-[13px] font-semibold">
              Tools & Others
            </h3>
            <div className="mt-2.5 flex flex-wrap gap-2.5">
              <Technology
                Path={Git}
                name="Git & GitHub"
                aria-label="Git & GitHub"
              />
              <Technology Path={Figma} name="Figma" aria-label="Figma" />
              <Technology Path={VScode} name="VScode" aria-label="VScode" />
              <Technology Path={Docker} name="Docker" aria-label="Docker" />
              <Technology
                Path={Photoshop}
                name="Photoshop"
                aria-label="Photoshop"
              />
              <Technology
                Path={Illustrator}
                name="Illustrator"
                aria-label="Illustrator"
              />
              <Technology Path={Jest} name="Jest" aria-label="Jest" />
              <Technology Path={Vitest} name="Vitest" aria-label="Vitest" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
