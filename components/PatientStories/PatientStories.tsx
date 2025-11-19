'use client'

import Link from 'next/link'
import './PatientStories.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

const stories = [
  {
    id: 1,
    title: 'Successful Treatment of Speech Problem in Elderly Patient',
    date: '11 September 2023',
    excerpt: 'Botulinum toxin treatment successfully resolved speech difficulties in an elderly patient.',
  },
  {
    id: 2,
    title: 'Successful Treatment with Life Support',
    date: '11 September 2023',
    excerpt: 'Specialized treatment method with life support led to successful recovery.',
  },
  {
    id: 3,
    title: 'Successful Hernia Surgery',
    date: '11 September 2023',
    excerpt: 'Patient recovered successfully after hernia surgery procedure.',
  },
  {
    id: 4,
    title: 'Proper Treatment of Epilepsy',
    date: '11 September 2023',
    excerpt: 'Correct diagnosis and treatment approach for epilepsy management.',
  },
  {
    id: 5,
    title: 'Successful Treatment of Uterine Cancer',
    date: '11 September 2023',
    excerpt: 'Comprehensive cancer care leading to successful treatment outcome.',
  },
  {
    id: 6,
    title: 'Successful Gallbladder Stone Surgery',
    date: '11 September 2023',
    excerpt: 'Minimally invasive surgery for gallbladder stones with excellent results.',
  },
]

export default function PatientStories() {
  const { t } = useLanguage()

  return (
    <section className="patient-stories section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('patientStoriesTitle')}</h2>
          <p className="section-subtitle">
            {t('patientStoriesSubtitle')}
          </p>
        </div>
        <div className="stories-grid">
          {stories.map((story) => (
            <article key={story.id} className="story-card">
              <Link href={`/patient-stories/${story.id}`}>
              <div className="story-content">
                <span className="story-date">{story.date}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                {/* <Link href={`/patient-stories/${story.id}`} className="story-link">
                  {t('readMore')}
                  </Link> */}
              </div>
              </Link>
            </article>
          ))}
        </div>
        {/* <div className="section-footer">
          <Link href="/patient-stories" className="btn btn-secondary">{t('viewAllStories')}</Link>
        </div> */}
      </div>
    </section>
  )
}

