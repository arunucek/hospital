import {
  CalendarDays,
  Users,
  Activity,
  TrendingUp,
  Clock,
  ArrowUpRight,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const statsCards = [
  {
    title: "Today's Appointments",
    value: "12",
    change: "+2 from yesterday",
    icon: CalendarDays,
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    title: "Active Patients",
    value: "148",
    change: "+5 this week",
    icon: Users,
    color: "text-accent",
    bg: "bg-accent/10",
  },
  {
    title: "AI Alerts",
    value: "3",
    change: "2 critical",
    icon: Activity,
    color: "text-destructive",
    bg: "bg-destructive/10",
  },
  {
    title: "Consultations",
    value: "87",
    change: "+12% this month",
    icon: TrendingUp,
    color: "text-primary",
    bg: "bg-primary/10",
  },
]

const appointments = [
  { name: "Maria Johnson", time: "9:00 AM", type: "Cataract Consult", initials: "MJ", status: "Confirmed" },
  { name: "Robert Chen", time: "10:30 AM", type: "LASIK Follow-up", initials: "RC", status: "Confirmed" },
  { name: "Susan Williams", time: "11:15 AM", type: "Glaucoma Check", initials: "SW", status: "Pending" },
  { name: "James Brown", time: "2:00 PM", type: "Retina Exam", initials: "JB", status: "Confirmed" },
  { name: "Emily Davis", time: "3:30 PM", type: "Cornea Evaluation", initials: "ED", status: "Pending" },
]

const recentConsultations = [
  { patient: "Anna Lee", note: "Post-op cataract review - IOL stable", time: "2 hours ago" },
  { patient: "Tom Garcia", note: "LASIK pre-op assessment complete", time: "4 hours ago" },
  { patient: "Lisa Wang", note: "Glaucoma IOP monitoring - within range", time: "Yesterday" },
]

export default function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Good morning, Dr. Smith</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {"Here's an overview of your schedule and patient activity."}
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statsCards.map((card) => (
          <Card key={card.title} className="border-border/50">
            <CardContent className="flex items-start gap-4 p-5">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.bg}`}>
                <card.icon className={`h-5 w-5 ${card.color}`} />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">{card.title}</p>
                <p className="mt-0.5 text-2xl font-bold text-foreground">{card.value}</p>
                <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                  <ArrowUpRight className="h-3 w-3 text-primary" />
                  {card.change}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        {/* Appointments */}
        <Card className="border-border/50 lg:col-span-3">
          <CardHeader className="flex flex-row items-center justify-between pb-3">
            <CardTitle className="text-base font-semibold text-foreground">
              {"Today's Appointments"}
            </CardTitle>
            <Badge variant="secondary" className="text-xs">
              {appointments.length} total
            </Badge>
          </CardHeader>
          <CardContent className="flex flex-col gap-3 p-5 pt-0">
            {appointments.map((apt) => (
              <div
                key={apt.name}
                className="flex items-center gap-4 rounded-lg border border-border/50 bg-secondary/30 p-3"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-primary/10 text-sm text-primary">
                    {apt.initials}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <p className="text-sm font-medium text-foreground">{apt.name}</p>
                  <p className="text-xs text-muted-foreground">{apt.type}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-sm text-foreground">
                    <Clock className="h-3.5 w-3.5 text-muted-foreground" />
                    {apt.time}
                  </div>
                  <Badge
                    variant={apt.status === "Confirmed" ? "default" : "secondary"}
                    className="mt-1 text-[10px]"
                  >
                    {apt.status}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Consultations */}
        <Card className="border-border/50 lg:col-span-2">
          <CardHeader className="pb-3">
            <CardTitle className="text-base font-semibold text-foreground">
              Recent Consultations
            </CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col gap-4 p-5 pt-0">
            {recentConsultations.map((c) => (
              <div key={c.patient} className="flex flex-col gap-1 border-b border-border/50 pb-3 last:border-0 last:pb-0">
                <p className="text-sm font-medium text-foreground">{c.patient}</p>
                <p className="text-xs text-muted-foreground">{c.note}</p>
                <p className="text-[11px] text-muted-foreground/60">{c.time}</p>
              </div>
            ))}

            {/* AI Alerts Preview */}
            <div className="mt-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3">
              <div className="flex items-center gap-2">
                <Activity className="h-4 w-4 text-destructive" />
                <p className="text-xs font-semibold text-destructive">AI Alert</p>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                Drug interaction detected for patient Maria Johnson: Timolol + Verapamil combination requires review.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
