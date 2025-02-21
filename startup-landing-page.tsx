import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Download, Play } from "lucide-react";

const contentContainerClass = "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8";

export default function StartupLandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className={`${contentContainerClass} flex h-14 items-center`}>
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/placeholder.svg"
              alt="Startup Logo"
              width={32}
              height={32}
            />
            <span className="font-bold">StartupName</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              href="#problem-solution"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Problem & Solution
            </Link>
            <Link
              href="#traction"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Traction
            </Link>
            <Link
              href="#product"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Product
            </Link>
            <Link
              href="#market"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Market
            </Link>
            <Link
              href="#team"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Team
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative">
          <div
            className={`${contentContainerClass} flex flex-col items-center justify-center min-h-[calc(100vh-3.5rem)] text-center`}
          >
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Revolutionizing{" "}
              <span className="text-primary">Industry Name</span>
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

        {/* Problem & Solution Section */}
        <section id="problem-solution" className="py-16 bg-muted">
          <div className={contentContainerClass}>
            <h2 className="text-3xl font-bold text-center mb-12">
              Problem & Solution
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">The Problem</h3>
                <p className="text-muted-foreground mb-4">
                  A concise, investor-focused statement of the problem being
                  solved, backed by data or real-world examples.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Key problem point 1</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Key problem point 2</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Key problem point 3</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Our Solution</h3>
                <p className="text-muted-foreground mb-4">
                  How our product/service addresses this problem and what makes
                  it unique.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Key differentiator 1</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                  </li>
                  <li className="flex items-start">
                    <Check className="mr-2 h-5 w-5 text-primary" />
                    <span>Key differentiator 3</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Traction & Metrics Section */}
        <section id="traction" className="py-16">
          <div className={contentContainerClass}>
            <h2 className="text-3xl font-bold text-center mb-12">
              Traction & Metrics
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
                <span className="text-4xl font-bold text-primary">$1M+</span>
                <span className="mt-2 text-sm text-muted-foreground">
                  Annual Revenue
                </span>
              </div>
              <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
                <span className="text-4xl font-bold text-primary">100k+</span>
                <span className="mt-2 text-sm text-muted-foreground">
                  Active Users
                </span>
              </div>
              <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
                <span className="text-4xl font-bold text-primary">50+</span>
                <span className="mt-2 text-sm text-muted-foreground">
                  Enterprise Clients
                </span>
              </div>
              <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
                <span className="text-4xl font-bold text-primary">4.9/5</span>
                <span className="mt-2 text-sm text-muted-foreground">
                  Customer Rating
                </span>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                What Our Customers Say
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <blockquote className="p-6 border rounded-lg">
                  <p className="mb-4">
                    "This solution has transformed our business operations.
                    We've seen a 200% increase in efficiency."
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    - John Doe, CEO of TechCorp
                  </footer>
                </blockquote>
                <blockquote className="p-6 border rounded-lg">
                  <p className="mb-4">
                    "The ROI we've experienced with this product is
                    unprecedented. It's a game-changer."
                  </p>
                  <footer className="text-sm text-muted-foreground">
                    - Jane Smith, CTO of InnovateCo
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="mt-12 flex justify-center space-x-8">
              <Image
                src="/placeholder.svg"
                alt="Client Logo 1"
                width={100}
                height={50}
              />
              <Image
                src="/placeholder.svg"
                alt="Client Logo 2"
                width={100}
                height={50}
              />
              <Image
                src="/placeholder.svg"
                alt="Client Logo 3"
                width={100}
                height={50}
              />
              <Image
                src="/placeholder.svg"
                alt="Client Logo 4"
                width={100}
                height={50}
              />
            </div>
          </div>
        </section>

        {/* Product / Service Overview Section */}
        <section id="product" className="py-16 bg-muted">
          <div className={contentContainerClass}>
            <h2 className="text-3xl font-bold text-center mb-12">
              How It Works
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  1
                </div>
                <h3 className="text-xl font-semibold mb-2">Step One</h3>
                <p className="text-muted-foreground">
                  Description of the first step in using the product/service.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  2
                </div>
                <h3 className="text-xl font-semibold mb-2">Step Two</h3>
                <p className="text-muted-foreground">
                  Description of the second step in using the product/service.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
                  3
                </div>
                <h3 className="text-xl font-semibold mb-2">Step Three</h3>
                <p className="text-muted-foreground">
                  Description of the third step in using the product/service.
                </p>
              </div>
            </div>
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Watch Demo
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Market Opportunity Section */}
        <section id="market" className="py-16">
          <div className={contentContainerClass}>
            <h2 className="text-3xl font-bold text-center mb-12">
              Market Opportunity
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  Market Size & Growth Potential
                </h3>
                <p className="text-muted-foreground mb-4">
                  A brief breakdown of the target market, including current size
                  and projected growth.
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
                  Why our startup stands out in this market and how we're
                  positioned for success.
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
        </section>

        {/* Team Section */}
        <section id="team" className="py-16 bg-muted">
          <div className={contentContainerClass}>
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg"
                  alt="Founder"
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Jane Doe</h3>
                <p className="text-muted-foreground">Founder & CEO</p>
                <p className="mt-2 text-sm">
                  Brief bio highlighting relevant experience and achievements.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg"
                  alt="CTO"
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">John Smith</h3>
                <p className="text-muted-foreground">CTO</p>
                <p className="mt-2 text-sm">
                  Brief bio highlighting relevant experience and achievements.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Image
                  src="/placeholder.svg"
                  alt="Advisor"
                  width={150}
                  height={150}
                  className="rounded-full mb-4"
                />
                <h3 className="text-xl font-semibold">Alice Johnson</h3>
                <p className="text-muted-foreground">Industry Advisor</p>
                <p className="mt-2 text-sm">
                  Brief bio highlighting relevant experience and industry
                  expertise.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16">
          <div className={contentContainerClass + " text-center"}>
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
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div
          className={`${contentContainerClass} flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row`}
        >
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Image
              src="/placeholder.svg"
              alt="Startup Logo"
              width={32}
              height={32}
            />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by{" "}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="font-medium underline underline-offset-4"
              >
                StartupName
              </a>
              . © {new Date().getFullYear()} StartupName, Inc. All rights
              reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground hover:underline underline-offset-4"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
