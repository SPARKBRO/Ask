import { Theme } from "@/contexts/DateQuestionContext";


// Define theme properties in a single place for better maintainability
const themeProperties: Record<Theme, { text: string; background: string }> = {
  cute: {
    text: "text-pink-600 font-playfair",
    background: "bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200",
  },
  pixel: {
    text: "text-green-400 font-pixelify",
    background: "bg-gradient-to-br from-pink-200 via-blue-200 to-purple-200",
  },
  pride: {
    text: "text-white font-playfair",
    background: "bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500",
  },
  dark: {
    text: "text-purple-300 font-playfair",
    background: "bg-gradient-to-br from-gray-900 via-purple-900 to-violet-600",
  },
  minimal: {
    text: "text-gray-800 font-playfair",
    background: "bg-gradient-to-br from-gray-100 to-gray-300",
  },
}

export function getThemeTextColor(theme: Theme): string {
  return themeProperties[theme]?.text || themeProperties["cute"].text
}

export function getThemeBackground(theme: Theme): string {
  return themeProperties[theme]?.background || themeProperties["cute"].background
}

// Define button styles for each theme
const buttonStyles: Record<Theme, Record<string, string>> = {
  cute: {
    yes: "bg-green-400 text-white font-playfair hover:bg-green-500",
    no: "bg-red-400 text-white font-playfair hover:bg-red-500",
    share: "bg-blue-400 text-white font-playfair",
    create: "bg-pink-400 text-white font-playfair",
  },
  pixel: {
    yes: "bg-green-500 text-black border-4 border-green-300 font-pixelify hover:bg-green-600",
    no: "bg-red-500 text-black border-4 border-red-300 font-pixelify hover:bg-red-600",
    share: "bg-blue-500 text-black border-4 border-blue-300 font-pixelify",
    create: "bg-pink-500 text-black border-4 border-pink-300 font-pixelify",
  },
  pride: {
    yes: "bg-rainbow text-white font-playfair hover:bg-opacity-90",
    no: "bg-gray-800 text-white font-playfair hover:bg-gray-900",
    share: "bg-rainbow text-white font-playfair",
    create: "bg-white text-black font-playfair",
  },
  dark: {
    yes: "bg-purple-600 text-white font-playfair hover:bg-purple-700",
    no: "bg-red-800 text-white font-playfair hover:bg-red-900",
    share: "bg-purple-600 text-white font-playfair",
    create: "bg-indigo-600 text-white font-playfair",
  },
  minimal: {
    yes: "bg-gray-200 text-gray-800 font-playfair hover:bg-gray-300",
    no: "bg-gray-400 text-white font-playfair hover:bg-gray-500",
    share: "bg-gray-200 text-gray-800 font-playfair",
    create: "bg-gray-400 text-white font-playfair",
  },
}

export function getThemeButtonStyle(theme: Theme, type: "yes" | "no" | "share" | "create"): string {
  return buttonStyles[theme]?.[type] || buttonStyles["cute"][type]
}

export function getThemeInputStyle(theme: Theme): string {
  const inputStyles: Record<Theme, string> = {
    cute: "border-pink-400 text-pink-600 font-playfair bg-pink-100 focus:ring-pink-500",
    pixel: "border-green-400 text-green-600 bg-green-100 focus:ring-green-500",
    pride: "border-yellow-400 text-white font-playfair bg-gray-900 focus:ring-yellow-500",
    dark: "border-purple-600 text-purple-300 font-playfair bg-gray-800 focus:ring-purple-500",
    minimal: "border-gray-400 text-gray-800 font-playfair bg-gray-100 focus:ring-gray-500",
  }
  
  return inputStyles[theme] || inputStyles["cute"]
}

export function getThemeBorderColor(theme: Theme): string {
  switch (theme) {
    case "cute":
      return "border-pink-500"
    case "pixel":
      return "border-green-400"
    case "pride":
      return "border-yellow-500"
    case "dark":
      return "border-purple-600"
    case "minimal":
      return "border-gray-500"
    default:
      return "border-pink-500"
  }
}

