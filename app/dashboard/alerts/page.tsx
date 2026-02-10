"use client"

import { useState } from "react"
import {
  AlertTriangle,
  ShieldAlert,
  BookOpen,
  Check,
  Eye,
  Filter,
  X,
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
import { cn } from "@/lib/utils"

type Alert = {
  id: string
  type: "drug" | "risk" | "guideline"
  severity: "critical" | "warning" | "info"
  title: string
  description: string
  patient: string
  time: string
  dismissed: boolean
}

const initialAlerts: Alert[] = [
  {
    id: "1",
    type: "drug",
    severity: "critical",
    title: "Drug Interaction: Timolol + Verapamil",
    description:
      "Concurrent use may cause excessive bradycardia and AV block. Consider alternative beta-blocker or calcium channel blocker.",
    patient: "Maria Johnson",
    time: "15 min ago",
    dismissed: false,
  },
  {
    id: "2",
    type: "risk",
    severity: "critical",
    title: "Elevated IOP Risk Score",
    description:
      "Patient's IOP trending upward: 18 > 21 > 24 mmHg over 3 visits. Glaucoma progression risk score: 82/100.",
    patient: "Robert Chen",
    time: "1 hour ago",
    dismissed: false,
  },
  {
    id: "3",
    type: "guideline",
    severity: "warning",
    title: "Overdue Retinal Screening",
    description:
      "Per AAO guidelines, diabetic patients should receive annual dilated exam. Last exam: 14 months ago.",
    patient: "Susan Williams",
    time: "3 hours ago",
    dismissed: false,
  },
  {
    id: "4",
    type: "drug",
    severity: "info",
    title: "New Generic Available",
    description:
      "Generic version of Latanoprost now available. Consider switching to reduce patient cost by ~40%.",
    patient: "James Brown",
    time: "Yesterday",
    dismissed: false,
  },
  {
    id: "5",
    type: "risk",
    severity: "warning",
    title: "Post-Op Complication Risk",
    description:
      "Patient has diabetes + high myopia. Elevated risk for posterior capsule opacification after cataract surgery.",
    patient: "Emily Davis",
    time: "Yesterday",
    dismissed: false,
  },
]

const severityColors = {
  critical: "border-destructive/40 bg-destructive/5",
  warning: "border-yellow-500/40 bg-yellow-500/5",
  info: "border-accent/40 bg-accent/5",
}

const severityBadge = {
  critical: "bg-destructive text-destructive-foreground",
  warning: "bg-yellow-500 text-foreground",
  info: "bg-accent text-accent-foreground",
}

const typeIcons = {
  drug: ShieldAlert,
  risk: AlertTriangle,
  guideline: BookOpen,
}

export default function AlertsPage() {
  const [alerts, setAlerts] = useState(initialAlerts)
  const [severityFilter, setSeverityFilter] = useState("all")

  const filtered = alerts.filter((a) => {
    if (severityFilter !== "all" && a.severity !== severityFilter) return false
    return true
  })

  function dismissAlert(id: string) {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, dismissed: true } : a)))
  }

  function acceptSuggestion(id: string) {
    setAlerts((prev) => prev.map((a) => (a.id === id ? { ...a, dismissed: true } : a)))
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Alerts & Decision Support</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            AI-powered clinical alerts, drug interaction warnings, and guideline suggestions.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <Select value={severityFilter} onValueChange={setSeverityFilter}>
            <SelectTrigger className="w-36 h-9">
              <SelectValue placeholder="Filter" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Alerts</SelectItem>
              <SelectItem value="critical">Critical</SelectItem>
              <SelectItem value="warning">Warning</SelectItem>
              <SelectItem value="info">Info</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {filtered.map((alert) => {
          const Icon = typeIcons[alert.type]
          return (
            <Card
              key={alert.id}
              className={cn(
                "border transition-all",
                alert.dismissed ? "opacity-50" : "",
                severityColors[alert.severity]
              )}
            >
              <CardContent className="flex gap-4 p-5">
                <div className="mt-0.5">
                  <Icon
                    className={cn(
                      "h-5 w-5",
                      alert.severity === "critical"
                        ? "text-destructive"
                        : alert.severity === "warning"
                          ? "text-yellow-600"
                          : "text-accent"
                    )}
                  />
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-sm font-semibold text-foreground">{alert.title}</h3>
                    <Badge className={cn("text-[10px]", severityBadge[alert.severity])}>
                      {alert.severity}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {alert.description}
                  </p>
                  <div className="mt-2 flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Patient: {alert.patient}</span>
                    <span>{alert.time}</span>
                  </div>
                  {!alert.dismissed && (
                    <div className="mt-3 flex gap-2">
                      <Button size="sm" variant="outline" onClick={() => acceptSuggestion(alert.id)}>
                        <Check className="mr-1 h-3 w-3" />
                        Accept
                      </Button>
                      <Button size="sm" variant="ghost" onClick={() => dismissAlert(alert.id)}>
                        <X className="mr-1 h-3 w-3" />
                        Dismiss
                      </Button>
                      <Button size="sm" variant="ghost">
                        <Eye className="mr-1 h-3 w-3" />
                        Details
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
