import { DUMMY_NEWS } from '@/dummy-news'

export default async function NewsDetailPage({ params }) {
  const { id } = await params
  const newsItem = DUMMY_NEWS.find((news) => news.slug === id)

  return (
    <>
      <article className="news-article">
        <header>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
          <h1>{newsItem.title}</h1>
          <time dateTime={newsItem.date}>{newsItem.date}</time>
        </header>
        <p>{newsItem.content}</p>
      </article>
    </>
  )
}
