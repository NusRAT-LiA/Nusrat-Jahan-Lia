"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, MapPin, Calendar, ExternalLink, Award, TrendingUp, Users, Code } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function WorkPage() {
  const [expandedPosition, setExpandedPosition] = useState<string | null>(null)

  const positions = [
    {
      id: "aramco-2024",
      title: "Engineering Research Intern",
      organization: "Aramco-Ithra",
      logo: "work/aramco.jpg?height=80&width=80",
      link: "https://www.aramco.com/",
      // location: "Cambridge, MA",
      startDate: "2025-03",
      endDate: null,
      type: "Academic",
      description: [
        "Led projects and worked in collaboration with WHO, Stony Brook Medicine, McGill University, University of Geneva, University of Tokyo.",
        "Developed coding schemes and agentic LLMs to evaluate educational games on the Google Play Store.",
        "Co-authored digital well-being and technology researches",
      ],
       achievements: [
        "Accepted and Presented - \"Does Spending “Too Much Time Online” Predict Sleep Health and Mental Health?\"  at - 39th Annual Meeting of the Associated Professional Sleep Societies (APSS)",
        "Accepted and Presented - \"International Public Opinion on Digital Media Use for Youth and Schools\" at -  2025 Digital Media and Developing Minds International Scientific Congress",
        "Accepted and Presented - \"Does a gaming disorder severity predict worse sleep quality?\" at - World Sleep 2025, Singapore",
        "In Review - \"Evaluating the Inclusivity and Accessibility of Educational Apps on the Google Play Store\" at - 2026 American Educational Research Association (AERA) Annual Meeting",
        "In Review - \"A Comprehensive Evaluation of the Educational Apps in the Google Play Store: An Exploratory Study\" at - 2026 American Educational Research Association (AERA) Annual Meeting",
      ],
    },
    {
      id: "gbl",
      title: "Contractual LLM Engineer",
      organization: "Global MicroLearning Solutions",
      logo: "work/gbl.png?height=80&width=80",
      startDate: "2025-08",
      endDate: null,
      type: "Industrial",
      description: [
        "Building large scale LLM and AI solutions for field support and engineering solutions"
      ],
      link: "https://globalmicrolearning.com/",
      achievements: [
      ],
    },
    {
      id: "icitap",
      title: "WPA Software Engineer Intern",
      organization: "United States Department of Justice - ICITAP",
      logo: "work/icitap.png?height=80&width=80",
      link: "https://www.justice.gov/criminal/criminal-icitap",
      startDate: "2024-07",
      endDate: "2024-12",
      type: "Government-Affiliated",
      description: [
        "Designed a mobile-first, crowdsourced wildlife crime reporting platform tailored for rural and low-connectivity environments in the Sundarbans.",
        "Overcame challenges of sparse and noisy community reports by developing custom NLP pipelines and geospatial models optimized for low-resource inputs",
        "Leveraged machine learning to analyze spatial crime data and forecast environmental degradation hotspots",
        "Designed and developed a gaming application to educate Bangladeshi and International Youth about wildlife and biodiversity conservation and emphasize long-term stewardship ethics"
      ],

      achievements: [
       
      ],
    },
    {
      id: "banglallM",
      title: "LLM dev and Analyst",
      organization: "BanglaLLM",
      logo: "work/banglallm.jpeg?height=80&width=80",
      link: "https://huggingface.co/BanglaLLM",
      startDate: "2024-07",
      endDate: null,
      type: "Academic",
      description: [
        "BanglaLLM introduced many of the first open-source bangla language models",
        "Working on low-resource language models and Small-language-models"     
      ],

      achievements: [
       
      ],
    },
    {
      id: "barta",
      title: "Undergrad Researcher",
      organization: "Bangla Artificial Intelligence Research, Tools and Application (BARTA)",
      logo: "work/barta.png?height=80&width=80",
      startDate: "2024-010",
      endDate: null,
      type: "Academic",
      description: [
        "Developing dataset and techniques for indigenous language (like Chakma) models to ensure equitable AI deployment in Bangladesh.",
        "Designed and directed Small-language-model building course as an instructor of BARTA",
        "Developed Educational Resource Allocation AI-Agent for the Government of Bangladesh."     
      ],

      achievements: [
       
      ],
    },
    {
      id: "perspectivity",
      title: "Founding Researcher and Engineer",
      organization: "Perspectivity - Drishtikon",
      logo: "work/perspectivity.svg?height=80&width=80",
      link: "https://perspectivity.co/",
      startDate: "2024-09",
      endDate: null,
      type: "Entrepreneurial",
      description: [
        "The first News Aggregation AI agent for Bangla news with the plan of future expansion to other low-resource languages",
        "Has research-backed multi-axis bias-analysis to empower citizens to make informed decisions",
        "Built in news-summarizer agent and interactivechatbot to know about news in detail",
        "Shows local and international news trends in real-time"

      ],

      achievements: [
      
      ],
    },
    // {
    //   id: "orvixo",
    //   title: "Co-Founder",
    //   organization: "Orvixo",
    //   logo: "work/orvixo.png?height=80&width=80",
    //   startDate: "2025-04",
    //   endDate: null,
    //   type: "Entrepreneurial",
    //   description: [
    //     "Building one-stop AI solution for all the business intelligence and analytics needs with just Natural Language to Query",
    // ],

    //   achievements: [
      
    //   ],
    // },
    // {
    //   id: "profyl",
    //   title: "Founding AI Engineer",
    //   organization: "Profyl.AI",
    //   logo: "work/profyl.svg?height=80&width=80",
    //   startDate: "2025-02",
    //   endDate: null,
    //   type: "Entrepreneurial",
    //   description: [
    //     "Building AI solutions for cost-effective recruitment service for companies"
    //   ],

    //   achievements: [
      
    //   ],
    // },
    // {
    //   id: "edutech-2023",
    //   title: "Founder & CEO",
    //   organization: "EduTech Labs",
    //   logo: "/placeholder.svg?height=80&width=80",
    //   location: "Boston, MA",
    //   startDate: "2023-03",
    //   endDate: null,
    //   type: "Entrepreneurial",
    //   description: [
    //     "Founded startup developing AI-powered educational tools.",
    //     "Focused on student privacy and personalization.",
    //   ],
    //   // projects: [
    //   //   {
    //   //     name: "LearnAdapt Platform",
    //   //     description: "AI-powered adaptive learning platform for K-12 and higher education",
    //   //     impact: "50,000+ active users, 200+ partner institutions",
    //   //   },
    //   //   {
    //   //     name: "Privacy-First Analytics",
    //   //     description: "Developed federated learning approach for educational data analysis",
    //   //     impact: "Patent pending, adopted by 3 major EdTech companies",
    //   //   },
    //   // ],
    //   // technologies: ["Python", "FastAPI", "React", "TypeScript", "AWS", "Kubernetes", "TensorFlow"],
    //   achievements: [
    //     // "Raised $2M seed funding from top VCs",
    //     // "Featured in TechCrunch and EdSurge",
    //     // "Winner of MIT $100K Entrepreneurship Competition",
    //   ],
    // },

  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", year: "numeric" })
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Academic":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
      case "Industry":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
      case "Entrepreneurial":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Work Experience</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey through academia, industry, and entrepreneurship, building AI systems that enhance human
            potential.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {positions.map((position, index) => (
            <div key={position.id} className="relative flex gap-6 pb-12">
              {/* Timeline Line */}
              {index !== positions.length - 1 && <div className="absolute left-12 top-24 w-px h-full bg-border" />}

              {/* Timeline Dot */}
              <div className="flex-shrink-0 w-24 h-24 relative">
                <div className="w-full h-full bg-background border-4 border-primary rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src={position.logo || "/placeholder.svg"}
                    alt={position.organization}
                    width={60}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <Card className="overflow-hidden">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <Badge className={getTypeColor(position.type)}>{position.type}</Badge>
                          {!position.endDate && <Badge variant="outline">Current</Badge>}
                        </div>
                        <CardTitle className="text-xl">{position.title}</CardTitle>
                        {/* <p className="text-lg font-medium text-muted-foreground">{position.organization}</p> */}
                        <a
                          href={position.link}
                          className="text-lg font-medium text-muted-foreground underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {position.organization}
                        </a>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {formatDate(position.startDate)} -{" "}
                            {position.endDate ? formatDate(position.endDate) : "Present"}
                          </div>
                        </div>
                      </div>
                      
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                  <ul className="space-y-2 text-muted-foreground list-disc list-inside">
                    {position.description.map((point: string, idx: number) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>

                  {/* {(position.projects?.length > 0 || position.achievements?.length > 0) && ( */}
                  {( position.achievements?.length > 0) && (

                    <Collapsible
                      open={expandedPosition === position.id}
                      onOpenChange={() =>
                        setExpandedPosition(expandedPosition === position.id ? null : position.id)
                      }
                    >
                      <CollapsibleTrigger asChild>
                        <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                          <span className="font-medium">View Details</span>
                          {expandedPosition === position.id ? (
                            <ChevronDown className="w-4 h-4" />
                          ) : (
                            <ChevronRight className="w-4 h-4" />
                          )}
                        </Button>
                      </CollapsibleTrigger>

                      <CollapsibleContent className="space-y-6 mt-6">
                        {/* Projects */}
                        {/* {position.projects?.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Key Projects & Initiatives
                            </h4> */}
                            {/* Uncomment and use this when ready
                            <div className="space-y-3">
                              {position.projects.map((project, idx) => (
                                <Card key={idx} className="p-4">
                                  <h5 className="font-medium mb-2">{project.name}</h5>
                                  <p className="text-sm text-muted-foreground mb-2">{project.description}</p>
                                  <div className="flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-green-600" />
                                    <span className="text-sm font-medium text-green-600">{project.impact}</span>
                                  </div>
                                </Card>
                              ))}
                            </div>
                            */}
                          {/* </div>
                        )} */}

                        {/* Achievements */}
                        {position.achievements?.length > 0 && (
                          <div>
                            <h4 className="font-semibold mb-3 flex items-center gap-2">
                              <Award className="w-4 h-4" />
                              Key Achievements
                            </h4>
                            <ul className="space-y-2">
                              {position.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm">
                                  <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                  {achievement}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </CollapsibleContent>
                    </Collapsible>
                  )}

                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats
        <div className="mt-16 grid gap-6 md:grid-cols-4 text-center">
          <Card className="p-6">
            <div className="text-2xl font-bold text-primary">9+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-primary">25+</div>
            <div className="text-sm text-muted-foreground">Publications</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-primary">15+</div>
            <div className="text-sm text-muted-foreground">Patents</div>
          </Card>
          <Card className="p-6">
            <div className="text-2xl font-bold text-primary">$3.2M</div>
            <div className="text-sm text-muted-foreground">Funding Raised</div>
          </Card>
        </div> */}
      </div>
    </div>
  )
}
