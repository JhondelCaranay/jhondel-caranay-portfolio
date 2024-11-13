import { services } from "@/utils/data";
import { ServiceCard } from "./service-card";
import { SectionTitle } from "../section-title";

export const Services = () => {
  return (
    <div
      id="services"
      className="bg-400-500 mx-auto max-w-container px-4 py-24 lgl:px-20"
    >
      {/* titles */}
      <div className="flex w-full flex-col items-center">
        <SectionTitle title="My services" titleNumber="IV" line={false} />
        {/* <h2 className="font-titleFont text-3xl font-semibold">My services</h2> */}
        {/* <p className="text-colorPrimary font-titleFont text-sm">
          view the archive
        </p> */}
      </div>

      {/* cards */}
      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lgl:px-10 xl:grid-cols-3">
        {services.map((service) => (
          <ServiceCard data={service} key={service.id} />
        ))}
      </div>
    </div>
  );
};
