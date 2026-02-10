"use client"

import {
  Download,
  Mail,
  Globe,
  Stethoscope,
  Pill,
  CalendarCheck,
  ThumbsUp,
  ThumbsDown,
  Share2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"

export default function PatientSummaryPage() {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Patient Summary</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Easy-to-understand summary for patients. Share via PDF, email, or SMS.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Select defaultValue="en">
            <SelectTrigger className="w-36 h-9">
              <Globe className="mr-2 h-4 w-4" />
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="en">English</SelectItem>
              <SelectItem value="es">Spanish</SelectItem>
              <SelectItem value="hi">Hindi</SelectItem>
              <SelectItem value="fr">French</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Patient Info Header */}
      <Card className="border-border/50">
        <CardContent className="flex flex-wrap items-center gap-6 p-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <span className="text-2xl font-bold text-primary">MJ</span>
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold text-foreground">Maria Johnson</h2>
            <p className="text-sm text-muted-foreground">Age: 58 | Female | ID: PT-2024-0847</p>
          </div>
          <Badge variant="secondary" className="text-sm">
            Visit: Feb 10, 2026
          </Badge>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Diagnosis */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Stethoscope className="h-5 w-5 text-primary" />
              Diagnosis Summary
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="rounded-lg bg-secondary/50 p-4">
              <p className="text-sm leading-relaxed text-foreground">
                You have an <strong>early-stage cataract</strong> in your right eye. This is causing the blurry vision you have been experiencing. It is not dangerous at this stage and does not require immediate surgery.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Medications */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Pill className="h-5 w-5 text-primary" />
              Medication Explanation
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="flex flex-col gap-3">
              <div className="rounded-lg bg-secondary/50 p-3">
                <p className="text-sm font-medium text-foreground">Lubricating Eye Drops</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Use 3 times daily to keep your eyes moist and comfortable. These are safe to use long-term.
                </p>
              </div>
              <div className="rounded-lg bg-secondary/50 p-3">
                <p className="text-sm font-medium text-foreground">UV Protection Glasses</p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Wear sunglasses with UV protection outdoors. UV light can worsen cataracts over time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Follow-up */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <CalendarCheck className="h-5 w-5 text-primary" />
              Follow-Up Schedule
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="rounded-lg border border-primary/20 bg-primary/5 p-4">
              <p className="text-lg font-bold text-primary">August 10, 2026</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Follow-up eye examination. We will check if the cataract has changed and discuss next steps.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Do's and Don'ts */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">{"Do's and Don'ts"}</CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                  <ThumbsUp className="h-4 w-4" />
                  {"Do's"}
                </div>
                {["Wear UV sunglasses", "Use eye drops regularly", "Eat leafy greens", "Get enough sleep"].map(
                  (item) => (
                    <p key={item} className="text-xs text-muted-foreground">
                      {`\u2022 ${item}`}
                    </p>
                  )
                )}
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-sm font-semibold text-destructive">
                  <ThumbsDown className="h-4 w-4" />
                  {"Don'ts"}
                </div>
                {["Rub your eyes", "Skip follow-ups", "Use screens in dark", "Smoke tobacco"].map(
                  (item) => (
                    <p key={item} className="text-xs text-muted-foreground">
                      {`\u2022 ${item}`}
                    </p>
                  )
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Share / Export */}
      <div className="flex flex-wrap gap-3">
        <Button>
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
        <Button variant="outline">
          <Mail className="mr-2 h-4 w-4" />
          Email to Patient
        </Button>
        <Button variant="outline">
          <Share2 className="mr-2 h-4 w-4" />
          Share via SMS
        </Button>
      </div>
    </div>
  )
}
