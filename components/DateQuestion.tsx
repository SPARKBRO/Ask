"use client"
import { useDateQuestionContext } from "@/contexts/DateQuestionContext"
import { useGlobalContext } from "@/contexts/GlobalContext"
import { useAudio } from "@/hooks/useAudio"
import { MuteButton } from "./MuteButton"
import BalloonGroup from "./BalloonGroup"
import { getThemeBackground, getThemeTextColor } from "@/utils/theme-utils"
import { useState } from "react"
import { YesButton } from "./YesButton"
import { NoButton } from "./NoButton"
import ReactConfetti from "react-confetti"

interface DateQuestionProps {
  onYesClick: () => void
  name: string
}

export default function DateQuestion({ onYesClick, name }: DateQuestionProps) {
  const { theme, isMuted, setIsMuted, setShowBalloons, showBalloons } = useGlobalContext()
  const { yesButtonScale, setYesButtonScale, isConfirmed, setIsConfirmed, } =
    useDateQuestionContext()
  const { playYesSound, startNoSound, stopNoSound, stopAllSounds } = useAudio(isMuted)
  const [isStartConfetti, setStartConfetti] = useState(false);

  const handleYesClick = async () => {
    setIsConfirmed(true)
    setStartConfetti(true)
    playYesSound()
    setShowBalloons(true)
    stopNoSound()

    const searchParams = new URLSearchParams(window.location.search);
    const senderEmail = searchParams.get('email');
    const senderName = searchParams.get('sender');

    if (senderEmail && senderName) {
      try {
        await fetch('/api/date-response', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            senderEmail,
            senderName,
            recipientName: name,
            response: 'accepted',
          }),
        });
      } catch (error) {
        console.error('Error sending response:', error);
      }
    }

    setTimeout(() => {
      onYesClick()
    }, 3000)
  }

  const handleNoClick = async () => {
    setYesButtonScale((prevScale) => prevScale * 1.2)
    startNoSound()

    // Commenting out email notification for "No" responses for now
    /*
    const searchParams = new URLSearchParams(window.location.search);
    const senderEmail = searchParams.get('email');
    const senderName = searchParams.get('sender');

    if (senderEmail && senderName) {
      try {
        await fetch('/api/date-response', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            senderEmail,
            senderName,
            recipientName: name,
            response: 'rejected',
          }),
        });
      } catch (error) {
        console.error('Error sending response:', error);
      }
    }
    */
  }

  const toggleMute = () => {
    setIsMuted((prev) => {
      if (!prev) {
        stopAllSounds()
      }
      return !prev
    })
  }

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center p-4 sm:p-8 text-center overflow-hidden ${getThemeBackground(theme)}`}
      suppressHydrationWarning
    >
      <div >
        {  isStartConfetti && <ReactConfetti />}
      </div>
      {name && (
        <h2 className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 ${getThemeTextColor(theme)}`}>
          Hi, {name}!
        </h2>
      )}
      <h1
        className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 ${getThemeTextColor(theme)}`}
      >
        Will you go on a date with me?
      </h1>
      <div className="flex justify-center items-center space-x-4">
        <YesButton onClick={handleYesClick} theme={theme} yesButtonScale={yesButtonScale} isConfirmed={isConfirmed} />
        <NoButton onClick={handleNoClick} theme={theme} />
      </div>
      <MuteButton onClick={toggleMute} theme={theme} isMuted={isMuted} />
      {showBalloons && <BalloonGroup />}
    </div>
  )
}

