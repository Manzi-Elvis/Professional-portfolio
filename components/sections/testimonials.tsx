"use client"

import { useEffect, useRef } from "react"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CTO at TechStartup",
    content:
      "Elvis delivered exactly what we needed - a scalable system that handled our growth seamlessly. His attention to security and performance is unmatched.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Founder at DataCorp",
    content:
      "Working with Elvis was transformative. He not only solved our technical challenges but also educated our team on best practices.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Product Lead at MobileApp",
    content:
      "The quality of code and the speed of delivery were both impressive. Elvis is a rare combination of technical excellence and communication skills.",
    rating: 5,
  },
  {
    name: "David Kim",
    role: "CEO at FinTech Solutions",
    content:
      "Security-first approach, performance-obsessed, and incredibly professional. Exactly what you want in a software engineer.",
    rating: 5,
  },
]

export function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scroll = () => {
      scrollPosition += 0.5
      if (scrollPosition >= container.scrollWidth / 2) {
        scrollPosition = 0
      }
      container.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 30)

    const handleMouseEnter = () => clearInterval(interval)
    const handleMouseLeave = () => {
      const newInterval = setInterval(scroll, 30)
      return () => clearInterval(newInterval)
    }

    container.addEventListener("mouseenter", handleMouseEnter)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      clearInterval(interval)
      container.removeEventListener("mouseenter", handleMouseEnter)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <section className="py-20 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Testimonials</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          What clients and collaborators have to say
        </p>

        <div ref={scrollContainerRef} className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory">
          {[...testimonials, ...testimonials].map((testimonial, i) => (
            <div key={i} className="shrink-0 w-80 bg-background border border-border rounded-xl p-8 snap-center">
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star key={i} size={16} className="fill-accent text-accent" />
                  ))}
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
