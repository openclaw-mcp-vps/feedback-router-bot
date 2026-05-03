import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "FeedbackRouter — Route customer feedback to the right team automatically",
  description: "AI analyzes support tickets and feedback, auto-tags and routes to product, engineering, or sales teams instantly."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="1eb3df9c-e59f-433f-98cd-cca14bfe13b0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
