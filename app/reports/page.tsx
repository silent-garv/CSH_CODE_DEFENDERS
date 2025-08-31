"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"


export default function ReportsPage() {
  function downloadReport(type: 'pdf' | 'csv' | 'json') {
    // Static sample data
    const data = [
      { id: 1, name: 'Phishing Investigation', updated_at: '2025-08-30T10:00:00Z' },
      { id: 2, name: 'Insider Threat Review', updated_at: '2025-08-29T15:30:00Z' },
      { id: 3, name: 'Malware Outbreak', updated_at: '2025-08-28T09:45:00Z' },
      { id: 4, name: 'Data Exfiltration', updated_at: '2025-08-27T13:20:00Z' },
      { id: 5, name: 'Suspicious Login', updated_at: '2025-08-26T08:10:00Z' },
    ];
    let blob: Blob;
    let filename = `cases-report.${type}`;
    if (type === 'json') {
      blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    } else if (type === 'csv') {
      const csv = ['id,name,updated_at', ...data.map(d => `${d.id},${d.name},${d.updated_at}`)].join('\n');
      blob = new Blob([csv], { type: 'text/csv' });
    } else if (type === 'pdf') {
      // Simple PDF as text (for demo); in real app use a PDF library
      const text = `Cases Report\n\n` + data.map(d => `ID: ${d.id}\nName: ${d.name}\nUpdated: ${d.updated_at}\n`).join('\n');
      blob = new Blob([text], { type: 'application/pdf' });
    } else {
      return;
    }
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 100);
  }
  return (
    <div className="mx-auto grid max-w-7xl gap-4">
      <header className="flex flex-col gap-2">
        <h1 className="text-balance text-2xl font-semibold">Reports & Export</h1>
        <p className="text-sm text-muted-foreground">Export case metadata as PDF, CSV, or JSON.</p>
      </header>

      <Card>
        <CardHeader>
          <CardTitle>Exports</CardTitle>
          <CardDescription>Trigger report generation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-8 items-start w-full">
            <div className="flex-1 min-w-[220px]">
              <b>Report Summary:</b>
              <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1">
                <li>Cases exported: 5</li>
                <li>Last export: 2025-08-30 10:00</li>
                <li>Format: PDF, CSV, JSON</li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <Button variant="secondary" onClick={() => downloadReport('pdf')}>Export PDF</Button>
                <Button variant="secondary" onClick={() => downloadReport('csv')}>Export CSV</Button>
                <Button variant="secondary" onClick={() => downloadReport('json')}>Export JSON</Button>
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center w-full">
              <div className="text-xs text-muted-foreground mb-1">Export Activity (ApexCharts demo)</div>
              <div className="w-full max-w-[320px]">
                {/* Larger bar chart for export activity */}
                {typeof window !== 'undefined' && (
                  (() => {
                    const ReactApexChart = require("react-apexcharts").default;
                    const options = {
                      chart: { type: 'bar', height: 120, toolbar: { show: false } },
                      plotOptions: { bar: { horizontal: false, borderRadius: 6, columnWidth: '40%' } },
                      xaxis: { categories: ["PDF", "CSV", "JSON", "Other"], labels: { style: { fontSize: '15px' } } },
                      yaxis: { min: 0, max: 5, labels: { style: { fontSize: '15px' } } },
                      colors: ["#38bdf8", "#fbbf24", "#22d3ee", "#f87171"],
                      grid: { borderColor: '#e5e7eb', strokeDashArray: 4 },
                      dataLabels: { enabled: true, style: { fontSize: '14px' } },
                    };
                    const series = [
                      { name: "Exports", data: [3, 2, 1, 4] },
                    ];
                    return <ReactApexChart options={options} series={series} type="bar" height={120} />;
                  })()
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
