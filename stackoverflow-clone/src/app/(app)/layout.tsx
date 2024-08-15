"use client"
import Footer from "@/components/layout/Footer"
import Header from "@/components/layout/Header"
import { usePathname } from "next/navigation"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()
  return (
    <>
      {pathname === '/login' || pathname === "/signup" ? null : <Header />} 
      <main className="flex-1">{children}</main>
      {pathname === '/login' || pathname === "/signup" ? null : <Footer />}
    </>
  )
}
