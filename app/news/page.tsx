// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { Input } from "@/components/ui/input"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
// import { Search, Calendar, ExternalLink, Award, Mic, FileText, Briefcase, Users, Rss } from "lucide-react"
// import Image from "next/image"
// import Link from "next/link"

// export default function NewsPage() {
//   const [searchQuery, setSearchQuery] = useState("")
//   const [selectedYear, setSelectedYear] = useState("all")
//   const [selectedCategory, setSelectedCategory] = useState("all")

//   const newsItems = [
//     {
//       id: "1",
//       date: "2024-12-15",
//       title: "Paper accepted at CHI 2025: 'Human-AI Collaboration in Educational Settings'",
//       category: "Publication",
//       description:
//         "Our research on designing effective human-AI collaboration interfaces for educational contexts has been accepted at CHI 2025.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://chi2025.acm.org",
//       tags: ["Research", "CHI", "Education", "AI"],
//     },
//     {
//       id: "2",
//       date: "2024-11-28",
//       title: "Keynote speaker at EdTech Innovation Summit 2024",
//       category: "Speaking",
//       description:
//         "Delivered keynote on 'The Future of AI in Education: Balancing Innovation with Human Values' to 500+ educators and technologists.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://edtechsummit.com",
//       tags: ["Speaking", "EdTech", "Keynote"],
//     },
//     {
//       id: "3",
//       date: "2024-11-10",
//       title: "Featured in TechCrunch: 'The Future of AI in Education'",
//       category: "Media",
//       description:
//         "TechCrunch featured EduTech Labs and our approach to privacy-preserving AI in educational technology.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://techcrunch.com",
//       tags: ["Media", "Startup", "AI", "Privacy"],
//     },
//     {
//       id: "4",
//       date: "2024-10-22",
//       title: "Received NSF Grant for $500K to study AI ethics in classroom environments",
//       category: "Award",
//       description:
//         "Awarded NSF grant to investigate ethical implications of AI systems in educational settings over 3 years.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://nsf.gov",
//       tags: ["Funding", "NSF", "Ethics", "Research"],
//     },
//     {
//       id: "5",
//       date: "2024-09-15",
//       title: "EduTech Labs raises $2M seed round",
//       category: "Business",
//       description:
//         "Successfully closed seed funding round led by Bessemer Venture Partners to scale our AI-powered learning platform.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://techcrunch.com/edutech-labs-funding",
//       tags: ["Funding", "Startup", "Investment"],
//     },
//     {
//       id: "6",
//       date: "2024-08-30",
//       title: "Invited panel discussion at MIT AI Conference",
//       category: "Speaking",
//       description:
//         "Participated in panel on 'Responsible AI Development' alongside leading researchers from academia and industry.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://mit.edu/ai-conference",
//       tags: ["Speaking", "Panel", "AI", "Ethics"],
//     },
//     {
//       id: "7",
//       date: "2024-07-12",
//       title: "Research featured in Nature Machine Intelligence",
//       category: "Publication",
//       description:
//         "Our work on 'Balancing Personalization and Fairness in Educational AI' published in Nature Machine Intelligence.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://nature.com/articles/nmi-2024",
//       tags: ["Research", "Nature", "Fairness", "AI"],
//     },
//     {
//       id: "8",
//       date: "2024-06-05",
//       title: "Won MIT Excellence in Teaching Award",
//       category: "Award",
//       description: "Recognized for outstanding teaching in Human-Computer Interaction and innovative course design.",
//       image: "/placeholder.svg?height=200&width=300",
//       link: "https://mit.edu/teaching-awards",
//       tags: ["Award", "Teaching", "MIT"],
//     },
//   ]

//   const categories = ["all", "Publication", "Speaking", "Media", "Award", "Business"]
//   const years = ["all", "2024", "2023", "2022"]

//   const getCategoryIcon = (category: string) => {
//     switch (category) {
//       case "Publication":
//         return <FileText className="w-4 h-4" />
//       case "Speaking":
//         return <Mic className="w-4 h-4" />
//       case "Media":
//         return <Users className="w-4 h-4" />
//       case "Award":
//         return <Award className="w-4 h-4" />
//       case "Business":
//         return <Briefcase className="w-4 h-4" />
//       default:
//         return <Calendar className="w-4 h-4" />
//     }
//   }

//   const getCategoryColor = (category: string) => {
//     switch (category) {
//       case "Publication":
//         return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
//       case "Speaking":
//         return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
//       case "Media":
//         return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"
//       case "Award":
//         return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
//       case "Business":
//         return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
//       default:
//         return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200"
//     }
//   }

//   const filteredNews = newsItems.filter((item) => {
//     const matchesSearch =
//       item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//       item.description.toLowerCase().includes(searchQuery.toLowerCase())
//     const matchesYear = selectedYear === "all" || item.date.startsWith(selectedYear)
//     const matchesCategory = selectedCategory === "all" || item.category === selectedCategory
//     return matchesSearch && matchesYear && matchesCategory
//   })

//   const groupedByMonth = filteredNews.reduce(
//     (acc, item) => {
//       const monthYear = new Date(item.date).toLocaleDateString("en-US", {
//         month: "long",
//         year: "numeric",
//       })
//       if (!acc[monthYear]) {
//         acc[monthYear] = []
//       }
//       acc[monthYear].push(item)
//       return acc
//     },
//     {} as Record<string, typeof newsItems>,
//   )

//   return (
//     <div className="min-h-screen bg-background">
//       <div className="container mx-auto px-4 py-16">
//         {/* Header */}
//         <div className="text-center space-y-4 mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold tracking-tight">News & Events</h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Latest updates on research publications, speaking engagements, awards, and professional milestones.
//           </p>
//           <Button variant="outline" size="sm">
//             <Rss className="w-4 h-4 mr-2" />
//             RSS Feed
//           </Button>
//         </div>

//         {/* Filters */}
//         <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center mb-8">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 variant={selectedCategory === category ? "default" : "outline"}
//                 size="sm"
//                 onClick={() => setSelectedCategory(category)}
//               >
//                 {category === "all" ? "All Categories" : category}
//               </Button>
//             ))}
//           </div>
//           <div className="flex gap-4">
//             <div className="relative">
//               <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
//               <Input
//                 placeholder="Search news..."
//                 className="pl-10 w-64"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//             <Select value={selectedYear} onValueChange={setSelectedYear}>
//               <SelectTrigger className="w-32">
//                 <SelectValue placeholder="Year" />
//               </SelectTrigger>
//               <SelectContent>
//                 {years.map((year) => (
//                   <SelectItem key={year} value={year}>
//                     {year === "all" ? "All Years" : year}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>

//         {/* Content Tabs */}
//         <Tabs defaultValue="timeline" className="space-y-8">
//           <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
//             <TabsTrigger value="timeline">Timeline View</TabsTrigger>
//             <TabsTrigger value="calendar">Calendar View</TabsTrigger>
//           </TabsList>

//           <TabsContent value="timeline" className="space-y-8">
//             {Object.entries(groupedByMonth).map(([monthYear, items]) => (
//               <div key={monthYear} className="space-y-4">
//                 <h2 className="text-2xl font-bold text-primary sticky top-20 bg-background py-2">{monthYear}</h2>
//                 <div className="space-y-4">
//                   {items.map((item) => (
//                     <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                       <div className="grid md:grid-cols-4 gap-0">
//                         <div className="aspect-video md:aspect-auto relative bg-muted">
//                           <Image
//                             src={item.image || "/placeholder.svg"}
//                             alt={item.title}
//                             fill
//                             className="object-cover"
//                           />
//                         </div>
//                         <div className="md:col-span-3 p-6">
//                           <div className="flex justify-between items-start mb-4">
//                             <div className="space-y-2">
//                               <div className="flex items-center gap-2">
//                                 <Badge className={getCategoryColor(item.category)}>
//                                   <div className="flex items-center gap-1">
//                                     {getCategoryIcon(item.category)}
//                                     {item.category}
//                                   </div>
//                                 </Badge>
//                                 <span className="text-sm text-muted-foreground">
//                                   {new Date(item.date).toLocaleDateString("en-US", {
//                                     month: "long",
//                                     day: "numeric",
//                                     year: "numeric",
//                                   })}
//                                 </span>
//                               </div>
//                               <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
//                             </div>
//                             <Button size="sm" variant="ghost" asChild>
//                               <Link href={item.link} target="_blank">
//                                 <ExternalLink className="w-4 h-4" />
//                               </Link>
//                             </Button>
//                           </div>

//                           <p className="text-muted-foreground mb-4">{item.description}</p>

//                           <div className="flex flex-wrap gap-1">
//                             {item.tags.map((tag) => (
//                               <Badge key={tag} variant="outline" className="text-xs">
//                                 {tag}
//                               </Badge>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </Card>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </TabsContent>

//           <TabsContent value="calendar" className="space-y-8">
//             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
//               {filteredNews.map((item) => (
//                 <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
//                   <div className="aspect-video relative bg-muted">
//                     <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
//                   </div>
//                   <CardContent className="p-4 space-y-3">
//                     <div className="flex items-center justify-between">
//                       <Badge className={getCategoryColor(item.category)} size="sm">
//                         <div className="flex items-center gap-1">
//                           {getCategoryIcon(item.category)}
//                           {item.category}
//                         </div>
//                       </Badge>
//                       <span className="text-xs text-muted-foreground">
//                         {new Date(item.date).toLocaleDateString("en-US", {
//                           month: "short",
//                           day: "numeric",
//                         })}
//                       </span>
//                     </div>

//                     <h3 className="font-semibold text-sm leading-tight line-clamp-2">{item.title}</h3>

//                     <p className="text-xs text-muted-foreground line-clamp-2">{item.description}</p>

//                     <div className="flex justify-between items-center pt-2">
//                       <div className="flex flex-wrap gap-1">
//                         {item.tags.slice(0, 2).map((tag) => (
//                           <Badge key={tag} variant="outline" className="text-xs">
//                             {tag}
//                           </Badge>
//                         ))}
//                         {item.tags.length > 2 && (
//                           <Badge variant="outline" className="text-xs">
//                             +{item.tags.length - 2}
//                           </Badge>
//                         )}
//                       </div>
//                       <Button size="sm" variant="ghost" asChild>
//                         <Link href={item.link} target="_blank">
//                           <ExternalLink className="w-3 h-3" />
//                         </Link>
//                       </Button>
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </TabsContent>
//         </Tabs>

//         {filteredNews.length === 0 && (
//           <div className="text-center py-12">
//             <p className="text-muted-foreground">No news items found matching your criteria.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
