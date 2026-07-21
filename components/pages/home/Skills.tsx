import Technology from "@/components/ui/Technology";
import Ruler from "@/components/ui/Ruler";

import HTML from "@/components/icons/HTML";
import CSS from "@/components/icons/CSS";
import JavaScript from "@/components/icons/JavaScript";
import TypeScript from "@/components/icons/TypeScript";
import TailwindCSS from "@/components/icons/TailwindCSS";
import React from "@/components/icons/React";
import NextJS from "@/components/icons/NextJS";
import Git from "@/components/icons/Git";
import VScode from "@/components/icons/VScode";
import NPM from "@/components/icons/NPM";
import Figma from "@/components/icons/Figma";
import Photoshop from "@/components/icons/Photoshop";
import Illustrator from "@/components/icons/Illustrator";
import NodeJS from "@/components/icons/NodeJS";
import ExpressJS from "@/components/icons/ExpressJS";
import MongoDB from "@/components/icons/MongoDB";
import RESTapi from "@/components/icons/RESTapi";
import Docker from "@/components/icons/Docker";
import Jest from "@/components/icons/Jest";
import Vitest from "@/components/icons/Vitest";

export default function Skills() {
  return (
    <section className="mt-12.5" id="skills">
      <div className="container mx-auto w-11/12">
        <h1 className="text-heading-1 text-center text-xl font-bold">Skills</h1>

        <div className="mt-7.5">
          <h3 className="text-secondary-text text-center">Frontend</h3>
          <div className="mt-3.75 flex flex-wrap justify-center gap-x-6.25 gap-y-2.5">
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
              name="Tailwind CSS"
              aria-label="Tailwind CSS"
            />
            <Technology Path={React} name="React" aria-label="React" />
            <Technology Path={NextJS} name="Next.js" aria-label="Next.js" />
          </div>
        </div>

        <div className="mt-7.5">
          <h3 className="text-secondary-text text-center">Development Tools</h3>
          <div className="mt-3.75 flex flex-wrap justify-center gap-x-6.25 gap-y-2.5">
            <Technology
              Path={Git}
              name="Git & GitHub"
              aria-label="Git & GitHub"
            />
            <Technology Path={VScode} name="VS code" aria-label="VS code" />
            <Technology Path={NPM} name="npm" aria-label="npm" />
          </div>
        </div>

        <div className="mt-7.5">
          <h3 className="text-secondary-text text-center">Design Tools</h3>
          <div className="mt-3.75 flex flex-wrap justify-center gap-x-6.25 gap-y-2.5">
            <Technology Path={Figma} name="Figma" aria-label="Figma" />
            <Technology
              Path={Photoshop}
              name="Adobe Photoshop"
              aria-label="Adobe Photoshop"
            />
            <Technology
              Path={Illustrator}
              name="Adobe Illustrator"
              aria-label="Adobe Illustrator"
            />
          </div>
        </div>

        <div className="mt-7.5">
          <h3 className="text-secondary-text text-center">Backend (Basic)</h3>
          <div className="mt-3.75 flex flex-wrap justify-center gap-x-6.25 gap-y-2.5">
            <Technology Path={NodeJS} name="Node.js" aria-label="Node.js" />
            <Technology
              Path={ExpressJS}
              name="Express.js"
              aria-label="Express.js"
            />
            <Technology Path={MongoDB} name="MongoDB" aria-label="MongoDB" />
            <Technology
              Path={RESTapi}
              name="REST APIs"
              aria-label="REST APIs"
            />
            <Technology Path={Docker} name="Docker" aria-label="Docker" />
          </div>
        </div>

        <div className="mt-7.5">
          <h3 className="text-secondary-text text-center">Testing</h3>
          <div className="mt-3.75 flex flex-wrap justify-center gap-x-6.25 gap-y-2.5">
            <Technology Path={Jest} name="Jest" aria-label="Jest" />
            <Technology Path={Vitest} name="Vitest" aria-label="Vitest" />
          </div>
        </div>
      </div>

      <Ruler />
    </section>
  );
}
