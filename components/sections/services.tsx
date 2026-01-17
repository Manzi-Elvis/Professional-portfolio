import { Code2, Smartphone, Database, Cpu, Shield } from "lucide-react"

const services = [
  {
    icon: Code2,
    title: "Web Application Development",
    description: "Modern web apps built with React, Next.js, and TypeScript",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Cross-platform mobile solutions for iOS and Android",
  },
  {
    icon: Database,
    title: "Database Design & Engineering",
    description: "Robust database architectures for complex data needs",
  },
  {
    icon: Cpu,
    title: "Enterprise-Scale Applications",
    description: "Systems built to handle millions of users reliably",
  },
  {
    icon: Code2,
    title: "API & Backend Systems",
    description: "RESTful and GraphQL APIs with high performance",
  },
  {
    icon: Shield,
    title: "Performance & Security Optimization",
    description: "Making systems faster and safer through optimization",
  },
]

export function Services() {
  return (
    <section className="py-20 md:py-32 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Services</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Comprehensive solutions tailored to your business needs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <div
                key={i}
                className="group bg-background border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                <Icon className="text-accent mb-4 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
