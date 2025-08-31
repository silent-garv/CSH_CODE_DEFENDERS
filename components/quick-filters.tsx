"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function QuickFilters() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick filters</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" placeholder="+1 555 123 4567" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="ip">IP</Label>
          <Input id="ip" placeholder="93.184.216.34" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="date">Date</Label>
          <Input id="date" type="date" />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="app">Application</Label>
          <Select>
            <SelectTrigger id="app">
              <SelectValue placeholder="Any" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="any">Any</SelectItem>
              <SelectItem value="whatsapp">WhatsApp</SelectItem>
              <SelectItem value="telegram">Telegram</SelectItem>
              <SelectItem value="http">HTTP</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-full text-xs text-muted-foreground mt-2">
          USP: Real-time filtering across phone, IP, date, and app. Compatible with global telecom and cloud datasets.
        </div>
      </CardContent>
    </Card>
  )
}
