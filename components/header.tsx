"use client"

import { MapPin } from "lucide-react"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <MapPin className="w-6 h-6 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl">Nomad List</span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#cities" className="hover:text-primary transition-colors">
            Cities
          </a>
          <a href="#meetups" className="hover:text-primary transition-colors">
            Meetups
          </a>
          <a href="#community" className="hover:text-primary transition-colors">
            Community
          </a>
        </nav>
        <button className="px-6 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
          Sign In
        </button>
      </div>
    </header>
  )
}
