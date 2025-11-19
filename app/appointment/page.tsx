import './page.css'

export default function AppointmentPage() {
  return (
    <div className="appointment-page">
      <section className="page-hero">
        <div className="container">
          <h1>অ্যাপয়েন্টমেন্ট নিন (Request an Appointment)</h1>
          <p>সীতাকুণ্ড মডার্ন হাসপাতালের বিশেষজ্ঞ ডাক্তারদের সাথে আপনার পরামর্শ বা চিকিৎসার জন্য অ্যাপয়েন্টমেন্ট বুকিং করতে, অনুগ্রহ করে নিচে দেওয়া পদক্ষেপ বা তথ্য পূরণ করুন।</p>
        </div>
      </section>

      {/* অ্যাপয়েন্টমেন্টের অনুরোধ (Request an Appointment) */}
{/* সীতাকুণ্ড মডার্ন হাসপাতালের বিশেষজ্ঞ ডাক্তারদের সাথে আপনার পরামর্শ বা চিকিৎসার জন্য অ্যাপয়েন্টমেন্ট বুকিং করতে, অনুগ্রহ করে নিচে দেওয়া পদক্ষেপ বা তথ্য পূরণ করুন: */}

      <section className="appointment-content section">
        <div className="container">
          <div className="appointment-wrapper">
            <div className="appointment-form-wrapper">
              <h2>আপনার ভিজিট বুক করুন</h2>
              <form className="appointment-form">
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" name="name" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" name="phone" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date">Preferred Date</label>
                    <input type="date" id="date" name="date" required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="speciality">Speciality</label>
                    <select id="speciality" name="speciality" required>
                      <option value="">Select Speciality</option>
                      <option value="cardiology">Cardiology</option>
                      <option value="neurology">Neurology</option>
                      <option value="orthopedics">Orthopedics</option>
                      <option value="oncology">Oncology</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="doctor">Doctor (Optional)</label>
                    <select id="doctor" name="doctor">
                      <option value="">Any Available Doctor</option>
                      <option value="dr-smith">Dr. John Smith</option>
                      <option value="dr-johnson">Dr. Sarah Johnson</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Additional Notes</label>
                  <textarea id="message" name="message" rows={4}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Request Appointment</button>
              </form>
            </div>
            <div className="appointment-info">
              <h3>Appointment Information</h3>
              <div className="info-box">
                <h4>Operating Hours</h4>
                <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                <p>Saturday: 9:00 AM - 1:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
              <div className="info-box">
                <h4>Emergency Services</h4>
                <p>Available 24/7</p>
                <p>Call: <strong>10663</strong></p>
              </div>
              <div className="info-box">
                <h4>Contact</h4>
                <p>Email: appointments@sitakundmodernhospital.com</p>
                <p>ফোনঃ ০১৮৪৯-৭২৭৮৫৮</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

