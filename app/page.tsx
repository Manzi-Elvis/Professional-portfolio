"use client"

import { useState, useEffect } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"
import { Hero } from "@/components/sections/hero"
import { About } from "@/components/sections/about"
import { Services } from "@/components/sections/services"
import { Portfolio } from "@/components/sections/portfolio"
import { Testimonials } from "@/components/sections/testimonials"
import { Blog } from "@/components/sections/blog"
import { Support } from "@/components/sections/support"
import { Contact } from "@/components/sections/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 right-0 z-50 flex items-center gap-4 p-6">
        <LanguageSwitcher />
        <ThemeToggle />
      </header>

      {/* Main content */}
      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Support />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}
