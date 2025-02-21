import Image from "next/image"

export function Team() {
  return (
    <section id="team" className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Image src="/placeholder.svg" alt="Founder" width={150} height={150} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold">Jane Doe</h3>
            <p className="text-muted-foreground">Founder & CEO</p>
            <p className="mt-2 text-sm">Brief bio highlighting relevant experience and achievements.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/placeholder.svg" alt="CTO" width={150} height={150} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-muted-foreground">CTO</p>
            <p className="mt-2 text-sm">Brief bio highlighting relevant experience and achievements.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/placeholder.svg" alt="Advisor" width={150} height={150} className="rounded-full mb-4" />
            <h3 className="text-xl font-semibold">Alice Johnson</h3>
            <p className="text-muted-foreground">Industry Advisor</p>
            <p className="mt-2 text-sm">Brief bio highlighting relevant experience and industry expertise.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

