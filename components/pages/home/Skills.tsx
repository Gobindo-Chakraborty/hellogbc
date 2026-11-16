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
    <section>
      <p>Skills</p>
      <h2>Technologies and tools I work with</h2>
      <p>
        Beyond coding, I work with tools like Figma and Adobe software to create
        better user experiences and visual designs.
      </p>
      <div>
        <div>
          <FrontendIcon className="" />
          <div>
            <h3>Frontend</h3>
            <div>
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
        <div>
          <BackendIcon className="" />
          <div>
            <h3>Backend & Database</h3>
            <div>
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
        <div>
          <OtherToolsIcon className="" />
          <div>
            <h3>Tools & Others</h3>
            <div>
              <Technology Path={Git} name="Git" aria-label="Git" />
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
