type Props = {
  onOpen: () => void;
};

export const MenuIcon = ({ onOpen }: Props) => {
  return (
    <div
      onClick={onOpen}
      className="group flex h-6 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl text-colorPrimary mdl:hidden"
    >
      <span className="inline-flex h-[2px] w-full transform bg-colorPrimary transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
      <span className="inline-flex h-[2px] w-full translate-x-3 transform bg-colorPrimary transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
      <span className="inline-flex h-[2px] w-full translate-x-1 transform bg-colorPrimary transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
    </div>
  );
};
