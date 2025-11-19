'use client'

import Link from 'next/link'
import './Blog.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

const blogPosts = [
  {
    id: 1,
    title: 'Lower Back Pain: Causes, Treatment & Prevention',
    date: '14 March 2025',
    excerpt: 'Understanding the causes and effective treatment options for lower back pain.',
  },
  {
    id: 2,
    title: 'Better Sleep for a Healthier Life',
    date: '14 March 2025',
    excerpt: 'Tips and strategies to improve your sleep quality and overall health.',
  },
  {
    id: 3,
    title: 'Advanced Sleep Tests for Healthy Living',
    date: '14 March 2025',
    excerpt: 'Learn about Modern sleep testing methods and their benefits.',
  },
  {
    id: 4,
    title: 'Bone & Joint Care for Healthy Aging',
    date: '13 March 2025',
    excerpt: 'Essential care tips for maintaining bone and joint health as you age.',
  },
  {
    id: 5,
    title: 'Diabetic Foot Care & Prevention Tips',
    date: '13 March 2025',
    excerpt: 'Important guidelines for foot care in diabetes management.',
  },
  {
    id: 6,
    title: 'Fracture Recovery & Rehabilitation Tips',
    date: '11 March 2025',
    excerpt: 'Expert advice on recovering from fractures and rehabilitation process.',
  },
]

export default function Blog() {
  const { t } = useLanguage()

  return (
    <section className="blog section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('blog')}</h2>
          <p className="section-subtitle">
            {t('blogSubtitle')}
          </p>
        </div>
        <div className="blog-grid">
          {blogPosts.map((post) => (
            <article key={post.id} className="blog-card">
              <Link href={`/blog/${post.id}`}>
              <div className="blog-content">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                {/* <Link href={`/blog/${post.id}`} className="blog-link">
                  {t('readMore')}
                  </Link> */}
              </div>
            </Link>
            </article>
          ))}
        </div>
        {/* <div className="section-footer">
          {t('readAllBlogs')}
        </div> */}
      </div>
    </section>
  )
}

