"use client"

import type React from "react"

import { useCallback, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"
import { useToast } from "@/hooks/use-toast"
import { Upload } from "lucide-react"

export function UploadPanel() {
  const [file, setFile] = useState<File | null>(null)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()

  const onSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0]
    if (f) setFile(f)
  }, [])

  const onUpload = useCallback(async () => {
    if (!file) {
      toast({ title: "No file selected", description: "Please choose a CSV or JSON file." })
      return
    }
    setLoading(true)
    try {
      const supabase = getSupabaseBrowserClient()
      const path = `uploads/${Date.now()}-${file.name}`
      // Note: Ensure a bucket named "trace-uploads" exists in Supabase Storage.
      const { error } = await supabase.storage.from("trace-uploads").upload(path, file, {
        cacheControl: "3600",
        upsert: false,
      })
      if (error) throw error
      toast({ title: "Upload complete", description: `Stored as ${path}` })
      setFile(null)
    } catch (err) {
      toast({ title: "Upload failed", description: String(err) })
    } finally {
      setLoading(false)
    }
  }, [file, toast])

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upload traces</CardTitle>
        <CardDescription>CSV or JSON, up to 10MB</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <Input type="file" accept=".csv,.json" onChange={onSelect} />
          <Button onClick={onUpload} disabled={loading}>
            <Upload className="mr-2 size-4" /> Upload
          </Button>
        </div>
        {file && <div className="text-xs mt-2">Selected: {file.name}</div>}
        <div className="text-xs text-muted-foreground mt-4">
          USP: Secure, fast, and compliant trace uploads. Compatible with Splunk, Elastic, Azure Sentinel, AWS S3, and more.
        </div>
      </CardContent>
    </Card>
  )
}
