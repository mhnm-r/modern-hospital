'use client'

import Link from 'next/link'
import './Hero.css'
import { useLanguage } from '@/src/contexts/LanguageContext'


import dr_afroza from '@/src/assets/images/dr_afroza.jpg'
// import dr_bijoy from '@/src/assets/images/dr_bijoy.jpg'
import dr_shahana from '@/src/assets/images/dr_shahana.jpg'
import dr_joy from '@/src/assets/images/dr_joy.jpg'
import { useEffect, useState } from 'react'

export default function Hero() {
  const { t, language } = useLanguage()

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
  ]


  const images = [dr_afroza, dr_joy, dr_shahana]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000) // Change image every 3 seconds
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-grid">
            <div className="hero-card">
              <div className="hero-content-left">
                <img
                  src={images[currentIndex].src}
                  alt={`doctor_${currentIndex}`}
                  className="hero-slider-image"
                />
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-content-right">
                <h2 className="hero-title">{t('transformingHealthcare')}</h2>
                <p className="hero-subtitle">{t('heroSubtitle')}</p>
              </div>
            </div>

          </div>
          {/* <div className="hero-right">
            <div className="section-header">
          </div> */}
  
        {/* </div> */}
        </div>
        {/* <div className="section-footer">
          <Link href="/hero" className="btn btn-secondary">{t('viewAllStories')}</Link>
        </div> */}
    </section>
  )
}

