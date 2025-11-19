import Link from 'next/link'
import './page.css'

const specialities = [
  { name: 'Accident & Emergency', slug: 'accident-emergency' },
//   { name: 'Anaesthesia', slug: 'anaesthesia' },
//   { name: 'Cardiology', slug: 'cardiology' },
//   { name: 'Cancer Care Center', slug: 'cancer-care' },
//   { name: 'Cardiothoracic & Vascular Surgery', slug: 'cardiothoracic-surgery' },
//   { name: 'Critical Care Unit', slug: 'critical-care' },
//   { name: 'Dental & Maxillofacial Surgery', slug: 'dental' },
//   { name: 'Dermatology & Venereology', slug: 'dermatology' },
//   { name: 'Endocrinology & Diabetology', slug: 'endocrinology' },
//   { name: 'ENT & Head Neck Surgery', slug: 'ent' },
//   { name: 'Gastroenterology & Hepatology', slug: 'gastroenterology' },
  { name: 'General & Laparoscopic Surgery', slug: 'general-surgery' },
//   { name: 'Hematology and BMT Centre', slug: 'hematology' },
  { name: 'Internal Medicine', slug: 'internal-medicine' },
//   { name: 'Neonatology', slug: 'neonatology' },
//   { name: 'Nephrology', slug: 'nephrology' },
//   { name: 'Neurology', slug: 'neurology' },
//   { name: 'Neurosurgery', slug: 'neurosurgery' },
  { name: 'Obstetrics and Gynaecology', slug: 'obstetrics-gynaecology' },
//   { name: 'Ophthalmology', slug: 'ophthalmology' },
//   { name: 'Orthopaedics & Joint Replacement Surgery', slug: 'orthopedics' },
//   { name: 'Paediatric Cardiology', slug: 'paediatric-cardiology' },
//   { name: 'Paediatric Neurology', slug: 'paediatric-neurology' },
//   { name: 'Paediatric Surgery', slug: 'paediatric-surgery' },
  { name: 'Paediatrics', slug: 'paediatrics' },
//   { name: 'Physical Medicine & Rehabilitation', slug: 'physical-medicine' },
//   { name: 'Plastic, Reconstructive & Cosmetic Surgery', slug: 'plastic-surgery' },
//   { name: 'Psychiatry & Mental Health', slug: 'psychiatry' },
  { name: 'Radiology & Imaging', slug: 'radiology' },
//   { name: 'Respiratory Medicine', slug: 'respiratory-medicine' },
//   { name: 'Rheumatology', slug: 'rheumatology' },
//   { name: 'Urology', slug: 'urology' },
]

export default function SpecialitiesPage() {
  return (
    <div className="specialities-page">
      <section className="page-hero">
        <div className="container">
          <h1>Our Specialities</h1>
          <p>Comprehensive healthcare across 29+ specialties</p>
        </div>
      </section>

      <section className="specialities-list section">
        <div className="container">
          <div className="specialities-grid">
            {specialities.map((speciality) => (
              <Link
                key={speciality.slug}
                href={`/specialities/${speciality.slug}`}
                className="speciality-card"
              >
                <h3>{speciality.name}</h3>
                <span className="card-arrow">→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

