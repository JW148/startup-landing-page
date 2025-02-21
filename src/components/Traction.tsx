import Image from "next/image"

export function Traction() {
  return (
    <section id="traction" className="py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Traction & Metrics</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
            <span className="text-4xl font-bold text-primary">$1M+</span>
            <span className="mt-2 text-sm text-muted-foreground">Annual Revenue</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
            <span className="text-4xl font-bold text-primary">100k+</span>
            <span className="mt-2 text-sm text-muted-foreground">Active Users</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
            <span className="text-4xl font-bold text-primary">50+</span>
            <span className="mt-2 text-sm text-muted-foreground">Enterprise Clients</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-muted rounded-lg">
            <span className="text-4xl font-bold text-primary">4.9/5</span>
            <span className="mt-2 text-sm text-muted-foreground">Customer Rating</span>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold mb-6 text-center">What Our Customers Say</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <blockquote className="p-6 border rounded-lg">
              <p className="mb-4">
                "This solution has transformed our business operations. We've seen a 200% increase in efficiency."
              </p>
              <footer className="text-sm text-muted-foreground">- John Doe, CEO of TechCorp</footer>
            </blockquote>
            <blockquote className="p-6 border rounded-lg">
              <p className="mb-4">
                "The ROI we've experienced with this product is unprecedented. It's a game-changer."
              </p>
              <footer className="text-sm text-muted-foreground">- Jane Smith, CTO of InnovateCo</footer>
            </blockquote>
          </div>
        </div>
        <div className="mt-12 flex justify-center space-x-8">
          <Image src="/placeholder.svg" alt="Client Logo 1" width={100} height={50} />
          <Image src="/placeholder.svg" alt="Client Logo 2" width={100} height={50} />
          <Image src="/placeholder.svg" alt="Client Logo 3" width={100} height={50} />
          <Image src="/placeholder.svg" alt="Client Logo 4" width={100} height={50} />
        </div>
      </div>
    </section>
  )
}

