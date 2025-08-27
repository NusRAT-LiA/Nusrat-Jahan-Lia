"use client"

import { useState } from "react"
import { Users, TrendingUp, Globe } from "lucide-react"

export default function StartupsPage() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: "edutech-labs",
      name: "EduTech Labs",
      role: "Founder & CEO",
      logo: "/placeholder.svg?height=120&width=120",
      founded: "2023-03",
      status: "Active",
      domain: "EdTech",
      description: "AI-powered educational platform that provides personalized learning experiences while preserving student privacy through federated learning techniques.",
      shortDescription: "Privacy-first AI for personalized education",
      website: "https://edutechlabs.com",
      location: "Boston, MA",
      teamSize: 12,
      funding: "$2M Seed",
      investors: ["Bessemer Venture Partners", "MIT Alumni Fund", "EdTech Angels"],
      screenshots: [
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500",
        "/placeholder.svg?height=300&width=500"
      ],
      metrics: [
        { label: "Active Users", value: "50,000+", icon: <Users className="w-4 h-4" /> },
        { label: "Partner Institutions", value: "200+", icon: <Globe className="w-4 h-4" /> },
        { label: "Revenue Growth", value: "300% YoY", icon: <TrendingUp className="w-4 h\
