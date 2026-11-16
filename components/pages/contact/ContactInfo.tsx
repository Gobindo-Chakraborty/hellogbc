import GithubFill from "@/components/icons/GithubFill";
import LinkedinFill from "@/components/icons/LinkedinFill";
import LocationFill from "@/components/icons/LocationFill";
import MailFill from "@/components/icons/MailFill";

export default function ContactInfo() {
  return (
    <section>
      <h2>Let’s Work Together</h2>
      <ul>
        <li>
          <MailFill className="" />
          <div>
            <p>Email</p>
            <a href="mailto:gobindochakraborty108@gmail.com">
              gobindochakraborty108@gmail.com
            </a>
            <p>(Usually replies within 24 hours)</p>
          </div>
        </li>

        <li>
          <LocationFill className="" />
          <div>
            <p>Location</p>
            <p>Cumilla, Bangladesh</p>
            <p>Open to remote work</p>
          </div>
        </li>

        <li>
          <LinkedinFill className="" />
          <div>
            <p>LinkedIn</p>
            <a
              href="https://www.linkedin.com/in/gobindo-chakraborty"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/gobindo-chakraborty
            </a>
          </div>
        </li>

        <li>
          <GithubFill className="" />
          <div>
            <p>GitHub</p>
            <a
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
