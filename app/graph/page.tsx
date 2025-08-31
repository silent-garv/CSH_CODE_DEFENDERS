"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function GraphPage() {
  // Mock network graph as a force-directed chart (using scatter for demo)
  const series = [
    {
      name: "Nodes",
      data: [
        { x: 10, y: 30 },
        { x: 30, y: 80 },
        { x: 60, y: 50 },
        { x: 90, y: 90 },
      ],
    },
  ];
  const options = {
    chart: { type: 'scatter' as const, height: 520, toolbar: { show: false } },
    xaxis: { min: 0, max: 100, tickAmount: 5, title: { text: "X" }, labels: { style: { fontSize: '16px' } } },
    yaxis: { min: 0, max: 100, tickAmount: 5, title: { text: "Y" }, labels: { style: { fontSize: '16px' } } },
    markers: { size: 28, colors: ["#38bdf8", "#fbbf24", "#f87171", "#22d3ee"] },
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
    tooltip: { y: { formatter: (val: number) => `Y: ${val}` } },
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Graph View</h1>
        <p className="text-sm text-muted-foreground">Force-directed mock graph (ApexCharts demo).</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Network graph</CardTitle>
          <CardDescription>Mock force-directed chart (ApexCharts)</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="h-[520px] w-full rounded-md border-2 border-dashed flex flex-col items-center justify-center text-xs text-muted-foreground gap-2">
            <div className="w-full h-full flex items-center justify-center">
              <ReactApexChart options={options} series={series} type="scatter" height={480} width={900} />
            </div>
            <div className="text-base mt-2">Nodes: 4 (demo)</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
