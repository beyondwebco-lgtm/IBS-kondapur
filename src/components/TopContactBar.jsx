import React from 'react';
import { MapPin, Mail, Phone, Calendar, Clock } from 'lucide-react';

export default function TopContactBar() {
  return (
    <div className="top-contact-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <div className="top-contact-item" title="IBS Headquarters Location">
            <MapPin size={14} style={{ color: '#14B8A6' }} />
            <span>Hyderabad, India – 500084</span>
          </div>

          <a href="tel:+919502549665" className="top-contact-item" title="Call or WhatsApp IBS at +91 95025 49665">
            <Phone size={14} style={{ color: '#14B8A6' }} />
            <span>+91 95025 49665</span>
          </a>

          <a href="mailto:support@innovativebusinessolutions.com" className="top-contact-item" title="Email IBS Support">
            <Mail size={14} style={{ color: '#14B8A6' }} />
            <span>support@innovativebusinessolutions.com</span>
          </a>

          <span className="top-contact-item" style={{ cursor: 'default' }}>
            <Clock size={14} style={{ color: '#14B8A6' }} />
            <span>Monday – Saturday | Available 24/7</span>
          </span>
        </div>

        <div className="top-bar-right">
          <div className="top-badge-item">
            <Calendar size={13} style={{ color: '#14B8A6' }} />
            <span>Established Feb 2021 • 15+ Years Industry Expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
}
