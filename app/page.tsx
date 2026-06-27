"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const NEW_SITE_URL = "https://nusrat-lia.github.io/"
const REDIRECT_SECONDS = 3

export default function HomePage() {
  const [secondsLeft, setSecondsLeft] = useState(REDIRECT_SECONDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((s) => (s > 0 ? s - 1 : 0))
    }, 1000)

    const timeout = setTimeout(() => {
      window.location.replace(NEW_SITE_URL)
    }, REDIRECT_SECONDS * 1000)

    return () => {
      clearInterval(interval)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-16">
      <Card className="w-full max-w-xl shadow-lg">
        <CardContent className="p-8 md:p-12 flex flex-col items-center text-center space-y-6">
          <div className="relative h-24 w-24 overflow-hidden rounded-full ring-2 ring-border">
            <Image
              src="me/me-n.png?height=200&width=200"
              alt="Nusrat Lia"
              fill
              className="object-cover"
            />
          </div>

          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
              I've moved!
            </h1>
            <p className="text-muted-foreground leading-relaxed">
              My portfolio now lives at a new home. You'll be redirected
              automatically in <span className="font-semibold text-foreground">{secondsLeft}</span>{" "}
              second{secondsLeft === 1 ? "" : "s"}.
            </p>
          </div>

          <Button asChild size="lg" className="gap-2">
            <a href={NEW_SITE_URL}>
              Go to new site
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>

          <p className="text-xs text-muted-foreground break-all">
            {NEW_SITE_URL}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}
