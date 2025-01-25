import NewsList from '@/components/news-list'
import { getNewsForYear } from '@/lib/news'

export default function FilterNewsPage({ params }) {
  const { year } = params
  const news = getNewsForYear(year)

  return (
    <>
      <h2>Year {year} </h2>
      <NewsList news={news} />
    </>
  )
}
