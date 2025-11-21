"use client"

import { Instagram, Mail, MapPin, Phone, Send, Twitter, Youtube } from "lucide-react"

const navigation = {
  explore: [
    { label: "Cities", href: "#cities" },
    { label: "Meetups", href: "#meetups" },
    { label: "Community", href: "#community" },
    { label: "Stories", href: "#" },
  ],
  company: [
    { label: "About", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Contact", href: "#" },
  ],
  resources: [
    { label: "Travel Guides", href: "#" },
    { label: "Membership", href: "#" },
    { label: "Support", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Cookies", href: "#" },
    { label: "Accessibility", href: "#" },
  ],
}

const contactInfo = [
  { label: "이메일", value: "kjkim6209@gmail.com", href: "mailto:kjkim6209@gmail.com", icon: Mail },
  { label: "전화", value: "070-4099-0890", href: "tel:07040990890", icon: Phone },
]

const socials = [
  { label: "Instagram", href: "https://instagram.com/nomadlist", icon: Instagram },
  { label: "Twitter", href: "https://twitter.com/nomadlist", icon: Twitter },
  { label: "YouTube", href: "https://youtube.com/@nomadlist", icon: Youtube },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden border-t border-border/60 bg-gradient-to-b from-background via-card/40 to-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/15 via-primary/5 to-transparent blur-3xl opacity-70" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:py-20">
        <div className="flex flex-col gap-10 rounded-3xl border border-border/80 bg-background/70 px-6 py-8 backdrop-blur lg:flex-row lg:items-center lg:justify-between">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/20">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-medium text-primary/80">Nomad List</p>
                <h2 className="text-2xl font-semibold tracking-tight">Where your next city finds you</h2>
              </div>
            </div>
            <p className="max-w-xl text-base text-muted-foreground">
              최신 트렌드, 숨겨진 노마드 핫스팟, 커뮤니티 업데이트를 가장 먼저 받아보세요. 일주일에 한 번씩, 큐레이션된
              뉴스레터를 전해드립니다.
            </p>
          </div>
          <form className="w-full max-w-md rounded-2xl border border-border/80 bg-card/50 p-4 shadow-lg shadow-primary/10" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="newsletter-email" className="text-sm font-medium text-foreground">
              노마드 위클리 인사이트
            </label>
            <div className="mt-3 flex gap-3">
              <input
                id="newsletter-email"
                type="email"
                placeholder="이메일을 입력하세요"
                className="flex-1 rounded-xl border border-border bg-background/80 px-4 py-3 text-sm outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-secondary px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/40 transition hover:translate-y-0.5"
              >
                가입하기
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-3 text-xs text-muted-foreground">스팸은 보내지 않으며 언제든 구독을 취소할 수 있습니다.</p>
          </form>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 text-sm text-muted-foreground sm:grid-cols-2 lg:grid-cols-5">
          <div>
            <h3 className="text-base font-semibold text-foreground">Explore</h3>
            <ul className="mt-5 space-y-3">
              {navigation.explore.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Company</h3>
            <ul className="mt-5 space-y-3">
              {navigation.company.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Resources</h3>
            <ul className="mt-5 space-y-3">
              {navigation.resources.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Legal</h3>
            <ul className="mt-5 space-y-3">
              {navigation.legal.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="transition-colors hover:text-primary">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border/60 bg-card/40 p-6 text-foreground shadow-inner shadow-primary/5">
            <h3 className="text-base font-semibold">연락처 & 소셜</h3>
            <ul className="mt-5 space-y-4">
              {contactInfo.map(({ label, value, href, icon: Icon }) => (
                <li key={label} className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-4 w-4" aria-hidden />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-xs text-muted-foreground">{label}</span>
                    <a href={href} className="text-sm font-medium hover:text-primary">
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs text-muted-foreground">소셜 미디어</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="inline-flex items-center gap-2 rounded-full border border-border/70 px-3 py-2 text-xs font-medium transition hover:border-primary hover:text-primary"
                  >
                    <Icon className="h-4 w-4" aria-hidden />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border/70 pt-8 text-sm text-muted-foreground">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p>© {year} Nomad List. 모든 권리는 보호됩니다.</p>
            <div className="flex flex-wrap gap-4">
              <a href="#" className="transition-colors hover:text-primary">
                이용약관
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                개인정보처리방침
              </a>
              <a href="#" className="transition-colors hover:text-primary">
                쿠키 설정
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
