import React, { useState } from 'react';
import { 
  FileText, 
  Globe, 
  Headphones, 
  Mic, 
  Captions, 
  Film, 
  Layout, 
  ShieldCheck, 
  Repeat, 
  PenTool, 
  Cpu, 
  Database, 
  BarChart3, 
  Workflow, 
  ArrowRight, 
  Languages
} from 'lucide-react';
import { MAJOR_SERVICES } from '../data/servicesData';

const iconMap = {
  FileText,
  Globe,
  Headphones,
  Mic,
  Captions,
  Film,
  Layout,
  ShieldCheck,
  Repeat,
  PenTool,
  Cpu,
  Database,
  BarChart3,
  Workflow
};

export default function MainServices({ onExploreService }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryCounts = {
    all: MAJOR_SERVICES.length,
    language: MAJOR_SERVICES.filter((s) => s.group === 'language').length,
    media: MAJOR_SERVICES.filter((s) => s.group === 'media').length,
    'qa-ai': MAJOR_SERVICES.filter((s) => s.group === 'qa-ai').length,
    outsourcing: MAJOR_SERVICES.filter((s) => s.group === 'outsourcing').length
  };

  const displayedServices =
    activeCategory === 'all'
      ? MAJOR_SERVICES
      : MAJOR_SERVICES.filter((s) => s.group === activeCategory);

  return (
    <section id="services" className="main-services-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">14 Major Service Categories</span>
          <h2 className="section-title">
            Our Language &amp; <span>Business Solutions</span>
          </h2>
          <p className="section-subtitle">
            Comprehensive translation, interpretation, localization, multimedia, AI language technology, and outsourcing and consulting services delivered from Hyderabad for global organizations.
          </p>

          {/* Dynamic Category Filter Tabs */}
          <div className="services-category-tabs" role="tablist" aria-label="Filter services by category">
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
              role="tab"
              aria-selected={activeCategory === 'all'}
            >
              <span>All Services ({categoryCounts.all})</span>
            </button>
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'language' ? 'active' : ''}`}
              onClick={() => setActiveCategory('language')}
              role="tab"
              aria-selected={activeCategory === 'language'}
            >
              <Languages size={17} />
              <span>Language &amp; Localization ({categoryCounts.language})</span>
            </button>
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'media' ? 'active' : ''}`}
              onClick={() => setActiveCategory('media')}
              role="tab"
              aria-selected={activeCategory === 'media'}
            >
              <Film size={17} />
              <span>Audio, Video &amp; DTP ({categoryCounts.media})</span>
            </button>
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'qa-ai' ? 'active' : ''}`}
              onClick={() => setActiveCategory('qa-ai')}
              role="tab"
              aria-selected={activeCategory === 'qa-ai'}
            >
              <Cpu size={17} />
              <span>QA, AI &amp; Research ({categoryCounts['qa-ai']})</span>
            </button>
            <button
              type="button"
              className={`services-tab-btn ${activeCategory === 'outsourcing' ? 'active' : ''}`}
              onClick={() => setActiveCategory('outsourcing')}
              role="tab"
              aria-selected={activeCategory === 'outsourcing'}
            >
              <Workflow size={17} />
              <span>Outsourcing &amp; Consulting ({categoryCounts.outsourcing})</span>
            </button>
          </div>
        </div>

        {/* 14 Service Cards Grid */}
        <div className="services-cards-grid">
          {displayedServices.map((service) => {
            const IconComp = iconMap[service.iconName] || Globe;
            const isOutsourcing = service.group === 'outsourcing';

            return (
              <div
                key={service.id}
                className="service-card"
                onClick={() => onExploreService && onExploreService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && onExploreService) {
                    e.preventDefault();
                    onExploreService(service);
                  }
                }}
                aria-label={`Explore ${service.title} and included capabilities`}
              >
                <div className="service-card-top">
                  <div
                    className="service-card-icon"
                    style={{ backgroundColor: !isOutsourcing ? '#0B2545' : '#0D9488' }}
                  >
                    <IconComp size={24} style={{ color: '#ffffff' }} />
                  </div>
                  <span
                    className="service-card-badge"
                    style={{
                      borderColor: !isOutsourcing ? 'rgba(11, 37, 69, 0.2)' : 'rgba(13, 148, 136, 0.3)'
                    }}
                  >
                    {service.tag}
                  </span>
                </div>

                <h3 className="service-card-title">{service.title}</h3>

                <p className="service-card-description">{service.description}</p>

                <div style={{ marginTop: 'auto', paddingTop: 16 }}>
                  <button
                    type="button"
                    className="btn-blue-outline"
                    style={{ width: '100%', justifyContent: 'center' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (onExploreService) onExploreService(service);
                    }}
                    aria-label={`Explore Service: ${service.title}`}
                  >
                    <span>Explore Service</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Regulatory & Proposal Disclaimer */}
        <div className="services-proposal-notice">
          <p>
            * Note: Individual capabilities and subservices represent IBS service offerings tailored to project requirements, subject to final scope and resource confirmation.
          </p>
        </div>
      </div>
    </section>
  );
}
