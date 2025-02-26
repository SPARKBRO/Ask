"use client"

import BalloonGroup from "@/components/BalloonGroup";
import DateQuestion from "@/components/DateQuestion";
import FinalScreen from "@/components/FinalScreen";
import { DateQuestionProvider } from "@/contexts/DateQuestionContext";
import { useGlobalContext } from "@/contexts/GlobalContext";
import { getThemeBackground } from "@/utils/theme-utils";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { theme, setTheme, showBalloons, setIsMuted } = useGlobalContext()
  const [showFinalScreen, setShowFinalScreen] = useState(false)
  const [name, setName] = useState("")

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search)
    const nameParam = searchParams.get("name")
    const themeParam = searchParams.get("theme") as typeof theme | null
    const muted = searchParams.get("muted")


    if (nameParam) {
      setName(decodeURIComponent(nameParam))
    }
    if (themeParam && ["cute", "pixel", "pride", "dark", "minimal"].includes(themeParam)) {
      setTheme(themeParam)
    }
    if(muted==='true'){
      setIsMuted(true)
    }else{
      setIsMuted(false)
    }

  //  resetBalloons()
  }, [setTheme])

  return (
    <DateQuestionProvider>
      <main className={`min-h-screen ${getThemeBackground(theme)} relative overflow-hidden`}>
        {showFinalScreen ? (
          <FinalScreen name={name} />
        ) : (
          <>
            <DateQuestion onYesClick={() => setShowFinalScreen(true)} name={name} />
            {!name && (
              <Link
                href="/create"
                className="fixed bottom-4 left-4 bg-white text-pink-500 font-bold py-2 px-4 rounded-md hover:bg-pink-100 transition duration-300"
              >
                Create Custom Invitation
              </Link>
            )}
          </>
        )}
        {showBalloons && <BalloonGroup />}
      </main>
    </DateQuestionProvider>
  )
}