'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import './HeaderNav.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

import logo from '@/src/assets/images/logo.svg'

import home_white from '@/src/assets/icons/home_white_1.svg'
import thunder from '@/src/assets/icons/thunder.svg'
import menu from '@/src/assets/icons/menu.svg'
import location from '@/src/assets/icons/location.svg'
import phone_white from '@/src/assets/icons/phone_white.svg'
// import search_icon from '@/src/assets/icons/search_icon.svg'
// import down_arrow_white from '@/src/assets/icons/down_white.svg'
import down_arrow from '@/src/assets/icons/down_arrow.svg'

import facebook_white from '@/src/assets/icons/facebook_white.svg'
import whatsapp_white from '@/src/assets/icons/whatsapp_white.svg'


export default function HeaderNav() {
  const { language, setLanguage, t } = useLanguage()
  const [showLangDropdown, setShowLangDropdown] = useState(false)
  const langDropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langDropdownRef.current && !langDropdownRef.current.contains(event.target as Node)) {
        setShowLangDropdown(false)
      }
    }

    if (showLangDropdown) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showLangDropdown])

  const handleLanguageChange = (lang: 'en' | 'bn') => {
    setLanguage(lang)
    setShowLangDropdown(false)
  }

  return (
    <div className="header-nav-container">
      <div className="header-nav">
        <div className="container">
          <div className="nav-content">
            <Link href="/" className="logo">
              <div className="logo-icon">
               <Link href="#" aria-label="Facebook" className="social-icon">
                  <img src={logo.src} alt="Messenger" />
               </Link>
              </div>
              <div className="logo-text">
                <div className="logo-main">{t('hospitalName')}</div>
                <div className="logo-subtitle"><img src={location.src} alt="📍" />{t('hospitalChattogram')}</div>
                {/* <div className="logo-tagline">{t('transformingHealthcare')}</div> */}
              </div>
            </Link>
            <ul className="nav-menu">
              {/* <li><Link href="/">{t('home')}</Link></li> */}
              <li className="dropdown">
                <Link href="/specialities">{t('specialities')} 
                  <span className="chevron-down">
                    <img src={down_arrow.src} alt="▼"/>
                  
                  </span></Link>
                <ul className="dropdown-menu">
                  <li><Link href="/specialities/obstetrics-gynaecology">গাইনী ও অবস</Link></li>
                  <li><Link href="/specialities/paediatrics">পেডিয়াট্রিকস</Link></li>
                  <li><Link href="/specialities/accident-emergency">ইমারজেন্সি</Link></li>
                  <li><Link href="/specialities/anaesthesia">এনেস্থেসিয়া</Link></li>
                  <li><Link href="/specialities/general-surgery">সার্জারী</Link></li>
                </ul>
              </li>

              {/*
              <li><Link href="/health-packages">{t('healthCheck')}</Link></li>
              <li><Link href="/online-report">{t('onlineReport')}</Link></li>
              <li><Link href="/patient-stories">{t('patientStories')}</Link></li>
              <li><Link href="/career">{t('career')}</Link></li> */}

              <li><Link href="/find-doctor">{t('findDoctor')}</Link></li>
              <li><Link href="/appointment">{t('requestAppointment')}</Link></li>
              <li><Link href="/online-report">{t('onlineReport')}</Link></li>
              <li><Link href="/about">{t('aboutUs')}</Link></li>
              <li></li>

            </ul>
            <div className="nav-actions">
              <Link href="/guidelines" className="btn btn-secondary">{t('patientVisitorGuide')}</Link>
            </div>

              <div className='menu-div'>
                <img className="menu-icon" src={menu.src} alt="মেনু" />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}



