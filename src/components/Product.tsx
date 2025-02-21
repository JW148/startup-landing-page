import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Product() {
  return (
    <section id="product" className="py-16 bg-muted">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
              1
            </div>
            <h3 className="text-xl font-semibold mb-2">Step One</h3>
            <p className="text-muted-foreground">Description of the first step in using the product/service.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
              2
            </div>
            <h3 className="text-xl font-semibold mb-2">Step Two</h3>
            <p className="text-muted-foreground">Description of the second step in using the product/service.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mb-4">
              3
            </div>
            <h3 className="text-xl font-semibold mb-2">Step Three</h3>
            <p className="text-muted-foreground">Description of the third step in using the product/service.</p>
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
  )
}

