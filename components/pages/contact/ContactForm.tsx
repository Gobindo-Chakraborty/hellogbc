import MailIcon from "@/components/icons/MailIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SendIcon from "@/components/icons/SendIcon";

export default function ContactForm() {
  return (
    <section>
      <form>
        <div>
          <SendIcon className="" />
          <div>
            <h2>Send a Message</h2>
            <p>
              Tell me about your project, opportunity, or just say hello. I’ll
              get back to you as soon as I can.
            </p>
          </div>
        </div>

        <div>
          <div>
            <label htmlFor="name">Your Name</label>
            <div>
              <ProfileIcon className="" />
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">Email Address</label>
            <div>
              <MailIcon className="" />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <div>
              <MessageIcon className="" />
              <textarea
                rows={6}
                name="message"
                id="message"
                placeholder="Write your message here..."
                required
              />
            </div>
          </div>
          <button type="submit">
            <SendIcon className="" />
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
