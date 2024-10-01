import { Compare } from "@/components/ui/compare";

export default function Home() {
  return (
    <div className="grid items-center justify-items-center h-screen p-8 pb-20 gap-16">
      <div className="p-4 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800 px-4">
        <Compare
          firstImage="https://www.t3bucket.com/f/0-code-problem.png"
          secondImage="https://www.t3bucket.com/f/0-code-solution.png"
          firstImageClassName="object-cover object-left-top"
          secondImageClassname="object-cover object-left-top"
          className="h-[250px] w-[200px] md:h-[500px] md:w-[500px]"
          slideMode="hover"
        />
      </div>
    </div>
  );
}
