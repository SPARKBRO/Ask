"use client"

import React from "react"
import type { Theme } from "@/contexts/GlobalContext"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { getThemeButtonStyle } from '@/utils/theme-utils'

interface YesButtonProps {
  onClick: () => void
  theme: Theme
  yesButtonScale: number
  isConfirmed: boolean
}

export const YesButton: React.FC<YesButtonProps> = ({
  onClick,
  theme,
  yesButtonScale,
  isConfirmed
}) => {
  const buttonStyle = {
    width: `${100 * yesButtonScale}px`,
    height: `${50 * yesButtonScale}px`,
    fontSize: `${16 * Math.sqrt(yesButtonScale)}px`,
  }

  return (
    <Button
      className={cn(
        "font-bold shadow-lg cursor-pointer z-10",
        getThemeButtonStyle(theme, "yes")
      )}
      style={{ ...buttonStyle, transition: "all 0.3s ease-in-out" }}
      onClick={onClick}
      disabled={isConfirmed}
    >
      Yes 💖
    </Button>
  )
}