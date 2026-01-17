import { Code2, Zap, Shield } from "lucide-react"

export function About() {
  return (
    <section className="py-20 md:py-32 px-6 max-w-5xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">About Elvis</h2>
          <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
            I'm a passionate software engineer dedicated to solving complex problems with elegant solutions. With
            expertise spanning full-stack development, I create products that are not just functional, but built to
            scale.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            My approach combines security-first thinking, performance optimization, and clean architecture—ensuring
            every project I touch becomes a trusted, reliable asset.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
            <Code2 className="text-accent mb-4" size={32} />
            <h3 className="font-semibold mb-2">Full-Stack Development</h3>
            <p className="text-sm text-muted-foreground">Building complete solutions from frontend to backend</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
            <Zap className="text-accent mb-4" size={32} />
            <h3 className="font-semibold mb-2">Performance</h3>
            <p className="text-sm text-muted-foreground">Lightning-fast apps optimized for real-world usage</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
            <Shield className="text-accent mb-4" size={32} />
            <h3 className="font-semibold mb-2">Security First</h3>
            <p className="text-sm text-muted-foreground">Enterprise-grade protection built in from the start</p>
          </div>
          <div className="bg-card border border-border rounded-xl p-6 hover:border-accent transition-colors">
            <Code2 className="text-accent mb-4" size={32} />
            <h3 className="font-semibold mb-2">Scalability</h3>
            <p className="text-sm text-muted-foreground">Architecture designed to grow with your business</p>
          </div>
        </div>
      </div>
    </section>
  )
}
