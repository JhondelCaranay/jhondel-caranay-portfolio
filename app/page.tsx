import { Leftside } from "@/components/left-side";
import { Navbar } from "@/components/navbar";
import { RightSided } from "@/components/right-side";

export default function Home() {
  return (
    <div className="text-textLight h-screen max-h-screen w-full overflow-y-auto overflow-x-hidden bg-bodyColor font-bodyFont">
      <Navbar />

      <div className="h-[88vh] w-full items-center justify-between gap-20 xl:flex">
        <Leftside />
        <div className="mx-auto h-[88vh] w-full max-w-container p-4">
          awdawd
        </div>
        <RightSided />
      </div>
    </div>
  );
}
