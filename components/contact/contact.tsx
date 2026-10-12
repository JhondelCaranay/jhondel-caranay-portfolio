import { SectionTitle } from "../section-title";
import { ContactForm } from "./contact-form";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="mx-auto flex max-w-contentContainer flex-col items-center justify-center gap-4 py-10 xl:py-32"
    >
      <div className="flex w-full flex-col items-center">
        <SectionTitle title="Contact" titleNumber="V" line={false} />
      </div>
      <h2 className="font-titleFont text-5xl font-semibold">Get in Touch</h2>

      <p className="max-w-[600px] text-center text-colorDark">
        My inbox is always open. Whether you have a question or just want to say
        hi, send me a message and I&apos;ll do my best to get back to you!
      </p>

      <ContactForm />
    </div>
  );
};
