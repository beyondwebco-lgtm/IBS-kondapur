import React from 'react';
import { MapPin, Mail, Phone, Calendar, Clock } from 'lucide-react';

export default function TopContactBar() {
  return (
    <div className="top-contact-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <div className="top-contact-item top-location-item" title="IBS Headquarters Location">
            <MapPin size={13} className="top-icon" />
            <span>Hyderabad, India – 500084</span>
          </div>

          <span className="top-divider d-desktop" aria-hidden="true" />

          <a href="tel:+919502549665" className="top-contact-item top-phone-item" title="Call or WhatsApp IBS at +91 95025 49665">
            <Phone size={13} className="top-icon" />
            <span>+91 95025 49665</span>
          </a>

          <span className="top-divider d-desktop" aria-hidden="true" />

          <a href="mailto:support@innovativebusinessolutions.com" className="top-contact-item top-email-item" title="Email IBS Support">
            <Mail size={13} className="top-icon" />
            <span>support@innovativebusinessolutions.com</span>
          </a>

          <span className="top-divider d-lg" aria-hidden="true" />

          <span className="top-contact-item top-schedule-item" title="Operating Hours" style={{ cursor: 'default' }}>
            <Clock size={13} className="top-icon" />
            <span>Monday – Saturday | Available 24/7</span>
          </span>
        </div>

        <div className="top-bar-right">
          <div className="top-badge-item">
            <Calendar size={13} className="top-icon" />
            <span>Established Feb 2021 • 15+ Years Industry Expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
}
