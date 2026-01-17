"use client"

import type React from "react"

import { useState } from "react"
import { Github, Linkedin, Instagram, Mail, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", subject: "", message: "" })
    }, 3000)
  }

  return (
    <section className="py-20 md:py-32 px-6 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          Have a project in mind? Let's talk about how I can help bring your vision to life.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Subject</label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                required
              />
            </div>

            {submitted ? (
              <div className="bg-green-500/20 text-green-700 dark:text-green-300 px-4 py-3 rounded-lg text-center font-medium">
                Message sent successfully! I'll be in touch soon.
              </div>
            ) : (
              <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 rounded-lg font-semibold inline-flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </Button>
            )}
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors hover:text-accent"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors hover:text-accent"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors hover:text-accent"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#"
                  className="p-3 bg-card border border-border rounded-lg hover:border-accent transition-colors hover:text-accent"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-accent transition-colors">
                    Email: elvis@example.com
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Availability</h3>
              <p className="text-muted-foreground leading-relaxed">
                Currently available for freelance projects and full-time opportunities. Response time: 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
