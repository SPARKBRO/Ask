"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"
import type { Theme } from "./GlobalContext"

interface CreateInvitationContextType {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  senderName: string
  setSenderName: React.Dispatch<React.SetStateAction<string>>
  selectedTheme: Theme
  setSelectedTheme: React.Dispatch<React.SetStateAction<Theme>>
}

const CreateInvitationContext = createContext<CreateInvitationContextType | undefined>(undefined)

export const CreateInvitationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [name, setName] = useState("")
  const [senderName, setSenderName] = useState("")
  const [selectedTheme, setSelectedTheme] = useState<Theme>("cute")

  return (
    <CreateInvitationContext.Provider
      value={{
        name,
        setName,
        senderName,
        setSenderName,
        selectedTheme,
        setSelectedTheme,
      }}
    >
      {children}
    </CreateInvitationContext.Provider>
  )
}

export const useCreateInvitationContext = () => {
  const context = useContext(CreateInvitationContext)
  if (context === undefined) {
    throw new Error("useCreateInvitationContext must be used within a CreateInvitationProvider")
  }
  return context
}

