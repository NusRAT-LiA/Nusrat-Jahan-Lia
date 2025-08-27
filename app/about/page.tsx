import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, Quote } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  const timeline = [
    {
      year: "2024",
      title: "Assistant Professor",
      organization: "MIT Computer Science",
      description: "Leading research in AI-human collaboration and educational technology.",
    },
    {
      year: "2023",
      title: "Founder & CEO",
      organization: "EduTech Labs",
      description: "Founded startup focused on AI-powered personalized learning platforms.",
    },
    {
      year: "2022",
      title: "Postdoctoral Researcher",
      organization: "Stanford HAI",
      description: "Research on ethical AI systems and human-computer interaction.",
    },
    {
      year: "2021",
      title: "PhD in Computer Science",
      organization: "Carnegie Mellon University",
      description: "Dissertation: 'Adaptive Learning Systems: Balancing Personalization and Privacy'",
    },
    {
      year: "2017",
      title: "Research Scientist",
      organization: "Google Research",
      description: "Worked on machine learning algorithms for educational applications.",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Exploring the future of learning through technology, research, and human-centered design.
          </p>
        </div>

        {/* Bio Section */}
        <div className="grid gap-12 lg:grid-cols-3 mb-16">
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-lg max-w-none">
              <p>
                I am an Assistant Professor in Computer Science at MIT, where I direct the Human-AI Learning Lab. My
                research sits at the intersection of artificial intelligence, human-computer interaction, and
                educational technology, with a focus on creating AI systems that enhance rather than replace human
                learning.
              </p>

              <p>
                Before joining MIT, I completed my PhD at Carnegie Mellon University under the guidance of Dr. Emma
                Chen, where I developed novel approaches to adaptive learning systems that respect student privacy while
                providing personalized educational experiences. My work has been published in top-tier venues including
                CHI, CSCW, and Nature Machine Intelligence.
              </p>

              <p>
                Beyond academia, I am passionate about translating research into real-world impact. In 2023, I founded
                EduTech Labs, a startup that develops AI-powered tools for educators and students. Our flagship product,
                LearnAdapt, is used by over 50,000 students across 200 institutions worldwide.
              </p>

              <p>
                When I'm not researching or teaching, I enjoy hiking, photography, and exploring new cuisines. I believe
                that diverse experiences outside of work fuel creativity and innovation in research.
              </p>
            </div>

            <div className="flex gap-4">
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
              <Button variant="outline">View Publications</Button>
            </div>
          </div>

          <div className="space-y-6">
            <div className="aspect-[3/4] relative overflow-hidden rounded-2xl bg-muted">
              <Image src="/placeholder.svg?height=600&width=450" alt="Dr. Nusrat Lia" fill className="object-cover" />
            </div>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-3">
                  <Quote className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <blockquote className="text-sm italic mb-2">
                      "Technology should amplify human potential, not replace human judgment. The future of education
                      lies in thoughtful collaboration between humans and AI."
                    </blockquote>
                    <cite className="text-xs text-muted-foreground">— Personal Philosophy</cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Career Journey</h2>
          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="relative flex gap-6 pb-8">
                {index !== timeline.length - 1 && <div className="absolute left-6 top-12 w-px h-full bg-border" />}
                <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold text-sm">
                  {item.year.slice(-2)}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <span className="text-sm text-muted-foreground">at {item.organization}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
