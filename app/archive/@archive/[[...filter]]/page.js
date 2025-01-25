import {
  getAvailableNewsYears,
  getNewsForYear,
  getAvailableNewsMonths,
  getNewsForYearAndMonth,
} from '@/lib/news'
import Link from 'next/link'
import NewsList from '@/components/news-list'

export default async function FilteredNewsPage({ params }) {
  const { filter } = await params
  const selectedYear = filter?.[0]
  const selectedMonth = filter?.[1]

  let news
  let links = getAvailableNewsYears()

  if (selectedYear && !selectedMonth) {
    news = getNewsForYear(selectedYear)
    links = getAvailableNewsMonths(selectedYear)
  }

  if (selectedYear && selectedMonth) {
    news = getNewsForYearAndMonth(selectedYear, selectedMonth)
    links = []
  }

  let newsContent = <p>No news found for the selected period.</p>

  if (news && news.length > 0) {
    newsContent = <NewsList news={news} />
  }

  if (
    (selectedYear && !getAvailableNewsMonths().includes(+selectedYear)) ||
    (selectedMonth &&
      !getAvailableNewsMonths(selectedYear).includes(+selectedMonth))
  ) {
    throw new Error('Invalid year or month')
  }

  return (
    <>
      <>
        <header id="archive-header">
          <nav>
            <ul>
              {links.map((link) => {
                const href = selectedYear
                  ? `/archive/${selectedYear}/${link}`
                  : `/archive/${link}`

                return (
                  <li key={link}>
                    <Link href={href}>{link}</Link>
                  </li>
                )
              })}
            </ul>
          </nav>
        </header>
      </>
      {newsContent}
    </>
  )
}
