import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function SystemHealth() {
  const items = [
    { label: "Ingest queue", value: "OK" },
    { label: "Parsing jobs", value: "2 running" },
    { label: "Realtime", value: "Connected" },
    { label: "Storage", value: "65% used" },
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle>System health</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-3">
        {items.map((it) => (
          <div key={it.label} className="flex items-center justify-between rounded-md bg-muted px-3 py-2">
            <span className="text-sm text-muted-foreground">{it.label}</span>
            <span className="text-sm font-medium">{it.value}</span>
          </div>
        ))}
        <div className="col-span-full text-xs text-muted-foreground mt-2">
          USP: Live system health, auto-scaling, and high-availability. Compatible with AWS, Azure, and GCP.
        </div>
      </CardContent>
    </Card>
  )
}
