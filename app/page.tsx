import { Navbar } from "@/components/landing/navbar"
import { HeroSection } from "@/components/landing/hero-section"
import { PartnersSection } from "@/components/landing/partners-section"
import { ServicesSection } from "@/components/landing/services-section"
import { DoctorsSection } from "@/components/landing/doctors-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { Footer } from "@/components/landing/footer"

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
