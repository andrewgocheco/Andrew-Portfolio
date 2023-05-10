"use client"
import "../styles/globals.css"
import Footer from "@/components/Footer"
import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body className="dark:bg-darkblack">
        <ThemeProvider enableSystem={true} attribute="class">
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
