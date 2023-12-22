'use client'

import Footer from "@/components/shared/Footer"
import Navbar from "@/components/shared/Navbar"



export default function RootLayout({ children }) {
  return (
   <div className="container lg:px-20">
   <Navbar/>
    {children}
    <Footer/>
   </div>
  )
}
