type Props = {
  title: string;
  titleNumber: string;
  line: boolean;
};

export const SectionTitle = ({ title, titleNumber, line = true }: Props) => {
  return (
    <h2 className="flex items-center font-titleFont text-2xl font-semibold">
      <span className="text-colorPrimary mr-2 text-base md:text-lg">
        {titleNumber}.
      </span>{" "}
      {title}
      {line && (
        <span className="ml-6 hidden h-[.5px] bg-gray-700 md:inline-flex md:w-60 lgl:w-72"></span>
      )}
    </h2>
  );
};
