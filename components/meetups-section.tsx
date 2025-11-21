"use client"

import { MapPin, Calendar, Users } from "lucide-react"

const meetups = [
  {
    title: "Bali Nomad Networking",
    location: "Bali, Indonesia",
    date: "Every Friday",
    attendees: 45,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Bangkok Tech Meetup",
    location: "Bangkok, Thailand",
    date: "Bi-weekly",
    attendees: 60,
    image: "/placeholder.svg?height=300&width=300",
  },
  {
    title: "Lisbon Creator Collective",
    location: "Lisbon, Portugal",
    date: "Monthly",
    attendees: 32,
    image: "/placeholder.svg?height=300&width=300",
  },
]

export default function MeetupsSection() {
  return (
    <section id="meetups" className="py-20 border-b border-border">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Upcoming Meetups</h2>
          <p className="text-lg text-muted-foreground">Connect with digital nomads in your city</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {meetups.map((meetup, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden bg-card border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="h-40 overflow-hidden bg-muted">
                <img
                  src={meetup.image || "/placeholder.svg"}
                  alt={meetup.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-4">{meetup.title}</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 flex-shrink-0" />
                    {meetup.location}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 flex-shrink-0" />
                    {meetup.date}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Users className="w-4 h-4 flex-shrink-0" />
                    {meetup.attendees} attending
                  </div>
                </div>
                <button className="w-full mt-4 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity font-medium">
                  Join Meetup
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
