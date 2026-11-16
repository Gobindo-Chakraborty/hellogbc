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
    <section>
      <div>
        <Image
          src="/assets/images/gbc-profile.png"
          alt="GBC Profile Picture"
          width={1231}
          height={1152}
        />
        <div>
          <p>Hello, I’m</p>
          <h1>Gobindo Chakraborty</h1>
          <p>
            <WebDevIcon className="" />
            Web Developer
          </p>
          <p>
            I’m a frontend-focused web developer passionate about creating
            modern, responsive, and user-friendly experiences. I also explore
            full-stack development, UI design in Figma, and digital creativity.
          </p>
          <div>
            <button type="button">
              <PauseIcon className="" /> Watch Introduction
            </button>
            <Link href="/">
              View My Projects <ArrowRight className="" />
            </Link>
          </div>
          <div>
            <div>
              <React className="" />
              <span>React</span>
            </div>
            <div>
              <NextJSCircle className="" />
              <span>Next.js</span>
            </div>
            <div>
              <NodeJSCircle className="" />
              <span>Node.js</span>
            </div>
            <div>
              <MongoDBCircle className="" />
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p>
          I’ve an 18 letters long name and it’s hard to spell. But you can call
          me <span>Gobi</span> or in short GBC. And I’ve no logo, so I used a
          Question mark with 3 dots representing GBC.
        </p>
      </div>
    </section>
  );
}
