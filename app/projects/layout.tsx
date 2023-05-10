"use client"
import ProjectNav from "@/components/ProjectNav"
import { ThemeProvider } from "next-themes"

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <main className="dark:bg-darkblack">
        <ThemeProvider enableSystem={true} attribute="class">
          <ProjectNav />
          {children}
        </ThemeProvider>
      </main>
  )
}
