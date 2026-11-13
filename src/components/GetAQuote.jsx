import React, { useState } from 'react';
import {
  Send,
  UploadCloud,
  FileCheck,
  Info,
  X,
  ShieldCheck,
  Clock,
  Building2
} from 'lucide-react';
import { MAJOR_SERVICES } from '../data/servicesData';
import { ALL_LANGUAGE_NAMES } from '../data/languagesData';
import { INDUSTRIES_DATA } from '../data/industriesData';

export default function GetAQuote({
  prefillService,
  prefillSourceLang,
  prefillTargetLang,
  prefillIndustry
}) {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
    serviceRequired: prefillService || '',
    sourceLanguage: prefillSourceLang || 'English',
    targetLanguage: prefillTargetLang || '',
    industry: prefillIndustry || '',
    projectDescription: ''
  });

  const [uploadedFile, setUploadedFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [previewSummary, setPreviewSummary] = useState(null);

  const serviceOptions = [
    {
      group: 'Language & Localization Services',
      items: MAJOR_SERVICES.filter((s) => s.group === 'language').map((s) => s.title)
    },
    {
      group: 'Audio, Video & DTP Services',
      items: MAJOR_SERVICES.filter((s) => s.group === 'media').map((s) => s.title)
    },
    {
      group: 'QA, AI, Language Data & Research',
      items: MAJOR_SERVICES.filter((s) => s.group === 'qa-ai').map((s) => s.title)
    },
    {
      group: 'Outsourcing and Consulting Services',
      items: [
        ...MAJOR_SERVICES.filter((s) => s.group === 'outsourcing').map((s) => s.title),
        'Back-Office & Administrative Support',
        'Data Processing & Operational Assistance'
      ]
    }
  ];

  const languageOptions = [...ALL_LANGUAGE_NAMES, 'Other / Not Listed'];
  const industryOptions = [...INDUSTRIES_DATA.map((ind) => ind.name), 'Other / General Business'];

  const isLanguageServiceSelected = () => {
    if (!formData.serviceRequired) return false;
    const matched = MAJOR_SERVICES.find((s) => s.title === formData.serviceRequired);
    if (matched) return matched.isLanguageService;
    const s = formData.serviceRequired.toLowerCase();
    return (
      s.includes('translation') ||
      s.includes('localization') ||
      s.includes('interpretation') ||
      s.includes('transcription') ||
      s.includes('subtitling') ||
      s.includes('dubbing') ||
      s.includes('language') ||
      s.includes('multilingual')
    );
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Please enter your full name';
    if (!formData.email.trim()) {
      errs.email = 'Business email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = 'Phone number is required';
    } else if (!/^[\d+\-\s()]{7,18}$/.test(formData.phoneNumber)) {
      errs.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.serviceRequired) {
      errs.serviceRequired = 'Please select a required service';
    }

    if (isLanguageServiceSelected()) {
      if (!formData.sourceLanguage) {
        errs.sourceLanguage = 'Please specify source language';
      }
      if (!formData.targetLanguage) {
        errs.targetLanguage = 'Please specify target language';
      }
    }

    if (!formData.projectDescription.trim()) {
      errs.projectDescription = 'Please provide a brief project overview';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setUploadedFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setTimeout(() => {
        setPreviewSummary({
          ...formData,
          fileName: uploadedFile ? uploadedFile.name : null
        });
        setIsSubmitting(false);
      }, 300);
    }
  };

  const handleReset = () => {
    setPreviewSummary(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phoneNumber: '',
      serviceRequired: '',
      sourceLanguage: 'English',
      targetLanguage: '',
      industry: '',
      projectDescription: ''
    });
    setUploadedFile(null);
    setErrors({});
  };

  return (
    <section id="quote" className="quote-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Project Enquiry</span>
          <h2 className="section-title">
            Request a <span>Free Quote</span>
          </h2>
          <p className="section-subtitle">
            Share your translation, interpretation, localization, or multilingual outsourcing requirements to outline a tailored project scope with IBS.
          </p>
        </div>

        <div className="quote-grid">
          {/* Left Column: Information & Support */}
          <div className="quote-info-card">
            <div>
              <span className="section-tag light" style={{ marginBottom: 12 }}>
                Hyderabad, India – 500084
              </span>
              <h3 className="quote-info-title">Tailored Language &amp; Outsourcing Solutions</h3>
              <p className="quote-info-desc">
                From specialized translation, interpretation, and subtitling to outsourcing, consulting, and back-office operations, IBS coordinates structured delivery aligned with your business goals.
              </p>
            </div>

            <div className="quote-guarantees-list">
              <div className="guarantee-item">
                <Clock size={20} />
                <span>Monday – Saturday | 24/7 Support</span>
              </div>
              <div className="guarantee-item">
                <ShieldCheck size={20} />
                <span>Confidentiality &amp; Responsible Data Handling</span>
              </div>
              <div className="guarantee-item">
                <Building2 size={20} />
                <span>15+ Years Industry Expertise • Est. Feb 2021</span>
              </div>
            </div>

            <div className="quote-helpline-box">
              <span className="label">Support Availability</span>
              <span className="number" style={{ fontSize: '1.05rem', color: '#14B8A6' }}>
                Monday – Saturday | Available 24/7
              </span>
              <span className="sub">63 B, Sriram Nagar, Kondapur, Hyderabad – 500084</span>
            </div>
          </div>

          {/* Right Column: Dynamic Quotation Form */}
          <div className="quote-form-card">
            {previewSummary ? (
              <div className="quote-success-state">
                <div className="success-icon-wrapper" style={{ backgroundColor: '#fef3c7' }}>
                  <Info size={42} style={{ color: '#b45309' }} />
                </div>
                <h3 className="success-title">Enquiry Preview Prepared (Demo Mode)</h3>
                <p className="success-msg">
                  Thank you, <strong>{previewSummary.fullName}</strong>. Form validation passed, however <strong>backend email/CRM delivery is not yet configured</strong> on this site, so this enquiry has <strong>not</strong> been transmitted to IBS.
                </p>
                <div className="quote-ref-badge" style={{ background: '#fef3c7', color: '#92400e', borderColor: '#fcd34d' }}>
                  Preview Only — Backend Integration Pending
                </div>
                <div className="quote-summary-box">
                  <div><strong>Service:</strong> {previewSummary.serviceRequired}</div>
                  {previewSummary.companyName && (
                    <div><strong>Company:</strong> {previewSummary.companyName}</div>
                  )}
                  {previewSummary.industry && (
                    <div><strong>Industry:</strong> {previewSummary.industry}</div>
                  )}
                  {isLanguageServiceSelected() && (
                    <div><strong>Languages:</strong> {previewSummary.sourceLanguage} → {previewSummary.targetLanguage}</div>
                  )}
                  <div><strong>Email:</strong> {previewSummary.email}</div>
                  <div><strong>Phone:</strong> {previewSummary.phoneNumber}</div>
                  {previewSummary.fileName && (
                    <div><strong>Attachment:</strong> {previewSummary.fileName}</div>
                  )}
                </div>
                <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button type="button" className="btn-blue-outline" onClick={() => setPreviewSummary(null)}>
                    Edit Enquiry Details
                  </button>
                  <button type="button" className="btn-yellow" onClick={handleReset}>
                    Start New Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="form-fields-grid">
                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="req">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      className={`form-input ${errors.fullName ? 'error' : ''}`}
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.fullName}
                      onChange={handleChange}
                    />
                    {errors.fullName && <span className="error-text">{errors.fullName}</span>}
                  </div>

                  {/* Company Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="companyName">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      className="form-input"
                      placeholder="e.g. Acme Global Solutions"
                      value={formData.companyName}
                      onChange={handleChange}
                    />
                  </div>

                  {/* Business Email */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">
                      Business Email <span className="req">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className={`form-input ${errors.email ? 'error' : ''}`}
                      placeholder="e.g. rajesh@company.com"
                      value={formData.email}
                      onChange={handleChange}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  {/* Phone Number */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="phoneNumber">
                      Phone Number <span className="req">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      className={`form-input ${errors.phoneNumber ? 'error' : ''}`}
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                    {errors.phoneNumber && <span className="error-text">{errors.phoneNumber}</span>}
                  </div>

                  {/* Service Required Dropdown */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="serviceRequired">
                      Service Required <span className="req">*</span>
                    </label>
                    <select
                      id="serviceRequired"
                      name="serviceRequired"
                      className={`form-input ${errors.serviceRequired ? 'error' : ''}`}
                      value={formData.serviceRequired}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Required Service --</option>
                      {serviceOptions.map((grp) => (
                        <optgroup key={grp.group} label={grp.group}>
                          {grp.items.map((srv) => (
                            <option key={srv} value={srv}>
                              {srv}
                            </option>
                          ))}
                        </optgroup>
                      ))}
                    </select>
                    {errors.serviceRequired && <span className="error-text">{errors.serviceRequired}</span>}
                  </div>

                  {/* Industry Dropdown */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="industry">
                      Industry Sector
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      className="form-input"
                      value={formData.industry}
                      onChange={handleChange}
                    >
                      <option value="">-- Select Industry (Optional) --</option>
                      {industryOptions.map((ind) => (
                        <option key={ind} value={ind}>
                          {ind}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Conditional Language Fields: Displayed ONLY for language-related services */}
                  {isLanguageServiceSelected() && (
                    <>
                      <div className="form-group">
                        <label className="form-label" htmlFor="sourceLanguage">
                          Source Language <span className="req">*</span>
                        </label>
                        <select
                          id="sourceLanguage"
                          name="sourceLanguage"
                          className={`form-input ${errors.sourceLanguage ? 'error' : ''}`}
                          value={formData.sourceLanguage}
                          onChange={handleChange}
                        >
                          <option value="">-- Select Source Language --</option>
                          {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                        {errors.sourceLanguage && <span className="error-text">{errors.sourceLanguage}</span>}
                      </div>

                      <div className="form-group">
                        <label className="form-label" htmlFor="targetLanguage">
                          Target Language <span className="req">*</span>
                        </label>
                        <select
                          id="targetLanguage"
                          name="targetLanguage"
                          className={`form-input ${errors.targetLanguage ? 'error' : ''}`}
                          value={formData.targetLanguage}
                          onChange={handleChange}
                        >
                          <option value="">-- Select Target Language --</option>
                          {languageOptions.map((lang) => (
                            <option key={lang} value={lang}>
                              {lang}
                            </option>
                          ))}
                        </select>
                        {errors.targetLanguage && <span className="error-text">{errors.targetLanguage}</span>}
                      </div>
                    </>
                  )}

                  {/* Project Description */}
                  <div className="form-group span-full">
                    <label className="form-label" htmlFor="projectDescription">
                      Project Description &amp; Requirements <span className="req">*</span>
                    </label>
                    <textarea
                      id="projectDescription"
                      name="projectDescription"
                      rows={3}
                      className={`form-input ${errors.projectDescription ? 'error' : ''}`}
                      placeholder="Please describe your document scope, volume, expected timeline, or outsourcing workflow..."
                      value={formData.projectDescription}
                      onChange={handleChange}
                    />
                    {errors.projectDescription && <span className="error-text">{errors.projectDescription}</span>}
                  </div>

                  {/* File Upload (Optional) */}
                  <div className="form-group span-full">
                    <label className="form-label">
                      Attach Reference Document <span style={{ fontWeight: 400, color: '#64748b' }}>(Optional)</span>
                    </label>
                    <div
                      className={`file-drop-zone ${dragActive ? 'active' : ''}`}
                      onDragEnter={handleDrag}
                      onDragLeave={handleDrag}
                      onDragOver={handleDrag}
                      onDrop={handleDrop}
                    >
                      <input
                        type="file"
                        id="quoteFileUpload"
                        style={{ display: 'none' }}
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.txt,.xls,.xlsx,.ppt,.pptx,.zip"
                      />
                      {uploadedFile ? (
                        <div className="file-attached-info">
                          <FileCheck size={28} style={{ color: '#0D9488' }} />
                          <div style={{ flex: 1, minWidth: 0 }}>
                            <div className="file-name" title={uploadedFile.name}>{uploadedFile.name}</div>
                            <div className="file-size">{(uploadedFile.size / 1024).toFixed(1)} KB</div>
                          </div>
                          <button
                            type="button"
                            className="btn-remove-file"
                            onClick={() => setUploadedFile(null)}
                            title="Remove file"
                            aria-label="Remove uploaded file"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ) : (
                        <label htmlFor="quoteFileUpload" className="drop-zone-content">
                          <UploadCloud size={30} style={{ color: '#0D9488', margin: '0 auto 6px' }} />
                          <span className="drop-title">Click to upload or drag &amp; drop documents</span>
                          <span className="drop-sub">Supported formats: PDF, Word (DOCX), Excel, PPT, TXT, ZIP</span>
                        </label>
                      )}
                    </div>
                  </div>
                </div>

                <div className="quote-form-footer">
                  <div className="privacy-reassurance">
                    <ShieldCheck size={16} style={{ color: '#0D9488' }} />
                    <span>All client materials are treated with strict confidentiality.</span>
                  </div>

                  <button
                    type="submit"
                    className="btn-yellow quote-submit-btn"
                    disabled={isSubmitting}
                  >
                    <span>{isSubmitting ? 'Preparing Preview...' : 'Get a Free Quote'}</span>
                    <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
