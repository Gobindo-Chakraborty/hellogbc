import GBCBoxAround from "@/components/icons/GBCBoxAround";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="mt-12.5 pt-15 lg:flex lg:flex-row-reverse lg:w-10/12 items-center mx-auto xl:w-286.5"
      id="home"
    >
      <div className="mx-auto max-w-168.75 text-center lg:text-right flex flex-col gap-8.75">
        <p className="text-heading-1 sm:text-2xl xl:text-[2rem]">Hello, I am</p>
        <h1 className="text-xl sm:text-3xl xl:text-[2.5rem]">
          <span className="font-bold">G</span>o
          <span className="font-bold">b</span>indo{" "}
          <span className="font-bold">C</span>hakraborty (GBC)
        </h1>
        <p className="mx-auto w-[87%] font-medium sm:text-xl lg:mx-0 lg:ml-auto xl:text-2xl lg:max-w-158.75">
          I’m a{" "}
          <span className="text-live-view">frontend-focused web developer</span>{" "}
          passionate about creating modern, responsive, and user-friendly
          experiences. I also explore full-stack development, UI design in
          Figma, and digital creativity.
        </p>
        <div className="border-secondary-bg-dark-1 mx-auto w-11/12 max-w-120.75 rounded-[10px] border border-l-[5px] lg:mx-0 lg:border-r-[5px] lg:border-l lg:ml-auto">
          <p className="text-secondary-text-light-2 py-3.75 pr-3 pl-3.25 text-xs leading-[150%] sm:text-[14px] xl:text-xl">
            Yeah, it&apos;s 18 letters long name and hard to spell. But you can
            call me in short{" "}
            <span className="text-completion-status font-bold">GBC</span>.
            That&apos;s professional and friendly.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-17.5 w-max lg:mt-0">
        <div className="relative h-87.75 w-65 sm:h-117.5 sm:w-87">
          <GBCBoxAround className="absolute h-auto w-65 sm:w-87" />
          <div className="">
            <Image
              className="rounded-[40px] px-5 py-4.5 sm:rounded-[50px] sm:px-6.5 sm:py-5.75"
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
