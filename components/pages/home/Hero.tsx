import GBCBoxAround from "@/components/icons/GBCBoxAround";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="mt-12.5">
      <div className="text-center">
        <p className="text-heading-1">Hello, I am</p>
        <h1 className="py-6.25 text-xl">
          <span className="font-bold">G</span>o
          <span className="font-bold">b</span>indo{" "}
          <span className="font-bold">C</span>hakraborty (GBC)
        </h1>
        <p className="mx-auto w-[87%] font-medium">
          I’m a{" "}
          <span className="text-live-view">frontend-focused web developer</span>{" "}
          passionate about creating modern, responsive, and user-friendly
          experiences. I also explore full-stack development, UI design in
          Figma, and digital creativity.
        </p>
        <div className="border-secondary-bg-dark-1 mx-auto mt-6.25 w-11/12 rounded-[10px] border border-l-[5px]">
          <p className="text-secondary-text-light-2 py-3.75 pr-3 pl-3.25 text-xs leading-[150%]">
            Yeah, it&apos;s 18 letters long name and hard to spell. But you can
            call me in short{" "}
            <span className="text-completion-status font-bold">GBC</span>.
            That&apos;s professional and friendly.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-17.5 w-max">
        <div className="relative h-87.75 w-65">
          <GBCBoxAround className="absolute h-auto w-65" />
          <div className="">
            <Image
              className="rounded-[40px] px-5 py-4.5"
              src="/assets/images/gbc-profile.jpg"
              fill
              alt="GBC Profile Picture"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
