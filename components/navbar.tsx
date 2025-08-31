"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Bell,
  HelpCircle,
  User,
  FolderClosed,
  Search,
  BarChart3,
  Globe2,
  Timer,
  FileText,
  Settings,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";
// import { getSupabaseBrowserClient } from "@/lib/supabase/client";
import { ThemeToggle } from "@/components/theme-toggle"

const links = [
  { href: "/", label: "Dashboard" },
  { href: "/cases", label: "Case Workspace", icon: FolderClosed },
  { href: "/search", label: "Universal Search", icon: Search },
  { href: "/analytics", label: "Analytics & Patterns", icon: BarChart3 },
  { href: "/graph", label: "Graph View", icon: Globe2 },
  { href: "/timeline", label: "Timeline/Heatmap", icon: Timer },
  { href: "/reports", label: "Reports & Export", icon: FileText },
  { href: "/settings", label: "Admin/Settings", icon: Settings },
]


export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);
  // const supabase = getSupabaseBrowserClient();

  // Use Next.js Auth0 logout route
  const logoutUrl = "/api/auth/logout";

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-3 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold">
          <img src="/placeholder-logo.png" alt="TraceNet Logo" className="size-6 rounded bg-primary" style={{objectFit: 'cover'}} />
          <span className="text-balance">TRACE-NET</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => {
            const Icon = l.icon;
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                  active
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground",
                )}
              >
                {Icon ? <Icon className="size-4" aria-hidden /> : null}
                <span className="text-pretty">{l.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-1 relative">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <Bell className="size-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Help and documentation">
            <HelpCircle className="size-5" />
          </Button>
          <ThemeToggle />
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              aria-label="User profile"
              onClick={() => setMenuOpen((v) => !v)}
              onBlur={() => setTimeout(() => setMenuOpen(false), 150)}
            >
              <User className="size-5" />
            </Button>
            {/* Profile dropdown with Auth0 logout */}
            {menuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                <a
                  href={logoutUrl}
                  className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800 w-full text-left"
                >
                  Log out
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile quick nav */}
      <div className="flex w-full gap-2 overflow-x-auto border-t px-3 py-2 md:hidden">
        {links.slice(1).map((l) => {
          const Icon = l.icon;
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                "inline-flex shrink-0 items-center gap-1 rounded-md px-3 py-2 text-xs",
                active ? "bg-secondary text-foreground" : "text-muted-foreground hover:bg-muted hover:text-foreground",
              )}
            >
              {Icon ? <Icon className="size-4" aria-hidden /> : null}
              <span>{l.label}</span>
            </Link>
          );
        })}
      </div>
    </header>
  );
}
