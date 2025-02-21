import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function StartupLandingPage() {
  return (
    <div className="flex flex-col gap-8 min-h-screen place-items-center justify-center">
      <div className="fixed left-0 top-0 -z-10 h-full w-full bg-white">
        <div className=" absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-6xl md:text-6xl text-transparent bg-gradient-to-r from-neutral-900 to-gray-400 bg-clip-text mx-auto ">
          ContentFlo
        </h1>
        <h1 className="font-semibold text-2xl md:text-2xl text-neutral-700 bg-clip-text mx-auto ">
          Gate2Fundraise Demo
        </h1>
      </div>
      <Link
        href="/v1"
        className="flex flex-row gap-10  px-4 py-1 text-black rounded-xl border border-black hover:bg-black/10"
      >
        <p>V1</p>
        <ArrowRight size={20} className="my-auto" />
      </Link>
      <Link
        href="/v2"
        className="flex flex-row gap-10  px-4 py-1 text-black rounded-xl border border-black hover:bg-black/10"
      >
        <p>V2</p>
        <ArrowRight size={20} className="my-auto" />
      </Link>
      <Link
        href="/v3"
        className="flex flex-row gap-10  px-4 py-1 text-black rounded-xl border border-black hover:bg-black/10"
      >
        <p>V3</p>
        <ArrowRight size={20} className="my-auto" />
      </Link>
    </div>
  );
}
