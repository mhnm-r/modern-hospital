import Link from 'next/link'
import './page.css'

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

export default function PatientStoriesPage() {
  return (
    <div className="patient-stories-page">
      <section className="page-hero">
        <div className="container">
          <h1>Patient Stories</h1>
          <p>Real stories from our patients</p>
        </div>
      </section>

      <section className="stories-list section">
        <div className="container">
          <div className="stories-grid">
            {stories.map((story) => (
              <article key={story.id} className="story-card">
                <span className="story-date">{story.date}</span>
                <h3>{story.title}</h3>
                <p>{story.excerpt}</p>
                <Link href={`/patient-stories/${story.id}`} className="story-link">
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

