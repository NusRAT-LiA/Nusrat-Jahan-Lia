import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink, BookOpen, Users, Briefcase, FileText } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const newsItems = [
    { date: "2024-12-15", title: "Paper accepted at CHI 2025: 'Human-AI Collaboration in Educational Settings'" },
    { date: "2024-11-28", title: "Keynote speaker at EdTech Innovation Summit 2024" },
    { date: "2024-11-10", title: "Featured in TechCrunch: 'The Future of AI in Education'" },
    { date: "2024-10-22", title: "Received NSF Grant for $500K to study AI ethics in classroom environments" },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">Hi, I'm  Nusrat Jahan Lia</h1>
              {/* <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Researcher
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Educator
                </Badge>
                <Badge variant="secondary" className="text-sm px-3 py-1">
                  Technologist
                </Badge>
              </div> */}
            </div>

            <div className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
              <p className="mb-6">
                I am a researcher and AI engineer specializing in natural language processing, low-resource language models, human-centered applications and secured decentralized systems.
                {/* I specialize in building small- and large-scale LLMs, creating datasets, designing architectures, and deploying models that solve real-world 
                problems—ranging from educational technology evaluation to news bias detection and digital well-being analytics. */}
              </p>

              <p className="mb-6">
                Currently, I am an Engineering Research Intern at Aramco-Ithra, collaborating with global institutions including WHO, 
                Stony Brook Medicine, University of Washington, University of Geneva, Western University and University of Tokyo.
                Previously, I worked with the United States Department of Justice - ICITAP, designed a platform for crowdsourced wildlife 
                crime reporting in low-connectivity areas, leveraging custom NLP pipelines and geospatial models to analyze environmental and crime data.
              </p>

              <p className="mb-6">
                Simultaneously, as a Contractual LLM Engineer at Global MicroLearning Solutions, I am designing and deploying large-scale LLM solutions that 
                support engineering teams in the field with intelligent, context-aware systems.
              </p>

              <p className="mb-6">
                At BanglaLLM, I contribute to open-source language models for low-resource Bangla language. I am currently a final year software engineering undergraduate student at University of Dhaka where I work in BARTA Lab.
                There, I focus on low-resource and small-language-model development, design datasets, techniques, and educational resources for equitable AI deployment in Bangladesh.
                I also serve as an instructor at BARTA, where I take language model building course.
              </p>

              <p>
                Entrepreneurially, I am a founding member of Perspectivity - Drishtikon, the first real-time AI news aggregator for Bangla, featuring multi-axis bias detection, 
                news summarization, and interactive bots that empower citizens with nuanced, research-backed insights.
              </p>
            </div>


            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Get in Touch
                </Link>
              </Button>
              
            </div>

            <div className="flex gap-4">
              <Link href="https://github.com/NusRAT-LiA" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              {/* <Link
                href="https://scholar.google.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <BookOpen className="w-5 h-5" />
              </Link> */}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-2xl ">
              <Image src="/me/me.png?height=500&width=500" alt="Nusrat Lia" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/research">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Research</h3>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/projects">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Projects</h3>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/courses">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Courses</h3>
                </div>
              </CardContent>
            </Link>
          </Card>

          <Card className="group hover:shadow-lg transition-shadow cursor-pointer">
            <Link href="/blog">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Blog</h3>
                </div>
              </CardContent>
            </Link>
          </Card>
        </div>
      </section>

      {/* Latest News
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Latest News</h2>
          <div className="space-y-4">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors"
              >
                <div className="text-sm text-muted-foreground whitespace-nowrap">
                  {new Date(item.date).toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  })}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{item.title}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground" />
              </div>
            ))}
          </div>
          <Button variant="outline" asChild>
            <Link href="/news">View All News</Link>
          </Button>
        </div>
      </section> */}
    </div>
  )
}
