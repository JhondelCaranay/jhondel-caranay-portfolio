export const MenuIcon = () => {
  return (
    <div className="text-colorPrimary group flex h-6 w-6 cursor-pointer flex-col items-center justify-between overflow-hidden text-4xl mdl:hidden">
      <span className="bg-colorPrimary inline-flex h-[2px] w-full transform transition-all duration-300 ease-in-out group-hover:translate-x-2"></span>
      <span className="bg-colorPrimary inline-flex h-[2px] w-full translate-x-3 transform transition-all duration-300 ease-in-out group-hover:translate-x-0"></span>
      <span className="bg-colorPrimary inline-flex h-[2px] w-full translate-x-1 transform transition-all duration-300 ease-in-out group-hover:translate-x-3"></span>
    </div>
  );
};
