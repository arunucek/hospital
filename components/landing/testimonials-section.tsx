import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Amanda Richardson",
    text: "The AI-powered diagnostics caught an early sign of glaucoma that was missed at my previous doctor. Truly life-changing technology.",
    initials: "AR",
    role: "Patient",
    rating: 5,
  },
  {
    name: "David Park",
    text: "My LASIK experience was flawless. The real-time corneal mapping made me feel confident in the precision of my surgery.",
    initials: "DP",
    role: "Patient",
    rating: 5,
  },
  {
    name: "Dr. Linda Wu",
    text: "As a referring physician, I trust MediCare AI's clinical documentation platform. The SOAP notes and decision support are exceptional.",
    initials: "LW",
    role: "Referring Physician",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            What Our Patients Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50">
              <CardContent className="flex flex-col gap-4 p-6">
                <Quote className="h-8 w-8 text-primary/20" />
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  {`"${t.text}"`}
                </p>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex items-center gap-3 border-t border-border pt-4">
                  <Avatar className="h-10 w-10">
                    <AvatarFallback className="bg-primary/10 text-sm font-medium text-primary">
                      {t.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
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
