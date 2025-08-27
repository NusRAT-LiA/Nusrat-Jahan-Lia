"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { ChevronDown, ChevronRight, Users, FileText, Clock, MapPin, Eye, BookOpen, X } from "lucide-react"
import Image from "next/image"

// PDF Viewer Component
function PDFViewer({ pdfUrl, title }: { pdfUrl: string; title: string }) {
  return (
    <div className="w-full h-full">
      <iframe
        src={`${pdfUrl}#toolbar=1&navpanes=1&scrollbar=1`}
        className="w-full h-full border-0"
        title={title}
        style={{ minHeight: "100vh" }}
      />
    </div>
  )
}

// Full Screen PDF Dialog Component
function FullScreenPDFDialog({ module, courseId }: { module: any; courseId: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <Button size="sm" variant="ghost" className="h-6 px-2" onClick={() => setIsOpen(true)}>
        <Eye className="w-3 h-3" />
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-background">
            <div>
              <h2 className="text-lg font-semibold">{module.slides.title}</h2>
              <p className="text-sm text-muted-foreground">Module {module.module}</p>
            </div>
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* PDF Content */}
          <div className="h-[calc(100vh-80px)]">
            <PDFViewer pdfUrl={`courses/${courseId}/${module.slides.pdfFile}`} title={module.slides.title} />
          </div>
        </div>
      )}
    </>
  )
}

// Syllabus Dialog Component
function SyllabusDialog({ course }: { course: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" variant="outline">
          <BookOpen className="w-4 h-4 mr-2" />
          Syllabus
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{course.title} - Course Syllabus</DialogTitle>
          <DialogDescription>High-level overview of the course structure and learning objectives</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          {course.syllabus && (
            <>
              {course.syllabus.overview && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Course Overview</h3>
                  <p className="text-muted-foreground">{course.syllabus.overview}</p>
                </div>
              )}

              {course.syllabus.objectives && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Learning Objectives</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.objectives.map((objective: string, idx: number) => (
                      <li key={idx}>{objective}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.prerequisites && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.prerequisites.map((prereq: string, idx: number) => (
                      <li key={idx}>{prereq}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.topics && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Main Topics Covered</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.topics.map((topic: string, idx: number) => (
                      <li key={idx}>{topic}</li>
                    ))}
                  </ul>
                </div>
              )}

              {course.syllabus.assessment && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Assessment Methods</h3>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {course.syllabus.assessment.map((method: string, idx: number) => (
                      <li key={idx}>{method}</li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Modular course component that adapts to available data
function CourseCard({
  course,
  isExpanded,
  onToggleExpand,
}: {
  course: any
  isExpanded: boolean
  onToggleExpand: () => void
}) {
  const hasImage = course.thumbnail
  const hasDescription = course.description
  const hasEnrollment = course.enrollment !== undefined
  const hasLocation = course.location
  const hasDuration = course.duration
  const hasModules = course.modules && course.modules.length > 0
  const hasStudentProjects = course.studentProjects && course.studentProjects.length > 0
  const hasSyllabus = course.syllabus

  return (
    <Card className="overflow-hidden">
      <div className={`grid gap-0 ${hasImage ? "md:grid-cols-4" : "md:grid-cols-1"}`}>
        {/* Course Thumbnail - Only render if image exists */}
        {hasImage && (
          <div className="aspect-video md:aspect-auto relative bg-muted">
            <Image src={course.thumbnail || "/placeholder.svg"} alt={course.title} fill className="object-cover" />
          </div>
        )}

        {/* Course Info */}
        <div className={`p-6 ${hasImage ? "md:col-span-3" : "md:col-span-1"}`}>
          {/* Header Section */}
          <div className="flex justify-between items-start mb-4">
            <div className="space-y-2 flex-1">
              {/* Badges - Only render if data exists */}
              <div className="flex items-center gap-2 flex-wrap">
                {course.discipline && <Badge variant="secondary">{course.discipline}</Badge>}
                {course.level && <Badge variant="outline">{course.level}</Badge>}
                {course.status && (
                  <Badge variant={course.status === "Active" ? "default" : "secondary"}>{course.status}</Badge>
                )}
              </div>

              {/* Title and Code */}
              <h3 className="text-2xl font-bold">{course.title}</h3>

              {/* Course metadata - Only render if data exists */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                {course.code && <span>{course.code}</span>}
                {course.term && <span>{course.term}</span>}
                {hasLocation && (
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    <span>{course.location}</span>
                  </div>
                )}
                {hasDuration && (
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Right side metadata */}
            <div className="text-right text-sm text-muted-foreground space-y-2">
              {hasEnrollment && (
                <div className="flex items-center gap-1 justify-end">
                  <Users className="w-4 h-4" />
                  <span>{course.enrollment} students</span>
                </div>
              )}
            </div>
          </div>

          {/* Description - Only render if exists */}
          {hasDescription && <p className="text-muted-foreground mb-4">{course.description}</p>}

          {/* Action Buttons - Only render if syllabus exists */}
          {hasSyllabus && (
            <div className="flex gap-4 mb-4">
              <SyllabusDialog course={course} />
            </div>
          )}

          {/* Expandable Modules - Only render if modules exist */}
          {hasModules && (
            <Collapsible open={isExpanded} onOpenChange={onToggleExpand}>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                  <span className="font-medium">Course Modules ({course.modules.length} modules)</span>
                  {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                </Button>
              </CollapsibleTrigger>
              <CollapsibleContent className="space-y-4 mt-4">
                {course.modules.map((module: any) => (
                  <ModuleCard key={module.module} module={module} courseId={course.id} />
                ))}
              </CollapsibleContent>
            </Collapsible>
          )}

          {/* Student Projects - Only render if projects exist */}
          {hasStudentProjects && (
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Featured Student Projects</h4>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {course.studentProjects.map((project: any, idx: number) => (
                  <ProjectCard key={idx} project={project} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Card>
  )
}

// Modular module component
function ModuleCard({ module, courseId }: { module: any; courseId: string }) {
  const hasTopics = module.topics && module.topics.length > 0
  const hasSlides = module.slides

  return (
    <Card className="p-4">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="font-semibold">
              Module {module.module}: {module.title}
            </h4>
            {hasTopics && <p className="text-sm text-muted-foreground">{module.topics.join(" • ")}</p>}
          </div>
        </div>

        {hasSlides && (
          <div className="space-y-2">
            <h5 className="text-sm font-medium">Module Slides:</h5>
            <div className="flex items-center gap-2 text-sm">
              <FileText className="w-4 h-4" />
              <span className="flex-1">{module.slides.title}</span>
              <FullScreenPDFDialog module={module} courseId={courseId} />
            </div>
          </div>
        )}
      </div>
    </Card>
  )
}

// Modular project card component
function ProjectCard({ project }: { project: any }) {
  const hasImage = project.image

  return (
    <Card className="p-3">
      {hasImage && (
        <div className="aspect-video relative bg-muted rounded mb-2">
          <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover rounded" />
        </div>
      )}
      <h5 className="font-medium text-sm">{project.title}</h5>
      {project.student && <p className="text-xs text-muted-foreground">{project.student}</p>}
    </Card>
  )
}

export default function CoursesPage() {
  const [expandedCourse, setExpandedCourse] = useState<string | null>(null)

  // Enhanced course data with simplified structure
  const courses = [
    {
      id: "slm",
      title: "Building Small Language Model: From Foundations to Bangla Financial Text Generation",
      thumbnail: "projects/slm.png",
      description:
        "Learn the core principles and techniques of language models while building a small Bangla language model that generates financial articles. The course is taken offline at the Institute of Information Technology, University of Dhaka.",
      syllabus: {
        overview:
          "This course provides hands-on experience in building small language models specifically for Bangla financial text generation. Students will learn the fundamentals of natural language processing, transformer architectures, and domain-specific model training.",
        objectives: [
          "Explain the fundamental concepts of language models, their applications, and why small language models are important.",
          "Implement efficient tokenization and binary data storage for high-performance training.",
          "Understand and build the key components of a Transformer-based Small Language Model (SLM) from scratch in PyTorch",
          "Mathematical understanding of Attention, Causal self-attention, Multi-head attention, AdamW optimizer and Position-wise Feed-Forward Networks",
          "Train and optimize a 58M parameter Bangla language model, including learning rate scheduling, checkpointing, and evaluation",
        ],
        prerequisites: [
          "Basic knowledge of Python programming",
          "Familiarity with neural networks",
          "Basic statistics and linear algebra",
        ],
        topics: [
          "What LMs are, real-world applications, and differences between SLMs and LLMs.",
          "Data Preparation Pipeline and Bangla-specific tokenization challenges, and SentencePiece integration.",
          "Binary storage formats, memory mapping, and metadata management for training.",
          "Transformer foundations, embeddings, positional encodings, attention mechanisms, and GPT-style architecture",
          "Feed-forward networks, transformer blocks, residual connections, and assembling the complete GPT model.",
          "Hardware setup, optimizer configuration, learning rate schedules, training loop implementation, and gradient clipping.",
          "Cross-entropy loss, validation monitoring, saving and loading models, autoregressive decoding, sampling methods and temperature tuning",
        ],
      },
      modules: [
        {
          module: 1,
          title: "Introduction to Language Models",
          topics: ["History of NLP", "Transformer Architecture", "Tokenization"],
          slides: {
            title: "Module 1: Introduction to Language Models",
            pdfFile: "BSLM-module1.pdf",
          },
        },
        {
          module: 2,
          title: "Data Preparation Pipeline",
          topics: [
            "Text Preprocessing",
            "Underfitting, Overfitting & Just-Right Fitting",
            "Tokenization Fundamentals",
            "Bangla Tokenization Challenges",
          ],
          slides: {
            title: "Module 2: Data Preparation Pipeline",
            pdfFile: "BSLM-module2.pdf",
          },
        },
        {
          module: 3,
          title: "Transformer Architecture",
          topics: [
            "Token and positional embeddings",
            "Self-attention mechanism with causal masking",
            "Multi-Head Attention",
            "Cross-Attention",
          ],
          slides: {
            title: "Module 3: Transformer Architecture",
            pdfFile: "BSLM-module3.pdf",
          },
        },
        {
          module: 4,
          title: "Model Components",
          topics: [
            "Feed-Forward Networks",
            "Multi-Layer Perceptrons (MLPs)",
            "Forward Pass",
            "Gradient Explosion / Vanishing",
          ],
          slides: {
            title: "Module 4: Model Components",
            pdfFile: "BSLM-module4.pdf",
          },
        },
        {
          module: 5,
          title: "Training, Evaluation, Generation",
          topics: [
            "AdamW Optimizer Configuration",
            "Learning Rate Scheduling",
            "Gradient Clipping",
            "Training Loop Implementation",
            "Autoregressive Decoding",
            "Temperature Tuning",
          ],
          slides: {
            title: "Module 5: Training, Evaluation, Generation",
            pdfFile: "BSLM-module5.pdf",
          },
        },
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Courses & Teaching</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Educational courses I designed, developed and serving as an instructor.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="space-y-8">
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
              isExpanded={expandedCourse === course.id}
              onToggleExpand={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
            />
          ))}
        </div>

        {courses.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No courses found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
