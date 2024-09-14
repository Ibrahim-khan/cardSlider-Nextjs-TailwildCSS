"use client"
import localFont from "next/font/local";
import "./globals.css";
import CardSlider from "./components/CardSlider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <CardSlider />
        </div>
      </body>
    </html>
  );
}
