import './page.css'

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with us</p>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-wrapper">
            <div className="contact-info">
              <h2>Get in Touch</h2>
              <div className="info-item">
                <h3>Emergency</h3>
                <p>০১৮৪৯-৭২৭৮৫৮</p>
              </div>
              <div className="info-item">
                <h3>Email</h3>
                <p>info@sitakundmodernhospital.com</p>
              </div>
              <div className="info-item">
                <h3>Address</h3>
                <p>123 Medical Street<br />Healthcare City<br />Country</p>
              </div>
              <div className="info-item">
                <h3>Operating Hours</h3>
                <p>24/7 Emergency Services<br />OPD: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
            <div className="contact-form-wrapper">
              <h2>Send Us a Message</h2>
              <form className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" name="phone" />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

