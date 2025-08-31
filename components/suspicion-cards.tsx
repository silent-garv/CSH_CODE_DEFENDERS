import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const cards = [
  { title: "Late-night fan-out", desc: "Unusual outbound spikes between 1–4 AM." },
  { title: "Bursty sessions", desc: "Rapid short connections potentially masking exfil." },
  { title: "Rendezvous", desc: "Periodic connections to the same peers." },
]

export function SuspicionCards() {
  const graphs = [
    // SVG mini-graphs for each card
    (
      <svg width="180" height="40">
        <polyline points="10,30 40,10 70,25 100,15 130,30 170,20" fill="none" stroke="#38bdf8" strokeWidth="3" />
        <circle cx="40" cy="10" r="3" fill="#38bdf8" />
      </svg>
    ),
    (
      <svg width="180" height="40">
        <rect x="20" y="25" width="20" height="10" fill="#fbbf24" />
        <rect x="50" y="10" width="20" height="25" fill="#f87171" />
        <rect x="80" y="20" width="20" height="15" fill="#22d3ee" />
      </svg>
    ),
    (
      <svg width="180" height="40">
        <ellipse cx="90" cy="20" rx="60" ry="15" fill="#64748b" opacity="0.3" />
        <circle cx="30" cy="20" r="5" fill="#38bdf8" />
        <circle cx="150" cy="20" r="5" fill="#fbbf24" />
      </svg>
    ),
  ];
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {cards.map((c, i) => (
        <Card key={c.title}>
          <CardHeader>
            <CardTitle className="text-base">{c.title}</CardTitle>
            <CardDescription>{c.desc}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            {graphs[i]}
          </CardContent>
        </Card>
      ))}
      <div className="col-span-full text-xs text-muted-foreground mt-2">
        USP: AI-driven anomaly detection, 24/7 monitoring, and instant alerting. Compatible with enterprise SIEMs.
      </div>
    </div>
  )
}
