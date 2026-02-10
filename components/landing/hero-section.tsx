"use client"

import Image from "next/image"
import Link from "next/link"
import { CalendarDays, MapPin, Users, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 px-4 py-16 lg:flex-row lg:gap-12 lg:px-8 lg:py-24">
        <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 self-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary lg:self-start">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            AI-Powered Healthcare
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Advanced Eye Care with{" "}
            <span className="text-primary">AI Precision</span>
          </h1>

          <p className="mx-auto max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
            Experience world-class cataract surgery, LASIK treatments, and cornea transplants powered by AI-driven clinical decision support.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button size="lg" asChild className="h-12 px-8 text-base">
              <Link href="/login">Book Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="h-12 px-8 text-base bg-transparent">
              <Link href="#services">Our Services</Link>
            </Button>
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-8 lg:justify-start">
            {[
              { value: "15K+", label: "Patients Treated" },
              { value: "98%", label: "Success Rate" },
              { value: "50+", label: "Expert Doctors" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[4/5] max-w-md overflow-hidden rounded-3xl shadow-2xl shadow-primary/10 lg:max-w-lg">
            <Image
              src="/images/doctor-hero.jpg"
              alt="Expert doctor at MediCare AI hospital"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-transparent to-transparent" />
          </div>

          {/* Booking Widget */}
          <div className="absolute -bottom-4 left-1/2 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 rounded-2xl border border-border/50 bg-card p-4 shadow-xl backdrop-blur-sm lg:-left-8 lg:bottom-8 lg:w-72 lg:translate-x-0">
            <p className="mb-3 text-sm font-semibold text-foreground">Quick Appointment</p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>Select Location</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground">
                <CalendarDays className="h-4 w-4 text-primary" />
                <span>Choose Date</span>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-secondary px-3 py-2 text-sm text-muted-foreground">
                <Users className="h-4 w-4 text-primary" />
                <span>1 Patient</span>
              </div>
              <Button className="mt-1 w-full" size="sm">
                <Search className="mr-2 h-4 w-4" />
                Search Doctors
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
