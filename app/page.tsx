// app/page.tsx (or another route)
import { UploadPanel } from "@/components/upload-panel"
import { QuickFilters } from "@/components/quick-filters"
import { SuspicionCards } from "@/components/suspicion-cards"
import { SystemHealth } from "@/components/system-health"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { getSupabaseServerClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"

// ✅ Page is async server component
export default async function DashboardPage() {
  // Removed Supabase session check and redirect to /login

  // Try to fetch recent cases from Supabase, fallback to static sample data
  let recentCases: { id: string; name: string; updated_at: string }[] = []
  try {
    const supabase = await getSupabaseServerClient()
    const { data, error } = await supabase
      .from('cases')
      .select('id, name, updated_at')
      .order('updated_at', { ascending: false })
      .limit(5)
    if (!error && data && data.length > 0) {
      recentCases = data
    } else {
      // fallback to static
      recentCases = [
        { id: '1', name: 'Phishing Investigation', updated_at: '2025-08-30T10:00:00Z' },
        { id: '2', name: 'Insider Threat Review', updated_at: '2025-08-29T15:30:00Z' },
        { id: '3', name: 'Malware Outbreak', updated_at: '2025-08-28T09:45:00Z' },
        { id: '4', name: 'Data Exfiltration', updated_at: '2025-08-27T13:20:00Z' },
        { id: '5', name: 'Suspicious Login', updated_at: '2025-08-26T08:10:00Z' },
      ]
    }
  } catch (e) {
    // fallback to static
    recentCases = [
      { id: '1', name: 'Phishing Investigation', updated_at: '2025-08-30T10:00:00Z' },
      { id: '2', name: 'Insider Threat Review', updated_at: '2025-08-29T15:30:00Z' },
      { id: '3', name: 'Malware Outbreak', updated_at: '2025-08-28T09:45:00Z' },
      { id: '4', name: 'Data Exfiltration', updated_at: '2025-08-27T13:20:00Z' },
      { id: '5', name: 'Suspicious Login', updated_at: '2025-08-26T08:10:00Z' },
    ]
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <UploadPanel />
        </div>
        <SystemHealth />
      </section>

      <QuickFilters />
      <SuspicionCards />

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2">
        {/* Recent cases */}
        <Card>
          <CardHeader>
            <CardTitle>Recent cases</CardTitle>
            <CardDescription>Last 5 updated</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {recentCases.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                No cases available.
              </p>
            ) : (
              recentCases.map((c) => (
                <div
                  key={c.id}
                  className="flex items-center justify-between rounded bg-muted px-3 py-2"
                >
                  <span className="text-sm">{c.name}</span>
                  <span className="text-xs text-muted-foreground">
                    {new Date(c.updated_at).toLocaleString()}
                  </span>
                </div>
              ))
            )}
          </CardContent>
        </Card>

        {/* Highlights */}
        <Card>
          <CardHeader>
            <CardTitle>Highlights</CardTitle>
            <CardDescription>
              Interesting activity across datasets
            </CardDescription>
          </CardHeader>
          <CardContent>
            {/* Try to fetch highlights from Supabase in the future; for now, show static */}
            <ul className="text-sm list-disc pl-4">
              <li>Top alert: <b>Suspicious login</b> from Russia flagged at 03:12 AM.</li>
              <li>Case <b>Phishing Investigation</b> updated 2 hours ago.</li>
              <li>New pattern detected: <b>Bursty sessions</b> in Finance group.</li>
              <li>System health: <b>All services operational</b>.</li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
