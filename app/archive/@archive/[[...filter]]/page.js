import { getAvailableNewsYears } from '@/lib/news'
import Link from 'next/link'
// import NewsList from '@/components/news-list'
// import { getNewsForYear } from '@/lib/news'

export default function FilteredNewsPage({ params }) {
  const { filter } = params
  console.log('filter', filter)

  const years = getAvailableNewsYears()

  return (
    <>
      <header id="archive-header">
        <h2> Archive Years</h2>
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  )
  // const news = getNewsForYear(filter)

  // return (
  //   <>
  //     <h2>Year {year} </h2>
  //     <NewsList news={news} />
  //   </>
  // )
}
