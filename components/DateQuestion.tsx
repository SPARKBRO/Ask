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

  const handleYesClick = () => {
    setIsConfirmed(true)
    setStartConfetti(true)
    playYesSound()
    //setShowCat(true)
    setShowBalloons(true)
    stopNoSound()
    setTimeout(() => {
      onYesClick()
    }, 3000)
  }

  const handleNoClick = () => {
    setYesButtonScale((prevScale) => prevScale * 1.2)
    startNoSound()
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

