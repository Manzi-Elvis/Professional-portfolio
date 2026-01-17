import { ArrowRight } from "lucide-react"

const blogPosts = [
  {
    title: "Building Scalable Systems: From Zero to Millions",
    excerpt:
      "Learn the architectural patterns and decisions that enable applications to grow from concept to massive scale.",
    category: "Engineering",
  },
  {
    title: "Security as a First-Class Citizen in Development",
    excerpt: "Why security shouldn't be an afterthought. Explore how to bake it into every layer of your application.",
    category: "Security",
  },
  {
    title: "The Art of Code Craftsmanship",
    excerpt: "Clean code isn't just about aesthetics. It's about building systems that teams can trust and maintain.",
    category: "Best Practices",
  },
  {
    title: "Why Performance Matters for Your Bottom Line",
    excerpt:
      "Every millisecond counts. Discover how optimization directly impacts user satisfaction and business metrics.",
    category: "Performance",
  },
]

export function Blog() {
  return (
    <section className="py-20 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Insights & Articles</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Thoughts on building reliable, performant software
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <article
              key={i}
              className="group bg-card border border-border rounded-xl p-8 hover:border-accent transition-all duration-300 cursor-pointer"
            >
              <span className="text-sm font-semibold text-accent mb-3 inline-block">{post.category}</span>
              <h3 className="text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">{post.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{post.excerpt}</p>
              <div className="flex items-center text-accent font-medium group-hover:gap-2 gap-1 transition-all">
                Read Article
                <ArrowRight size={16} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
