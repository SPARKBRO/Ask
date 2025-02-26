"use client"

import { useRef, useEffect } from "react"

export const useAudio = (isMuted: boolean) => {
  const yesAudioRef = useRef<HTMLAudioElement | null>(null)
  const noAudioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    const loadAudio = async () => {
      try {
        yesAudioRef.current = new Audio(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voicy_Happy%20Happy%20Happy-fbLT4TNHaW5Ph3xU2CYYEG6fw2rDDu.mp3",
        )
        await yesAudioRef.current.load()
        yesAudioRef.current.volume = 0.5
      } catch (error) {
        console.error("Failed to load yes audio:", error)
      }

      try {
        noAudioRef.current = new Audio(
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Voicy_Sad%20Meow-A92YTPesDVGtJ7KrwANN7sNLLtr8qM.mp3",
        )
        await noAudioRef.current.load()
        noAudioRef.current.volume = 0.5
        noAudioRef.current.loop = true
      } catch (error) {
        console.error("Failed to load no audio:", error)
      }
    }

    loadAudio()

    return () => {
      if (yesAudioRef.current) {
        yesAudioRef.current.pause()
      }
      if (noAudioRef.current) {
        noAudioRef.current.pause()
      }
    }
  }, [])

  const playYesSound = () => {
    if (!isMuted && yesAudioRef.current) {
      yesAudioRef.current.currentTime = 0
      yesAudioRef.current.play().catch((error) => console.error("Failed to play yes audio:", error))
    }
  }

  const startNoSound = () => {
    if (!isMuted && noAudioRef.current) {
      noAudioRef.current.play().catch((error) => console.error("Failed to play no audio:", error))
    }
  }

  const stopNoSound = () => {
    if (noAudioRef.current) {
      noAudioRef.current.pause()
      noAudioRef.current.currentTime = 0
    }
  }

  const stopAllSounds = () => {
    if (yesAudioRef.current) {
      yesAudioRef.current.pause()
      yesAudioRef.current.currentTime = 0
    }
    if (noAudioRef.current) {
      noAudioRef.current.pause()
      noAudioRef.current.currentTime = 0
    }
  }

  return { playYesSound, startNoSound, stopNoSound, stopAllSounds }
}

