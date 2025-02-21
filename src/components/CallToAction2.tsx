import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { TextHoverEffect } from "./ui/text-hover-effect";

export function CallToAction2() {
  return (
    <section className="pt-16">
      <div className="container text-center">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Transform Your Industry?
        </h2>
        <p className="text-xl text-muted-foreground mb-8">
          Join the revolution and be part of the next big thing in tech.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg">
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Download Pitch Deck
            <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <p className="mt-8 text-muted-foreground">
          Contact us:{" "}
          <a href="mailto:info@startupname.com" className="underline">
            info@startupname.com
          </a>{" "}
          |
          <a
            href="https://linkedin.com/company/startupname"
            className="underline ml-2"
          >
            LinkedIn
          </a>
        </p>
      </div>
      <div className=" items-start -ml-[35vw]">
        <TextHoverEffect text="NAME" />
      </div>
    </section>
  );
}
