import Companies from '@/components/companies'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import LatestMovies from '@/components/latest-movies'
import SearchDB from '@/components/search-database'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=' bg-slate-100'>
      {/* <Hero /> */}
      <SearchDB />
      <LatestMovies />
      <Companies />
      <FAQ />
    </main>
  )
}
