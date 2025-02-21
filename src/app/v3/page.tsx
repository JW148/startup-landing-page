import { Header } from "@/components/Header";
import { Hero2 } from "@/components/Hero2";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Traction } from "@/components/Traction";
import { Product } from "@/components/Product";
import { Market2 } from "@/components/Market2";
import { Team } from "@/components/Team";
import { CallToAction2 } from "@/components/CallToAction2";
import { Footer } from "@/components/Footer";

export default function StartupLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header enableThemeBtn={false} />
      <main className="flex-1">
        <Hero2 />
        <ProblemSolution />
        <Traction />
        <Product />
        <Market2 />
        <Team />
        <CallToAction2 />
      </main>
      <Footer />
    </div>
  );
}
