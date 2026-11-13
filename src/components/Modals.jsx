import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck, Search, Briefcase, Mail, Layers, FileText, Lock } from 'lucide-react';
import { ALL_SUPPORTED_LANGUAGES } from '../data/languagesData';

/**
 * Accessible Modal Behavior Hook
 * - Closes on Escape key
 * - Locks background body scrolling while open
 * - Restores previous body overflow style upon unmount
 */
function useModalAccessibility(isOpen, onClose) {
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);
}

export function ServiceModal({ service, onClose, onSelectQuoteService }) {
  useModalAccessibility(Boolean(service), onClose);
  if (!service) return null;

  const subservicesList = service.subservices || service.deliverables || [];

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
      <div className="modal-dialog modal-large" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge" style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)', color: '#0D9488' }}>
          {service.tag || 'Corporate Solution'}
        </span>
        <h2 id="service-modal-title" className="modal-title">{service.title}</h2>

        <div className="modal-body">
          <p className="modal-desc">
            {service.fullDescription || service.description}
          </p>

          {/* Included Subservices */}
          {subservicesList.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Layers size={16} style={{ color: '#0D9488' }} />
                <span>Included Services &amp; Capabilities:</span>
              </h4>
              <div className="modal-subservices-grid">
                {subservicesList.map((item, idx) => (
                  <div key={idx} className="modal-checklist-item">
                    <CheckCircle2 size={15} style={{ color: '#0D9488', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Key Enterprise Use Cases */}
          {service.useCases && service.useCases.length > 0 && (
            <div>
              <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: 10, display: 'flex', alignItems: 'center', gap: 6 }}>
                <Briefcase size={16} style={{ color: '#0B2545' }} />
                <span>Key Business Use Cases:</span>
              </h4>
              <ul className="modal-checklist">
                {service.useCases.map((useCase, idx) => (
                  <li key={idx} className="modal-checklist-item">
                    <CheckCircle2 size={15} style={{ color: '#0B2545', flexShrink: 0 }} />
                    <span>{useCase}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.qualityStandard && (
            <div style={{ background: '#f0fdfa', border: '1px solid rgba(13, 148, 136, 0.25)', borderRadius: 8, padding: 12, display: 'flex', alignItems: 'center', gap: 10 }}>
              <ShieldCheck size={20} style={{ color: '#0D9488', flexShrink: 0 }} />
              <div style={{ fontSize: '0.84rem', color: '#1e293b' }}>
                <strong>Quality Focus:</strong> {service.qualityStandard}
              </div>
            </div>
          )}

          {/* Action CTAs */}
          <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-yellow"
              style={{ flex: 1, minWidth: 200, justifyContent: 'center' }}
              onClick={() => {
                onClose();
                if (onSelectQuoteService) onSelectQuoteService(service.title);
              }}
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn-blue-outline"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}
              onClick={() => {
                onClose();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Mail size={15} />
              <span>Contact Office</span>
            </button>
            <button
              type="button"
              className="btn-blue-outline"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function IndustryModal({ industry, onClose, onSelectQuoteIndustry }) {
  useModalAccessibility(Boolean(industry), onClose);
  if (!industry) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="industry-modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge" style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)', color: '#0D9488' }}>
          Industry-Specific Language Solutions
        </span>
        <h2 id="industry-modal-title" className="modal-title">{industry.name}</h2>

        <div className="modal-body">
          <p className="modal-desc">{industry.description}</p>

          <div>
            <h4 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>
              Relevant Language &amp; Outsourcing Services:
            </h4>
            <ul className="modal-checklist">
              {industry.relevantServices.map((srv, idx) => (
                <li key={idx} className="modal-checklist-item">
                  <CheckCircle2 size={16} style={{ color: '#0D9488', flexShrink: 0 }} />
                  <span>{srv}</span>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ display: 'flex', gap: 12, marginTop: 12, flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn-yellow"
              style={{ flex: 1, minWidth: 200, justifyContent: 'center' }}
              onClick={() => {
                onClose();
                if (onSelectQuoteIndustry) {
                  onSelectQuoteIndustry(industry.defaultQuoteService, industry.name);
                }
              }}
            >
              <span>Request a Quote</span>
              <ArrowRight size={16} />
            </button>
            <button
              type="button"
              className="btn-blue-outline"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LanguagesModal({ isOpen, onClose, onSelectLanguage }) {
  useModalAccessibility(isOpen, onClose);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');

  if (!isOpen) return null;

  const regions = ['All', ...Object.keys(ALL_SUPPORTED_LANGUAGES)];

  const filterLanguages = () => {
    let result = [];
    Object.entries(ALL_SUPPORTED_LANGUAGES).forEach(([region, langs]) => {
      if (selectedRegion === 'All' || selectedRegion === region) {
        langs.forEach((lang) => {
          if (
            lang.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            lang.native.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            result.push({ ...lang, region });
          }
        });
      }
    });
    return result;
  };

  const filtered = filterLanguages();

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="languages-modal-title">
      <div className="modal-dialog modal-large" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge" style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)', color: '#0D9488' }}>
          Global Language Coverage
        </span>
        <h2 id="languages-modal-title" className="modal-title">Languages Catalog</h2>
        <p className="modal-desc" style={{ marginBottom: 16 }}>
          Explore our language capabilities across European, Asian, Middle Eastern, and African markets.
        </p>

        {/* Search and Filter */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 16 }}>
          <div style={{ flex: 1, minWidth: 200, position: 'relative' }}>
            <Search size={16} style={{ position: 'absolute', left: 12, top: 12, color: '#94a3b8' }} />
            <input
              type="text"
              className="form-input"
              style={{ paddingLeft: 36 }}
              placeholder="Search by language name or native script..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              aria-label="Search languages by name or native script"
            />
          </div>

          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {regions.map((reg) => (
              <button
                key={reg}
                type="button"
                className={`btn-filter-pill ${selectedRegion === reg ? 'active' : ''}`}
                onClick={() => setSelectedRegion(reg)}
              >
                {reg}
              </button>
            ))}
          </div>
        </div>

        {/* Languages Grid */}
        <div style={{ maxHeight: 340, overflowY: 'auto', paddingRight: 6 }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '30px 0', color: '#64748b' }}>
              No languages match your search query.
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 10 }}>
              {filtered.map((item) => (
                <div
                  key={`${item.region}-${item.name}`}
                  onClick={() => {
                    onSelectLanguage(item.name);
                    onClose();
                  }}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      onSelectLanguage(item.name);
                      onClose();
                    }
                  }}
                  style={{
                    background: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: 8,
                    padding: '10px 14px',
                    display: 'flex',
                    flexDirection: 'column',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#0D9488';
                    e.currentTarget.style.background = '#f0fdfa';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                >
                  <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a' }}>
                    {item.name}
                  </span>
                  <span style={{ fontSize: '0.78rem', color: '#0D9488', fontWeight: 600 }}>
                    {item.native}
                  </span>
                  <span style={{ fontSize: '0.68rem', color: '#94a3b8', marginTop: 4 }}>
                    {item.region}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.8rem', color: '#64748b' }}>
            Showing {filtered.length} languages (Confirmed per project requirements)
          </span>
          <button type="button" className="btn-blue-outline" onClick={onClose} style={{ padding: '8px 18px', fontSize: '0.85rem' }}>
            Close Catalog
          </button>
        </div>
      </div>
    </div>
  );
}

export function BlogModal({ post, onClose }) {
  useModalAccessibility(Boolean(post), onClose);
  if (!post) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="blog-modal-title">
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge" style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)', color: '#0D9488' }}>
          {post.category}
        </span>
        <h2 id="blog-modal-title" className="modal-title" style={{ fontSize: '1.45rem' }}>{post.title}</h2>

        <div style={{ display: 'flex', gap: 14, fontSize: '0.8rem', color: '#64748b', marginBottom: 16 }}>
          <span>{post.date}</span>
          <span>•</span>
          <span>Published by {post.author}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="modal-body">
          <img
            src={post.image}
            alt={post.title}
            width={720}
            height={220}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="720" height="220" viewBox="0 0 720 220"><rect width="100%" height="100%" fill="%230B2545"/><text x="50%" y="50%" font-family="system-ui" font-size="18" font-weight="700" fill="%2314B8A6" text-anchor="middle" dominant-baseline="middle">IBS Insights</text></svg>';
            }}
            style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 8 }}
          />

          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
            {post.summary}
          </p>

          <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.7 }}>
            {post.fullContent || 'At IBS (Innovative Business Solutions), we provide professional language translation and business outsourcing services tailored to corporate standards. Every project is handled with rigorous quality control, strict data confidentiality, and dependable turnaround times.'}
          </p>

          <div style={{ background: '#f8fafc', padding: 16, borderRadius: 8, borderLeft: '4px solid #0D9488' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>
              Looking to consult on language or outsourcing requirements?
            </h4>
            <p style={{ fontSize: '0.82rem', color: '#64748b' }}>
              Connect with Innovative Business Solutions in Hyderabad today for a dedicated assessment.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 8 }}>
            <button type="button" className="btn-yellow" onClick={onClose}>
              Close Article
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export function PolicyModal({ policy, onClose }) {
  useModalAccessibility(Boolean(policy), onClose);
  if (!policy) return null;

  const contentMap = {
    privacy: {
      badge: 'Data Protection & Privacy',
      title: 'IBS Privacy Policy',
      subtitle: 'Commitment to Corporate Confidentiality and Responsible Information Handling',
      lastUpdated: 'February 2026',
      icon: Lock,
      sections: [
        {
          heading: '1. Information We Collect',
          body: 'Innovative Business Solutions (IBS) collects client and contact information strictly necessary for scoping, quotation, and project execution. This includes client contact details (name, corporate email, telephone number, organization name) and source materials submitted for translation, localization, or operational processing.'
        },
        {
          heading: '2. Use of Client Information',
          body: 'Client documentation and contact details are used solely to deliver the agreed-upon professional language and outsourcing services. We do not sell, rent, commercialize, or share client data with external marketers or unauthorized third parties.'
        },
        {
          heading: '3. Data Security & Storage Controls',
          body: 'All client files, translation memories, and back-office datasets are handled through secure infrastructure with strict role-based access controls. Only authorized linguists, QA specialists, and project coordinators assigned to the specific account have access to relevant project files.'
        },
        {
          heading: '4. Non-Disclosure & Confidentiality',
          body: 'All translators, interpreters, and operational personnel working with IBS are bound by strict non-disclosure agreements (NDAs) ensuring complete confidentiality for corporate, legal, technical, and medical materials.'
        },
        {
          heading: '5. Contact for Privacy Inquiries',
          body: 'For questions regarding data protection, document deletion, or privacy protocols, reach our Hyderabad corporate office at 63 B, Sriram Nagar, Kondapur, Hyderabad – 500084, Telangana, India.'
        }
      ]
    },
    terms: {
      badge: 'Corporate Engagement Terms',
      title: 'IBS Terms of Service',
      subtitle: 'Standard Operating Procedures & Service Agreement Framework',
      lastUpdated: 'February 2026',
      icon: FileText,
      sections: [
        {
          heading: '1. Engagement Scope & Quotations',
          body: 'All translation, interpretation, localization, multimedia, and outsourcing engagements are initiated based on a formal project scope, quotation, and approved timeline. Deliverable specifications and milestones are confirmed prior to project kickoff.'
        },
        {
          heading: '2. Professional Quality Standards',
          body: 'IBS provides high-precision human translation, linguistic QA, and business operational support in accordance with documented standard operating procedures and industry quality benchmarks.'
        },
        {
          heading: '3. Intellectual Property Rights',
          body: 'Upon full settlement of agreed project fees, all final deliverables, translated text, localized assets, and customized project materials become the exclusive intellectual property of the client.'
        },
        {
          heading: '4. Client Review & Quality Revisions',
          body: 'Clients are entitled to a defined revision review window following deliverable handover to request terminology alignment, phrasing adjustments, or scope verification consistent with the original project brief.'
        },
        {
          heading: '5. Governing Law',
          body: 'These terms are governed by and construed in accordance with the applicable laws of India, with jurisdiction in Hyderabad, Telangana.'
        }
      ]
    },
    confidentiality: {
      badge: 'Enterprise Security Commitment',
      title: 'IBS Confidentiality Assurance',
      subtitle: 'Strict Non-Disclosure Protocols for Corporate Documentation',
      lastUpdated: 'February 2026',
      icon: ShieldCheck,
      sections: [
        {
          heading: '1. Comprehensive Non-Disclosure Commitment',
          body: 'We understand that your business documents, financial statements, intellectual property, medical records, and legal contracts require absolute discretion. Every engagement is covered by our corporate confidentiality policy and enforceable NDAs.'
        },
        {
          heading: '2. Restricted Project Access Protocols',
          body: 'Access to sensitive source assets is restricted strictly on a need-to-know basis. Translators and specialists access only the specific text files required for their assignment under encrypted transmission.'
        },
        {
          heading: '3. Secure File Retention & Secure Deletion',
          body: 'Project materials are retained only for the duration required for quality validation and project warranty, after which files are safely archived or permanently purged per client instruction.'
        },
        {
          heading: '4. AI & Data Protection Safeguards',
          body: 'Where AI-assisted technology or CAT tools are utilized, client materials are never ingested into public models or shared outside secure enterprise translation pipelines.'
        }
      ]
    }
  };

  const currentPolicy = contentMap[policy] || contentMap.privacy;
  const IconComp = currentPolicy.icon || ShieldCheck;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="policy-modal-title">
      <div className="modal-dialog modal-large" onClick={(e) => e.stopPropagation()} style={{ maxWidth: 760 }}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close policy modal">
          <X size={20} />
        </button>

        <span className="modal-header-badge" style={{ backgroundColor: 'rgba(13, 148, 136, 0.1)', color: '#0D9488' }}>
          <IconComp size={14} style={{ display: 'inline', marginRight: 4 }} />
          {currentPolicy.badge}
        </span>
        <h2 id="policy-modal-title" className="modal-title" style={{ fontSize: '1.5rem', marginBottom: 4 }}>
          {currentPolicy.title}
        </h2>
        <p className="modal-desc" style={{ fontSize: '0.88rem', color: '#64748b', marginBottom: 20 }}>
          {currentPolicy.subtitle} • <em>Effective: {currentPolicy.lastUpdated}</em>
        </p>

        <div className="modal-body" style={{ maxHeight: '60vh', overflowY: 'auto', paddingRight: 8 }}>
          {currentPolicy.sections.map((sec, idx) => (
            <div key={idx} style={{ marginBottom: 18 }}>
              <h4 style={{ fontSize: '0.98rem', fontWeight: 700, color: '#0B2545', marginBottom: 6 }}>
                {sec.heading}
              </h4>
              <p style={{ fontSize: '0.9rem', color: '#334155', lineHeight: 1.65 }}>
                {sec.body}
              </p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 20, paddingTop: 14, borderTop: '1px solid #e2e8f0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <span style={{ fontSize: '0.82rem', color: '#64748b' }}>
            IBS • Kondapur, Hyderabad – 500084, Telangana, India
          </span>
          <div style={{ display: 'flex', gap: 10 }}>
            <button
              type="button"
              className="btn-blue-outline"
              style={{ fontSize: '0.85rem', padding: '8px 16px' }}
              onClick={() => {
                onClose();
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Contact Office
            </button>
            <button
              type="button"
              className="btn-yellow"
              style={{ fontSize: '0.85rem', padding: '8px 18px' }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
