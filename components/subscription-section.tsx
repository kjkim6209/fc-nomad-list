"use client"

import { Mail, ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SubscriptionSection() {
  const handleSubscribe = () => {
    window.open("https://page.stibee.com/subscriptions/456125", "_blank")
  }

  return (
    <section className="relative overflow-hidden py-20 bg-gradient-to-b from-muted/30 via-background to-background">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent blur-3xl opacity-50" />
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="rounded-3xl border border-border/80 bg-gradient-to-br from-card/80 via-card/60 to-card/80 backdrop-blur-sm shadow-xl shadow-primary/10 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-lg shadow-primary/30">
              <Mail className="h-8 w-8 text-primary-foreground" />
            </div>
            
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">유료 메일링 구독하기</h2>
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              노마드 라이프에 필요한 최신 정보와 인사이트를 받아보세요.
              <br className="hidden md:block" />
              전문가들이 큐레이션한 콘텐츠를 정기적으로 전달해드립니다.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                onClick={handleSubscribe}
                size="lg"
                className="w-full sm:w-auto px-8 py-6 text-base font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg shadow-primary/40 transition-all hover:translate-y-[-2px] hover:shadow-xl hover:shadow-primary/50"
              >
                구독하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            
            <p className="mt-6 text-sm text-muted-foreground">
              언제든지 구독을 취소할 수 있으며, 개인정보는 안전하게 보호됩니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

