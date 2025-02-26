import type React from "react"
import FloatingBalloon from "./FloatingBalloon"
import { useGlobalContext } from "@/contexts/GlobalContext"

const BalloonGroup: React.FC = () => {
  const { theme, showBalloons } = useGlobalContext()
  const balloonColors =
    theme === "dark"
      ? ["#8B5CF6", "#A78BFA", "#C4B5FD", "#DDD6FE", "#EDE9FE"]
      : ["#FF69B4", "#FFB6C1", "#FFC0CB", "#FF1493", "#DB7093"]

  if (!showBalloons) return null

  return (
    <>
      {balloonColors.map((color, index) => (
        <FloatingBalloon
          key={index}
          color={color}
          size={30 + Math.random() * 30}
          delay={index * 0.5}
          left={`${index * 20}%`}
          duration={5 + Math.random() * 2}
        />
      ))}
    </>
  )
}

export default BalloonGroup

