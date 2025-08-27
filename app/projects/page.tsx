"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Github, ExternalLink, FileText, Search, Filter, File, Presentation, BookOpen } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface Project {
  id: string
  title: string
  description: string
  fullDescription: string
  motivation: string
  technologies: string[]
  categories: string[]
  image: string
  links: {
    website?: string
    github?: string
    publication?: string
    demo?: string
    document?: string
    whitepaper?: string
    pitchDeck?: string
  }
  status: "completed" | "ongoing" | "planned"
  year: number
  featured: boolean
}

const projects: Project[] = [
   {
    id: "slm",
    title: "Bangla - Small Language Model",
    description:
      "A small, GPT-style Bangla language model built and trained from scratch on financial news articles using custom tokenization and efficient dataset preprocessing.",
    fullDescription:
    "A transformer-based autoregressive language model built from scratch using PyTorch, trained on over 2 million tokens from Bangla financial news. The project includes full data preprocessing: HuggingFace dataset loading, tokenizer integration (csebuetnlp/banglat5), sequence binarization, and memory-mapped batching. The model architecture mirrors GPT-style causal self-attention, with 8 transformer layers, 8 heads, and a 512-dimensional embedding space (~58M parameters). Custom training includes cosine learning rate decay, gradient clipping, and checkpointing to Google Drive for reproducibility and inference deployment.",
    motivation:
    "I designed a small-language-model building course as an instructor of my university research lab - BARTA. This custom small language model that was built to give the learners hands-on experience.",
    technologies: ["LLM", "PyTorch", "Hugging Face"],
    categories: ["AI/ML"],
    image: "projects/slm.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Bangla-Small-Language-Model",
    },
    status: "completed",
    year: 2025,
    featured: true,
  },
  // {
  //   id: "bert",
  //   title: "BERT Implementation from Scratch",
  //   description:
  //     "A PyTorch implementation of BERT (Bidirectional Encoder Representations from Transformers) built from scratch. The model includes essential components such as self-attention, position encoding, and transformer encoder layers. ",
  //   fullDescription:
  //   "Key Technical implementations include - BERT Base Architecture: 12-layer Transformer encoder, Pre-training Tasks: MLM (15% masking) + NSP, Custom Tokenizer: Built on WikiText-2 vocabulary, Training Pipeline: Batch processing and loss tracking, Inference API: Predict masked tokens in input sentences",
  //   motivation:
  //   "I believe you only learn something to the core when you can build and experiment with it. Implementing BERT was an integral part of my journey as an LLM-engineer",
  //   technologies: ["LLM", "PyTorch", "Hugging Face"],
  //   categories: ["AI/ML"],
  //   image: "projects/bert.png?height=400&width=600",
  //   links: {
  //     github: "https://github.com/NusRAT-LiA/Llama-3.2-Medico-BD",
  //   },
  //   status: "completed",
  //   year: 2025,
  //   featured: true,
  // },
  {
    id: "medico-bd",
    title: "Llama-3.2-Medico-BD",
    description:
      "Fine-tuned version of Llama-3.2-3B for medical product information retrieval in Bangladesh, optimized for brand/generic medicine recommendations and dosage guidance.",
    fullDescription:
      "Users can discuss their health issues with the model and get recommendations for Bangladeshi generic/brand names, dosages, manufacturers. Technologies include - QLoRA Fine-Tuning: 4-bit quantization with bitsandbytes for efficient training, Medical Dataset: 1,000+ entries covering Bangladeshi generic/brand names, dosages, manufacturers, PEFT Integration: Parameter-Efficient Fine-Tuning via peft. Custom Tokenization: Optimized for medical terminology in Bangladesh",
    motivation:
    "This project was a part of gaining my deep-learning and LLM certification.",
    technologies: ["LLM", "Fine-Tuning", "QLoRA"],
    categories: ["AI/ML"],
    image: "projects/medico-bd.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Llama-3.2-Medico-BD",
    },
    status: "completed",
    year: 2024,
    featured: true,
  },
  {
    id: "PorTech",
    title: "PorTech: A Blockchain-based shipping supply chain solution",
    description:
      "A hybrid blockchain-based platform that optimizes foreign trade and shipping supply chain document workflows, providing seamless, secure transactions, precise access control, real-time tracking, and enhanced efficiency.",
    fullDescription:
      "PorTech leverages zkSync Layer 2 and the Request Network for secure, scalable payment and document automation on-chain. Smart contracts manage workflows like project creation, invoice authorization, and stakeholder role assignment, while private IPFS ensures efficient, compliant data storage. Decentralized identity is handled via zkLogin and passkeys, ensuring privacy-preserving authentication tied to blockchain keypairs. Integration is enabled through modular APIs and subgraphs via The Graph, making the system robust, composable, and enterprise-ready.",
    motivation:
      "Did you know that shipment document related delays cost the global economy $3 Billion annually? Despite such advances in documentation automation, port-document flow is still plagued by inefficiencies, delays, and manual errors. Me, along with my team, decided to find a feasible solution to this problem. And that's when PorTech was born. I felt we have done justice to the idea when this project became the Gold-Winner of Blockchain Olympiad 2025.",
    technologies: ["Zero-Knowledge Proof", "IPFS", "Solidity", "Ethereum"],
    categories: ["Blockchain"],
    image: "projects/PorTech.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/PorTech",
      pitchDeck: "https://www.youtube.com/watch?v=1iQ-RmJ-rNA",
      demo: "https://youtu.be/WkNAu223dS8",
      whitepaper: "https://docs.google.com/document/d/1X2kO2CXR9ZAgKw-U0QPuGW2lcxs0V6k4dgg_XC_O6QQ/edit?usp=sharing",
      document: "https://drive.google.com/file/d/1U3aXvZI80LZEemmnLXFkRChIYsMWFicC/view?usp=sharing",
    },
    status: "completed",
    year: 2024,
    featured: true,
  },
  {
    id: "DefTax",
    title: "DefTax: A Blockchain-based E-Governance System",
    description:
      "A hybrid Blockchain-based Government-to-Corporation integrated transaction tracking e-governance system with fine-grained access control that facilitates secure and accurate tax collection.",
    fullDescription:
      "A modular, permissioned tax compliance system built on Hyperledger Fabric with Raft consensus, decomposed into microservices for user management, smart contracts, and identity. It integrates Hyperledger Indy for verifiable credentials and Firefly for secure API workflows and off-chain IPFS data handling. Zero-Knowledge Proofs (ZKPs) ensure private validation of financial compliance without disclosing sensitive data.",
    motivation:
      "The amount of tax fraud in Bangladesh is one of the highests in the world. And globally, 65% tax evasion is done by corporate companies. Hence, I decided to build a solution that could help the government collect taxes more efficiently and accurately without compromising company privacy. This project was a finalist for International Blockchain Olympiad 2023. I built the technical architecture and led the team, having two other talented team-mates who made this challenging project successful.",
    technologies: ["Hyperledger Fabric","Zero-Knowledge Proof", "Hyperledger Indy", "Hyperledger FireFly", "Solidity", "Ethereum"],
    categories: ["Blockchain"],
    image: "projects/DefTax.png?height=400&width=600",
    links: {
      document: "https://drive.google.com/file/d/1zKJ-phI0xy-OG140DSUgYTIV7OJddQ1v/view?usp=sharing",
      whitepaper: "https://drive.google.com/file/d/1ph5XWQm3f-daXy5QRIDsAmbOs2hsDu68/view?usp=sharing",
      pitchDeck: "https://drive.google.com/file/d/1WwjwtxNSJh_yEehve9SaeysuJisOQCd_/view?usp=sharing",
    },
    status: "completed",
    year: 2023,
    featured: false,
  },
  {
    id: "StackOverflow-Lite",
    title: "StackOverflow-Lite: A Microservices-based StackOverflow Clone",
    description:
      "A full stack implementation of StackOverflow, decompose to microservices, containerized and orchestrated",
    fullDescription:
      "The initial implementation featured a FastAPI monolith with core modules for user management (signup/signin), post CRUD (including code snippet uploads to MinIO), and real-time-style notifications. The monolith was decomposed into three autonomous services: User Service: Authentication, token issuance, secure password handling. Post Service: Auth-validated post creation/retrieval with MinIO integration. Notification Service: Post-based notifications and scheduled cleanup via background workers. Each service was Dockerized, exposing independent APIs, and orchestrated with Docker Compose. An Nginx reverse proxy was configured to route traffic to respective containers, enforcing modular request handling. Inter-service communication was secured and validated with token-based authentication. The notification cleaner runs as a persistent background job to delete stale records.",
    motivation:
      "An academic project for Distributed Systems course, taken during my fifth semester of Software Engineering major.",
    technologies: ["React", "FastAPI", "Python", "OAuth", "MinIO", "Docker", "JavaScript", "Nginx", "PostgreSQL"],
    categories: [ "Web Development"],
    image: "projects/StackOverflow-Lite.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/DistributedSystem-Implementation",
      document: "https://docs.google.com/document/d/1ybrJHoyNwqBF87LoZmAsKnRCIoknRED6e-0u8dmpHxw/edit?usp=sharing",
    },
    status: "completed",
    year: 2024,
    featured: false,
  },
  {
    id: "Meg",
    title: "MEG: Mars Exploration Game",
    description: "An immersive 3D game that simulates Mars exploration with realistic physics and educational content along with real-time weather updated, predicted using ML models.",
    fullDescription:
      "The game features realistic terrain generated based on the actual martian terrain photos collected by rovers, physics-based mechanics, and ML predicted environmental conditions using data from Curiosity Rover. Players can conduct virtual experiments, collect samples, and learn about Mars geology and atmosphere all while fighting against challenges of martian weather to survive",
    motivation:
      "The motivation came from the Bangladeshi NASA SPACE APP CHALLENGE GLOBAL WINNER, a group of Bangladeshi kids competing and winning against professionals. They were very curious about Mars but had no idea about where to begin. They just represented the regular Bangladesh school students who lack access to interactive space education resources. This game was intended to be a stepping stone for real-time simulated space education for these students. I did not have the funds to get a VR set. But I kept the design VR compatible so that the same codebase can be migrated to build a VR game.",
    technologies: ["Unity", "C#","Python","3D Modeling", "Physics Simulation"],
    categories: ["EdTech","AI/ML", "Game Development", "VR/AR" ],
    image: "projects/Meg.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Mars-Explorer-Game",
      document: "https://github.com/NusRAT-LiA/Mars-Explorer-Game/blob/main/SRS/MEG-SRS.pdf",
    },
    status: "completed",
    year: 2024,
    featured: false,
  },
  // {
  //   id: "DecisionTree-Implementation",
  //   title: "Decision Tree Algorithm Implementation",
  //   description: "Low level algorithmic implementations of decision tree with ~94% and 100% accuracy",
  //   fullDescription:
  //     "This project demonstrates the implementation of a Decision Tree classifier using two approaches: a custom implementation from scratch, providing insight into how the algorithm works at a low level, and another using scikit-learn library for comparison. Both implementations are tested on the Iris dataset to classify different species of Iris flowers based on their sepal and petal dimensions. The project includes comprehensive performance analysis and visualization of decision boundaries.",
  //   motivation:
  //     "This was a part of the academic course, DBMS-2 assignment and my first step in the Machine-Learning world. Understanding algorithms from first principles is crucial for developing expertise in machine learning.",
  //   technologies: ["Python", "scikit-learn", "NumPy", "Matplotlib"],
  //   categories: ["AI/ML"],
  //   image: "projects/DecisionTree-Implementation.png?height=400&width=600",
  //   links: {
  //     github: "https://github.com/NusRAT-LiA/DecisionTree-Implementation",
  //   },
  //   status: "completed",
  //   year: 2024,
  //   featured: false,
  // },
  {
    id: "Kook-wa",
    title: "Kook-wa: 3D Action-Adventure Game",
    description:
      "A 3D game built in Unity, where players explore a procedurally generated mystical island filled with AI-driven enemies, environmental challenges, and magical artifacts.",
    fullDescription:
      "The world is rendered using Unity's High Definition Render Pipeline (HDRP), with physically-based materials, volumetric fog, and real-time global illumination to create an immersive and eerie island atmosphere. A dynamic day-night cycle and custom weather system tie into the gameplay, affecting enemy behavior and visibility. Characters (both player and monsters) are animated using Unity's Animator Controller, with blend trees and root motion to keep movement smooth and grounded. Under the hood, enemy AI uses a mix of NavMesh for navigation and finite state machines (FSM) for decision-making, so enemies can patrol, detect the player, chase, attack, or flee depending on what's going on.",
    motivation:
      "I had just learned game development and became a finalist in a national GameJam. It was a 24 hour long game development challenge on the theme - It's Hard to cook without deadly spells. This project pushed my limits in rapid prototyping and creative problem-solving.",
    technologies: ["Unity", "C#", "3D Rendering", "3D Animation", "AI Navigation"],
    categories: ["Game Development"],
    image: "projects/KookWa.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Kook-wa",
      demo: "https://www.youtube.com/watch?v=skUOGGozj-A",
     
    },
    status: "completed",
    year: 2024,
    featured: false,
  },
  {
    id: "BlockchainED",
    title: "BlockChainEd: Educational Blockchain Implementation",
    description: "An educational project that empowers users to create and explore their own blockchain networks.",
    fullDescription:
      "The application validates transactions, executes proof of work, and seamlessly integrates verified blocks into the blockchain. Additionally, BlockChainEd offers a unique feature that allows users to simulate attacks on their blockchain, enabling them to modify information within a valid block. However, the app promptly safeguards against such attacks by recalculating hashes and breaking the chain from the corrupted block. The system includes a comprehensive CLI interface and visualization tools to help users understand blockchain mechanics.",
    motivation:
      "During my freshman year, I was very interested in understanding blockchain technology and had earned professional certification on it. Despite blockchain being a transformative technology, many of my peers remained unfamiliar with its core concepts beyond surface-level applications. I believe that when learners construct something themselves, they don't just remember it, they understand it by heart. So I built this platform through which, any curious learner can get hands-on experience with core algorithmic components like hashing, consensus mechanisms, and peer-to-peer networking, and move beyond theory by internalizing how blockchain works from the ground up.",
    technologies: ["C++", "Cryptography", "Data Structures"],
    categories: ["Blockchain", "EdTech", "Systems Programming"],
    image: "projects/BlockChainED.png?height=400&width=600",
    links: {
      github: "https://github.com/NusRAT-LiA/Blockchain_in_Cpp",
      document: "https://github.com/NusRAT-LiA/Blockchain_in_Cpp/blob/main/BlockChainED-Paper.pdf",
     
    },
    status: "completed",
    year: 2023,
    featured: false,
  },
]

const allCategories = [
  "AI/ML",
  "EdTech",
  "VR/AR",
  "Blockchain",
  "Web Development",
  "Data Analytics",
  "Game Development",
  "Healthcare",
  "Security",
  "Systems Programming",
]

const technologies = ["Python", "React", "TensorFlow", "Node.js", "Unity", "Blockchain", "VR", "Machine Learning", "C#"]

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTech, setSelectedTech] = useState<string[]>([])
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesCategories =
      selectedCategories.length === 0 ||
      selectedCategories.some((selectedCat) => project.categories.includes(selectedCat))

    const matchesTech = selectedTech.length === 0 || selectedTech.some((tech) => project.technologies.includes(tech))

    return matchesSearch && matchesCategories && matchesTech
  })

  const featuredProjects = projects.filter((project) => project.featured)

  const toggleTech = (tech: string) => {
    setSelectedTech((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((cat) => cat !== category) : [...prev, category],
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="space-y-4 mb-8">
          {/* <h1 className="text-4xl font-bold">Projects</h1> */}
          <p className="text-lg text-muted-foreground max-w-3xl">
            
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.id} className="group hover:shadow-lg transition-shadow">
                <div className="aspect-video relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={project.status === "completed" ? "default" : "secondary"}>{project.status}</Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {project.categories.map((category) => (
                          <Badge key={category} variant="outline" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>

                    {/* Quick Access Links */}
                    <div className="flex flex-wrap gap-1">
                      {project.links.github && (
                        <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                          <Link href={project.links.github} target="_blank">
                            <Github className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                      {project.links.demo && (
                        <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                          <Link href={project.links.demo} target="_blank">
                            <ExternalLink className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                      {project.links.document && (
                        <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                          <Link href={project.links.document} target="_blank">
                            <FileText className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                      {project.links.whitepaper && (
                        <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                          <Link href={project.links.whitepaper} target="_blank">
                            <BookOpen className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                      {project.links.pitchDeck && (
                        <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                          <Link href={project.links.pitchDeck} target="_blank">
                            <Presentation className="w-3 h-3" />
                          </Link>
                        </Button>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                            View Details
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>{project.title}</DialogTitle>
                            <DialogDescription>{project.description}</DialogDescription>
                          </DialogHeader>
                          <ProjectDetails project={project} />
                        </DialogContent>
                      </Dialog>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Filters and Search
        <div className="space-y-4 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search projects, technologies, or descriptions..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}>
              {viewMode === "grid" ? "List View" : "Grid View"}
            </Button>
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by Categories:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategories.includes(category) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            {selectedCategories.length > 0 && (
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground">Selected:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedCategories.map((category) => (
                    <Badge key={category} variant="secondary" className="text-xs">
                      {category}
                      <button onClick={() => toggleCategory(category)} className="ml-1 hover:text-destructive">
                        ×
                      </button>
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              <span className="text-sm font-medium">Filter by Technology:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Button
                  key={tech}
                  variant={selectedTech.includes(tech) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleTech(tech)}
                >
                  {tech}
                </Button>
              ))}
            </div>
            {selectedTech.length > 0 && (
              <Button variant="ghost" size="sm" onClick={() => setSelectedTech([])}>
                Clear Filters
              </Button>
            )}
          </div>
        </div> */}

        {/* All Projects */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">All Projects</h2>
            <span className="text-sm text-muted-foreground">
              {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} found
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No projects found matching your criteria.</p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchTerm("")
                  setSelectedCategories([])
                  setSelectedTech([])
                }}
                className="mt-4"
              >
                Clear All Filters
              </Button>
            </div>
          ) : (
            <div className={viewMode === "grid" ? "grid gap-6 md:grid-cols-2 lg:grid-cols-3" : "space-y-6"}>
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} viewMode={viewMode} />
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

function ProjectCard({ project, viewMode }: { project: Project; viewMode: "grid" | "list" }) {
  if (viewMode === "list") {
    return (
      <Card className="group hover:shadow-lg transition-shadow">
        <div className="flex gap-6 p-6">
          <div className="w-48 h-32 relative overflow-hidden rounded-lg flex-shrink-0">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="flex-1 space-y-4">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex flex-wrap gap-1 mb-2">
                    {project.categories.map((category) => (
                      <Badge key={category} variant="outline" className="text-xs">
                        {category}
                      </Badge>
                    ))}
                  </div>
                  <Badge variant={project.status === "completed" ? "default" : "secondary"}>{project.status}</Badge>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-2 flex-wrap">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>{project.title}</DialogTitle>
                    <DialogDescription>{project.description}</DialogDescription>
                  </DialogHeader>
                  <ProjectDetails project={project} />
                </DialogContent>
              </Dialog>
              {project.links.website && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.website} target="_blank">
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Website
                  </Link>
                </Button>
              )}
              {project.links.github && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.github} target="_blank">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Link>
                </Button>
              )}
              {project.links.document && (
                <Button variant="outline" size="sm" asChild>
                  <Link href={project.links.document} target="_blank">
                    <FileText className="w-4 h-4 mr-1" />
                    Docs
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden rounded-t-lg">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2">
          <Badge variant={project.status === "completed" ? "default" : "secondary"}>{project.status}</Badge>
        </div>
      </div>
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <CardTitle className="text-lg">{project.title}</CardTitle>
            <div className="flex flex-wrap gap-1 mb-2">
              {project.categories.map((category) => (
                <Badge key={category} variant="outline" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
          <span className="text-sm text-muted-foreground">{project.year}</span>
        </div>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-1">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{project.technologies.length - 3} more
              </Badge>
            )}
          </div>

          {/* Quick Access Links */}
          <div className="flex flex-wrap gap-1">
            {project.links.github && (
              <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                <Link href={project.links.github} target="_blank">
                  <Github className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.demo && (
              <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                <Link href={project.links.demo} target="_blank">
                  <ExternalLink className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.document && (
              <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                <Link href={project.links.document} target="_blank">
                  <FileText className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.whitepaper && (
              <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                <Link href={project.links.whitepaper} target="_blank">
                  <BookOpen className="w-3 h-3" />
                </Link>
              </Button>
            )}
            {project.links.pitchDeck && (
              <Button variant="ghost" size="sm" asChild className="h-6 px-2">
                <Link href={project.links.pitchDeck} target="_blank">
                  <Presentation className="w-3 h-3" />
                </Link>
              </Button>
            )}
          </div>

          <div className="flex gap-2">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                  View Details
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>{project.title}</DialogTitle>
                  <DialogDescription>{project.description}</DialogDescription>
                </DialogHeader>
                <ProjectDetails project={project} />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

function ProjectDetails({ project }: { project: Project }) {
  return (
    <div className="space-y-6">
      <div className="aspect-video relative overflow-hidden rounded-lg">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Project Overview</h3>
            <p className="text-muted-foreground">{project.fullDescription}</p>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Motivation</h3>
            <p className="text-muted-foreground">{project.motivation}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Project Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Status:</span>
                <Badge variant={project.status === "completed" ? "default" : "secondary"}>{project.status}</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Year:</span>
                <span>{project.year}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Categories:</span>
                <div className="flex flex-wrap gap-1">
                  {project.categories.map((category) => (
                    <Badge key={category} variant="outline" className="text-xs">
                      {category}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Links & Resources</h3>
            <div className="space-y-3">
              {/* Primary Links */}
              <div className="space-y-2">
                <h4 className="text-sm font-medium text-muted-foreground">Primary Resources</h4>
                <div className="flex flex-wrap gap-2">
                  {project.links.website && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.website} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Website
                      </Link>
                    </Button>
                  )}
                  {project.links.github && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.github} target="_blank">
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
                      </Link>
                    </Button>
                  )}
                  {project.links.demo && (
                    <Button variant="outline" size="sm" asChild>
                      <Link href={project.links.demo} target="_blank">
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>

              {/* Documentation Links */}
              {(project.links.document ||
                project.links.whitepaper ||
                project.links.pitchDeck ||
                project.links.publication) && (
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground">Documentation</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.links.document && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.document} target="_blank">
                          <FileText className="w-4 h-4 mr-1" />
                          Documentation
                        </Link>
                      </Button>
                    )}
                    {project.links.whitepaper && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.whitepaper} target="_blank">
                          <BookOpen className="w-4 h-4 mr-1" />
                          Whitepaper
                        </Link>
                      </Button>
                    )}
                    {project.links.pitchDeck && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.pitchDeck} target="_blank">
                          <Presentation className="w-4 h-4 mr-1" />
                          Pitch Deck
                        </Link>
                      </Button>
                    )}
                    {project.links.publication && (
                      <Button variant="outline" size="sm" asChild>
                        <Link href={project.links.publication} target="_blank">
                          <File className="w-4 h-4 mr-1" />
                          Publication
                        </Link>
                      </Button>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
