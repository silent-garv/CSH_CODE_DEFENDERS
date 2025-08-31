import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SearchPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Universal Search</h1>
        <p className="text-sm text-muted-foreground">Search entities, sessions, patterns, or past cases.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Search</CardTitle>
          <CardDescription>Operator, source, and query</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <Input placeholder="e.g., phone:+15551234567 AND ip:93.184.216.34" />
          {/* Simple bar chart for search activity */}
          {typeof window !== 'undefined' && (
            (() => {
              const ReactApexChart = require("react-apexcharts").default;
              const options = {
                chart: { type: 'bar', height: 60, toolbar: { show: false } },
                plotOptions: { bar: { horizontal: false, borderRadius: 4 } },
                xaxis: { categories: ["Entities", "Sessions", "Patterns", "Cases"] },
                yaxis: { min: 0, max: 5 },
                colors: ["#38bdf8", "#fbbf24", "#22d3ee", "#f87171"],
                grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
                dataLabels: { enabled: true },
              };
              const series = [
                { name: "Searches", data: [2, 4, 3, 1] },
              ];
              return <ReactApexChart options={options} series={series} type="bar" height={60} />;
            })()
          )}
          <Tabs defaultValue="entities" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="entities">Entities</TabsTrigger>
              <TabsTrigger value="sessions">Sessions</TabsTrigger>
              <TabsTrigger value="patterns">Patterns</TabsTrigger>
              <TabsTrigger value="cases">Past Cases</TabsTrigger>
            </TabsList>
            <TabsContent value="entities">
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                <li>Entity: +1 555 123 4567 (User)</li>
                <li>Entity: 93.184.216.34 (IP Address)</li>
              </ul>
            </TabsContent>
            <TabsContent value="sessions">
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                <li>Session: 2025-08-30 10:00 - 10:15 (Active)</li>
                <li>Session: 2025-08-29 09:00 - 09:45 (Closed)</li>
              </ul>
            </TabsContent>
            <TabsContent value="patterns">
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                <li>Pattern: Bursty sessions detected</li>
                <li>Pattern: Late-night fan-out</li>
              </ul>
            </TabsContent>
            <TabsContent value="cases">
              <ul className="text-xs text-muted-foreground list-disc pl-4">
                <li>Case: Phishing Investigation</li>
                <li>Case: Data Exfiltration</li>
              </ul>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
