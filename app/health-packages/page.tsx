import Link from 'next/link'
import './page.css'

const packages = [
  {
    title: 'Whole Body Check (For Men)',
    slug: 'whole-body-check-men',
    description: 'Comprehensive health screening for men',
    price: 'Starting from $150',
  },
  {
    title: 'Whole Body Check (For Women)',
    slug: 'whole-body-check-women',
    description: 'Comprehensive health screening for women',
    price: 'Starting from $150',
  },
  {
    title: 'Platinum Whole Body Checkup (Male)',
    slug: 'platinum-whole-body-male',
    description: 'Premium health checkup package for men',
    price: 'Starting from $300',
  },
  {
    title: 'Platinum Whole Body Checkup (Female)',
    slug: 'platinum-whole-body-female',
    description: 'Premium health checkup package for women',
    price: 'Starting from $300',
  },
  {
    title: 'Special Heart Check Package',
    slug: 'heart-check-package',
    description: 'Comprehensive cardiac health assessment',
    price: 'Starting from $200',
  },
  {
    title: 'Festive Health Check Package (Gold)',
    slug: 'festive-gold',
    description: 'Gold tier festive health package',
    price: 'Starting from $250',
  },
  {
    title: 'Festive Health Check Package (Silver)',
    slug: 'festive-silver',
    description: 'Silver tier festive health package',
    price: 'Starting from $180',
  },
  {
    title: 'Pre-Anesthetic Regular Adult Package',
    slug: 'pre-anesthetic-adult',
    description: 'Pre-surgery health assessment',
    price: 'Starting from $120',
  },
]

export default function HealthPackagesPage() {
  return (
    <div className="health-packages-page">
      <section className="page-hero">
        <div className="container">
          <h1>Health Check Packages</h1>
          <p>Comprehensive health screening packages tailored to your needs</p>
        </div>
      </section>

      <section className="packages-list section">
        <div className="container">
          <div className="packages-grid">
            {packages.map((pkg) => (
              <div key={pkg.slug} className="package-card">
                <h3>{pkg.title}</h3>
                <p className="package-description">{pkg.description}</p>
                <p className="package-price">{pkg.price}</p>
                <Link href={`/health-packages/${pkg.slug}`} className="btn btn-primary">
                  See Package Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

