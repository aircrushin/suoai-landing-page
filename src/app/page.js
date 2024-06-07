import Link from "next/link"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Features from "@/components/features"
import Ability from "@/components/ability"
import Pricing from "@/components/pricing"
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh] bg-gradient-to-b from-white to-blue-200">
      <main className="flex-1">
        <Hero />
        <Features></Features>
        <Ability></Ability>
        <Pricing></Pricing>
        <Contact></Contact>
      </main>
      <Footer></Footer>
    </div>
  )
}
