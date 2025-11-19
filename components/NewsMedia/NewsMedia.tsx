'use client'

import Link from 'next/link'
import './NewsMedia.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

const newsItems = [
  {
    id: 1,
    title: 'পল্লী চিকিৎসকদের দক্ষতা বৃদ্ধির লক্ষ্যে অনুষ্ঠিত হলো এক সফল সায়েন্টিফিক সেমিনার',
    excerpt:'আয়োজনে সীতাকুন্ড মডার্ণ হসপিটাল ও এভারকেয়ার হসপিটাল চট্টগ্রাম',
    date: '১২ নভেম্বর ২০২৫',
    category: 'সেমিনার',
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

export default function NewsMedia() {
  const { t } = useLanguage()

  return (
    <section className="news-media section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('newsMedia')}</h2>
          <p className="section-subtitle">
            {t('newsSubtitle')}
          </p>
        </div>
        <div className="news-grid">
          {newsItems.map((news) => (
            <article key={news.id} className="news-card">
              <Link href={`/news/${news.id}`}>
              <div className="news-badge">{news.category}</div>
              <div className="news-content">
                <span className="news-date">{news.date}</span>
                <h3>{news.title}</h3>
                <p>{news.excerpt}</p>

                {/* <Link href={`/news/${news.id}`} className="news-link">
                  {t('readMore')}
                </Link> */}
              </div>
              </Link>
            </article>
          ))}
        </div>
        {/* <div className="section-footer">
          <Link href="/news" className="btn btn-secondary">{t('viewAllNews')}</Link>
        </div> */}
      </div>
    </section>
  )
}

