import { useState } from "react"

import Header from "./Header"
import Hero from "./Hero"
import Features from "./Features"
import Cta from "./Cta"
import Footer from "./Footer"
import Overlay from "./Overlay"

export default function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative overflow-x-hidden">
      {isOpen && <Overlay />}

      <img
        className="absolute top-[-50px] xl:top-[-220px] right-[-70px] xl:right-[-140px] z-[-10]"
        src="bg-tablet-pattern.svg"
        alt="tablet pattern"
      />

      <img
        className="w-[300px] absolute top-[500px] right-[-180px] z-[-10] xl:hidden"
        src="bg-tablet-pattern.svg"
        alt="tablet pattern"
      />

      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Hero />
      <Features />
      <Cta />
      <Footer />
    </div>
  )
}
