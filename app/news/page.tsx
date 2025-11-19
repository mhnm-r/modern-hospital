import Link from 'next/link'
import './page.css'

const newsItems = [
  {
    id: 1,
    title: 'Modern Hospital Welcomes Oncologist Dr. Nayan Bhowmik',
    date: '11 November 2025',
    category: 'News',
  },
  {
    id: 2,
    title: 'Modern Hospital Celebrates Breast Cancer Awareness Month',
    date: '30 October 2025',
    category: 'Awareness',
  },
  {
    id: 3,
    title: 'Modern Hospital Observes World Stroke Day 2025',
    date: '29 October 2025',
    category: 'Awareness',
  },
  {
    id: 4,
    title: 'Modern Hospital Launches Free Breast Health Checkup Program',
    date: '23 October 2025',
    category: 'Program',
  },
  {
    id: 5,
    title: 'Modern Hospital Marks World Heart Day 2025',
    date: '30 September 2025',
    category: 'Awareness',
  },
  {
    id: 6,
    title: 'Modern Hospital welcomes Dr. Sadia Sultana to Nephrology Department',
    date: '24 September 2025',
    category: 'News',
  },
]

export default function NewsPage() {
  return (
    <div className="news-page">
      <section className="page-hero">
        <div className="container">
          <h1>News & Media</h1>
          <p>Latest updates and announcements</p>
        </div>
      </section>

      <section className="news-list section">
        <div className="container">
          <div className="news-grid">
            {newsItems.map((news) => (
              <article key={news.id} className="news-card">
                <div className="news-badge">{news.category}</div>
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <Link href={`/news/${news.id}`} className="news-link">
                  Read More →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

