'use client'

import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'
import './Header.css'
import { useLanguage } from '@/src/contexts/LanguageContext'

import logo from '@/src/assets/images/logo.svg'
import location from '@/src/assets/icons/location.svg'

import home_white from '@/src/assets/icons/home_white_1.svg'
import thunder from '@/src/assets/icons/thunder.svg'
import phone_white from '@/src/assets/icons/phone_white.svg'
import messenger_white from '@/src/assets/icons/messenger_white.svg'
import facebook_white from '@/src/assets/icons/facebook_white.svg'
import whatsapp_white from '@/src/assets/icons/whatsapp_white.svg'

// import search_icon from '@/src/assets/icons/search_icon.svg'
// import down_arrow_white from '@/src/assets/icons/down_white.svg'
import down_arrow from '@/src/assets/icons/down_arrow.svg'



export default function Header() {
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
    <div className="header">
      <div className="header-top">
        <div className="container">
          
          <div className="header-top-content">
            <div className="header-top-left">
              <Link href="/" className="Modernbd-btn">
                <span className="home-icon">
                    <img src={home_white.src} alt="" />
                </span>
              </Link>
              <span className="welcome-text">{t('welcome')}</span>
            </div>
            <div className="header-top-right">
              <div className="header-top-right-div">
                <Link href="/discount-and-offers" className="phone-info">
                    <span className='animation-div'>
                      <span className="phone-icon"><img src={thunder.src} alt="⚡️" /></span>
                      <span className="phone-icon">{t('viewAllOffer')}</span>
                    </span>
                </Link>
                <Link href={`tel:${t('phoneNumberEnglish')}`} className="phone-info">
                    <span className='animation-div'>
                      <span className="phone-icon"><img src={phone_white.src} alt="📞" /></span>
                      <span className="phone-icon">{t('phoneNumber')}</span>
                    </span>
                </Link>
              
                <Link className="phone-info" href={`https://m.me/${t('messengerAccount')}`} target='_blank' aria-label="Messenger">
                    <span className='animation-div'>
                      <img className="phone-icon" src={messenger_white.src} alt="Messenger" />
                      <span className="phone-icon mobile-hidden">{t('messenger')}</span>
                    </span>
                </Link>
                <Link className="phone-info" href={`https://wa.me/${t('whatsappNumber')}`} target='_blank' aria-label="WhatsApp">
                    <span className='animation-div'>
                      <img className="phone-icon" src={whatsapp_white.src} alt="WhatsApp" />
                      <span className="phone-icon mobile-hidden">{t('whatsappPage')}</span>
                    </span>
                </Link>
                <Link className="phone-info" href={t('facebookPageLink')} target='_blank' aria-label="Facebook">
                    <span className='animation-div'>
                      <img className="phone-icon" src={facebook_white.src} alt="Facebook Page" />
                      <span className="phone-icon mobile-hidden">{t('facebookPage')}</span>
                    </span>
                </Link>
              </div>
            </div>


              {/* <div className="search-bar">
                <span className="search-icon">
                <img src={search_icon.src} alt="🔍" />
                </span>
                <input type="text" placeholder={t('search')} className="search-input" />
                </div> */}

              {/* <div className="locations-dropdown">
                  <span className="home-icon">
                  </span> */}
                {/* </Link> */}


              {/* <div
                  className="lang-dropdown" 
                  ref={langDropdownRef}
                  onClick={() => setShowLangDropdown(!showLangDropdown)}
                >
                <span>{language === 'en' ? 'English' : 'বাংলা'}</span>
                <span className="phone-info">
                  <span className="phone-icon"><img src={down_arrow_white.src} alt="📞" /></span>
                </span>
                {showLangDropdown && (
                  <div className="lang-dropdown-menu">
                    <div 
                      className={`lang-option ${language === 'bn' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLanguageChange('bn')
                      }}
                    >
                      বাংলা
                    </div>
                    <div 
                      className={`lang-option ${language === 'en' ? 'active' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation()
                        handleLanguageChange('en')
                      }}
                    >
                      English
                    </div>
                  </div>
                )}
              </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}



