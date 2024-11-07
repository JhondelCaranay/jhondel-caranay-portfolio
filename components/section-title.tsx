type Props = {
  title: string;
  titleNumber: string;
};

export const SectionTitle = ({ title, titleNumber }: Props) => {
  return (
    <h2 className="flex items-center font-titleFont text-2xl font-semibold">
      <span className="mr-2 text-base text-colorGreen md:text-lg">
        {titleNumber}.
      </span>{" "}
      {title}
      <span className="ml-6 hidden h-[.5px] bg-gray-700 md:inline-flex md:w-60 lgl:w-72"></span>
    </h2>
  );
};
