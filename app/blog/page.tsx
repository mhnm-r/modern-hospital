import Link from 'next/link'
import './page.css'

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

export default function BlogPage() {
  return (
    <div className="blog-page">
      <section className="page-hero">
        <div className="container">
          <h1>Blog</h1>
          <p>Health tips, medical insights, and wellness advice</p>
        </div>
      </section>

      <section className="blog-list section">
        <div className="container">
          <div className="blog-grid">
            {blogPosts.map((post) => (
              <article key={post.id} className="blog-card">
                <span className="blog-date">{post.date}</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <Link href={`/blog/${post.id}`} className="blog-link">
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

