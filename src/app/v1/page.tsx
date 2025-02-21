"use client";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProblemSolution } from "@/components/ProblemSolution";
import { Traction } from "@/components/Traction";
import { Product } from "@/components/Product";
import { Market } from "@/components/Market";
import { Team } from "@/components/Team";
import { CallToAction } from "@/components/CallToAction";
import { Footer } from "@/components/Footer";

export default function StartupLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header enableThemeBtn={false} />
      <main className="flex-1">
        <Hero />
        <ProblemSolution />
        <Traction />
        <Product />
        <Market />
        <Team />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
