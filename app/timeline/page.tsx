import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function TimelinePage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Timeline & Heatmap</h1>
        <p className="text-sm text-muted-foreground">Events over time and activity by hour/day.</p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Timeline</CardTitle>
            <CardDescription>Horizontal bar chart placeholder</CardDescription>
          </CardHeader>
          <CardContent>
            {/* More complex static timeline */}
            <div className="h-64 rounded bg-muted flex flex-col items-center justify-center text-xs text-muted-foreground">
              <div>Timeline (last 24h):</div>
              <svg width="320" height="60">
                <rect x="10" y="40" width="30" height="10" fill="#38bdf8" />
                <rect x="50" y="20" width="30" height="30" fill="#fbbf24" />
                <rect x="90" y="45" width="30" height="5" fill="#22d3ee" />
                <rect x="130" y="10" width="30" height="50" fill="#f87171" />
                <rect x="170" y="30" width="30" height="20" fill="#a3e635" />
                <rect x="210" y="35" width="30" height="15" fill="#f472b6" />
                <rect x="250" y="25" width="30" height="25" fill="#818cf8" />
                <rect x="290" y="40" width="20" height="10" fill="#facc15" />
              </svg>
              <div>Events: 8</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Heatmap</CardTitle>
            <CardDescription>Hour x Day grid placeholder</CardDescription>
          </CardHeader>
          <CardContent>
            {/* More complex static heatmap */}
            <div className="h-64 rounded bg-muted flex flex-col items-center justify-center text-xs text-muted-foreground">
              <div>Heatmap (hour x day):</div>
              <svg width="180" height="80">
                {/* 5x4 grid */}
                <rect x="10" y="10" width="25" height="15" fill="#fbbf24" />
                <rect x="40" y="10" width="25" height="15" fill="#38bdf8" />
                <rect x="70" y="10" width="25" height="15" fill="#f87171" />
                <rect x="100" y="10" width="25" height="15" fill="#22d3ee" />
                <rect x="130" y="10" width="25" height="15" fill="#a3e635" />
                <rect x="10" y="30" width="25" height="15" fill="#818cf8" />
                <rect x="40" y="30" width="25" height="15" fill="#facc15" />
                <rect x="70" y="30" width="25" height="15" fill="#f472b6" />
                <rect x="100" y="30" width="25" height="15" fill="#38bdf8" />
                <rect x="130" y="30" width="25" height="15" fill="#f87171" />
                <rect x="10" y="50" width="25" height="15" fill="#22d3ee" />
                <rect x="40" y="50" width="25" height="15" fill="#fbbf24" />
                <rect x="70" y="50" width="25" height="15" fill="#a3e635" />
                <rect x="100" y="50" width="25" height="15" fill="#818cf8" />
                <rect x="130" y="50" width="25" height="15" fill="#f472b6" />
                <rect x="10" y="70" width="25" height="15" fill="#f87171" />
                <rect x="40" y="70" width="25" height="15" fill="#22d3ee" />
                <rect x="70" y="70" width="25" height="15" fill="#facc15" />
                <rect x="100" y="70" width="25" height="15" fill="#38bdf8" />
                <rect x="130" y="70" width="25" height="15" fill="#fbbf24" />
              </svg>
              <div>Peak: 2PM Wed, 8AM Thu</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
