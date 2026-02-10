import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

const doctors = [
  {
    name: "Dr. Sarah Mitchell",
    specialty: "Cataract & Refractive Surgery",
    experience: "15 Years",
    rating: 4.9,
    initials: "SM",
  },
  {
    name: "Dr. James Chen",
    specialty: "Cornea & External Disease",
    experience: "12 Years",
    rating: 4.8,
    initials: "JC",
  },
  {
    name: "Dr. Priya Sharma",
    specialty: "Glaucoma Specialist",
    experience: "18 Years",
    rating: 4.9,
    initials: "PS",
  },
  {
    name: "Dr. Michael Torres",
    specialty: "Vitreoretinal Surgery",
    experience: "20 Years",
    rating: 5.0,
    initials: "MT",
  },
]

export function DoctorsSection() {
  return (
    <section id="doctors" className="py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Our Team</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Meet Our Expert Physicians
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Board-certified specialists delivering exceptional patient outcomes with cutting-edge technology.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <Card
              key={doctor.name}
              className="group cursor-pointer border-border/50 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <Avatar className="h-20 w-20 border-2 border-primary/20">
                  <AvatarFallback className="bg-primary/10 text-lg font-semibold text-primary">
                    {doctor.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{doctor.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{doctor.specialty}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant="secondary" className="text-xs">
                    {doctor.experience}
                  </Badge>
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium text-foreground">{doctor.rating}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
