"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const cards = [
  { title: "Late-night fan-out", desc: "Unusual outbound spikes between 1–4 AM." },
  { title: "Bursty sessions", desc: "Rapid short connections potentially masking exfil." },
  { title: "Rendezvous", desc: "Periodic connections to the same peers." },
];

const miniCharts = [
  // Line chart for Late-night fan-out
  {
    options: {
      chart: { type: 'line' as const, sparkline: { enabled: true } },
      stroke: { curve: 'smooth' as const, width: 3 },
      colors: ["#38bdf8"],
      markers: { size: 4 },
      tooltip: { enabled: false },
    },
    series: [{ data: [2, 6, 4, 7, 5, 6, 4] }],
    type: 'line' as const,
  },
  // Bar chart for Bursty sessions
  {
    options: {
      chart: { type: 'bar' as const, sparkline: { enabled: true } },
      plotOptions: { bar: { columnWidth: '40%', borderRadius: 3 } },
      colors: ["#fbbf24", "#f87171", "#22d3ee"],
      tooltip: { enabled: false },
    },
    series: [{ data: [3, 7, 5] }],
    type: 'bar' as const,
  },
  // Scatter chart for Rendezvous
  {
    options: {
      chart: { type: 'scatter' as const, sparkline: { enabled: true } },
      xaxis: { min: 0, max: 2, labels: { show: false } },
      yaxis: { min: 0, max: 2, labels: { show: false } },
      markers: { size: 8, colors: ["#38bdf8", "#fbbf24"] },
      tooltip: { enabled: false },
      grid: { show: false },
    },
    series: [{ data: [ [0.5, 1], [1.5, 1] ] }],
    type: 'scatter' as const,
  },
];

export function SuspicionCards() {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {cards.map((c, i) => (
        <Card key={c.title}>
          <CardHeader>
            <CardTitle className="text-base">{c.title}</CardTitle>
            <CardDescription>{c.desc}</CardDescription>
          </CardHeader>
          <CardContent className="flex items-center justify-center">
            <div className="w-[120px] h-[40px]">
              <ReactApexChart options={miniCharts[i].options} series={miniCharts[i].series} type={miniCharts[i].type} height={40} width={120} />
            </div>
          </CardContent>
        </Card>
      ))}
      <div className="col-span-full text-xs text-muted-foreground mt-2">
        USP: AI-driven anomaly detection, 24/7 monitoring, and instant alerting. Compatible with enterprise SIEMs.
      </div>
    </div>
  )
}
