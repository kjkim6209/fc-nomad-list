"use client"

import { useState } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ContinentFilter from "@/components/continent-filter"
import CityGrid from "@/components/city-grid"
import MeetupsSection from "@/components/meetups-section"
import CommunitySection from "@/components/community-section"
import SubscriptionSection from "@/components/subscription-section"
import Footer from "@/components/footer"
import type { CityRegion } from "@/data/cities"

export default function Home() {
  const [selectedContinent, setSelectedContinent] = useState<CityRegion>("all")

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ContinentFilter selectedContinent={selectedContinent} onSelectContinent={setSelectedContinent} />
      <CityGrid continent={selectedContinent} />
      <MeetupsSection />
      <CommunitySection />
      <SubscriptionSection />
      <Footer />
    </div>
  )
}
