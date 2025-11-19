import './page.css'

export default function TeleOnlinePage() {
  return (
    <div className="tele-online-page">
      <section className="page-hero">
        <div className="container">
          <h1>Tele-Online Consultation</h1>
          <p>Consult with our doctors remotely</p>
        </div>
      </section>

      <section className="tele-content section">
        <div className="container">
          <div className="tele-wrapper">
            <div className="tele-info">
              <h2>Virtual Consultations</h2>
              <p>
                Get expert medical advice from the comfort of your home. Our Tele-Online 
                service allows you to consult with our experienced doctors via video call.
              </p>
              <div className="features-list">
                <div className="feature-item">
                  <h3>✓ Convenient</h3>
                  <p>Consult from anywhere, anytime</p>
                </div>
                <div className="feature-item">
                  <h3>✓ Secure</h3>
                  <p>HIPAA-compliant video consultations</p>
                </div>
                <div className="feature-item">
                  <h3>✓ Expert Care</h3>
                  <p>Same quality care as in-person visits</p>
                </div>
              </div>
            </div>
            <div className="tele-form-wrapper">
              <h2>Book a Tele-Online Consultation</h2>
              <form className="tele-form">
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="speciality">Speciality</label>
                  <select id="speciality" name="speciality" required>
                    <option value="">Select Speciality</option>
                    <option value="cardiology">Cardiology</option>
                    <option value="neurology">Neurology</option>
                    <option value="general">General Medicine</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="date">Preferred Date & Time</label>
                  <input type="datetime-local" id="date" name="date" required />
                </div>
                <button type="submit" className="btn btn-primary">Book Consultation</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

