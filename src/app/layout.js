import { Geist, Geist_Mono, Montserrat } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/utils/ClientWrapper";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserratFont = Montserrat({
  variable: "--font-mont",
  subsets: ["latin"],
});

export const metadata = {
  title: "Codeum Games - The most creative game studio, you have ever seen!",
  description:
    "Codeum Games is an independent game development studio creating games for iOS, Google Play, and Steam. We focus on adventure and experimental projects, take part in game jams, and actively contribute to the game development community by publishing useful tools and assets for developers on the Unity Asset Store.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserratFont.variable} antialiased`}
      >
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
