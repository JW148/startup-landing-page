import Image from "next/image";
import Link from "next/link";

export function Footer2() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-2">
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
  );
}
