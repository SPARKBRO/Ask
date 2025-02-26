"use client"

import { useRef, useState, useEffect } from "react"

export default function useEscapingButton() {
  const ref = useRef<HTMLButtonElement>(null)
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const button = ref.current
    if (!button) return

    const escape = () => {
      const x = Math.random() * 200 - 100
      const y = Math.random() * 200 - 100
      setPosition({ x, y })
    }

    button.addEventListener("mouseover", escape)
    button.addEventListener("click", escape)

    return () => {
      button.removeEventListener("mouseover", escape)
      button.removeEventListener("click", escape)
    }
  }, [])

  return { ref, position }
}

