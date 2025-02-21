import { Check } from "lucide-react";
import { TimelineDemo } from "./Timeline";

export function Market2() {
  return (
    <section id="market" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Market Opportunity
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Market Size & Growth Potential
            </h3>
            <p className="text-muted-foreground mb-4">
              A brief breakdown of the target market, including current size and
              projected growth.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>$XX Billion market size by 2025</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>XX% CAGR over the next 5 years</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Expanding to new verticals</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Our Competitive Advantage
            </h3>
            <p className="text-muted-foreground mb-4">
              Why our startup stands out in this market and how we're positioned
              for success.
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Proprietary technology</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>First-mover advantage</span>
              </li>
              <li className="flex items-start">
                <Check className="mr-2 h-5 w-5 text-primary" />
                <span>Strong partnerships</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <TimelineDemo />
    </section>
  );
}
