"use client"

import React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Eye, EyeOff, Mail, Lock, Smartphone, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      router.push("/dashboard")
    }, 1000)
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
            AI-Powered Clinical Documentation
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-primary-foreground/80">
            Streamline your clinical workflow with intelligent voice transcription, automated SOAP notes, and real-time decision support.
          </p>
          <div className="mt-8 flex flex-col gap-4">
            {[
              "Voice-to-text clinical documentation",
              "Real-time drug interaction alerts",
              "Automated SOAP note generation",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-foreground/20">
                  <ArrowRight className="h-3 w-3 text-primary-foreground" />
                </div>
                <span className="text-sm text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="text-sm text-primary-foreground/60">
          HIPAA Compliant | SOC 2 Certified | End-to-End Encrypted
        </p>
      </div>

      {/* Right Login Form */}
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

          <Card className="border-border/50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl text-foreground">Welcome back</CardTitle>
              <CardDescription>Sign in to your account to continue</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="email">
                <TabsList className="mb-6 grid w-full grid-cols-2">
                  <TabsTrigger value="email">Email</TabsTrigger>
                  <TabsTrigger value="otp">OTP Login</TabsTrigger>
                </TabsList>

                <TabsContent value="email">
                  <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="email"
                          type="email"
                          placeholder="doctor@hospital.com"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link href="#" className="text-xs text-primary hover:underline">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter password"
                          className="pl-10 pr-10"
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowPassword(!showPassword)}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                          aria-label={showPassword ? "Hide password" : "Show password"}
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <Checkbox id="remember" />
                      <Label htmlFor="remember" className="text-sm font-normal text-muted-foreground">
                        Remember me
                      </Label>
                    </div>

                    <Button type="submit" className="mt-2 w-full" disabled={loading}>
                      {loading ? "Signing in..." : "Sign In"}
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="otp">
                  <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Smartphone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          className="pl-10"
                          required
                        />
                      </div>
                    </div>

                    <Button type="submit" className="mt-2 w-full" disabled={loading}>
                      {loading ? "Sending OTP..." : "Send OTP"}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              <div className="mt-6 text-center text-sm text-muted-foreground">
                {"Don't have an account? "}
                <Link href="/signup" className="font-medium text-primary hover:underline">
                  Sign up
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
