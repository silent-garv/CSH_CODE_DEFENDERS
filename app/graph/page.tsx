import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function GraphPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Graph View</h1>
        <p className="text-sm text-muted-foreground">Force-directed mock graph with node actions.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Network graph</CardTitle>
          <CardDescription>Mock canvas (integrate d3/react-force-graph later)</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          {/* Complex static graph with multiple nodes and edges */}
          <div className="h-80 rounded-md border-2 border-dashed flex flex-col items-center justify-center text-xs text-muted-foreground gap-2">
            <div>Sample Network Graph:</div>
            <svg width="400" height="200">
              {/* Edges */}
              <line x1="200" y1="50" x2="100" y2="100" stroke="#94a3b8" strokeWidth="3" />
              <line x1="200" y1="50" x2="300" y2="100" stroke="#94a3b8" strokeWidth="3" />
              <line x1="100" y1="100" x2="200" y2="150" stroke="#94a3b8" strokeWidth="3" />
              <line x1="300" y1="100" x2="200" y2="150" stroke="#94a3b8" strokeWidth="3" />
              <line x1="100" y1="100" x2="300" y2="100" stroke="#94a3b8" strokeWidth="2" strokeDasharray="4 2" />
              {/* Nodes */}
              <circle cx="200" cy="50" r="22" fill="#38bdf8" />
              <circle cx="100" cy="100" r="18" fill="#fbbf24" />
              <circle cx="300" cy="100" r="18" fill="#f87171" />
              <circle cx="200" cy="150" r="18" fill="#22d3ee" />
              {/* Node labels */}
              <text x="200" y="50" textAnchor="middle" dy=".3em" fill="#fff" fontSize="14">Gateway</text>
              <text x="100" y="100" textAnchor="middle" dy=".3em" fill="#fff" fontSize="13">User A</text>
              <text x="300" y="100" textAnchor="middle" dy=".3em" fill="#fff" fontSize="13">User B</text>
              <text x="200" y="150" textAnchor="middle" dy=".3em" fill="#fff" fontSize="13">Server</text>
            </svg>
            <div>Gateway connects User A, User B, and Server. Dashed line: User A &rarr; User B.</div>
          </div>
          <div className="flex gap-2">
            <Button size="sm" variant="secondary">
              Expand neighbors
            </Button>
            <Button size="sm">Add to notes</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
