"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function TimelinePage() {
  // Timeline bar chart data
  const timelineSeries = [
    {
      name: "Events",
      data: [8, 12, 6, 14, 10, 7, 9, 11],
    },
  ];
  const timelineOptions = {
    chart: { type: 'bar' as const, height: 220, toolbar: { show: false } },
    plotOptions: { bar: { horizontal: true, borderRadius: 4 } },
    xaxis: { categories: ["00-03h", "03-06h", "06-09h", "09-12h", "12-15h", "15-18h", "18-21h", "21-24h"], title: { text: "Time Window" } },
    yaxis: { title: { text: "Event Count" } },
    colors: ["#38bdf8"],
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
    dataLabels: { enabled: true },
    tooltip: { y: { formatter: (val: number) => `${val} events` } },
  };

  // Heatmap data
  const heatmapSeries = [
    {
      name: "Mon",
      data: [2, 4, 3, 5, 1],
    },
    {
      name: "Tue",
      data: [3, 2, 5, 4, 2],
    },
    {
      name: "Wed",
      data: [4, 3, 2, 1, 5],
    },
    {
      name: "Thu",
      data: [1, 5, 4, 2, 3],
    },
    {
      name: "Fri",
      data: [5, 1, 2, 3, 4],
    },
  ];
  const heatmapOptions = {
    chart: { type: 'heatmap' as const, height: 220, toolbar: { show: false } },
    dataLabels: { enabled: false },
    xaxis: { categories: ["0-6h", "6-12h", "12-18h", "18-24h", "Other"] },
    colors: ["#fbbf24", "#38bdf8", "#f87171", "#22d3ee", "#a3e635"],
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
    legend: { show: false },
    tooltip: { y: { formatter: (val: number) => `${val} events` } },
  };

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
            <CardDescription>Events in the last 24h (ApexCharts)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 rounded bg-muted flex flex-col items-center justify-center text-xs text-muted-foreground">
              <ReactApexChart options={timelineOptions} series={timelineSeries} type="bar" height={220} />
              <div className="mt-2 text-sm text-center">Total events: {timelineSeries[0].data.reduce((a, b) => a + b, 0)}</div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Heatmap</CardTitle>
            <CardDescription>Hour x Day grid (ApexCharts)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-64 rounded bg-muted flex flex-col items-center justify-center text-xs text-muted-foreground">
              <ReactApexChart options={heatmapOptions} series={heatmapSeries} type="heatmap" height={220} />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
