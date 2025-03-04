import { ThemeProvider } from "@/components/ThemeProvider";
import { GlobalProvider } from "@/contexts/GlobalContext";
import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({ subsets: ["latin"] })
const pixelify = Pixelify_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Guess What's Inside? 🎁",
  description: "I've prepared a special surprise just for you! Click to uncover the fun waiting behind this door.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.className} ${pixelify.className}`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          suppressHydrationWarning
        >
          <GlobalProvider>
            {children}
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
