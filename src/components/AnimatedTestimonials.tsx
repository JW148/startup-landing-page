"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const testimonials = [
  {
    quote: "This solution has transformed our business operations. We've seen a 200% increase in efficiency.",
    name: "John Doe",
    title: "CEO of TechCorp",
    image: "/placeholder.svg",
  },
  {
    quote: "The ROI we've experienced with this product is unprecedented. It's a game-changer.",
    name: "Jane Smith",
    title: "CTO of InnovateCo",
    image: "/placeholder.svg",
  },
  {
    quote: "Implementation was seamless, and the results were immediate. Highly recommended.",
    name: "Alex Johnson",
    title: "Director of Operations, Enterprise Co",
    image: "/placeholder.svg",
  },
]

export function AnimatedTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[400px] w-full overflow-hidden bg-background">
      <div className="absolute inset-0">
        <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: currentIndex === idx ? 1 : 0,
                y: currentIndex === idx ? 0 : 20,
              }}
              transition={{ duration: 0.5 }}
              className={`absolute inset-0 flex flex-col items-center justify-center ${
                currentIndex === idx ? "pointer-events-auto" : "pointer-events-none"
              }`}
            >
              <div className="text-center">
                <p className="relative text-lg md:text-xl text-muted-foreground mb-4">
                  <span className="text-3xl text-primary">"</span>
                  {testimonial.quote}
                  <span className="text-3xl text-primary">"</span>
                </p>
                <div className="mt-4">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-colors ${currentIndex === idx ? "bg-primary" : "bg-muted"}`}
          />
        ))}
      </div>
    </div>
  )
}

