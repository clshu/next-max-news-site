/* eslint-disable @next/next/no-img-element */
import { notFound } from 'next/navigation'
import { DUMMY_NEWS } from '@/dummy-news'

export default async function InterceptedImagePage({ params }) {
  const { slug } = await params
  const newsItem = DUMMY_NEWS.find((news) => news.slug === slug)
  if (!newsItem) {
    notFound()
  }

  return (
    <>
      <h2>Intercepted!</h2>
      <div className="fullscreen-image">
        <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
      </div>
    </>
  )
}
