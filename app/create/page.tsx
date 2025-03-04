"use client"

import Footer from "@/components/MadeByFooter"
import { MuteButton } from "@/components/MuteButton"
import { CreateInvitationProvider, useCreateInvitationContext } from "@/contexts/CreateInvitationContext"
import { useGlobalContext } from "@/contexts/GlobalContext"
import { getThemeBackground, getThemeBorderColor, getThemeButtonStyle, getThemeInputStyle, getThemeTextColor } from "@/utils/theme-utils"
import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"

const themes = {
  cute: "Cute Love",
  pixel: "Pixel Romance",
  pride: "Pride Connect",
  dark: "Dark Desire",
  minimal: "Minimal Elegance",
}


const CreateInvitationForm = () => {
  const { name, setName, senderName, setSenderName, selectedTheme, setSelectedTheme } = useCreateInvitationContext()
  const { isMuted } = useGlobalContext()
  const [email, setEmail] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name.trim() && email.trim() && senderName.trim()) {
      router.push(
        `/?name=${encodeURIComponent(name.trim())}&theme=${selectedTheme}&muted=${isMuted}&email=${encodeURIComponent(email.trim())}&sender=${encodeURIComponent(senderName.trim())}`
      )
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md flex-grow">
      <div className="mb-6">
        <label htmlFor="senderName" className={`block text-lg font-medium mb-2 ${getThemeTextColor(selectedTheme)}`}>
          Your name:
        </label>
        <input
          type="text"
          id="senderName"
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${getThemeInputStyle(selectedTheme)}`}
          placeholder="Your name"
          required
        />
      </div>

      <div className="mb-6">
        <label htmlFor="name" className={`block text-lg font-medium mb-2 ${getThemeTextColor(selectedTheme)}`}>
          Your date's name:
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${getThemeInputStyle(selectedTheme)}`}
          placeholder="Their name"
          required
        />
      </div>
      
      <div className="mb-6">
        <label htmlFor="email" className={`block text-lg font-medium mb-2 ${getThemeTextColor(selectedTheme)}`}>
          Your email address (to receive their response):
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${getThemeInputStyle(selectedTheme)}`}
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className={`block text-lg font-medium mb-2 ${getThemeTextColor(selectedTheme)}`}>Choose a theme:</label>
        <div className="grid grid-cols-2 gap-4">
          {Object.entries(themes).map(([key, value]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedTheme(key as typeof selectedTheme)}
              className={`p-4 rounded-md text-center transition-all duration-300 border-2 ${selectedTheme === key
                ? `${getThemeBorderColor(key as typeof selectedTheme)} ${getThemeButtonStyle(key as typeof selectedTheme, "yes")}`
                : `border-transparent ${getThemeButtonStyle(key as typeof selectedTheme, "no")}`
                } ${getThemeBackground(key as typeof selectedTheme)}`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className={`w-full py-3 px-4 rounded-md transition duration-300 ${getThemeButtonStyle(selectedTheme, "yes")}`}
      >
        Create Invitation
      </button>
    </form>
  )
}

export default function CreateDateInvitation() {
  const { theme, setIsMuted, isMuted } = useGlobalContext()

  return (
    <CreateInvitationProvider>
      <div className={`min-h-screen flex flex-col flex-grow`}>
        <div className={`flex flex-grow flex-col items-center justify-center p-4 ${getThemeBackground(theme)}`}>
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-8 ${getThemeTextColor(theme)} text-center`}>
            Create Your Date Invitation
          </h1>
          <CreateInvitationForm />
          <MuteButton onClick={() => setIsMuted((prev) => !prev)} theme={theme} isMuted={isMuted} />
        </div>
        <Footer />
      </div>
    </CreateInvitationProvider>
  )
}

