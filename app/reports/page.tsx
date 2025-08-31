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
        <CardContent className="flex flex-col gap-4">
          <div>
            <b>Report Summary:</b>
            <ul className="text-xs text-muted-foreground list-disc pl-4 mt-1">
              <li>Cases exported: 5</li>
              <li>Last export: 2025-08-30 10:00</li>
              <li>Format: PDF, CSV, JSON</li>
            </ul>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button variant="secondary" onClick={() => downloadReport('pdf')}>Export PDF</Button>
            <Button variant="secondary" onClick={() => downloadReport('csv')}>Export CSV</Button>
            <Button variant="secondary" onClick={() => downloadReport('json')}>Export JSON</Button>
          </div>
          <div className="flex flex-col items-center justify-center mt-4">
            <div className="text-xs text-muted-foreground mb-1">Export Activity (static demo)</div>
            <svg width="180" height="40">
              <rect x="10" y="20" width="30" height="10" fill="#38bdf8" />
              <rect x="50" y="10" width="30" height="20" fill="#fbbf24" />
              <rect x="90" y="25" width="30" height="5" fill="#22d3ee" />
              <rect x="130" y="5" width="30" height="30" fill="#f87171" />
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
