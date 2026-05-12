import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Clock, Search, Calendar, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function BlogPage() {
  // const featuredPost = {
  //   title: "The Future of AI in Education: Balancing Innovation with Human Values",
  //   excerpt:
  //     "As AI becomes increasingly prevalent in educational settings, we must carefully consider how to harness its power while preserving the human elements that make learning meaningful.",
  //   image: "/placeholder.svg?height=400&width=600",
  //   date: "2024-12-10",
  //   readTime: "8 min read",
  //   category: "Research",
  //   link: "/blog/featured-post",
  //   tags: ["AI", "Education", "Ethics"],
  // }

  const blogPosts = [
    {
      title: "When Good Agents Make Bad Collaborators",
      excerpt:
        "Hidden Behavioral and Reliability Failures in Multi-Agent LLMs Beyond Task Accuracy",
      image: "projects/agentcollab.png?height=200&width=300",
      date: "2026-05-12",
      readTime: "6 min read",
      link: "https://medium.com/@nusratlia/when-good-agents-make-bad-collaborators-26baaabd5aba",
    },
    {
      title: "Thinking aloud Federated Code Intelligence: Privacy, Retrieval, and Knowledge Asymmetry",
      excerpt:
        "I didn't just want to rely on some LLM-generated response or forum question answers. I kept wondering where I could learn from actual, recent, battle-tested approaches used by companies currently operating these systems at scale.",
      image: "blog/blog7.png?height=200&width=300",
      date: "2026-01-11",
      readTime: "4 min read",
      link: "https://medium.com/@nusratlia/thinking-aloud-federated-code-intelligence-privacy-retrieval-and-knowledge-asymmetry-0bf4e0081d8f?postPublishedType=initial",
    },
    {
      title: "The Art of Knowing When to Stop: Early Stopping in AI and Life",
      excerpt:
        "Consider stopping soon. How many times have we all needed that exact warning in our lives?",
      image: "blog/blog6.png?height=200&width=300",
      date: "2025-08-20",
      readTime: "4 min read",
      link: "https://medium.com/@nusratlia/the-art-of-knowing-when-to-stop-early-stopping-in-ai-and-life-c863c84aa20d",
    },
    {
      title: "The Canvas of Resistance: On Differentiation, Algorithms, and the Mathematics of Justice",
      excerpt:
        "Thinking aloud: in a world that systematically flattens difference into hierarchy, what is means to be a differentiator?",
      image: "blog/blog5.png?height=200&width=300",
      date: "2025-08-07",
      readTime: "2 min read",
      // category: "Research",
      link: "https://medium.com/@nusratlia/the-canvas-of-resistance-on-differentiation-algorithms-and-the-mathematics-of-justice-2447686e6ec9",
      // tags: ["Ethics", "AI", "Technology"],
    },
    {
      title: "Breaking Down Language Barriers: How AI Can Learn to Fix Bangla Grammar",
      excerpt:
        "Exploring how synthetic data and AI can bridge the grammar gap for Bangla speakers.",
      image: "blog/blog4.webp?height=200&width=300",
      date: "2025-08-03",
      readTime: "4 min read",
      // category: "Research",
      link: "https://medium.com/@nusratlia/breaking-down-language-barriers-how-ai-can-learn-to-fix-bangla-grammar-ef477e991f38",
      // tags: ["Ethics", "AI", "Technology"],
    },
    {
      title: "How AI is Learning to Spot Bias (And Why It Matters More Than Ever)",
      excerpt:
        "We’re living through what researchers call “hyperpartisan” news : content written with such extreme ideological manipulation that it barely resembles reality.",
      image: "blog/blog3.webp?height=200&width=300",
      date: "2025-07-24",
      readTime: "6 min read",
      // category: "Research",
      link: "https://medium.com/@nusratlia/how-ai-is-learning-to-spot-bias-and-why-it-matters-more-than-ever-d51b299266a3",
      // tags: ["Ethics", "AI", "Technology"],
    },
    {
      title: "What if our most fundamental assumption about environmental economics, that innovation leads to sustainability, is fundamentally flawed?",
      excerpt:
        "A data driven analysis on development pathways for nations.",
      image: "blog/blog2.webp?height=200&width=300",
      date: "2025-04-22",
      readTime: "7 min read",
      // category: "Research",
      link: "https://medium.com/@nusratlia/what-if-our-most-fundamental-assumption-about-environmental-economics-that-innovation-leads-to-a23bc44a0c68",
      // tags: ["Ethics", "AI", "Technology"],
    },
    {
      title: "Can Diffusion Models Reshape Privacy Boundaries?",
      excerpt:
        "Exploring How Diffusion Models Challenge and Redefine Privacy in AI-Generated Data",
      image: "blog/blog1.png?height=200&width=300",
      date: "2025-03-12",
      readTime: "4 min read",
      // category: "Research",
      link: "https://medium.com/@nusratlia/the-paradox-of-data-can-diffusion-models-reshape-privacy-boundaries-ab6b315fe157",
      // tags: ["Ethics", "AI", "Technology"],
    },

 
  ]

  const categories = ["All", "Research", "Teaching", "Life", "Reflections", "Startups"]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blogs</h1>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            Just my random thoughts, opinions, curiosities, and questions. My blogs are pretty conversational... I write just how I would speak. It's a Rubber-ducking session to me.
          </p>
        </div>

        <section>
          {/* Changed from lg:grid-cols-3 to lg:grid-cols-4 and reduced gap slightly for a better fit */}
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {blogPosts.map((post, index) => (
              // Added flex flex-col and h-full so cards are uniform in height
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden flex flex-col h-full">
                {/* Added shrink-0 so the image doesn't squash */}
                <div className="aspect-video relative bg-muted shrink-0">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                {/* Tightened padding (p-4 pb-2) */}
                <CardHeader className="space-y-2 p-4 pb-2">
                  {/* Reduced text size slightly (text-base) and added line-clamp-2 to keep titles tidy */}
                  <h3 className="font-semibold text-base leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                </CardHeader>
                
                {/* mt-auto ensures the bottom row (date & button) always aligns perfectly across all 4 cards */}
                <CardContent className="space-y-3 p-4 pt-0 flex flex-col flex-1 mt-auto">
                  {/* Made excerpt text-xs so it fits well in the narrower card */}
                  <p className="text-xs text-muted-foreground line-clamp-3 mb-2">{post.excerpt}</p>
                  
                  <div className="flex items-center justify-between pt-2 border-t mt-auto">
                    <span className="text-[10px] text-muted-foreground font-medium">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Button size="sm" variant="ghost" className="h-7 text-xs px-2" asChild>
                      <Link href={post.link}>
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
