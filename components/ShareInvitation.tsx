"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Share2, Check } from "lucide-react"
import { useGlobalContext } from "@/contexts/GlobalContext"
import { getThemeButtonStyle } from "@/utils/theme-utils"

interface ShareInvitationProps {
  name: string
}

export default function ShareInvitation({ name }: ShareInvitationProps) {
  const { theme , isMuted} = useGlobalContext()
  const [copied, setCopied] = useState(false)

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/?name=${encodeURIComponent(name)}&theme=${theme}&muted=${isMuted}`

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Date Invitation",
          text: `Check out my date invitation for ${name}!`,
          url: shareUrl,
        })
      } catch (error) {
        console.error("Error sharing:", error)
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl)
        setCopied(true)
        setTimeout(() => setCopied(false), 2000)
      } catch (error) {
        console.error("Error copying to clipboard:", error)
      }
    }
  }

  return (
    <motion.button
      className={`px-6 py-3 text-2xl font-bold shadow-lg transition-all duration-300 ease-in-out ${getThemeButtonStyle(
        theme,
        "share",
      )}`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleShare}
      aria-label={copied ? "Link copied to clipboard" : "Share invitation"}
    >
      {copied ? (
        <>
          <Check className="inline-block mr-2" size={24} />
          Copied!
        </>
      ) : (
        <>
          <Share2 className="inline-block mr-2" size={24} />
          Share the love!
        </>
      )}
    </motion.button>
  )
}

