import React, { useState, useMemo } from 'react';
import { Globe, Search, ArrowRight } from 'lucide-react';
import { GLOBAL_LANGUAGE_REGIONS } from '../data/languagesData';

export default function LanguagesSection({ onSelectLanguage }) {
  const [activeRegion, setActiveRegion] = useState('All Languages');
  const [searchQuery, setSearchQuery] = useState('');

  const regions = ['All Languages', ...Object.keys(GLOBAL_LANGUAGE_REGIONS)];

  const allLanguages = useMemo(() => {
    return Object.values(GLOBAL_LANGUAGE_REGIONS).flat();
  }, []);

  const filteredLanguages = useMemo(() => {
    const baseList =
      activeRegion === 'All Languages'
        ? allLanguages
        : GLOBAL_LANGUAGE_REGIONS[activeRegion] || [];

    if (!searchQuery.trim()) return baseList;
    const q = searchQuery.toLowerCase();
    return baseList.filter(
      (lang) =>
        lang.name.toLowerCase().includes(q) ||
        lang.native.toLowerCase().includes(q) ||
        lang.region.toLowerCase().includes(q)
    );
  }, [activeRegion, searchQuery, allLanguages]);

  return (
    <section id="languages" className="languages-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Regional &amp; International Reach</span>
          <h2 className="section-title">
            Global <span>Language Coverage</span>
          </h2>
          <p className="section-subtitle">
            We support multilingual communication across major global markets, helping organizations connect with customers, partners and stakeholders across regions.
          </p>
        </div>

        {/* Interactive Regional Explorer Controls */}
        <div className="lang-explorer-controls">
          <div className="lang-region-tabs" role="tablist" aria-label="Filter languages by region">
            {regions.map((region) => (
              <button
                key={region}
                type="button"
                role="tab"
                aria-selected={activeRegion === region}
                className={`lang-region-tab ${activeRegion === region ? 'active' : ''}`}
                onClick={() => setActiveRegion(region)}
              >
                <span>{region}</span>
              </button>
            ))}
          </div>

          <div className="lang-search-box">
            <Search size={16} className="lang-search-icon" aria-hidden="true" />
            <input
              type="text"
              className="lang-search-input"
              placeholder="Search language or script..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search supported languages"
            />
          </div>
        </div>

        {/* Language Chips Grid */}
        {filteredLanguages.length === 0 ? (
          <div className="lang-empty-state">
            <p>
              No matching language found in this filter. Other regional and emerging-market languages are supported based on project requirements and resource availability.
            </p>
          </div>
        ) : (
          <div className="lang-chips-grid">
            {filteredLanguages.map((lang) => (
              <button
                key={lang.name}
                type="button"
                className="lang-chip-card"
                onClick={() => onSelectLanguage && onSelectLanguage(lang.name)}
                aria-label={`Request quote for ${lang.name} language services`}
              >
                <div className="lang-chip-top">
                  <span className="lang-chip-name">{lang.name}</span>
                  <span className="lang-chip-region">{lang.region}</span>
                </div>
                <div className="lang-chip-bottom">
                  <span className="lang-chip-native">{lang.native}</span>
                  <ArrowRight size={14} className="lang-chip-arrow" />
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Additional Languages & Closing Statement */}
        <div className="lang-coverage-footer">
          <div className="lang-coverage-note">
            <Globe size={18} style={{ color: '#0D9488', flexShrink: 0 }} />
            <div>
              <p className="lang-note-primary">
                Other regional and emerging-market languages are supported based on project requirements and resource availability.
              </p>
              <p className="lang-note-secondary">
                We work with language professionals and specialized resources to support the language combinations required for each project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
