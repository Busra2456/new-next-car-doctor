import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Shared/Navbar";
import Footers from "./components/Shared/Footers";
import AuthProvider from "@/services/AuthProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Car Doctor",
  description: "Car Reaper workshop",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="mytheme"  suppressHydrationWarning 
     >
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
        <Navbar/>
        {children}
        <Footers/>
        </AuthProvider>
      </body>
     
    </html>
  );
}
