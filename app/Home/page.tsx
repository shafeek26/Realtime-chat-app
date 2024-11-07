import { CTA } from "@/components/Home/Cta"
import { Features } from "@/components/Home/Features"
import { Header } from "@/components/Home/Header"
import { Hero } from "@/components/Home/Hero"
import { Testimonials } from "@/components/Home/Testimonials"


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#FFF5F2]">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Testimonials />
        <CTA />
      </main>
    </div>
  )
}