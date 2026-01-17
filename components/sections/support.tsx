import { Heart, Coffee } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Support() {
  return (
    <section className="py-20 md:py-32 px-6 bg-linear-to-r from-accent/10 to-accent/5">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-6 flex justify-center">
          <Heart className="text-accent" size={48} fill="currentColor" />
        </div>

        <h2 className="text-4xl md:text-5xl font-bold mb-6">Support My Work</h2>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl mx-auto">
          If my work has been valuable to you, consider buying me a coffee. Your support helps me continue creating
          high-quality software and content.
        </p>

        <Button className="bg-accent text-accent-foreground hover:bg-accent/90 px-8 py-6 rounded-lg font-semibold text-lg inline-flex items-center gap-2">
          <Coffee size={20} />
          Buy Me a Coffee
        </Button>

        <p className="text-sm text-muted-foreground mt-6">
          Every contribution is greatly appreciated and helps me continue this journey.
        </p>
      </div>
    </section>
  )
}
