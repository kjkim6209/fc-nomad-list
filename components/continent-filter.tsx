"use client"

import { cn } from "@/lib/utils"
import type { CityRegion } from "@/data/cities"

interface ContinentFilterProps {
  selectedContinent: CityRegion
  onSelectContinent: (continent: CityRegion) => void
}

const continents: Array<{ id: CityRegion; label: string; icon: string }> = [
  { id: "all", label: "All Cities", icon: "🌍" },
  { id: "asia", label: "Asia", icon: "🏯" },
  { id: "europe", label: "Europe", icon: "🏰" },
  { id: "americas", label: "Americas", icon: "🗽" },
  { id: "africa", label: "Africa", icon: "🦁" },
  { id: "oceania", label: "Oceania", icon: "🏄" },
]

export default function ContinentFilter({ selectedContinent, onSelectContinent }: ContinentFilterProps) {
  return (
    <section className="py-12 border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Explore by Region</h2>
        <div className="flex flex-wrap gap-3">
          {continents.map((continent) => (
            <button
              key={continent.id}
              onClick={() => onSelectContinent(continent.id)}
              className={cn(
                "px-6 py-3 rounded-lg font-medium transition-all duration-300",
                selectedContinent === continent.id
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card border border-border hover:border-primary text-foreground hover:bg-card",
              )}
            >
              <span className="mr-2">{continent.icon}</span>
              {continent.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
