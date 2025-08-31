import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function AnalyticsPage() {
  const rules = ["Late-night fan-out", "Bursty sessions", "Rendezvous"]

  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Analytics & Patterns</h1>
        <p className="text-sm text-muted-foreground">Toggle rules and visualize patterns.</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Suspicion rules</CardTitle>
            <CardDescription>Enable/disable analytics rules</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            {rules.map((r) => (
              <div key={r} className="flex items-center gap-2">
                <Switch id={r} />
                <Label htmlFor={r}>{r}</Label>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pattern visualization</CardTitle>
            <CardDescription>ApexCharts placeholder</CardDescription>
          </CardHeader>
          <CardContent>
            {/* Static demo chart */}
            <div className="h-64 rounded bg-muted flex flex-col items-center justify-center text-xs text-muted-foreground">
              <div>Pattern Chart:</div>
              <svg width="120" height="40">
                <rect x="10" y="20" width="20" height="10" fill="#38bdf8" />
                <rect x="40" y="10" width="20" height="20" fill="#fbbf24" />
                <rect x="70" y="25" width="20" height="5" fill="#22d3ee" />
                <rect x="100" y="5" width="20" height="30" fill="#f87171" />
              </svg>
              <div>Rules triggered: 4</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
