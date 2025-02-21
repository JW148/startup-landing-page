import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          Revolutionizing <span className="text-primary">Industry Name</span>
        </h1>
        <p className="mt-4 text-xl text-muted-foreground max-w-3xl">
          One-sentence pitch highlighting the problem and our innovative
          solution.
        </p>
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
      <div className="absolute inset-0 -z-10 h-full w-full">
        <Image
          src="/placeholder.svg"
          alt="Product in action"
          fill
          className="opacity-50 object-cover"
        />
      </div>
    </section>
  );
}
