import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function SettingsPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Admin / Settings</h1>
        <p className="text-sm text-muted-foreground">Parser catalog, retention, PII controls, audits, roles.</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Parser catalog</CardTitle>
            <CardDescription>From Supabase table (placeholder)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground list-disc pl-4">
              <li>Parser: CSV Ingestor (Active)</li>
              <li>Parser: JSON Normalizer (Active)</li>
              <li>Parser: PCAP Decoder (Inactive)</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>PII controls</CardTitle>
            <CardDescription>Mask rules</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <Switch id="mask-phone" />
              <Label htmlFor="mask-phone">Mask phone numbers</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="mask-ip" />
              <Label htmlFor="mask-ip">Mask IP addresses</Label>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Retention schedules</CardTitle>
            <CardDescription>Configure retention (mock)</CardDescription>
          </CardHeader>
          <CardContent className="flex gap-2">
            <Input type="number" placeholder="Days" className="max-w-[200px]" />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Audit viewer</CardTitle>
            <CardDescription>From Supabase logs (placeholder)</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="text-xs text-muted-foreground list-disc pl-4">
              <li>Audit: User admin@acme.com changed retention policy (2025-08-30)</li>
              <li>Audit: Parser catalog updated (2025-08-29)</li>
              <li>Audit: PII mask enabled (2025-08-28)</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
