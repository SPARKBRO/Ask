import { motion } from "framer-motion"
import Link from "next/link"
import { useGlobalContext } from "@/contexts/GlobalContext"
import { getThemeBackground, getThemeTextColor, getThemeButtonStyle } from "@/utils/theme-utils"
import ShareInvitation from "./ShareInvitation"
import BalloonGroup from "./BalloonGroup"

interface FinalScreenProps {
  name: string
}

export default function FinalScreen({ name }: FinalScreenProps) {
  const { theme } = useGlobalContext()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`text-center min-h-screen flex flex-col items-center justify-center ${getThemeBackground(theme)}`}
    >
      <h2 className={`text-4xl md:text-6xl font-bold mb-8 ${getThemeTextColor(theme)}`}>
        {name ? `Yay, ${name}! ` : "Yay! "}Can&apos;t wait for our date! {theme === "cute" ? "💕" : ""}
      </h2>
      <div className="space-y-4">
        <ShareInvitation name={name} />
        <Link href="/create">
          <motion.button
            className={`px-6 py-3 text-2xl font-bold shadow-lg transition-all duration-300 ease-in-out ${getThemeButtonStyle(
              theme,
              "create",
            )}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Create New Invitation
          </motion.button>
        </Link>
      </div>
      <BalloonGroup />
    </motion.div>
  )
}

