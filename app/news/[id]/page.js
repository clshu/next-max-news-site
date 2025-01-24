export default async function NewsDetailPage({ params }) {
  const { id } = await params

  return (
    <>
      <div id="news">
        <h1>News Detail {id}</h1>
      </div>
    </>
  )
}
