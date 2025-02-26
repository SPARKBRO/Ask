import type React from "react"
import { motion } from "framer-motion"

interface FloatingBalloonProps {
  color: string
  size: number
  delay: number
  left: string
  duration: number
}

const FloatingBalloon: React.FC<FloatingBalloonProps> = ({ color, size, delay, left, duration }) => {
  return (
    <motion.div
      initial={{ y: "100%", opacity: 0 }}
      animate={{ y: "-100%", opacity: 1 }}
      transition={{ duration, delay, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
      className="absolute bottom-0"
      style={{ left }}
    >
      <svg width={size} height={size * 1.33} viewBox="0 0 60 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0Z"
          fill={color}
        />
        <path d="M30 60L35 80H25L30 60Z" fill={color} />
        <path d="M28 62L26 80" stroke="#FFF" strokeWidth="2" />
        <path d="M32 62L34 80" stroke="#FFF" strokeWidth="2" />
        <circle cx="20" cy="20" r="5" fill="#FFF" fillOpacity="0.5" />
      </svg>
    </motion.div>
  )
}

export default FloatingBalloon

