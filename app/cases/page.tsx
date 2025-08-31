import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CasesPage() {
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
            <Button size="sm" className="self-start">Save</Button>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Entity canvas</CardTitle>
            <CardDescription>Entities and relationships (static demo)</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col items-center justify-center">
            <svg width="320" height="180">
              <circle cx="80" cy="90" r="30" fill="#38bdf8" />
              <circle cx="240" cy="90" r="30" fill="#fbbf24" />
              <line x1="110" y1="90" x2="210" y2="90" stroke="#64748b" strokeWidth="4" />
              <text x="80" y="90" textAnchor="middle" dy=".3em" fill="#fff" fontSize="16">User</text>
              <text x="240" y="90" textAnchor="middle" dy=".3em" fill="#fff" fontSize="16">Domain</text>
            </svg>
            <div className="text-xs text-muted-foreground mt-2">User &rarr; Domain (email relationship)</div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
