import type React from "react"
import { Volume2, VolumeX } from "lucide-react"
import type { Theme } from "@/contexts/GlobalContext"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface MuteButtonProps {
  onClick: () => void
  theme: Theme
  isMuted: boolean
}

export const MuteButton: React.FC<MuteButtonProps> = ({ onClick, theme, isMuted }) => {
  return (
    <Button
      className={cn(
        "fixed top-4 right-4 p-2 rounded-full shadow-md z-50 mute-button",
        getThemeButtonStyle(theme, isMuted),
      )}
      onClick={onClick}
      size="icon"
    >
      {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
    </Button>
  )
}

function getThemeButtonStyle(theme: Theme, isMuted: boolean): string {
  const baseStyle = isMuted ? "bg-red-400 text-white" : "bg-gray-200 text-gray-800"
  switch (theme) {
    case "cute":
      return baseStyle
    case "pixel":
      return `${baseStyle} border-2 border-white`
    case "pride":
      return `${baseStyle} bg-opacity-50`
    case "dark":
      return isMuted ? "bg-red-800 text-white" : "bg-gray-700 text-white"
    case "minimal":
      return isMuted ? "bg-gray-600 text-white" : "bg-gray-300 text-gray-800"
    default:
      return baseStyle
  }
}

