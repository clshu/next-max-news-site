import Link from 'next/link'
import { getAvailableNewsYears } from '@/lib/news'

export default function ArchivePage() {
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
}
