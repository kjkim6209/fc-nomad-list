"use client"

import { MessageCircle, Heart, Share2 } from "lucide-react"

const communityPosts = [
  {
    author: "Sarah Chen",
    avatar: "👩‍💼",
    location: "Bali",
    content: "Just found the best coworking space in Ubud! Great coffee and super reliable wifi.",
    likes: 234,
    comments: 45,
  },
  {
    author: "Marco Garcia",
    avatar: "👨‍💻",
    location: "Lisbon",
    content: "Anyone else here working on their startup? Let's connect and collaborate!",
    likes: 156,
    comments: 32,
  },
  {
    author: "Yuki Tanaka",
    avatar: "👩‍🎨",
    location: "Bangkok",
    content: "First week in Thailand and I'm already in love. The food, the people, everything!",
    likes: 512,
    comments: 89,
  },
]

export default function CommunitySection() {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4">Community Stories</h2>
          <p className="text-lg text-muted-foreground">Share your nomad experiences and inspire others</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {communityPosts.map((post, idx) => (
            <div
              key={idx}
              className="rounded-xl bg-card border border-border p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-2xl">{post.avatar}</div>
                <div>
                  <p className="font-semibold">{post.author}</p>
                  <p className="text-sm text-muted-foreground">{post.location}</p>
                </div>
              </div>
              <p className="text-foreground mb-6">{post.content}</p>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    {post.likes}
                  </button>
                  <button className="flex items-center gap-2 hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                    {post.comments}
                  </button>
                </div>
                <button className="hover:text-primary transition-colors">
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
