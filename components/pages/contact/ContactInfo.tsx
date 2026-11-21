import GithubFill from "@/components/icons/GithubFill";
import LinkedinFill from "@/components/icons/LinkedinFill";
import LocationFill from "@/components/icons/LocationFill";
import MailFill from "@/components/icons/MailFill";

export default function ContactInfo() {
  return (
    <section className="mx-auto mt-12.5 w-11/12 pt-12.5 pl-1.25">
      <h2 className="text-light-text text-[24px] font-bold">
        Let’s Work <span className="text-light-blue">Together</span>
      </h2>
      <ul className="mt-10 flex flex-col gap-7.5">
        <li className="flex items-start gap-3">
          <div className="bg-darker-blue-bg border-bright-light-border flex h-10.5 w-10.5 items-center justify-center rounded-lg border">
            <MailFill className="text-light-blue-soft h-3.75 w-4.75" />
          </div>
          <div className="flex flex-col gap-1.25">
            <p className="text-light-blue-soft leading-[100%] font-medium">
              Email
            </p>
            <a
              className="text-primary-text text-[12px] font-medium"
              href="mailto:gobindochakraborty108@gmail.com"
            >
              gobindochakraborty108@gmail.com
            </a>
            <p className="text-secondary-text text-[10px]">
              (Usually replies within 24 hours)
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <div className="bg-darker-blue-bg border-bright-light-border flex h-10.5 w-10.5 items-center justify-center rounded-lg border">
            <LocationFill className="text-light-blue-soft h-5.25 w-4" />
          </div>
          <div className="flex flex-col gap-1.25">
            <p className="text-light-blue-soft leading-[100%] font-medium">
              Location
            </p>
            <p className="text-primary-text text-[12px] font-medium">
              Cumilla, Bangladesh
            </p>
            <p className="text-secondary-text text-[10px]">
              Open to remote work
            </p>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <div className="bg-darker-blue-bg border-bright-light-border flex h-10.5 w-10.5 items-center justify-center rounded-lg border">
            <LinkedinFill className="text-light-blue-soft h-4.5 w-4.5" />
          </div>
          <div className="flex flex-col gap-1.25">
            <p className="text-light-blue-soft leading-[100%] font-medium">
              LinkedIn
            </p>
            <a
              className="text-primary-text text-[12px] font-medium"
              href="https://www.linkedin.com/in/gobindo-chakraborty"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gobindo-chakraborty
            </a>
          </div>
        </li>

        <li className="flex items-start gap-3">
          <div className="bg-darker-blue-bg border-bright-light-border flex h-10.5 w-10.5 items-center justify-center rounded-lg border">
            <GithubFill className="text-light-blue-soft h-5.5 w-5.5" />
          </div>
          <div className="flex flex-col gap-1.25">
            <p className="text-light-blue-soft leading-[100%] font-medium">
              GitHub
            </p>
            <a
              className="text-primary-text text-[12px] font-medium"
              href="https://github.com/Gobindo-Chakraborty"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Gobindo-Chakraborty
            </a>
          </div>
        </li>
      </ul>
    </section>
  );
}
