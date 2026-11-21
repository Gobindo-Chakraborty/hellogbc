"use client";

import MailIcon from "@/components/icons/MailIcon";
import MessageIcon from "@/components/icons/MessageIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import SendIcon from "@/components/icons/SendIcon";

export default function ContactForm() {
  return (
    <section className="mx-auto mt-17.5 mb-21.5 w-11/12">
      <form className="bg-secondary-bg border-bright-light-border rounded-[10px] border px-3.75 pt-5 pb-7.5">
        <div className="flex gap-3.75">
          <SendIcon className="text-light-blue-soft h-6.5 w-6.5 shrink-0" />
          <div className="flex flex-col gap-2.5">
            <h2 className="text-light-text text-[20px] font-semibold">
              Send a Message
            </h2>
            <p className="mr-6 text-[12px] leading-[150%]">
              Tell me about your project, opportunity, or just say hello. I’ll
              get back to you as soon as I can.
            </p>
          </div>
        </div>

        <div className="mt-7.5 flex flex-col gap-7.5">
          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-medium" htmlFor="name">
              Your Name
            </label>
            <div className="bg-primary-bg border-bright-light-border flex items-center gap-3.75 rounded-[10px] border p-4.25">
              <ProfileIcon className="text-light-blue-soft h-4 w-auto shrink-0" />
              <input
                className="placeholder:text-secondary-text text-light-text w-full text-[15px] leading-[100%] outline-none placeholder:text-[15px] placeholder:leading-[100%]"
                type="text"
                name="name"
                id="name"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-medium" htmlFor="email">
              Email Address
            </label>
            <div className="bg-primary-bg border-bright-light-border flex items-center gap-3.75 rounded-[10px] border p-4.25">
              <MailIcon className="text-light-blue-soft h-4 w-auto shrink-0" />
              <input
                className="placeholder:text-secondary-text text-light-text w-full text-[15px] leading-[100%] outline-none placeholder:text-[15px] placeholder:leading-[100%]"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                required
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[15px] font-medium" htmlFor="message">
              Message
            </label>
            <div className="bg-primary-bg border-bright-light-border flex items-center gap-3.75 rounded-[10px] border p-4.25">
              <MessageIcon className="text-light-blue-soft h-4 w-auto shrink-0 self-start" />
              <textarea
                className="placeholder:text-secondary-text text-light-text -mt-0.75 w-full resize-none overflow-hidden text-[15px] leading-[150%] outline-none placeholder:text-[15px] placeholder:leading-[150%]"
                rows={6}
                name="message"
                id="message"
                placeholder="Write your message here..."
                required
                onChange={(e) => {
                  e.currentTarget.style.height = "auto";
                  e.currentTarget.style.height = `${e.currentTarget.scrollHeight}px`;
                }}
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-primary-bg bg-light-blue flex cursor-pointer items-center justify-center gap-2.5 rounded-full py-4.25"
          >
            <SendIcon className="h-4.5 w-4.5" />
            <span className="font-bold">Send</span>
          </button>
        </div>
      </form>
    </section>
  );
}
