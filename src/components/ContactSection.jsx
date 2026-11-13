import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send, 
  Building2, 
  ExternalLink, 
  CheckCircle2 
} from 'lucide-react';

export default function ContactSection() {
  const [inquiryData, setInquiryData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!inquiryData.name.trim()) errs.name = 'Please enter your name';
    if (!inquiryData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!inquiryData.message.trim()) errs.message = 'Please enter your message';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">
            Contact <span>IBS</span>
          </h2>
          <p className="section-subtitle">
            Have a question about language translation projects, outsourcing solutions, or enterprise partnerships? Reach out to our Hyderabad office today.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left Column: Contact Cards, Google Maps Integration */}
          <div className="contact-info-col">
            <div className="contact-cards-list">
              {/* Registered Corporate Office */}
              <div className="contact-item-card">
                <div className="contact-icon-box" style={{ backgroundColor: '#0B2545', color: '#ffffff' }}>
                  <Building2 size={22} />
                </div>
                <div className="contact-details">
                  <h4>Corporate Office</h4>
                  <p><strong>IBS – Innovative Business Solutions</strong></p>
                  <p>63 B, Sriram Nagar, Kondapur, Hyderabad – 500084, Telangana, India.</p>
                  <span className="note">Established February 2021 • 5+ Years Delivering Business Solutions</span>
                </div>
              </div>

              {/* Direct Telephone (Placeholder) */}
              <div className="contact-item-card">
                <div className="contact-icon-box" style={{ backgroundColor: '#0D9488', color: '#ffffff' }}>
                  <Phone size={22} />
                </div>
                <div className="contact-details">
                  <h4>Telephone Inquiries</h4>
                  <p style={{ color: '#0B2545', fontWeight: 600 }}>+91 (Contact Pending Confirmation)</p>
                  <span className="note">Monday – Saturday | 24/7 Support</span>
                </div>
              </div>

              {/* Email Inquiries (Placeholder) */}
              <div className="contact-item-card">
                <div className="contact-icon-box" style={{ backgroundColor: '#0B2545', color: '#ffffff' }}>
                  <Mail size={22} />
                </div>
                <div className="contact-details">
                  <h4>Email Inquiries</h4>
                  <p style={{ color: '#0B2545', fontWeight: 600 }}>contact@ibs-solutions.in</p>
                  <span className="note">Official business email pending final setup</span>
                </div>
              </div>
            </div>

            {/* Google Maps Integration for Kondapur, Hyderabad */}
            <div className="map-placeholder-card">
              <div className="map-embed-mockup" style={{ background: '#0B2545' }}>
                <div className="map-grid-lines" />
                <div className="map-marker-pin">
                  <div className="map-pin-bubble" style={{ background: '#0D9488', color: '#ffffff' }}>
                    IBS Hyderabad (Kondapur)
                  </div>
                  <div className="map-pin-point" style={{ borderTopColor: '#0D9488' }} />
                </div>
              </div>
              <div className="map-card-footer">
                <div className="map-location-text">
                  <MapPin size={14} style={{ display: 'inline', marginRight: 4, color: '#0D9488' }} />
                  <span>Kondapur, Hyderabad – 500084, Telangana</span>
                </div>
                <a
                  href="https://maps.google.com/?q=63+B+Sriram+Nagar+Kondapur+Hyderabad+500084"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="map-directions-btn"
                  aria-label="Open IBS office location in Google Maps - 63 B Sriram Nagar, Kondapur, Hyderabad"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="contact-form-card">
            <h3 className="contact-form-title">Send Us a Direct Message</h3>
            <p className="contact-form-subtitle">
              Fill in your details below and our team will get in touch with you promptly.
            </p>

            {submitted ? (
              <div className="contact-success-box" style={{ textAlign: 'center', padding: '30px 20px' }}>
                <div style={{ display: 'inline-flex', padding: 12, borderRadius: '50%', background: '#fef3c7', color: '#b45309', marginBottom: 12 }}>
                  <CheckCircle2 size={36} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#0B2545', fontWeight: 700 }}>Message Preview Prepared (Demo Mode)</h4>
                <p style={{ fontSize: '0.9rem', color: '#475569', marginTop: 8 }}>
                  Your message details were validated locally. Backend email delivery is not yet configured on this site, so this message has not been transmitted to IBS.
                </p>
                <button
                  type="button"
                  className="btn-blue-outline"
                  style={{ marginTop: 16 }}
                  onClick={() => {
                    setSubmitted(false);
                    setInquiryData({ name: '', email: '', subject: '', message: '' });
                  }}
                >
                  Prepare Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-form-group">
                  <label className="form-label" htmlFor="contactName">
                    Your Full Name <span className="req">*</span>
                  </label>
                  <input
                    type="text"
                    id="contactName"
                    className={`form-input ${errors.name ? 'error' : ''}`}
                    placeholder="e.g. Priyadarshini Rao"
                    value={inquiryData.name}
                    onChange={(e) => {
                      setInquiryData({ ...inquiryData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                  />
                  {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

                <div className="contact-form-group">
                  <label className="form-label" htmlFor="contactEmail">
                    Business Email Address <span className="req">*</span>
                  </label>
                  <input
                    type="email"
                    id="contactEmail"
                    className={`form-input ${errors.email ? 'error' : ''}`}
                    placeholder="e.g. priya@enterprise.com"
                    value={inquiryData.email}
                    onChange={(e) => {
                      setInquiryData({ ...inquiryData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                  />
                  {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="contact-form-group">
                  <label className="form-label" htmlFor="contactSubject">
                    Subject / Service Area
                  </label>
                  <input
                    type="text"
                    id="contactSubject"
                    className="form-input"
                    placeholder="e.g. Translation Inquiry or BPO Consultation"
                    value={inquiryData.subject}
                    onChange={(e) => setInquiryData({ ...inquiryData, subject: e.target.value })}
                  />
                </div>

                <div className="contact-form-group">
                  <label className="form-label" htmlFor="contactMessage">
                    Message <span className="req">*</span>
                  </label>
                  <textarea
                    id="contactMessage"
                    rows={4}
                    className={`form-input ${errors.message ? 'error' : ''}`}
                    placeholder="How can Innovative Business Solutions assist your organization?"
                    value={inquiryData.message}
                    onChange={(e) => {
                      setInquiryData({ ...inquiryData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                  />
                  {errors.message && <span className="error-text">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="btn-yellow contact-submit-btn"
                >
                  <span>Submit Message</span>
                  <Send size={15} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
