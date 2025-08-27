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
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Blogs</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Just my random thoughts, opinions, curiosities, and questions. My blogs are pretty conversational... I write just how I would speak. It's a Rubber-ducking session to me.
          </p>
        </div>

        {/* Featured Post
        <section className="mb-16">
          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="aspect-video md:aspect-auto relative bg-muted">
                <Image
                  src={featuredPost.image || "/placeholder.svg"}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge>{featuredPost.category}</Badge>
                    <span className="text-sm text-muted-foreground">Featured</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold leading-tight">{featuredPost.title}</h2>
                  <p className="text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {featuredPost.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild>
                    <Link href="/blog/featured-post">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section> */}

        {/* Filters
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button key={category} variant={category === "All" ? "default" : "outline"} size="sm">
                  {category}
                </Button>
              ))}
            </div>
            <div className="flex gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input placeholder="Search posts..." className="pl-10 w-64" />
              </div>
              <Select>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest</SelectItem>
                  <SelectItem value="oldest">Oldest</SelectItem>
                  <SelectItem value="popular">Most Popular</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </section> */}

        {/* Blog Posts Grid */}
        <section>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video relative bg-muted">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader className="space-y-3">
                  {/* <div className="flex items-center justify-between">
                    <Badge variant="secondary">{post.category}</Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </div>
                  </div> */}
                  <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors">
                    <Link href={post.link}>{post.title}</Link>
                  </h3>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
                  {/* <div className="flex flex-wrap gap-1">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div> */}
                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                    <Button size="sm" variant="ghost" asChild>
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
