"use client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import dynamic from "next/dynamic";

const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function CasesPage() {
  // Entity relationship as a simple bar chart (demo)
  const series = [
    {
      name: "Entities",
      data: [1, 1],
    },
  ];
  const options = {
    chart: { type: 'bar' as const, height: 180, toolbar: { show: false } },
    plotOptions: { bar: { horizontal: false, borderRadius: 6 } },
    xaxis: { categories: ["User", "Domain"], title: { text: "Entity" } },
    yaxis: { min: 0, max: 2, title: { text: "Count" } },
    colors: ["#38bdf8", "#fbbf24"],
    grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
    dataLabels: { enabled: true },
    tooltip: { y: { formatter: (val: number) => `${val}` } },
  };

  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Case Workspace</h1>
        <p className="text-sm text-muted-foreground">
          Manage case details, notes, and datasets. Drag-and-drop entities on the canvas (mock).
        </p>
      </header>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Case details</CardTitle>
            <CardDescription>Title, owner, tags</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-2 text-sm">
            <div><b>Title:</b> Phishing Investigation</div>
            <div><b>Owner:</b> Alice Smith</div>
            <div><b>Tags:</b> phishing, urgent, email</div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Entity canvas</CardTitle>
            <CardDescription>Entities and relationships (ApexCharts demo)</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <ReactApexChart options={options} series={series} type="bar" height={180} />
            <div className="text-xs text-muted-foreground mt-2">User &rarr; Domain (email relationship)</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
