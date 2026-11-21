"use server";

import { resend } from "@/lib/resend";

export async function sendEmail(formData: FormData) {
  const name = formData.get("name")?.toString().trim();
  const email = formData.get("email")?.toString().trim();
  const message = formData.get("message")?.toString().trim();

  if (!name || !email || !message) {
    throw new Error("Please fill in all fields.");
  }

  await resend.emails.send({
    from: "GBC <noreply@hellogbc.com>",
    to: "gobindochakraborty108@gmail.com",
    subject: `New Portfolio Message from ${name}`,

    replyTo: email,

    text: `
Name: ${name}

Email: ${email}

Message:
${message}
    `,
  });
}
