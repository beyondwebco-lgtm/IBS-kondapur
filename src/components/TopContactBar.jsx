import React from 'react';
import { MapPin, Mail, Phone, Clock } from 'lucide-react';

export default function TopContactBar() {
  return (
    <div className="top-contact-bar" role="region" aria-label="Contact Information">
      <div className="container top-bar-container">
        {/* Contact Group 1: Location & Phone */}
        <div className="top-contact-group top-group-primary">
          <div className="top-contact-item top-location-item" title="IBS Headquarters Location">
            <MapPin size={13} className="top-icon" aria-hidden="true" />
            <span>Hyderabad, India – 500084</span>
          </div>

          <span className="top-divider" aria-hidden="true" />

          <a
            href="tel:+919502549665"
            className="top-contact-item top-phone-item"
            title="Call or WhatsApp IBS at +91 95025 49665"
            aria-label="Phone: +91 95025 49665"
          >
            <Phone size={13} className="top-icon" aria-hidden="true" />
            <span>+91 95025 49665</span>
          </a>
        </div>

        {/* Desktop Divider between groups */}
        <span className="top-divider top-group-divider" aria-hidden="true" />

        {/* Contact Group 2: Email & Operating Hours */}
        <div className="top-contact-group top-group-secondary">
          <a
            href="mailto:support@innovativebusinessolutions.com"
            className="top-contact-item top-email-item"
            title="Email IBS Support at support@innovativebusinessolutions.com"
            aria-label="Email: support@innovativebusinessolutions.com"
          >
            <Mail size={13} className="top-icon" aria-hidden="true" />
            <span>support@innovativebusinessolutions.com</span>
          </a>

          <span className="top-divider" aria-hidden="true" />

          <span
            className="top-contact-item top-schedule-item"
            title="Operating Hours: Monday – Saturday | Available 24/7"
            style={{ cursor: 'default' }}
          >
            <Clock size={13} className="top-icon" aria-hidden="true" />
            <span>Monday – Saturday | Available 24/7</span>
          </span>
        </div>
      </div>
    </div>
  );
}
