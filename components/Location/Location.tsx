import React from "react"


// (Both 'google-map-react' and '@next/third-parties/google' have been uninstalled)


export default function Location() {
 return (
    <section className="specialities section">
      <div className="container"></div>
        <div className="section-header">
          <h2 className="section-title">গুগল ম্যাপে আমাদের অবস্থান</h2>
          <p className="section-subtitle">প্রথমবার ডাক্তার দেখানো বা চেকআপ, রোগী ভিজিট, ইমার্জেন্সি বা যেকোনো প্রয়োজনে আমাদের হসপিটালের সঠিক লোকেশন খুঁজে পেতে নিচের ম্যাপ ব্যবহার করুন</p>
        </div>


      <div style={{ width: "100%", height: "450px", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.0328223312035!2d91.65729637530173!3d22.615249479461365!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375332b45d079bdf%3A0x22e9973281029b4e!2sSitakunda%20Modern%20Hospital%20Ltd.!5e0!3m2!1sen!2sbd!4v1763580596593!5m2!1sen!2sbd"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Sitakunda Modern Hospital Location"
        />
      </div>
    </section>


 )
}