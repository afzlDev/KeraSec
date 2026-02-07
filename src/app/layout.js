import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "KeraSec",
  description: "CCTV Security System",
};

import "./globals.css";
import Nav from "./nav";  // adjust path if needed

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />   {/* ✅ Nav will always be shown */}
        {children}  {/* ✅ This is where each page (home, contact, etc.) is rendered */}
      </body>
    </html>
  );
}

