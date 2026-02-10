"use client"

import {
  User,
  Shield,
  Link2,
  Bell,
  Globe,
  Database,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function SettingsPage() {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Manage your profile, security, integrations, and preferences.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Profile Settings */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <User className="h-5 w-5 text-primary" />
              Profile Settings
            </CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-5 pt-0">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarFallback className="bg-primary/10 text-lg text-primary">DS</AvatarFallback>
              </Avatar>
              <Button variant="outline" size="sm">
                <Camera className="mr-2 h-4 w-4" />
                Change Photo
              </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <Label htmlFor="settings-fname">First Name</Label>
                <Input id="settings-fname" defaultValue="David" />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="settings-lname">Last Name</Label>
                <Input id="settings-lname" defaultValue="Smith" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="settings-spec">Specialization</Label>
              <Input id="settings-spec" defaultValue="Ophthalmology" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="settings-hospital">Hospital</Label>
              <Input id="settings-hospital" defaultValue="MediCare Eye Center" />
            </div>
            <Button className="self-start">Save Changes</Button>
          </CardContent>
        </Card>

        {/* Security Settings */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Shield className="h-5 w-5 text-primary" />
              Security Settings
            </CardTitle>
            <CardDescription>Manage password and authentication</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-5 pt-0">
            <div className="flex flex-col gap-2">
              <Label htmlFor="current-pw">Current Password</Label>
              <Input id="current-pw" type="password" placeholder="Enter current password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="new-pw">New Password</Label>
              <Input id="new-pw" type="password" placeholder="Enter new password" />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="confirm-pw">Confirm Password</Label>
              <Input id="confirm-pw" type="password" placeholder="Confirm new password" />
            </div>

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Two-Factor Authentication</p>
                <p className="text-xs text-muted-foreground">Add an extra layer of security</p>
              </div>
              <Switch />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Logout All Devices</p>
                <p className="text-xs text-muted-foreground">Sign out from all active sessions</p>
              </div>
              <Button variant="outline" size="sm">Logout All</Button>
            </div>

            <Button className="self-start">Update Password</Button>
          </CardContent>
        </Card>

        {/* EHR Integration */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Link2 className="h-5 w-5 text-primary" />
              EHR Integration
            </CardTitle>
            <CardDescription>Connect and sync with your Electronic Health Records</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-5 pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Connect EHR System</p>
                <p className="text-xs text-muted-foreground">Sync patient data automatically</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Auto-Sync Notes</p>
                <p className="text-xs text-muted-foreground">Push approved SOAP notes to EHR</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Auto-Save Drafts</p>
                <p className="text-xs text-muted-foreground">Save consultation drafts every 30s</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>

        {/* Notifications */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Bell className="h-5 w-5 text-primary" />
              Notifications
            </CardTitle>
            <CardDescription>Configure your alert preferences</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-5 pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Clinical Alerts</p>
                <p className="text-xs text-muted-foreground">Drug interactions, risk warnings</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Follow-Up Reminders</p>
                <p className="text-xs text-muted-foreground">Patient follow-up notifications</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">SMS Notifications</p>
                <p className="text-xs text-muted-foreground">Receive alerts via text message</p>
              </div>
              <Switch />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Email Notifications</p>
                <p className="text-xs text-muted-foreground">Daily summary and critical alerts</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Language & AI */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Globe className="h-5 w-5 text-primary" />
              Language & AI Preferences
            </CardTitle>
            <CardDescription>Customize language and AI behavior</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-5 pt-0">
            <div className="flex flex-col gap-2">
              <Label>Language</Label>
              <Select defaultValue="en">
                <SelectTrigger>
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
            <div className="flex flex-col gap-2">
              <Label>Note Format</Label>
              <Select defaultValue="soap">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="soap">SOAP Format</SelectItem>
                  <SelectItem value="ehr">EHR Standard</SelectItem>
                  <SelectItem value="custom">Custom Template</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Voice AI Assistant</p>
                <p className="text-xs text-muted-foreground">Enable voice commands and transcription</p>
              </div>
              <Switch defaultChecked />
            </div>
          </CardContent>
        </Card>

        {/* Data & Privacy */}
        <Card className="border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="flex items-center gap-2 text-base">
              <Database className="h-5 w-5 text-primary" />
              Data & Privacy
            </CardTitle>
            <CardDescription>Control your data and privacy settings</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-5 p-5 pt-0">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Consent Management</p>
                <p className="text-xs text-muted-foreground">Manage patient data consent records</p>
              </div>
              <Button variant="outline" size="sm">Manage</Button>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-foreground">Data Backup</p>
                <p className="text-xs text-muted-foreground">Last backup: Feb 10, 2026</p>
              </div>
              <Button variant="outline" size="sm">Backup Now</Button>
            </div>

            <Separator />

            <div className="flex gap-3">
              <Button variant="outline" size="sm">
                <Database className="mr-2 h-4 w-4" />
                Download My Data
              </Button>
              <Button variant="outline" size="sm" className="text-destructive hover:text-destructive bg-transparent">
                Delete Account
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
