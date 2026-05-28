import Navbar from '@/components/Navbar'
import Ticker from '@/components/Ticker'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Features from '@/components/Features'
import Workflow from '@/components/Workflow'
import Pricing from '@/components/Pricing'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Ticker />
      <Hero />
      <Stats />
      <Features />
      <Workflow />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
