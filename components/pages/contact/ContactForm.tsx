import Ruler from "@/components/ui/Ruler";

export default function ContactForm() {
  return (
    <section className="mt-25">
      <div className="container mx-auto w-11/12 pb-6.5">
        <h1 className="text-heading-1 xs:text-[2rem] mb-7.5 text-center text-xl font-bold md:mb-15">
          Let’s Build Something Great
        </h1>

        <form
          action="https://formspree.io/f/mrennoqj"
          method="POST"
          className="border-secondary-bg-dark-1 mx-auto max-w-241.5 rounded-[30px] border pt-6 pr-5.5 pb-6.5 pl-5.75"
        >
          <p className="text-center">
            Have an idea, project, or opportunity? I’d love to hear from you.
            Let’s create something meaningful together.
          </p>
          <div className="mx-auto max-w-142.5">
            <div className="mt-9.25 flex flex-col items-start gap-2.5">
              <label htmlFor="name" className="">
                Your Name
              </label>
              <input
                className="border-secondary-bg-dark-1 bg-secondary-bg h-10 w-full rounded-[10px] border"
                type="text"
                name="name"
                id="name"
                required
              />
            </div>

            <div className="mt-5 flex flex-col items-start gap-2.5">
              <label htmlFor="email">Email Address</label>
              <input
                className="border-secondary-bg-dark-1 bg-secondary-bg h-10 w-full rounded-[10px] border"
                type="email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="mt-5 flex flex-col items-start gap-2.5">
              <label htmlFor="message">Message</label>
              <textarea
                className="border-secondary-bg-dark-1 bg-secondary-bg w-full rounded-[10px] border"
                name="message"
                id="message"
                rows={6}
                required
              />
            </div>

            <button
              className="bg-secondary-bg-dark-1 text-completion-status mt-7.5 w-full rounded-[10px] pt-3 pb-2.75 text-sm leading-[100%] font-semibold"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      <Ruler />
    </section>
  );
}
