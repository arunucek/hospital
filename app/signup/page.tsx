"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { User, Building2, Mail, Lock, Phone, ArrowRight, Stethoscope } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const steps = ["Account Details", "Verification"]

export default function SignupPage() {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [loading, setLoading] = useState(false)

  function handleSignup(e: React.FormEvent) {
    e.preventDefault()
    if (step === 0) {
      setStep(1)
      return
    }
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1500)
  }

  return (
    <div className="flex min-h-screen">
      {/* Left Branding Panel */}
      <div className="hidden flex-1 flex-col justify-between bg-gradient-to-br from-primary to-primary/80 p-12 lg:flex">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-foreground/20">
            <span className="text-xl font-bold text-primary-foreground">M</span>
          </div>
          <span className="text-xl font-bold text-primary-foreground">MediCare AI</span>
        </div>

        <div className="max-w-md">
          <h1 className="text-4xl font-bold leading-tight text-primary-foreground">
            Join MediCare AI
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            Start transforming your clinical documentation workflow today. Set up takes less than 5 minutes.
          </p>
        </div>

        <p className="text-sm text-primary-foreground/60">
          HIPAA Compliant | SOC 2 Certified | End-to-End Encrypted
        </p>
      </div>

      {/* Right Signup Form */}
      <div className="flex flex-1 items-center justify-center bg-background p-6 lg:p-12">
        <div className="w-full max-w-md">
          <div className="mb-8 lg:hidden">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">M</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Medi<span className="text-primary">Care</span> AI
              </span>
            </Link>
          </div>

          {/* Step indicators */}
          <div className="mb-6 flex items-center gap-2">
            {steps.map((s, i) => (
              <div key={s} className="flex flex-1 items-center gap-2">
                <div
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                    i <= step
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-muted-foreground"
                  }`}
                >
                  {i + 1}
                </div>
                <span className={`text-sm ${i <= step ? "text-foreground font-medium" : "text-muted-foreground"}`}>
                  {s}
                </span>
                {i < steps.length - 1 && <div className="mx-2 h-px flex-1 bg-border" />}
              </div>
            ))}
          </div>

          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-foreground">
                {step === 0 ? "Create your account" : "Verify your email"}
              </CardTitle>
              <CardDescription>
                {step === 0
                  ? "Enter your details to get started"
                  : "We sent a verification code to your email"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSignup} className="flex flex-col gap-4">
                {step === 0 ? (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="first-name">First Name</Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                          <Input id="first-name" placeholder="John" className="pl-10" required />
                        </div>
                      </div>
                      <div className="flex flex-col gap-2">
                        <Label htmlFor="last-name">Last Name</Label>
                        <Input id="last-name" placeholder="Smith" required />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="hospital">Hospital / Organization</Label>
                      <div className="relative">
                        <Building2 className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="hospital" placeholder="General Hospital" className="pl-10" required />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="role">Role</Label>
                      <Select defaultValue="doctor">
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select role" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="doctor">
                            <div className="flex items-center gap-2">
                              <Stethoscope className="h-4 w-4" />
                              <span>Doctor</span>
                            </div>
                          </SelectItem>
                          <SelectItem value="nurse">Nurse</SelectItem>
                          <SelectItem value="admin">Administrator</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="signup-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="signup-email" type="email" placeholder="doctor@hospital.com" className="pl-10" required />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="signup-phone">Phone</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="signup-phone" type="tel" placeholder="+1 (555) 000-0000" className="pl-10" required />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <Label htmlFor="signup-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input id="signup-password" type="password" placeholder="Create a password" className="pl-10" required />
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center gap-6 py-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Mail className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-center text-sm text-muted-foreground">
                      Enter the 6-digit code sent to your email
                    </p>
                    <div className="flex gap-2">
                      {Array.from({ length: 6 }).map((_, i) => (
                        <Input
                          key={i}
                          className="h-12 w-12 text-center text-lg font-semibold"
                          maxLength={1}
                          inputMode="numeric"
                        />
                      ))}
                    </div>
                    <button type="button" className="text-sm text-primary hover:underline">
                      Resend code
                    </button>
                  </div>
                )}

                <Button type="submit" className="mt-2 w-full" disabled={loading}>
                  {loading ? "Creating account..." : step === 0 ? (
                    <span className="flex items-center gap-2">Continue <ArrowRight className="h-4 w-4" /></span>
                  ) : "Verify & Create Account"}
                </Button>
              </form>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                {"Already have an account? "}
                <Link href="/login" className="font-medium text-primary hover:underline">
                  Sign in
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
