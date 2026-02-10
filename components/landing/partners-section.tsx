import { Shield } from "lucide-react"

const partners = [
  "Johns Hopkins",
  "Mayo Clinic",
  "Cleveland Clinic",
  "Stanford Health",
  "Mount Sinai",
]

export function PartnersSection() {
  return (
    <section className="border-y border-border/50 bg-secondary/30 py-12">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="mb-8 text-center text-sm font-medium text-muted-foreground">
          Trusted by leading healthcare institutions
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
          {partners.map((name) => (
            <div key={name} className="flex items-center gap-2 text-muted-foreground/60">
              <Shield className="h-5 w-5" />
              <span className="text-base font-semibold tracking-wide">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
