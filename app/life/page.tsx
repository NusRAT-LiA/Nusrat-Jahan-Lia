"use client"
import { Card } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Calendar } from "lucide-react"
import Image from "next/image"

interface LifeEvent {
  id: string
  title: string
  date: string
  image?: string
  description?: string
  link?: string
  location?: string
  category?: string
}

// const styles = `
//   .bw-image {
//     filter: grayscale(100%);
//     transition: filter 0.3s ease-in-out;
//   }
  
//   .bw-image:hover {
//     filter: grayscale(0%);
//   }
// `
const styles = `
.group .bw-image {
  filter: grayscale(100%);
  transition: filter 0.3s ease-in-out;
}

.group:hover .bw-image {
  filter: grayscale(0%);
}

`

const LifeEventCard = ({ event }: { event: LifeEvent }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
          <div className="aspect-square relative bg-muted">
            {event.image ? (
              <Image
                src={event.image || "/placeholder.svg"}
                alt={event.title}
                fill
                className="object-cover group-hover:scale-105 transition-all duration-300 bw-image"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="text-gray-400 text-center p-4">
                  <Calendar className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm font-medium">Event Photo</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-white font-semibold text-sm mb-1 line-clamp-2">{event.title}</h3>
              <div className="flex items-center gap-2 text-white/80 text-xs">
                <Calendar className="w-3 h-3" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
            </div>
          </div>
        </Card>
      </DialogTrigger>

      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">{event.title}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          {event.image && (
            <div className="aspect-video relative bg-muted rounded-lg overflow-hidden">
              <Image src={event.image || "/placeholder.svg"} alt={event.title} fill className="object-cover bw-image " />
            </div>
          )}

          <div className="flex flex-wrap gap-2 justify-between items-start">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(event.date).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              {event.location && (
                <div className="flex items-center gap-1">
                  <span>📍 {event.location}</span>
                </div>
              )}
            </div>
            {event.category && (
              <div className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full">{event.category}</div>
            )}
          </div>

          {event.description && (
            <div className="prose prose-sm max-w-none">
              <p className="text-muted-foreground leading-relaxed">{event.description}</p>
            </div>
          )}

          {event.link && (
            <div className="pt-2 border-t">
              <a
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                Visit Related Link
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 3h7m0 0v7m0-7L10 14" />
                </svg>
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default function LifePage() {
  const lifeEvents: LifeEvent[] = [
    {
      id: "11",
      title:
        "Employment award by US Department of Justice: For technological innovations in the field of conservation and investigation",
      date: "2025-05-22",
      image: "events/usdj.jpeg",
      description:
        "Recognition for  contributions to technological innovations in conservation and investigation fields.",
      link: "https://www.linkedin.com/posts/nusrat-jahan-lia-608655229_what-an-amazing-journey-with-icitapus-activity-7331540643850207232-2vbM?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6EigBqZl5OtppMAq0VC1wsrCIlCpVRPY",
      category: "Award",
    },
    {
      id: "10",
      title: "GOLD WINNER in National UIU CSE FEST BLOCKCHAIN OLYMPIAD",
      date: "2025-01-18",
      image: "events/uiu.jpeg",
      description:
        "Achieved first place in the national blockchain competition!",
      link: "https://www.linkedin.com/posts/nusrat-jahan-lia-608655229_blockchain-maritimetech-supplychain-activity-7294632326947315712-5FIT?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6EigBqZl5OtppMAq0VC1wsrCIlCpVRPY",
      category: "Competition",
    },
    {
      id: "9",
      title: "National Winner and Global Finalist in the IEEE IES Generative AI Challenge Hackathon 2025",
      date: "2025-02-18",
      image: "events/ieee.jpeg",
      description: "Became a national winner and global finalist in IEEE's AI challenge.",
      link: "https://www.linkedin.com/posts/nusrat-jahan-lia-608655229_got-selected-as-one-of-the-top-global-finalist-activity-7308216433845379074-Kj1e?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6EigBqZl5OtppMAq0VC1wsrCIlCpVRPY",
      category: "Competition",
    },
    {
      id: "8",
      title: "Featured by US Embassy: For contribution in US department of Justice's Tech-in-conservation Initiative",
      date: "2024-10-16",
      image: "events/usembassy.png",
      description:
        "Featured by the US Embassy for contributions to technology-driven conservation efforts.",
      link: "https://www.facebook.com/bangladesh.usembassy/posts/pfbid0DUXLkTX72Bd5wrifKLZGqRgik82e8SYowiJNgFV7YzsW73uJwz5GTb6QoWnWhPDel?rdid=d9sn99h6Bphm8lOy#",
      category: "Recognition",
    },
    {
      id: "7",
      title: "Organized Shorone Deyal: A gathering of 50+ young volunteers to engage in a clean-and-colour event",
      date: "2024-08-12",
      image: "events/paint.jpeg",
      description:
        "After the fall of a dictatorial regime, as a means of celebrating new Bangladeshi-democracy dream, we gathered young people around the country to engage in cleaning up the vandalized places and painting the walls with colours of hope.",
      link: "https://www.linkedin.com/posts/nusrat-jahan-lia-608655229_as-sabrina-karim-associate-professor-of-activity-7230593581952946177-A8gi?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6EigBqZl5OtppMAq0VC1wsrCIlCpVRPY",
      category: "Community Service",
    },
    {
      id: "6",
      title: "IUT National ICT Fest 2024: Third Runner Up",
      date: "2024-04-27",
      image: "events/game-jam.png",
      description:
        "This was my first ever attempt in developing a game. This game was made based on a gameJam theme — 'It's hard to cook without deadly spells'.",
      link: "https://www.youtube.com/watch?v=skUOGGozj-A&t=1s",
      category: "Competition",
    },
    {
      id: "5",
      title:
        "Organized CARAVAN-OF-BLESSING: Launched during the sudden price-hike to help underprivileged families meet daily needs",
      date: "2024-03-30",
      image: "events/cob.jpg",
      description:
        "The main objective of the 'Caravan of Blessings' was to sell rations to working class underprivileged families at 90-95% cheaper rate so that they purchase their necessities without feeling like they are being subjected to charity.",
      link: "https://www.linkedin.com/posts/nusrat-jahan-lia-608655229_marking-the-end-of-an-amazing-initiative-activity-7179913473970118656-hkMP?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6EigBqZl5OtppMAq0VC1wsrCIlCpVRPY",
      category: "Community Service",
    },
    {
      id: "4",
      title: "Organized ITverse-2023: One of Bangladesh's Largest Tech Events",
      date: "2023-11-07",
      image: "events/itverse.jpeg",
      description:
        "Organized and Hosted ITverse-2023 with almost two thousand national as well as international participants and 11 sponsors.",
      link: "https://www.linkedin.com/posts/nusrat-jahan-lia-608655229_working-with-iit-software-engineers-community-activity-7127694508229632000-Gw2Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADk6EigBqZl5OtppMAq0VC1wsrCIlCpVRPY",
      category: "Event Organization",
    },
    {
      id: "3",
      title:
        "Organized and Hosted FlutterFrenzy: The first developers' conference in Bangladesh sponsored by Google and Flutter",
      date: "2023-05-20",
      image: "events/flutter.jpeg",
      description:
        "Organized, led and Hosted FlutterFrenzy, the first ever Flutter based event in Bangladesh, sponsored by Google and Flutter.",
      link: "https://x.com/FlutterFrenzy",
      category: "Event Organization",
    },
    {
      id: "2",
      title: "SUST SWE Technovent 2023: Hackathon Finalist",
      date: "2023-01-27",
      image: "events/sust-swe.jpg",
      description: "My first hackathon experience. We built a web3 based research collaboration platform.",
      link: "https://www.facebook.com/share/p/1EQd7wC7bL/",
      category: "Competition",
    },
    {
      id: "1",
      title:
        "Organized Hygieia-হাইজিয়া: A hygiene awareness and free healthcare campaign for the underprivileged families",
      date: "2022-10-04",
      image: "events/hygieia.jpg",
      description:
        "We tried facilitating them with hygiene products, financially assisting them in establishing bins around the corner of their habitation. One-on-one information session about 1. nutritious food, 2. adverse effects of child marriage, 3. women's wellbeing and their maintenance, 4. reproductive mindfulness. Free essential treatment for the slum people under the supervision of a doctor.",
      link: "https://www.facebook.com/share/p/16yoh8LixA/",
      category: "Community Service",
    },

  ]

  return (
    <div className="min-h-screen bg-background">
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Life Events</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          A limited subset of spatiotemporal phenomena was logged and archived.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {lifeEvents.map((event) => (
            <LifeEventCard key={event.id} event={event} />
          ))}
        </div>

        {lifeEvents.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No events found.</p>
          </div>
        )}
      </div>
    </div>
  )
}
