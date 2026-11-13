import React from 'react';
import { MapPin, Mail, Calendar, Clock } from 'lucide-react';

export default function TopContactBar() {
  return (
    <div className="top-contact-bar">
      <div className="container top-bar-container">
        <div className="top-bar-left">
          <div className="top-contact-item" title="IBS Headquarters Location">
            <MapPin size={14} style={{ color: '#14B8A6' }} />
            <span>Hyderabad, India – 500084</span>
          </div>

          <a href="#contact" className="top-contact-item" title="Inquire with IBS">
            <Mail size={14} style={{ color: '#14B8A6' }} />
            <span>Contact &amp; Inquiries: Form Below</span>
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
