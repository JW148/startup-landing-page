"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";

const navItems = [
  { href: "#problem-solution", label: "Problem & Solution" },
  { href: "#traction", label: "Traction" },
  { href: "#product", label: "Product" },
  { href: "#market", label: "Market" },
  { href: "#team", label: "Team" },
];

export function Header({
  enableThemeBtn = false,
}: {
  enableThemeBtn: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg"
            alt="Startup Logo"
            width={32}
            height={32}
          />
          <span className="font-bold">StartupName</span>
        </Link>
        <div className="flex-1" />
        <nav className="hidden md:flex gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        {enableThemeBtn && <ThemeToggle />}

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              className="px-0 text-base hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-medium hover:underline underline-offset-4"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
