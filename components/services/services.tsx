import { services } from "@/utils/data";
import { ServiceCard } from "./service-card";
import { SectionTitle } from "../section-title";

export const Services = () => {
  return (
    <div id="services" className="mx-auto max-w-container px-4 py-24 lgl:px-20">
      {/* titles */}
      <div className="flex w-full flex-col items-center">
        <SectionTitle title="My services" titleNumber="IV" line={false} />
        <p className="mt-4 max-w-[36rem] text-center text-sm text-colorDark md:text-base">
          From the first database table to the production server, here is how I
          can help bring your product to life.
        </p>
      </div>

      {/* cards */}
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lgl:px-10 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard data={service} key={service.id} />
        ))}
      </div>

      {/* call to action */}
      <div className="mt-14 flex flex-col items-center gap-4 text-center">
        <p className="font-titleFont text-colorLight">
          Have a project in mind?
        </p>
        <a
          href="#contact"
          className="rounded-md border border-colorPrimary px-6 py-3 font-titleFont text-sm tracking-wide text-colorPrimary duration-300 hover:bg-colorPrimary/10"
        >
          Let&apos;s work together
        </a>
      </div>
    </div>
  );
};
