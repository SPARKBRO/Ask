"use client"

import React from "react"
import type { Theme } from "@/contexts/GlobalContext"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getThemeButtonStyle } from '@/utils/theme-utils'

const noButtonTexts = [
  "No",
  "Are you sure?",
  "Please?",
  "Really?",
  "Think again!",
  "Last chance!",
  "Okay, fine...",
  "😢",
  "💔",
  "😿",
]

interface NoButtonProps {
  onClick: () => void
  theme: Theme
}

export const NoButton: React.FC<NoButtonProps> = ({ onClick, theme }) => {
  const [noClickCount, setNoClickCount] = React.useState(0)

  const handleNoClick = () => {
    setNoClickCount((prevCount) => (prevCount + 1) % noButtonTexts.length)
    onClick()
  }

  return (
    <Button
      className={cn(
        "font-bold shadow-lg cursor-pointer z-10",
        getThemeButtonStyle(theme, "no")
      )}
      style={{
        height: "50px",
        fontSize: "16px",
        transition: "all 0.3s ease-in-out"
      }}
      onClick={handleNoClick}
    >
      {noButtonTexts[noClickCount]}
    </Button>
  )
}