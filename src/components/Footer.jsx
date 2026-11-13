import React from 'react';
import { 
  Mail, 
  MapPin, 
  Clock, 
  ChevronRight, 
  Calendar
} from 'lucide-react';
import IBSLogo from './IBSLogo';

// Crisp native SVG icons for brand links
const SocialIcons = {
  LinkedIn: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.9 0-1.63.73-1.63 1.63s.73 1.63 1.63 1.63c.9 0 1.63-.73 1.63-1.63s-.73-1.63-1.63-1.63z" />
    </svg>
  ),
  Twitter: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  Facebook: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
    </svg>
  )
};

export default function Footer() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="footer" style={{ background: '#061729', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="container">
        <div className="footer-top-grid">
          {/* Column 1: Company Logo & Description */}
          <div className="footer-brand-col">
            <div className="brand-main" style={{ marginBottom: 14 }}>
              <IBSLogo variant="footer" size="default" />
            </div>

            <p className="footer-desc" style={{ color: '#94a3b8', lineHeight: 1.6, fontSize: '0.88rem' }}>
              <strong>IBS – Innovative Business Solutions</strong><br />
              "Establishing Connections Across Languages and Cultures"<br />
              Established in February 2021, IBS is a Hyderabad-based provider of professional language translation, interpretation, localization, and multilingual outsourcing solutions designed for modern enterprise agility.
            </p>

            <div className="footer-social-links">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Visit IBS LinkedIn profile" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <SocialIcons.LinkedIn />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Visit IBS Twitter profile" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <SocialIcons.Twitter />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-icon" aria-label="Visit IBS Facebook profile" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <SocialIcons.Facebook />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#ffffff' }}>Navigation</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#home" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#home')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Home</span>
                </a>
              </li>
              <li>
                <a href="#about" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#about')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>About IBS</span>
                </a>
              </li>
              <li>
                <a href="#founder" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#founder')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Meet Our Founder</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Services</span>
                </a>
              </li>
              <li>
                <a href="#quality" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#quality')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Quality Policy</span>
                </a>
              </li>
              <li>
                <a href="#languages" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#languages')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Languages Supported</span>
                </a>
              </li>
              <li>
                <a href="#quote" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#quote')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Request a Quote</span>
                </a>
              </li>
              <li>
                <a href="#contact" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#contact')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Contact Us</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#ffffff' }}>Our Core Services</h4>
            <ul className="footer-nav-list">
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Document Translation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Corporate Translation</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Language Localization</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Audio & Video Transcription</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Business Process Outsourcing</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Back-Office Support</span>
                </a>
              </li>
              <li>
                <a href="#services" className="footer-nav-link" onClick={(e) => handleNavClick(e, '#services')}>
                  <ChevronRight size={14} style={{ color: '#14B8A6' }} />
                  <span>Data Processing</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact Information */}
          <div>
            <h4 className="footer-col-title" style={{ color: '#ffffff' }}>Registered Office</h4>
            
            <div className="footer-contact-item">
              <MapPin size={18} style={{ color: '#14B8A6', flexShrink: 0 }} />
              <div>
                <strong>Location:</strong><br />
                <span>63 B, Sriram Nagar, Kondapur, Hyderabad – 500084, Telangana, India.</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Calendar size={18} style={{ color: '#14B8A6', flexShrink: 0 }} />
              <div>
                <strong>Established:</strong><br />
                <span>February 2021 (5+ Years Delivering Business Solutions)</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Mail size={18} style={{ color: '#14B8A6', flexShrink: 0 }} />
              <div>
                <strong>Email:</strong><br />
                <span>contact@ibs-solutions.in (Placeholder)</span>
              </div>
            </div>

            <div className="footer-contact-item">
              <Clock size={18} style={{ color: '#14B8A6', flexShrink: 0 }} />
              <div>
                <strong>Availability:</strong><br />
                <span>Monday – Saturday | 24/7 Support</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom-bar" style={{ borderColor: 'rgba(255,255,255,0.08)', color: '#94a3b8' }}>
          <div>
            Copyright © 2026 <strong>IBS – Innovative Business Solutions</strong>. All Rights Reserved. Established February 2021.
          </div>
          <div className="footer-bottom-links">
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Privacy Policy</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Terms of Service</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Confidentiality Assurance</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
