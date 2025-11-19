import './page.css'

export default function CareerPage() {
  return (
    <div className="career-page">
      <section className="page-hero">
        <div className="container">
          <h1>Career</h1>
          <p>Join our team of healthcare professionals</p>
        </div>
      </section>

      <section className="career-content section">
        <div className="container">
          <div className="career-intro">
            <h2>Why Work With Us</h2>
            <p>
              Join Modern Hospital and be part of a team dedicated to transforming healthcare. 
              We offer competitive benefits, professional development opportunities, and a 
              supportive work environment.
            </p>
          </div>

          <div className="job-listings">
            <h2>Current Openings</h2>
            <div className="jobs-grid">
              <div className="job-card">
                <h3>Senior Cardiologist</h3>
                <p className="job-location">Full-time • Department of Cardiology</p>
                <p className="job-description">We are seeking an experienced cardiologist to join our team.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
              <div className="job-card">
                <h3>Registered Nurse</h3>
                <p className="job-location">Full-time • Multiple Departments</p>
                <p className="job-description">Join our nursing team and make a difference in patient care.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
              <div className="job-card">
                <h3>Medical Technologist</h3>
                <p className="job-location">Full-time • Laboratory</p>
                <p className="job-description">Opportunity for experienced medical technologist.</p>
                <button className="btn btn-primary">Apply Now</button>
              </div>
            </div>
          </div>

          <div className="career-contact">
            <h3>Interested in joining our team?</h3>
            <p>Send your resume to: <strong>careers@sitakundmodernhospital.com</strong></p>
          </div>
        </div>
      </section>
    </div>
  )
}

