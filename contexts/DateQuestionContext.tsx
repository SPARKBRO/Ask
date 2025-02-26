"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

export type Theme = "cute" | "pixel" | "pride" | "dark" | "minimal"

interface DateQuestionContextType {
  yesButtonScale: number
  setYesButtonScale: React.Dispatch<React.SetStateAction<number>>
  isConfirmed: boolean
  setIsConfirmed: React.Dispatch<React.SetStateAction<boolean>>
  showCat: boolean
  setShowCat: React.Dispatch<React.SetStateAction<boolean>>
}

const DateQuestionContext = createContext<DateQuestionContextType | undefined>(undefined)

export const DateQuestionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [yesButtonScale, setYesButtonScale] = useState(1.2)
  const [isConfirmed, setIsConfirmed] = useState(false)
  const [showCat, setShowCat] = useState(false)

  return (
    <DateQuestionContext.Provider
      value={{
        yesButtonScale,
        setYesButtonScale,
        isConfirmed,
        setIsConfirmed,
        showCat,
        setShowCat,
      }}
    >
      {children}
    </DateQuestionContext.Provider>
  )
}

export const useDateQuestionContext = () => {
  const context = useContext(DateQuestionContext)
  if (context === undefined) {
    throw new Error("useDateQuestionContext must be used within a DateQuestionProvider")
  }
  return context
}

