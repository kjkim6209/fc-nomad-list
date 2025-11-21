"use client"

import { Heart } from "lucide-react"

import { cities, type CityRegion } from "@/data/cities"

interface CityGridProps {
  continent: CityRegion
}

export default function CityGrid({ continent }: CityGridProps) {
  const displayCities = cities[continent] || []

  return (
    <section id="cities" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Featured Cities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayCities.map((city, idx) => (
            <div
              key={idx}
              className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden bg-muted">
                <img
                  src={city.image || "/placeholder.svg"}
                  alt={city.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 rounded-lg bg-white/90 backdrop-blur-sm text-foreground hover:bg-white transition-colors opacity-0 group-hover:opacity-100 transition-opacity">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold mb-1">{city.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{city.country}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-primary">★ {city.rating}</span>
                    <span className="text-sm text-muted-foreground">{city.price}</span>
                  </div>
                  <span className="text-lg">{city.climate}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {displayCities.length === 0 && (
          <div className="text-center py-12">
            <p className="text-lg text-muted-foreground">Coming soon for this region!</p>
          </div>
        )}
      </div>
    </section>
  )
}
