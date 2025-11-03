"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface AnnouncementBarProps {
  language: "en" | "ne"
}

export default function AnnouncementBar({ language }: AnnouncementBarProps) {
  const [dismissed, setDismissed] = useState(false)

  const announcement =
    language === "en"
      ? "Ninja Insights 2025: A quiet guide to decisive leadership."
      : "Ninja Insights 2025: निर्णायक नेतृत्वका लागि शान्त मार्गदर्शक।"

  useEffect(() => {
    const isDismissed = localStorage.getItem("ni-announcement-dismissed")
    if (isDismissed) setDismissed(true)
  }, [])

  const handleDismiss = () => {
    setDismissed(true)
    localStorage.setItem("ni-announcement-dismissed", "true")
  }

  if (dismissed) return null

  return (
    <div
      className="fixed top-[72px] left-0 right-0 z-40 bg-[#000000] text-white"
      role="region"
      aria-label="Announcement"
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-center py-3 relative">
          <p className="text-sm text-balance flex-1 text-center">{announcement}</p>
          <button
            onClick={handleDismiss}
            className="flex items-center justify-center p-1 hover:bg-white/10 transition-colors absolute right-0 top-1/2 -translate-y-1/2"
            aria-label="Dismiss announcement"
            style={{ minWidth: "44px", minHeight: "44px" }}
          >
            <X size={20} />
          </button>
          </div>
      </div>
    </div>
  )
}

