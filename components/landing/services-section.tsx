import { Eye, Scan, HeartPulse, Brain, Shield, Activity } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Eye,
    title: "Cataract Surgery",
    description: "Advanced phacoemulsification with premium IOL implants for crystal-clear vision restoration.",
  },
  {
    icon: Scan,
    title: "LASIK Center",
    description: "Bladeless, AI-guided LASIK surgery with real-time corneal mapping for precision correction.",
  },
  {
    icon: HeartPulse,
    title: "Cornea Transplant",
    description: "Full-thickness and lamellar keratoplasty procedures with AI-matched donor tissue selection.",
  },
  {
    icon: Brain,
    title: "AI Diagnostics",
    description: "Machine learning algorithms analyze retinal scans and imaging for early disease detection.",
  },
  {
    icon: Shield,
    title: "Glaucoma Management",
    description: "Comprehensive IOP monitoring with AI-powered progression tracking and treatment planning.",
  },
  {
    icon: Activity,
    title: "Retina Services",
    description: "Advanced vitreoretinal procedures with AI-enhanced surgical planning and outcome prediction.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-card py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">Our Services</p>
          <h2 className="text-balance text-3xl font-bold text-foreground md:text-4xl">
            Comprehensive Eye Care Solutions
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            From routine examinations to complex surgeries, our AI-enhanced platform supports every step of patient care.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group cursor-pointer border-border/50 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
            >
              <CardContent className="flex flex-col gap-4 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
