"use client";

import { useActionState, useEffect, useRef } from "react";
import clsx from "clsx";

import { ContactFormState, sendEmail } from "@/actions/send-email";

const initialState: ContactFormState = { status: "idle", message: "" };

const inputClassName =
  "w-full rounded-md border border-colorDark/40 bg-[#112240] px-4 py-3 text-colorLight placeholder:text-colorDark focus:border-colorPrimary focus:outline-none";

export const ContactForm = () => {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    initialState,
  );
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.status === "success") formRef.current?.reset();
  }, [state]);

  return (
    <form
      ref={formRef}
      action={formAction}
      className="mt-4 flex w-full max-w-[600px] flex-col gap-4"
    >
      <div className="flex flex-col gap-4 sml:flex-row">
        <label className="flex w-full flex-col gap-2 text-sm text-colorDark">
          Name
          <input
            name="name"
            type="text"
            required
            maxLength={100}
            autoComplete="name"
            className={inputClassName}
          />
        </label>
        <label className="flex w-full flex-col gap-2 text-sm text-colorDark">
          Email
          <input
            name="email"
            type="email"
            required
            maxLength={200}
            autoComplete="email"
            className={inputClassName}
          />
        </label>
      </div>

      <label className="flex flex-col gap-2 text-sm text-colorDark">
        Message
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          className={clsx(inputClassName, "resize-y")}
        />
      </label>

      {/* Honeypot: hidden from people, often filled in by spam bots. */}
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <button
        type="submit"
        disabled={isPending}
        className="mx-auto h-14 w-52 rounded-md border border-colorPrimary font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:bg-HoverColor hover:shadow-BoxShadowGlow disabled:cursor-wait disabled:opacity-60"
      >
        {isPending ? "Sending..." : "Say Hello!"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={clsx(
          "min-h-6 text-center text-sm",
          state.status === "error" ? "text-red-400" : "text-colorPrimary",
        )}
      >
        {state.message}
      </p>
    </form>
  );
};
