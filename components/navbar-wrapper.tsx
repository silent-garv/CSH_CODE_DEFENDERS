"use client";
import { usePathname } from "next/navigation";
import { Navbar } from "@/components/navbar";

export function NavbarWrapper() {
  // Always show Navbar; login page logic removed
  return <Navbar />;
}
