"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export type Theme = "cute" | "pixel" | "pride" | "dark" | "minimal"

interface GlobalContextType {
  theme: Theme
  setTheme: React.Dispatch<React.SetStateAction<Theme>>
  isMuted: boolean
  setIsMuted: React.Dispatch<React.SetStateAction<boolean>>
  showBalloons: boolean
  setShowBalloons: React.Dispatch<React.SetStateAction<boolean>>
  resetBalloons: () => void
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined)

export const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("cute")
  const [isMuted, setIsMuted] = useState(false)
  const [showBalloons, setShowBalloons] = useState(false)

  const resetBalloons = () => {
    setShowBalloons(false)
  }

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        isMuted,
        setIsMuted,
        showBalloons,
        setShowBalloons,
        resetBalloons,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (context === undefined) {
    throw new Error("useGlobalContext must be used within a GlobalProvider")
  }
  return context
}

