import './page.css'

export default function FindDoctorPage() {
  return (
    <div className="find-doctor-page">
      <section className="page-hero">
        <div className="container">
          <h1>ডাক্তার খুঁজুন</h1>
          <p>আমাদের বিশেষজ্ঞ চিকিৎসা দল অনুসন্ধান করুন</p>
        </div>
      </section>

      <section className="doctor-search section">
        <div className="container">
          {/* <div className="search-wrapper">
            <div className="search-filters">
              <input type="text" placeholder="Search by name..." className="search-input" />
              <select className="filter-select">
                <option value="">All Specialities</option>
                <option value="cardiology">গাইনী ও অবস</option>
                <option value="neurology">পেডিয়াট্রিকস</option>
                <option value="orthopedics">সার্জারী</option>
                <option value="oncology">ইমারজেন্সি</option>
              </select>
              <button className="btn btn-primary">Search</button>
            </div>
          </div> */}
          <div className="doctors-grid">
            <div className="doctor-card">
              <h3>ডাঃ আফরোজা তালুকদার</h3>
              <p className="speciality">স্ত্রীরোগ ও ধাত্রীবিদ্যায় অভিজ্ঞ সার্জন</p>
              <p className="qualification">এম.বি.বি.এস, সিজিটি (অবস ও গাইনী)</p>
              <p className="qualification">সাবেক মেডিকেল অফিসার, সারাফত জেবিন মেমোরিয়াল হাসপাতাল, সৌদি আরব। সাবেক রেসিডেন্ট ডাক্তার, জহুরুল ইসলাম মেডিকেল কলেজ হাসপাতাল, বাজিতপুর, কিশোরগঞ্জ</p>
              <p>বিএমডিসি রেজিঃ নং: এ-২৫২৫৪</p>
              <p>সাক্ষাৎকারের সময়ঃ	শুক্রবার থেকে বুধবার, সকাল ১০টা - ১টা</p>
              <p>সিরিয়ালের জন্যঃ	০১৮৩৪-৭২৭৮৫৮, ০১৯৯৪-৩০০৮২৯</p>
              <button className="btn btn-secondary">এপয়েন্টমেন্ট বুক করুন</button>
            </div>
            <div className="doctor-card">
              <h3>ডাঃ বিজয় তালুকদার</h3>
              <p className="speciality">নবজাতক ও শিশুরোগ বিশেষজ্ঞ</p>
              <p className="qualification">এম.বি.বি.এস, এম.ডি (শিশু স্বাস্থ্য)</p>
              <p className="qualification">বঙ্গবন্ধু শেখ মুজিব মেডিকেল বিশ্ববিদ্যালয়, কনসালটেন্ট (এন.আই.সি.ইউ এবং পি.আই.সি.ইউ) মেডিকেল সেন্টার হাসপাতাল, চট্টগ্রাম। চট্টগ্রাম মা ও শিশু জেনারেল হাসপাতাল, চট্টগ্রাম (সাবেক)</p>
              <p>বিএমডিসি রেজিঃ নং	এ-৫৭৬৯৮</p>
              <p>সাক্ষাৎকারের সময়ঃ	প্রতিদিন বিকাল ৪টা - ৬টা, বৃহস্পতিবার বন্ধ</p>
              <p>সিরিয়ালের জন্যঃ	০১৮৩৪-৭২৭৮৫৮, ০১৯৯৪-৩০০৮২৯</p>
              <button className="btn btn-secondary">এপয়েন্টমেন্ট বুক করুন</button>
            </div>
            <div className="doctor-card">
              <h3>ডাঃ জয় প্রকাশ দে</h3>
              <p className="speciality">নাক, কান, গলা রোগ অভিজ্ঞ</p>
              <p className="qualification">এম.বি.বি.এস, বিসিএস (স্বাস্থ্য), এম.এস (কোর্স)</p>
              <p className="qualification">ট্রাম মেডিকেল কলেজ ও হাসপাতাল (সম্ভবত চট্টগ্রাম মেডিকেল কলেজ ও হাসপাতাল বোঝানো হয়েছে)</p>
              <p>বিএমডিসি রেজিঃ নং	এ-৮৩৬৪৬</p>
              <p>সাক্ষাৎকারের সময়ঃ	প্রতিদিন বিকাল ৪টা - ৬টা, শুক্রবার ও মঙ্গলবার বন্ধ</p>
              <p>সিরিয়ালের জন্যঃ	০১৮৩৪-৭২৭৮৫৮, ০১৯৯৪-৩০০৮২৯</p>
              <button className="btn btn-secondary">এপয়েন্টমেন্ট বুক করুন</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

