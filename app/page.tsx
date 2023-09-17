import Companies from '@/components/companies'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' bg-slate-100'>
      <Hero />
      <Companies />
      <FAQ />
    </main>
  )
}
