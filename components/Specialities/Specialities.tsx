'use client'

import Link from 'next/link'
import './Specialities.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

const specialities = [
  { name: 'গাইনী ও অবসটেটিক্স', slug: 'obstetrics-gynaecology' },
  { name: 'পেডিয়াট্রিকস', slug: 'paediatrics' },
  { name: 'ইমারজেন্সি', slug: 'emergency' },
  { name: 'জেনারেল সার্জারী', slug: 'general-surgery' },

  // { name: 'Anaesthesia', slug: 'anaesthesia' },
  // { name: 'Cardiology', slug: 'cardiology' },
  // { name: 'Cancer Care Center', slug: 'cancer-care' },
  // { name: 'Cardiothoracic & Vascular Surgery', slug: 'cardiothoracic-surgery' },
  // { name: 'Critical Care Unit', slug: 'critical-care' },
  // { name: 'Dental & Maxillofacial Surgery', slug: 'dental' },
  // { name: 'Dermatology & Venereology', slug: 'dermatology' },
  // { name: 'Endocrinology & Diabetology', slug: 'endocrinology' },
  // { name: 'ENT & Head Neck Surgery', slug: 'ent' },
  // { name: 'Gastroenterology & Hepatology', slug: 'gastroenterology' },
  // { name: 'Hematology and BMT Centre', slug: 'hematology' },
  // { name: 'Internal Medicine', slug: 'internal-medicine' },
  // { name: 'Neonatology', slug: 'neonatology' },
  // { name: 'Nephrology', slug: 'nephrology' },
  // { name: 'Neurology', slug: 'neurology' },
  // { name: 'Neurosurgery', slug: 'neurosurgery' },
  // { name: 'Ophthalmology', slug: 'ophthalmology' },
  // { name: 'Orthopaedics & Joint Replacement Surgery', slug: 'orthopedics' },
  // { name: 'Paediatric Cardiology', slug: 'paediatric-cardiology' },
  // { name: 'Paediatric Neurology', slug: 'paediatric-neurology' },
  // { name: 'Paediatric Surgery', slug: 'paediatric-surgery' },
  // { name: 'Physical Medicine & Rehabilitation', slug: 'physical-medicine' },
  // { name: 'Plastic, Reconstructive & Cosmetic Surgery', slug: 'plastic-surgery' },
  // { name: 'Psychiatry & Mental Health', slug: 'psychiatry' },
  // { name: 'Respiratory Medicine', slug: 'respiratory-medicine' },
  // { name: 'Rheumatology', slug: 'rheumatology' },
  // { name: 'Urology', slug: 'urology' },
]

export default function Specialities() {
  const { t } = useLanguage()

  return (
    <section className="specialities section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t('ourSpecialities')}</h2>
          <p className="section-subtitle">
            {t('specialitiesSubtitle')}
          </p>
        </div>
        <div className="specialities-grid">
          {specialities.map((speciality) => (
            <Link
              key={speciality.slug}
              href={`/specialities/${speciality.slug}`}
              className="speciality-card"
            >
              <h3>{speciality.name}</h3>
            </Link>
          ))}
        </div>
        {/* <div className="section-footer">
          <Link href="/specialities" className="btn btn-secondary">{t('viewAllSpecialities')}</Link>
        </div> */}
      </div>
    </section>
  )
}

