"use client"

import { useState } from "react"
import { ExternalLink, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    title: "Scalable SaaS Platform",
    description: "Enterprise-grade subscription platform with real-time analytics",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    image: "/modern-saas-dashboard.jpg",
    problem: "Client needed a robust SaaS platform to manage thousands of subscriptions with real-time metrics",
    solution: "Built a full-stack solution with Next.js, implemented efficient database queries, and integrated Stripe",
    result: "Platform now handles 10K+ monthly users with 99.9% uptime",
  },
  {
    id: 2,
    title: "Real-time Collaboration Tool",
    description: "Live document editing with conflict resolution",
    tech: ["React", "WebSocket", "Node.js", "MongoDB"],
    image: "/collaborative-editor-interface.jpg",
    problem: "Need for seamless real-time collaboration without lag or conflicts",
    solution: "Implemented WebSocket infrastructure with operational transformation for conflict resolution",
    result: "Zero-lag editing experience supporting 100+ concurrent users",
  },
  {
    id: 3,
    title: "Mobile-First E-commerce",
    description: "High-converting shopping experience optimized for mobile",
    tech: ["React Native", "Node.js", "Firebase", "Stripe"],
    image: "/ecommerce-mobile-app.jpg",
    problem: "Legacy mobile app losing customers due to poor UX",
    solution: "Redesigned from ground up with React Native, optimized checkout flow",
    result: "45% increase in conversion rate, 3x faster app performance",
  },
  {
    id: 4,
    title: "Data Analytics Dashboard",
    description: "Real-time insights from millions of data points",
    tech: ["React", "D3.js", "Python", "PostgreSQL"],
    image: "/analytics-dashboard-charts.jpg",
    problem: "Processing and visualizing massive datasets efficiently",
    solution: "Built optimized data pipeline with aggregation, React frontend with D3 visualizations",
    result: "Dashboard loads complex queries in under 200ms",
  },
]

export function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Portfolio</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Selected projects showcasing problem-solving and technical excellence
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-card border border-border rounded-xl overflow-hidden hover:border-accent transition-all duration-300 hover:shadow-lg"
            >
              <div className="aspect-video bg-linear-to-br from-accent/20 to-accent/5 relative overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs bg-secondary px-3 py-1 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-6 backdrop-blur-sm">
            <div className="bg-card border border-border rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="sticky top-0 flex justify-between items-center p-6 border-b border-border bg-card">
                <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-secondary rounded-lg transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <div className="aspect-video bg-linear-to-br from-accent/20 to-accent/5 rounded-lg overflow-hidden">
                  <img
                    src={selectedProject.image || "/placeholder.svg"}
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Problem</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.problem}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Solution</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Result</h4>
                  <p className="text-muted-foreground leading-relaxed">{selectedProject.result}</p>
                </div>

                <div className="flex gap-3">
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="text-sm bg-accent/20 text-accent px-4 py-2 rounded-lg font-medium">
                      {t}
                    </span>
                  ))}
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-semibold">
                  <ExternalLink size={16} className="mr-2" />
                  View Project
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
