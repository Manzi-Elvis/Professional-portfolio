"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const [language, setLanguage] = useState("en")

  const languages = [
    { code: "en", name: "English" },
    { code: "rw", name: "Kinyarwanda" },
    { code: "fr", name: "Français" },
  ]

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-muted transition-colors duration-200 text-sm font-medium"
      >
        {languages.find((l) => l.code === language)?.name}
        <ChevronDown size={16} />
      </button>

      {isOpen && (
        <div className="absolute top-12 right-0 bg-card border border-border rounded-lg shadow-lg py-2 min-w-32">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code)
                setIsOpen(false)
              }}
              className={`w-full text-left px-4 py-2 text-sm hover:bg-secondary transition-colors ${
                language === lang.code ? "bg-secondary font-semibold" : ""
              }`}
            >
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
