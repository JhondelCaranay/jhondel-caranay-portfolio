"use server";

import { Resend } from "resend";

export type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const sendEmail = async (
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> => {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  // Honeypot: real visitors never see or fill this field, bots usually do.
  // Pretend it worked so the bot doesn't retry.
  if (formData.get("company")) {
    return { status: "success", message: "Thanks! Your message was sent." };
  }

  if (!name || name.length > 100) {
    return { status: "error", message: "Please enter your name." };
  }
  if (!EMAIL_PATTERN.test(email) || email.length > 200) {
    return { status: "error", message: "Please enter a valid email address." };
  }
  if (message.length < 10 || message.length > 5000) {
    return {
      status: "error",
      message: "Your message should be between 10 and 5000 characters.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.NEXT_PUBLIC_GMAIL_LINK;
  if (!apiKey || !to) {
    console.error(
      "Contact form: RESEND_API_KEY or NEXT_PUBLIC_GMAIL_LINK is not set",
    );
    return {
      status: "error",
      message: "The contact form isn't set up yet. Please try again later.",
    };
  }

  const { error } = await new Resend(apiKey).emails.send({
    // Resend's shared sender works without a verified domain, but it can
    // only deliver to the address the Resend account was created with.
    from: "Portfolio Contact <onboarding@resend.dev>",
    to,
    replyTo: email,
    subject: `Portfolio message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  if (error) {
    console.error("Contact form: Resend error", error);
    return {
      status: "error",
      message: "Something went wrong sending your message. Please try again.",
    };
  }

  return { status: "success", message: "Thanks! Your message was sent." };
};
