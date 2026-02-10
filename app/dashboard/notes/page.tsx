"use client"

import { useState } from "react"
import { FileText, Check, Download, Save, Clock, Edit3 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const initialSoap = {
  subjective:
    "Patient reports progressive blurry vision in right eye for approximately 2 weeks. Describes mild discomfort during prolonged reading. Denies redness, discharge, flashes, or floaters. No recent trauma or changes in medication. Family history significant for cataracts (mother, age 65).",
  objective:
    "Visual acuity: OD 20/40, OS 20/20. IOP: OD 16 mmHg, OS 15 mmHg. Slit lamp exam reveals early nuclear sclerotic cataract OD. Fundus exam: normal optic disc, macula, and vasculature OU. No vitreous opacities noted.",
  assessment:
    "1. Early nuclear sclerotic cataract, right eye (H25.11)\n2. Mild presbyopia\n3. Otherwise normal ophthalmologic examination",
  plan:
    "1. Monitor cataract progression - schedule follow-up in 6 months\n2. Updated refraction for near-vision correction\n3. Discussed surgical options if vision deteriorates further\n4. Patient educated on UV protection\n5. Return sooner if symptoms worsen",
}

export default function ClinicalNotesPage() {
  const [soap, setSoap] = useState(initialSoap)
  const [status, setStatus] = useState<"draft" | "approved">("draft")

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Clinical Notes</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-generated SOAP notes from your last consultation.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Badge
            variant={status === "approved" ? "default" : "secondary"}
            className="flex items-center gap-1"
          >
            {status === "approved" ? (
              <Check className="h-3 w-3" />
            ) : (
              <Edit3 className="h-3 w-3" />
            )}
            {status === "approved" ? "Approved" : "Draft"}
          </Badge>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Clock className="h-3 w-3" />
            Last edited 5 min ago
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Auto-generated View */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-5 w-5 text-primary" />
              AI-Generated Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="p-5 pt-0">
            <Tabs defaultValue="subjective">
              <TabsList className="mb-4 grid w-full grid-cols-4">
                <TabsTrigger value="subjective">S</TabsTrigger>
                <TabsTrigger value="objective">O</TabsTrigger>
                <TabsTrigger value="assessment">A</TabsTrigger>
                <TabsTrigger value="plan">P</TabsTrigger>
              </TabsList>
              {(["subjective", "objective", "assessment", "plan"] as const).map((key) => (
                <TabsContent key={key} value={key}>
                  <div className="rounded-lg bg-secondary/50 p-4">
                    <h3 className="mb-2 text-sm font-semibold capitalize text-foreground">{key}</h3>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-muted-foreground">
                      {soap[key]}
                    </p>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>

        {/* Editable View */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Edit3 className="h-5 w-5 text-primary" />
              Edit Notes
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-5 pt-0">
            {(["subjective", "objective", "assessment", "plan"] as const).map((key) => (
              <div key={key} className="flex flex-col gap-2">
                <label className="text-sm font-semibold capitalize text-foreground">{key}</label>
                <Textarea
                  value={soap[key]}
                  onChange={(e) =>
                    setSoap((prev) => ({ ...prev, [key]: e.target.value }))
                  }
                  rows={4}
                  className="resize-none text-sm"
                />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button onClick={() => setStatus("approved")}>
          <Check className="mr-2 h-4 w-4" />
          Approve Notes
        </Button>
        <Button variant="outline">
          <Save className="mr-2 h-4 w-4" />
          Save to EHR
        </Button>
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Download PDF
        </Button>
      </div>
    </div>
  )
}
