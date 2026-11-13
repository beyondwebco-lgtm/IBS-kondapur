import React from 'react';
import { 
  CheckCircle, 
  Shield, 
  Zap, 
  MapPin, 
  Building2, 
  User, 
  Quote, 
  Calendar, 
  Briefcase, 
  Sparkles, 
  ShieldCheck 
} from 'lucide-react';

export default function AboutUs({ onOpenQuote }) {
  return (
    <section id="about" className="about-section">
      <div className="container">
        {/* =========================================================
            Part 1: Company Story & Hyderabad Global Hub
        ========================================================= */}
        <div className="about-grid">
          {/* Left Column: Heading, Company Content & Highlights */}
          <div className="about-text-content">
            <span className="section-tag">15+ Years of Expertise. 5+ Years of Business Excellence.</span>
            <h2 className="section-title">
              Built on Expertise. <span>Driven by Global Communication.</span>
            </h2>

            <p className="about-paragraph-primary">
              Established in February 2021 in Hyderabad, Innovative Business Solutions delivers professional language and outsourcing solutions to organizations seeking effective communication across markets. Guided by experienced leadership and a commitment to quality, IBS combines linguistic expertise, technology and flexible delivery models to support evolving business needs.
            </p>

            <p className="about-paragraph-secondary">
              Established in February 2021, Innovative Business Solutions has built over five years of experience helping organizations overcome language barriers and streamline business operations—led by Abburi Tanuja, a seasoned professional bringing over 15 years of industry expertise in language services and business solutions.
            </p>

            <div className="about-features-list">
              <div className="about-feature-item">
                <CheckCircle className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>Rigorous Translation Quality</h4>
                  <p>Contextually accurate translations preserving nuance, tone, and technical terminology.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Shield className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>Strict Data Confidentiality</h4>
                  <p>Dedicated confidentiality protocols ensuring complete safety for your business documentation.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Building2 className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>Dedicated Outsourcing Support</h4>
                  <p>Flexible back-office, administrative, and operational assistance tailored to your processes.</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Zap className="about-feature-icon" size={20} />
                <div className="about-feature-text">
                  <h4>Dependable Turnaround Times</h4>
                  <p>SLA-driven project execution with dedicated communication at every milestone.</p>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                className="btn-yellow"
                aria-label="Request a customized proposal and partner with IBS"
                onClick={() => {
                  if (onOpenQuote) onOpenQuote();
                  else {
                    const el = document.getElementById('quote');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <span>Partner With IBS</span>
              </button>
            </div>
          </div>

          {/* Right Column: Hyderabad Operational Hub & Communication Network Map */}
          <div className="about-map-card">
            <div className="map-bg-mesh" />

            <div className="map-header-row">
              <div className="map-title">Based in Hyderabad. Supporting Business Communication.</div>
              <div className="map-globe-badge">
                <MapPin size={14} />
                <span>Hyderabad, Telangana, India</span>
              </div>
            </div>

            {/* SVG Global Communication Map Vector centered on Hyderabad */}
            <div className="map-svg-container">
              <svg viewBox="0 0 540 280" style={{ width: '100%', height: 'auto' }} fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="curveGradIBS" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#14B8A6" stopOpacity="0.8" />
                    <stop offset="50%" stopColor="#ffffff" stopOpacity="0.9" />
                    <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="glowIBS" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* Stylized world land silhouettes */}
                <path d="M70,70 Q110,60 140,75 Q160,110 130,135 Q100,120 80,105 Z" fill="rgba(255,255,255,0.12)" />
                <path d="M130,145 Q160,150 170,195 Q145,245 125,230 Q115,185 130,145 Z" fill="rgba(255,255,255,0.12)" />
                <path d="M235,65 Q275,60 295,85 Q285,115 250,110 Q235,90 235,65 Z" fill="rgba(255,255,255,0.16)" />
                <path d="M240,120 Q290,115 295,160 Q280,220 250,210 Q230,165 240,120 Z" fill="rgba(255,255,255,0.12)" />
                <path d="M305,65 Q395,50 435,100 Q400,160 355,145 Q335,155 330,175 Q310,135 305,65 Z" fill="rgba(255,255,255,0.24)" />
                <path d="M410,185 Q465,180 475,220 Q435,245 405,225 Z" fill="rgba(255,255,255,0.12)" />

                {/* Communication network curved connecting arcs from Hyderabad */}
                <path d="M125,95 Q230,40 338,155" stroke="url(#curveGradIBS)" strokeWidth="1.6" strokeDasharray="4 4" opacity="0.8" />
                <path d="M265,85 Q300,110 338,155" stroke="url(#curveGradIBS)" strokeWidth="1.8" opacity="0.85" />
                <path d="M338,155 Q385,115 420,95" stroke="url(#curveGradIBS)" strokeWidth="1.6" strokeDasharray="3 3" opacity="0.75" />
                <path d="M338,155 Q380,195 435,210" stroke="url(#curveGradIBS)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.7" />
                <path d="M140,185 Q240,200 338,155" stroke="url(#curveGradIBS)" strokeWidth="1.4" strokeDasharray="3 3" opacity="0.65" />

                {/* Hub Node: Hyderabad (HQ) */}
                <circle cx="338" cy="155" r="9" fill="#14B8A6" filter="url(#glowIBS)" />
                <circle cx="338" cy="155" r="5" fill="#ffffff" />
                <circle cx="338" cy="155" r="16" stroke="#14B8A6" strokeWidth="1.2" opacity="0.6">
                  <animate attributeName="r" values="8;20;8" dur="2.5s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.8;0;0.8" dur="2.5s" repeatCount="indefinite" />
                </circle>
                <text x="338" y="182" fill="#ffffff" fontSize="12" fontWeight="800" textAnchor="middle">
                  Hyderabad (IBS HQ)
                </text>
                <text x="338" y="196" fill="#99f6e4" fontSize="9.5" fontWeight="600" textAnchor="middle">
                  Telangana, India
                </text>

                {/* Regional Connected Points */}
                <circle cx="265" cy="85" r="4" fill="#ffffff" opacity="0.85" />
                <circle cx="125" cy="95" r="4" fill="#ffffff" opacity="0.85" />
                <circle cx="420" cy="95" r="4" fill="#ffffff" opacity="0.85" />
                <circle cx="435" cy="210" r="4" fill="#ffffff" opacity="0.85" />
              </svg>
            </div>

            {/* Verified Company & Leadership Statistics Strip */}
            <div className="map-stats-strip">
              <div className="map-stat-col">
                <span className="val">15+ Years</span>
                <span className="lbl">Industry Expertise</span>
              </div>
              <div className="map-stat-col">
                <span className="val">5+ Years</span>
                <span className="lbl">Delivering Business Solutions</span>
              </div>
              <div className="map-stat-col">
                <span className="val">Feb 2021</span>
                <span className="lbl">Established</span>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================
            Part 2: Executive Leadership & Founder (Abburi Tanuja)
        ========================================================= */}
        <div id="founder" className="about-founder-integration">
          <div className="about-founder-header text-center">
            <span className="section-tag">Executive Leadership</span>
            <h3 className="section-title" style={{ fontSize: '1.9rem', marginBottom: 8 }}>
              Meet Our Founder — <span>Abburi Tanuja</span>
            </h3>
            <p className="section-subtitle" style={{ maxWidth: 660, margin: '0 auto 32px' }}>
              Over 15 Years of Industry Expertise. A Vision for Global Communication.
            </p>
          </div>

          <div className="founder-card-container">
            {/* Left Column: Founder Photo Placeholder & Core Identity */}
            <div className="founder-profile-col">
              <div className="founder-photo-frame">
                {/* Elegant Placeholder Avatar Container */}
                <div className="founder-avatar-placeholder" role="img" aria-label="Founder Abburi Tanuja profile photo placeholder">
                  <div className="founder-initials-badge">AT</div>
                  <div className="founder-photo-icon-overlay">
                    <User size={38} strokeWidth={1.8} />
                  </div>
                </div>
                <div className="founder-photo-notice">
                  <span>Photograph to be updated</span>
                </div>
              </div>

              <div className="founder-identity">
                <h4 className="founder-name">Abburi Tanuja</h4>
                <p className="founder-role">Founder, Innovative Business Solutions</p>

                <div className="founder-badges-stack">
                  <div className="founder-badge-pill" style={{ backgroundColor: 'rgba(13, 148, 136, 0.12)', color: '#0F766E', borderColor: 'rgba(13, 148, 136, 0.3)', fontWeight: 700 }}>
                    <Briefcase size={14} />
                    <span>15+ Years Industry Expertise</span>
                  </div>
                  <div className="founder-badge-pill">
                    <Calendar size={14} />
                    <span>Founded IBS: Feb 2021</span>
                  </div>
                  <div className="founder-badge-pill">
                    <MapPin size={14} />
                    <span>Hyderabad, Telangana</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Vision, Leadership & Biography */}
            <div className="founder-content-col">
              {/* Vision & Leadership Statement */}
              <div className="founder-vision-box">
                <div className="founder-quote-icon">
                  <Quote size={28} />
                </div>
                <div className="founder-quote-body">
                  <h5 className="founder-block-title">Vision &amp; Leadership Statement</h5>
                  <p className="founder-quote-text">
                    "At IBS, our purpose is to bridge communication gaps and deliver dependable operational support for growing enterprises. By pairing linguistic precision with disciplined business outsourcing, we help organizations work efficiently, connect meaningfully with their audiences, and achieve sustainable growth."
                  </p>
                  <div className="founder-quote-signoff">
                    — <strong>Abburi Tanuja</strong>, Founder
                  </div>
                </div>
              </div>

              {/* Biography */}
              <div className="founder-detail-block">
                <h5 className="founder-block-title">
                  <Sparkles size={18} style={{ color: '#0D9488' }} />
                  <span>Biography &amp; Industry Leadership</span>
                </h5>
                <p className="founder-detail-text">
                  With over 15 years of professional experience in the field, Abburi Tanuja brings valuable industry knowledge, leadership and a deep understanding of evolving business communication needs. Her vision guides Innovative Business Solutions in delivering reliable, quality-focused language and outsourcing solutions for organizations operating across markets.
                </p>
              </div>

              {/* Company History Distinction */}
              <div className="founder-detail-block biography-placeholder-box">
                <h5 className="founder-block-title">
                  <ShieldCheck size={18} style={{ color: '#0B2545' }} />
                  <span>15+ Years of Expertise. 5+ Years of Business Excellence.</span>
                </h5>
                <p className="founder-detail-text text-muted">
                  Led by Abburi Tanuja, a seasoned professional bringing over 15 years of industry expertise in language services and business solutions, IBS was established in February 2021 and has built over five years of experience delivering business solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
