import './page.css'

export default function OnlineReportPage() {
  return (
    <div className="online-report-page">
      <section className="page-hero">
        <div className="container">
          <h1>অনলাইন রিপোর্ট (Online Report)</h1>
          <p>সীতাকুণ্ড মডার্ন হাসপাতালের ল্যাবরেটরি টেস্ট রিপোর্টগুলি দ্রুত এবং সহজে অ্যাক্সেস করার জন্য নিচে দেওয়া তথ্যগুলি ব্যবহার করুন।</p>
        </div>
      </section>

      <section className="report-content section">
        <div className="container">
          <div className="report-wrapper">
            <div className="report-form-wrapper">
              <h2>রিপোর্ট অ্যাক্সেস করুন</h2>
              <form className="report-form">
                <div className="form-group">
                  <label htmlFor="report-id">রিপোর্ট আইডি</label>
                  <input type="text" id="report-id" name="report-id" placeholder="Enter your report ID" required />
                </div>
                <div className="form-group">
                  <label htmlFor="patient-name">রোগীর নাম</label>
                  <input type="text" id="patient-name" name="patient-name" placeholder="Enter patient name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="date-of-birth">জন্ম তারিখ</label>
                  <input type="date" id="date-of-birth" name="date-of-birth" required placeholder='দিন/মাস/বছর' />
                </div>
                <button type="submit" className="btn btn-primary">রিপোর্ট দেখুন</button>
              </form>
            </div>
            <div className="report-info">
              <h3>কীভাবে আপনার রিপোর্ট অ্যাক্সেস করবেন</h3>
              <div className="info-box">
                <p>আপনার রিপোর্টগুলি দেখতে নিম্নলিখিত ধাপগুলো অনুসরণ করুন:</p>
                <p>১. রিপোর্ট আইডি প্রবেশ করান: পরীক্ষার সময় আপনাকে যে রিপোর্ট আইডিটি দেওয়া হয়েছে, সেটি দিন। </p>
                <p>২. রোগীর নাম এবং জন্ম তারিখ দিন: রোগীর সঠিক নাম এবং জন্ম তারিখ উল্লেখ করুন। </p>
                <p>৩. "রিপোর্ট দেখুন" বাটনে ক্লিক করুন: আপনার পরীক্ষার ফলাফল অ্যাক্সেস করার জন্য এই বাটনে ক্লিক করুন।</p>
              </div>
              <div className="info-box">
                <h4>সাহায্য প্রয়োজন?</h4>
                <p>যদি আপনার রিপোর্ট দেখতে কোনো অসুবিধা হয়, তাহলে অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন: ইমেইল: <strong>reports@sitakundmodernhospital.com</strong></p>
                <p>ফোনঃ <strong>০১৮৪৯-৭২৭৮৫৮</strong></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

