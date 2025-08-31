
"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import dynamic from "next/dynamic";
import React from "react";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function AnalyticsPage() {
  const rules = ["Late-night fan-out", "Bursty sessions", "Rendezvous"]

  // Example data for a more complex chart
  const series = [
    {
      name: "Late-night fan-out",
      data: [10, 15, 8, 12, 18, 7, 14],
    },
    {
      name: "Bursty sessions",
      data: [5, 7, 12, 9, 6, 11, 8],
    },
    {
      name: "Rendezvous",
      data: [2, 4, 6, 3, 5, 7, 4],
    },
    {
      name: "Other",
      data: [3, 2, 1, 4, 2, 3, 2],
    },
  ];

  const options = {
    chart: {
      type: 'bar' as const,
      height: 300,
      stacked: true,
      toolbar: { show: true },
      zoom: { enabled: true },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        borderRadius: 4,
        dataLabels: { position: 'top' },
      },
    },
    dataLabels: {
      enabled: true,
      offsetY: -20,
      style: { fontSize: '12px', colors: ["#304758"] },
    },
    xaxis: {
      categories: [
        "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"
      ],
      title: { text: "Day of Week" },
    },
    yaxis: {
      title: { text: "Events Detected" },
    },
    legend: {
      position: 'bottom' as const,
      horizontalAlign: 'center' as const,
      offsetY: 8,
    },
    tooltip: {
      y: {
        formatter: (val: number) => `${val} events`,
      },
    },
    colors: ["#38bdf8", "#fbbf24", "#22d3ee", "#f87171"],
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
  };

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
            <CardDescription>Detailed event pattern chart (ApexCharts)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-72 rounded bg-muted flex flex-col items-center justify-center text-xs text-muted-foreground">
              <ReactApexChart options={options} series={series} type="bar" height={260} />
              <div className="mt-2 text-sm text-center">Rules triggered: {series.reduce((acc, s) => acc + s.data.reduce((a, b) => a + b, 0), 0)}</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
