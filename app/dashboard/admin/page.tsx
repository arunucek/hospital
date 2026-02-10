"use client"

import { useState } from "react"
import {
  Users,
  Plus,
  MoreHorizontal,
  BarChart3,
  CheckCircle,
  XCircle,
  Download,
  Search,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const doctors = [
  { id: 1, name: "Dr. Sarah Mitchell", specialty: "Cataract Surgery", status: "active", patients: 234, lastActive: "2 min ago" },
  { id: 2, name: "Dr. James Chen", specialty: "Cornea", status: "active", patients: 189, lastActive: "15 min ago" },
  { id: 3, name: "Dr. Priya Sharma", specialty: "Glaucoma", status: "active", patients: 312, lastActive: "1 hour ago" },
  { id: 4, name: "Dr. Michael Torres", specialty: "Retina", status: "inactive", patients: 156, lastActive: "3 days ago" },
  { id: 5, name: "Dr. Emily Park", specialty: "Pediatric Ophth.", status: "active", patients: 98, lastActive: "30 min ago" },
]

const stats = [
  { title: "Total Doctors", value: "52", icon: Users, color: "text-primary", bg: "bg-primary/10" },
  { title: "Active Today", value: "38", icon: CheckCircle, color: "text-primary", bg: "bg-primary/10" },
  { title: "Total Patients", value: "2,481", icon: BarChart3, color: "text-accent", bg: "bg-accent/10" },
  { title: "EHR Connected", value: "94%", icon: CheckCircle, color: "text-primary", bg: "bg-primary/10" },
]

export default function AdminPage() {
  const [searchQuery, setSearchQuery] = useState("")

  const filteredDoctors = doctors.filter((d) =>
    d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    d.specialty.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Admin Panel</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage doctors, monitor hospital performance, and configure integrations.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <Card key={s.title} className="border-border/50">
            <CardContent className="flex items-center gap-4 p-5">
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${s.bg}`}>
                <s.icon className={`h-5 w-5 ${s.color}`} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">{s.title}</p>
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Doctor Management */}
      <Card className="border-border/50">
        <CardHeader className="flex flex-col gap-4 pb-3 sm:flex-row sm:items-center sm:justify-between">
          <CardTitle className="text-base font-semibold text-foreground">Doctor Management</CardTitle>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search doctors..."
                className="h-9 w-60 pl-9 bg-secondary border-0"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Dialog>
              <DialogTrigger asChild>
                <Button size="sm">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Doctor
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Add New Doctor</DialogTitle>
                  <DialogDescription>
                    Enter the doctor details to add them to the system.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="doctor-name">Full Name</Label>
                    <Input id="doctor-name" placeholder="Dr. Jane Doe" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="doctor-specialty">Specialty</Label>
                    <Select>
                      <SelectTrigger id="doctor-specialty">
                        <SelectValue placeholder="Select specialty" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="cataract">Cataract Surgery</SelectItem>
                        <SelectItem value="cornea">Cornea</SelectItem>
                        <SelectItem value="glaucoma">Glaucoma</SelectItem>
                        <SelectItem value="retina">Retina</SelectItem>
                        <SelectItem value="pediatric">Pediatric Ophthalmology</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="doctor-email">Email</Label>
                    <Input id="doctor-email" type="email" placeholder="doctor@hospital.com" />
                  </div>
                  <Button className="mt-2">Add Doctor</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Doctor</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Patients</TableHead>
                <TableHead>Last Active</TableHead>
                <TableHead className="w-10" />
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredDoctors.map((doc) => (
                <TableRow key={doc.id}>
                  <TableCell className="font-medium text-foreground">{doc.name}</TableCell>
                  <TableCell className="text-muted-foreground">{doc.specialty}</TableCell>
                  <TableCell>
                    <Badge
                      variant={doc.status === "active" ? "default" : "secondary"}
                      className="flex w-fit items-center gap-1 text-[11px]"
                    >
                      {doc.status === "active" ? (
                        <CheckCircle className="h-3 w-3" />
                      ) : (
                        <XCircle className="h-3 w-3" />
                      )}
                      {doc.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right text-muted-foreground">{doc.patients}</TableCell>
                  <TableCell className="text-muted-foreground">{doc.lastActive}</TableCell>
                  <TableCell>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreHorizontal className="h-4 w-4" />
                          <span className="sr-only">Actions</span>
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Edit</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Export */}
      <div className="flex gap-3">
        <Button variant="outline">
          <Download className="mr-2 h-4 w-4" />
          Export Reports
        </Button>
        <Button variant="outline">
          <BarChart3 className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
      </div>
    </div>
  )
}
