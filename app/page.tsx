import Companies from '@/components/companies'
import FAQ from '@/components/faq'
import Hero from '@/components/hero'
import LatestMovies from '@/components/latest-movies'
import LatestTVShows from '@/components/latest-tv'
import WatchedShelf from '@/components/watched-list'

export default function Home() {
  return (
    <main className='bg-background'>
      <WatchedShelf />
      <LatestMovies />
      <LatestTVShows />
    </main>
  )
}