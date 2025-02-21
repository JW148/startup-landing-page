import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { Spotlight } from "./ui/spotlight-new";

export function Hero2() {
  return (
    <div className="min-h-[calc(100vh-3.5rem)] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative flex-col overflow-hidden">
      <Spotlight translateY={-500} xOffset={400} />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 pb-4">
          StartupName
        </h1>
        <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          A subtle yet effective spotlight effect, because the previous version
          is used a bit too much these days.
        </p>
      </div>
      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Button size="lg">
          Book a Meeting
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
        <Button size="lg" variant="outline">
          Download Pitch Deck
          <Download className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
