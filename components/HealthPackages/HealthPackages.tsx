'use client'

import Link from 'next/link'
import './HealthPackages.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

const packages = [
  {
    title: 'Whole Body Check (For Men)',
    slug: 'whole-body-check-men',
    description: 'Comprehensive health screening for men',
  },
  {
    title: 'Whole Body Check (For Women)',
    slug: 'whole-body-check-women',
    description: 'Comprehensive health screening for women',
  },
  {
    title: 'Platinum Whole Body Checkup (Male)',
    slug: 'platinum-whole-body-male',
    description: 'Premium health checkup package for men',
  },
  {
    title: 'Platinum Whole Body Checkup (Female)',
    slug: 'platinum-whole-body-female',
    description: 'Premium health checkup package for women',
  },
  {
    title: 'Special Heart Check Package',
    slug: 'heart-check-package',
    description: 'Comprehensive cardiac health assessment',
  },
  {
    title: 'Festive Health Check Package (Gold)',
    slug: 'festive-gold',
    description: 'Gold tier festive health package',
  },
  {
    title: 'Festive Health Check Package (Silver)',
    slug: 'festive-silver',
    description: 'Silver tier festive health package',
  },
  {
    title: 'Pre-Anesthetic Regular Adult Package',
    slug: 'pre-anesthetic-adult',
    description: 'Pre-surgery health assessment',
  },
]

export default function HealthPackages() {
  const { t, language } = useLanguage()

  return (
    <section className="health-packages section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('healthCheckPackages')}</h2>
          <p className="section-subtitle">
            {t('packagesSubtitle')}
          </p>
        </div>
        <div className="packages-grid">
          {packages.map((pkg) => (
            <div key={pkg.slug} className="package-card">
              <h3>{pkg.title}</h3>
              <p>{pkg.description}</p>
              <Link href={`/health-packages/${pkg.slug}`} className="btn btn-primary">
                {language === 'en' ? 'See Package' : 'প্যাকেজ দেখুন'}
              </Link>
            </div>
          ))}
        </div>
        <div className="section-footer">
          <Link href="/health-packages" className="btn btn-secondary">{t('viewAllPackages')}</Link>
        </div>
      </div>
    </section>
  )
}

