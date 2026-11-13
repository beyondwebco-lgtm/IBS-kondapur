import React from 'react';
import { 
  Target, 
  CheckCheck, 
  Lock, 
  Briefcase, 
  Smile, 
  TrendingUp, 
  ShieldCheck, 
  Award,
  Layers
} from 'lucide-react';

export default function QualityPolicy() {
  const commitments = [
    {
      icon: Target,
      title: 'Translation Accuracy',
      desc: 'Contextually exact translations preserving tone, nuance, industry terminology, and formatting integrity across all projects.'
    },
    {
      icon: CheckCheck,
      title: 'Quality Assurance',
      desc: 'Structured multi-stage review involving bilingual verification, technical consistency checks, and dedicated proofreading.'
    },
    {
      icon: Lock,
      title: 'Data Confidentiality',
      desc: 'Strict non-disclosure commitments, secure data handling procedures, and client privacy protection at every step.'
    },
    {
      icon: Briefcase,
      title: 'Professional Service Delivery',
      desc: 'SLA-driven project management, transparent updates, timely turnaround, and reliable operational support.'
    },
    {
      icon: Smile,
      title: 'Customer Satisfaction',
      desc: 'Responsive support, dedicated customer coordination, clear communication, and collaborative feedback resolution.'
    },
    {
      icon: TrendingUp,
      title: 'Continuous Improvement',
      desc: 'Regular workflow audits, process optimization, and periodic refinement of service methodologies for lasting client success.'
    }
  ];

  return (
    <section id="quality" className="quality-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Commitment to Excellence</span>
          <h2 className="section-title">
            Our <span>Quality Policy</span>
          </h2>
          <p className="section-subtitle">
            At Innovative Business Solutions (IBS), quality is the core principle guiding our language translation and business outsourcing deliverables.
          </p>
        </div>

        {/* 6 Core Quality Commitments Grid */}
        <div className="quality-pillars-grid">
          {commitments.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="quality-pillar-card">
                <div className="quality-pillar-icon">
                  <Icon size={22} />
                </div>
                <div className="quality-pillar-content">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* IBS Quality Assurance & Operational Reliability Banner */}
        <div className="iso-credentials-banner" style={{ background: 'linear-gradient(135deg, #0B2545 0%, #061729 100%)' }}>
          <div className="iso-banner-header">
            <div className="iso-banner-title-group">
              <h3>
                <ShieldCheck size={26} style={{ color: '#14B8A6' }} />
                <span>Our Quality Principles & Operational Standards</span>
              </h3>
              <p>Systematic workflows designed to ensure dependability, accuracy, and client confidence</p>
            </div>
            <div className="iso-verified-tag" style={{ background: 'rgba(20, 184, 166, 0.15)', borderColor: '#14B8A6', color: '#14B8A6' }}>
              <Award size={16} />
              <span>Standardized Procedures</span>
            </div>
          </div>

          <div className="iso-cards-row">
            <div className="iso-badge-card" style={{ borderColor: 'rgba(20, 184, 166, 0.25)' }}>
              <div className="iso-card-top">
                <span className="iso-code-badge" style={{ background: '#0D9488', color: '#ffffff' }}>Translation QA</span>
                <CheckCheck className="iso-seal-icon" size={24} style={{ color: '#14B8A6' }} />
              </div>
              <h4 className="iso-cert-title">Contextual Verification</h4>
              <p className="iso-cert-desc">
                Multi-point linguistic validation ensuring context, terminological fidelity, and clean readability before handover.
              </p>
              <div className="iso-badge-verified-foot" style={{ color: '#14B8A6' }}>
                <CheckCheck size={14} />
                <span>Quality-Focused Workflow</span>
              </div>
            </div>

            <div className="iso-badge-card" style={{ borderColor: 'rgba(20, 184, 166, 0.25)' }}>
              <div className="iso-card-top">
                <span className="iso-code-badge" style={{ background: '#0D9488', color: '#ffffff' }}>Operations</span>
                <Layers className="iso-seal-icon" size={24} style={{ color: '#14B8A6' }} />
              </div>
              <h4 className="iso-cert-title">Process Optimization</h4>
              <p className="iso-cert-desc">
                Disciplined operational routines ensuring predictable turnaround, structured escalation, and consistent execution.
              </p>
              <div className="iso-badge-verified-foot" style={{ color: '#14B8A6' }}>
                <CheckCheck size={14} />
                <span>SLA-Driven Performance</span>
              </div>
            </div>

            <div className="iso-badge-card" style={{ borderColor: 'rgba(20, 184, 166, 0.25)' }}>
              <div className="iso-card-top">
                <span className="iso-code-badge" style={{ background: '#0D9488', color: '#ffffff' }}>Confidentiality</span>
                <Lock className="iso-seal-icon" size={24} style={{ color: '#14B8A6' }} />
              </div>
              <h4 className="iso-cert-title">Data Protection</h4>
              <p className="iso-cert-desc">
                Strict non-disclosure compliance, permission-governed file transfers, and zero unauthorized data access.
              </p>
              <div className="iso-badge-verified-foot" style={{ color: '#14B8A6' }}>
                <CheckCheck size={14} />
                <span>NDA & Privacy Safeguards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
