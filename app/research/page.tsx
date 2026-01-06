"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, FileText } from "lucide-react"
import { useState } from "react"

type Publication = {
  title: string
  authors: string
  affiliations: string[]
  venue: string
  year: string
  tags?: string[]
  link?: string
  poster?: string
  posterType?: string
  photo?: string
}

export default function ResearchPage() {
  const publications: Publication[] = [
    {
      title: "Read Between the Lines: A Benchmark for Uncovering Political Bias in Bangla News Articles",
      authors: "Nusrat Jahan Lia; Shubhashis Roy Dipta, PhD; Dr. Abdullah Khan Zehady; Naymul Islam; Madhusodan Chakraborty; Abdullah Al Wasif",
      affiliations: ["University of Dhaka", "University of Maryland", "Perspectivity"],
      venue: "Accepted: AACL IJCNLP BLP; To be published: ACL Anthology",
      year: "2025",
      // type: "Conference",
      // tags: ["LLM", "Bangla NLP", "Bias Detection"],
      link: "https://arxiv.org/abs/2510.03898",
      photo: "research/fig1.png",
    },
    {
      title: "Exploring Cross-Lingual Knowledge Transfer via Transliteration-Based MLM Fine-Tuning for Critically Low-resource Chakma Language",
      authors: "Adity Khisa; Nusrat Jahan Lia; Tasnim Mahfuz Nafis; Zarif Masud; Tanzir Pial, PhD; Dr.Shebuti Rayana; Dr.Ahmedul Kabir",
      affiliations: ["University of Dhaka", "BARTA", "State University of New York, Old Westbury", "Stony Brook University", "Toronto Metropolitan University"],
      venue: "Accepted: AACL IJCNLP BLP; To be published: ACL Anthology",
      year: "2025",
      // type: "Conference",
      // tags: ["MLM", "Large Language Model", "Tokenization"],
      link: "https://arxiv.org/abs/2510.09032",
      photo: "research/chakma.png",
    },
    

    {
      title: "Adult Attitudes about School Smartphone Bans: A Global Survey of 35 Countries",
      authors: "Dimitri A. Christakis, MD, MPH; Nusrat Jahan Lia; Lauren Hale, PhD; Md Mamunur Rashid",
      affiliations: ["Renaissance School of Medicine, Stony Brook University", "Seattle Children's Research Institute, Seattle Children's Hospital", "University of Dhaka", "ITHRA, King Abdulaziz Center for World Culture, Dammam"],
      venue: "Accepted, Published: The Journal of American Medical Association; doi: 10.1001/jamapediatrics.2025.5736",
      year: "2025",
      // type: "Journal",
      // tags: ["Digital Technology Usage", "Human-computer interaction"],
      link: "https://jamanetwork.com/journals/jamapediatrics/fullarticle/2843672",
      photo: "research/jama.png",
    },
    {
      title: 'Does Gaming Disorder Symptom Status Predict Poorer Sleep Quality?',
      authors:
        "Nusrat Jahan Lia; Lauren Hale, PhD; Justin Thomas, PhD; Dimitri A. Christakis, MD, MPH; Mamunar Rashid, PhD",
      affiliations: [
        "University of Dhaka",
        "Renaissance School of Medicine, Stony Brook University",
        "Seattle Children's Research Institute, Seattle Children's Hospital",
        "University of Dhaka",
        "ITHRA, King Abdulaziz Center for World Culture, Dammam"
      ],
      venue: "Accepted: World Sleep 2025, Singapore",
      year: "2025",
      // tags: ["Human-computer interaction", "Digital Health", "Gaming Disorder"],
      poster: "posters/world-sleep.png",
      posterType: "png",
      photo: "posters/world-sleep.png",
    },
    {
      title: 'Does Spending "Too Much Time Online" Predict Sleep Health and Mental Health?',
      authors:
        "Lauren Hale, PhD; Nusrat Jahan Lia; Sohailul Islam Alvi; Gina Marie Mathew, PhD; Dimitri A. Christakis, MD, MPH; Mamunar Rashid, PhD; Yasmin Aljedawi; Melisa Valle, PhD",
      affiliations: [
        "Renaissance School of Medicine, Stony Brook University",
        "Seattle Children's Research Institute, Seattle Children's Hospital",
        "University of Dhaka",
        "ITHRA, King Abdulaziz Center for World Culture, Dammam"
      ],
      venue: "Accepted: Association of Professional Sleep Societies. Seattle, Washington, USA",
      year: "2025",
      // tags: ["Human-computer interaction", "Digital Health", "Mental Health", "Digital Media Usage"],
      poster: "posters/sleep2025.svg",
      posterType: "svg",
      photo: "posters/sleep2025.svg",
    },
    {
      title: "International Public Opinion on Digital Media Use for Youth and Schools",
      authors:
        "Lauren Hale, PhD; Nusrat Jahan Lia; Sohailul Islam Alvi; Gina Marie Mathew, PhD; Dimitri A. Christakis, MD, MPH; Mamunar Rashid, PhD; Yasmin Aljedawi; Melisa Valle, PhD",
      affiliations: [
        "Renaissance School of Medicine, Stony Brook University",
        "Seattle Children's Research Institute, Seattle Children's Hospital",
        "University of Dhaka",
        "ITHRA, King Abdulaziz Center for World Culture, Dammam"
      ],
      venue: "Accepted: Digital Media and Developing Minds International Scientific Congress, Washington DC",
      year: "2025",
      // tags: ["Human-computer interaction", "AI as Tutor", "Digital Media usage in schools", "Public Opinion"],
      poster: "posters/CS2025Poster_Hale.svg",
      posterType: "svg",
      photo: "posters/CS2025Poster_Hale.svg",
    },
    {
      title: "Evaluating the inclusivity and accessibility of educational apps (games) on the Google Play Store.",
      authors: "Nusrat Jahan Lia; Nahida Sultana; Sabrina Shajin Alam, PhD; Mamunar Rashid, PhD; Aymaan Islam",
      affiliations: [
        "University of Dhaka",
        "Western University, CA",
        "ITHRA, King Abdulaziz Center for World Culture, Dammam"
      ],
      venue: "Reviewed; In Progress: American Educational Research Association (AERA)",
      year: "2026",
      // tags: ["SIG-Inclusion and Accessibility in Educational Assessment", "Computers and Learning, Evaluation, Diversity", "Human-computer interaction"],
     
    },
    {
      title: "A Comprehensive Evaluation of the Educational Apps in the Google Play Store: An Exploratory Study",
      authors: "Nahida Sultana; Sabrina Shajin Alam, PhD; Nusrat Jahan Lia;  Mamunar Rashid, PhD; Aymaan Islam",
      affiliations: [
        "University of Dhaka",
        "Western University, CA",
        "ITHRA, King Abdulaziz Center for World Culture, Dammam"
      ],
      venue: "Reviewed; In Progress: American Educational Research Association (AERA)",
      year: "2026",
      // tags: ["Computers and Learning, Evaluation, Diversity", "Human-computer interaction"],
     
    },
  ]

  const [selectedPoster, setSelectedPoster] = useState<string | null>(null)

  const formatAuthors = (authors: string) => {
    return authors.split(";").map((author, index, array) => {
      const trimmedAuthor = author.trim()
      return (
        <span key={index}>
          {trimmedAuthor === "Nusrat Jahan Lia" ? <strong>{trimmedAuthor}</strong> : trimmedAuthor}
          {index < array.length - 1 && "; "}
        </span>
      )
    })
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Research</h1>
        </div>

        {/* Publications */}
        <section>
          <div className="space-y-4">
            {publications.map((pub, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8">
                    {pub.photo && (
                      <div className="flex-shrink-0 w-full sm:w-48 md:w-56 mb-4 sm:mb-0">
                        <img
                          src={pub.photo}
                          alt={pub.title}
                          className="w-full h-auto max-w-full sm:max-w-none sm:h-48 md:h-56 object-contain rounded-lg"
                        />
                      </div>
                    )}
                    <div className="flex-1 space-y-3 min-w-0">
                      <h3 className="font-semibold text-lg hover:text-primary cursor-pointer">{pub.title}</h3>

                      <div className="text-sm text-muted-foreground">{formatAuthors(pub.authors)}</div>

                      {pub.affiliations && pub.affiliations.length > 0 && (
                        <div className="text-xs text-muted-foreground">
                          <div className="font-medium mb-1">Associated Organizations:</div>
                          <div className="flex flex-wrap gap-2">
                            {pub.affiliations.map((affiliation, idx) => (
                              <Badge key={idx} variant="secondary" className="text-xs">
                                {affiliation}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex items-center gap-4 text-sm">
                        <span className="font-medium">{pub.venue}</span>
                        <span className="text-muted-foreground">{pub.year}</span>
                      </div>

                      {pub.tags && pub.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1">
                          {pub.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="flex gap-2">
                      {pub.poster && (
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            pub.posterType === "svg" ? setSelectedPoster(pub.poster || null) : window.open(pub.poster, "_blank")
                          }
                        >
                          <FileText className="w-3 h-3 mr-1" />
                          {pub.posterType === "svg" ? "View Poster" : "Download Poster"}
                        </Button>
                      )}
                       {pub.link && (
                        <Button size="sm" variant="ghost" asChild>
                          <a href={pub.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </Button>
                      )} 
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>

      {/* SVG Poster Preview Modal */}
      {selectedPoster && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
          onClick={() => setSelectedPoster(null)}
        >
          <button
            onClick={() => setSelectedPoster(null)}
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
          >
            ✕
          </button>
          <img
            src={selectedPoster || "/placeholder.svg"}
            alt="Research Poster"
            className="max-w-[95vw] max-h-[95vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  )
}
