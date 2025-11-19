'use client'

import Link from 'next/link'
import './Footer.css'
import { useLanguage } from '@/src/contexts/LanguageContext'
import logo from '@/src/assets/images/logo.svg'

import messenger_white from '@/src/assets/icons/messenger_white.svg'
import whatsapp_white from '@/src/assets/icons/whatsapp_white.svg'
import phone_white from '@/src/assets/icons/phone_white.svg'
import email_white from '@/src/assets/icons/email_white.svg'

// import instagram_white from '@/src/assets/icons/instagram_white.svg'
// import linkedin_white from '@/src/assets/icons/linkedin_white.svg'
// import location_white from '@/src/assets/icons/location_white.svg'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column footer-column-left">
            <h3 className="footer-title">{t('teleOnline')}</h3>
            <div className="footer-social-icons">
              <Link href={`tel:${t('phoneNumberEnglish')}`} aria-label="phone" className="social-icon"><img src={phone_white.src} alt="Phone" /></Link>
              <Link href={`https://m.me/${t('messengerAccount')}`} target='_blank' aria-label="Facebook" className="social-icon"><img src={messenger_white.src} alt="Messenger" /></Link>
              <Link href={`https://wa.me/${t('whatsappNumber')}`} target='_blank' aria-label="WhatsApp" className="social-icon"><img src={whatsapp_white.src} alt="WhatsApp" /></Link>
              <Link href={`mailto:${t('emailAddress')}`} aria-label="Email" className="social-icon"><img src={email_white.src} alt="Email" /></Link>

              {/* <Link href="#" aria-label="Instagram" className="social-icon"><img src={instagram_white.src} alt="Instagram" /></Link> */}
              {/* <Link href="#" aria-label="LinkedIn" className="social-icon"><img src={linkedin_white.src} alt="LinkedIn" /></Link> */}
            </div>

            <div className="footer-contact-info">
                  {t('contactUsMessage')}
                  <Link href={`${t('discountOffer')}`} className="footer-privacy-link">{t('ekhane')}</Link>
            </div>  


              {/* <div className="footer-phone">
                <span className="phone-icon">
                    <span>{t('phoneNumber')}</span>
                </span>
              </div> */}
              {/* <p className="footer-email">contact@sitakundmodernhospital.com</p> */}
              {/* <Link href="/privacy" className="footer-privacy-link">{t('privacyPolicy')}</Link>  */}
            </div>



          <div className="footer-column footer-column-center">
              <img className="footer-logo-icon" src={logo.src} alt="logo"/>
                {/* <img className='footer-logo' src={logo.src} alt="logo" /> */}
              <div className="footer-logo-text">
                <div className="footer-logo-main">{t('hospitalName')}</div>
                <div className="footer-logo-subtitle">{t('hospitalChattogram')}</div>
                <div className="footer-logo-tagline">{t('transformingHealthcare')}</div>
              </div>
            {/* <Link href="/contact" className="footer-query-btn">{t('requestAppointment')}</Link> */}
          </div>



          <div className="footer-column footer-column-right">
            {/* <div className="footer-social-icons">
            <img className="social-icon" src={location_white.src} alt="Location" />
            </div> */}

            <h3 className="footer-title">{t('chattogram')}</h3>
            
            <p className="footer-address">
               {t('address')},<br/> {t('addressOne')}
            </p>
            <p className="footer-copyright">
              © {t('copyrightText')} {t('year')} {t('copyright')} {t('allRightsReserved')}
            </p>
            <Link href="/privacy-policy" className="footer-privacy-link">{t('privacyPolicy')}</Link> 

          </div>
        </div>

        <div className="footer-navigation">
          <div className="footer-nav-row">
            <Link href="/find-doctor">{t('findDoctor')}</Link>
            <Link href="/appointment">{t('requestAppointment')}</Link>
            <Link href="/online-report">{t('onlineReport')}</Link>
            <Link href="/patient-visitors">{t('patientVisitorGuide')}</Link>
            <Link href="/patient-stories">{t('patientStories')}</Link>

            {/* <Link href="/specialities">{t('speciality')}</Link> */}
            {/* <Link href="/career">{t('career')}</Link> */}
            {/* <Link href="/health-packages">{t('healthPackage')}</Link> */}
            {/* <Link href="/blog">{t('blogs')}</Link> */}
          </div>
          <div className="footer-nav-row">
            <Link href="/about">{t('aboutUs')}</Link>
            <Link href="/news">{t('newsMedia')}</Link>
            <Link href="/contact">{t('contactUs')}</Link>
            {/* <Link href="/tele-online">{t('teleOnlineLink')}</Link> */}
            {/* <Link href="/privacy">{t('privacyPolicy').replace('.', '')}</Link> */}
          </div>
        </div>
      </div>
    </footer>
  )
}

