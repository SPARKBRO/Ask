import type { Metadata } from "next";
import { Geist, Geist_Mono, Pixelify_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";
import { GlobalProvider } from "@/contexts/GlobalContext";
import { ThemeProvider } from "@/components/ThemeProvider";

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
  title: "Hola hermosa",
  description: "Let me ask you something",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.className} ${pixelify.className} `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <GlobalProvider>{children}</GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
