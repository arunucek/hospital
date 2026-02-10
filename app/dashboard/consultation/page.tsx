"use client"

import { useState } from "react"
import {
  Mic,
  MicOff,
  Pause,
  Square,
  RotateCcw,
  Upload,
  FileText,
  AlertTriangle,
  Brain,
  Save,
  X,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { cn } from "@/lib/utils"

export default function ConsultationPage() {
  const [isRecording, setIsRecording] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([])

  const transcriptLines = [
    { speaker: "Doctor", text: "Good morning. What brings you in today?", time: "0:00" },
    { speaker: "Patient", text: "I've been having blurry vision in my right eye for about two weeks now.", time: "0:05" },
    { speaker: "Doctor", text: "Any pain, redness, or discharge?", time: "0:12" },
    { speaker: "Patient", text: "Mild discomfort, especially when reading. No redness.", time: "0:18" },
  ]

  const aiSuggestions = [
    { type: "suggestion", text: "Consider performing a slit-lamp examination to evaluate anterior segment" },
    { type: "warning", text: "Patient has documented allergy to Sulfonamide-based medications" },
    { type: "info", text: "Based on symptoms, differential diagnosis includes: early cataract, refractive error change" },
  ]

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Start Consultation</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Record patient conversations and get real-time AI-powered clinical insights.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Main Recording Panel */}
        <div className="flex flex-col gap-6 lg:col-span-2">
          {/* Voice Recording Card */}
          <Card className="border-border/50">
            <CardContent className="flex flex-col items-center gap-6 p-8">
              {/* Mic Button with Pulse */}
              <div className="relative">
                {isRecording && !isPaused && (
                  <span className="absolute inset-0 animate-pulse-ring rounded-full bg-primary/30" />
                )}
                <button
                  type="button"
                  onClick={() => {
                    setIsRecording(!isRecording)
                    setIsPaused(false)
                  }}
                  className={cn(
                    "relative z-10 flex h-24 w-24 items-center justify-center rounded-full transition-all",
                    isRecording
                      ? "bg-destructive text-destructive-foreground shadow-lg shadow-destructive/30"
                      : "bg-primary text-primary-foreground shadow-lg shadow-primary/30 hover:bg-primary/90"
                  )}
                  aria-label={isRecording ? "Stop recording" : "Start recording"}
                >
                  {isRecording ? (
                    <MicOff className="h-10 w-10" />
                  ) : (
                    <Mic className="h-10 w-10" />
                  )}
                </button>
              </div>

              <div className="text-center">
                <p className="text-lg font-semibold text-foreground">
                  {isRecording ? (isPaused ? "Paused" : "Recording...") : "Ready to Record"}
                </p>
                <p className="text-sm text-muted-foreground">
                  {isRecording ? "03:24" : "Click to start"}
                </p>
              </div>

              {/* Waveform Visualization */}
              <div className="flex h-16 w-full items-center justify-center gap-[3px] rounded-lg bg-secondary/50 px-4">
                {Array.from({ length: 40 }).map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-1 rounded-full transition-all",
                      isRecording && !isPaused ? "bg-primary" : "bg-muted-foreground/20"
                    )}
                    style={{
                      height: isRecording && !isPaused
                        ? `${Math.random() * 100}%`
                        : "20%",
                    }}
                  />
                ))}
              </div>

              {/* Controls */}
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  disabled={!isRecording}
                  onClick={() => setIsPaused(!isPaused)}
                  aria-label={isPaused ? "Resume" : "Pause"}
                >
                  <Pause className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  disabled={!isRecording}
                  onClick={() => {
                    setIsRecording(false)
                    setIsPaused(false)
                  }}
                  aria-label="Stop recording"
                >
                  <Square className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => {
                    setIsRecording(false)
                    setIsPaused(false)
                  }}
                  aria-label="Reset session"
                >
                  <RotateCcw className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <Save className="mr-2 h-4 w-4" />
                  Save Draft
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Real-time Transcription */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <FileText className="h-5 w-5 text-primary" />
                Live Transcription
                {isRecording && (
                  <span className="relative ml-2 flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-5 pt-0">
              {transcriptLines.map((line, i) => (
                <div key={i} className="flex gap-3">
                  <Badge
                    variant={line.speaker === "Doctor" ? "default" : "secondary"}
                    className="mt-0.5 h-6 shrink-0 text-[10px]"
                  >
                    {line.speaker}
                  </Badge>
                  <div className="flex-1">
                    <p className="text-sm text-foreground">{line.text}</p>
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{line.time}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Right Panel */}
        <div className="flex flex-col gap-6">
          {/* Upload Panel */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">Upload Reports</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-0">
              <Tabs defaultValue="lab">
                <TabsList className="mb-4 grid w-full grid-cols-2">
                  <TabsTrigger value="lab">Lab Reports</TabsTrigger>
                  <TabsTrigger value="prescription">Prescriptions</TabsTrigger>
                </TabsList>
                <TabsContent value="lab">
                  <div
                    className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border p-6 text-center transition-colors hover:border-primary/50"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      setUploadedFiles((prev) => [...prev, "lab_report.pdf"])
                    }}
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Drag & drop lab reports here</p>
                    <Button variant="outline" size="sm" onClick={() => setUploadedFiles((prev) => [...prev, "lab_report.pdf"])}>
                      Browse Files
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="prescription">
                  <div
                    className="flex flex-col items-center gap-3 rounded-lg border-2 border-dashed border-border p-6 text-center transition-colors hover:border-primary/50"
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={(e) => {
                      e.preventDefault()
                      setUploadedFiles((prev) => [...prev, "prescription.pdf"])
                    }}
                  >
                    <Upload className="h-8 w-8 text-muted-foreground" />
                    <p className="text-sm text-muted-foreground">Drag & drop prescriptions here</p>
                    <Button variant="outline" size="sm" onClick={() => setUploadedFiles((prev) => [...prev, "prescription.pdf"])}>
                      Browse Files
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>

              {uploadedFiles.length > 0 && (
                <div className="mt-4 flex flex-col gap-2">
                  {uploadedFiles.map((file, i) => (
                    <div key={i} className="flex items-center gap-2 rounded-lg bg-secondary/50 px-3 py-2 text-sm">
                      <FileText className="h-4 w-4 text-primary" />
                      <span className="flex-1 truncate text-foreground">{file}</span>
                      <button
                        type="button"
                        onClick={() => setUploadedFiles((prev) => prev.filter((_, idx) => idx !== i))}
                        className="text-muted-foreground hover:text-foreground"
                        aria-label="Remove file"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>

          {/* AI Suggestions Panel */}
          <Card className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center gap-2 text-base">
                <Brain className="h-5 w-5 text-primary" />
                AI Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-3 p-5 pt-0">
              {aiSuggestions.map((s, i) => (
                <div
                  key={i}
                  className={cn(
                    "rounded-lg border p-3",
                    s.type === "warning"
                      ? "border-destructive/30 bg-destructive/5"
                      : s.type === "suggestion"
                        ? "border-primary/30 bg-primary/5"
                        : "border-accent/30 bg-accent/5"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {s.type === "warning" ? (
                      <AlertTriangle className="h-4 w-4 text-destructive" />
                    ) : (
                      <Brain className="h-4 w-4 text-primary" />
                    )}
                    <p className={cn(
                      "text-xs font-semibold uppercase",
                      s.type === "warning" ? "text-destructive" : "text-primary"
                    )}>
                      {s.type}
                    </p>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{s.text}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
