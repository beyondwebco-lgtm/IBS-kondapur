import React from 'react';
import {
  HeartPulse,
  FlaskConical,
  BarChart3,
  Scale,
  Landmark,
  Laptop,
  Factory,
  ShoppingBag,
  GraduationCap,
  Clapperboard,
  Plane,
  ArrowRight
} from 'lucide-react';
import { INDUSTRIES_DATA } from '../data/industriesData';

const industryIconMap = {
  HeartPulse,
  FlaskConical,
  BarChart3,
  Scale,
  Landmark,
  Laptop,
  Factory,
  ShoppingBag,
  GraduationCap,
  Clapperboard,
  Plane
};

export default function IndustriesSection({ onSelectIndustry }) {
  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Industries We Serve</span>
          <h2 className="section-title">
            Industry-Specific <span>Language Expertise</span>
          </h2>
          <p className="section-subtitle">
            Our language solutions support organizations across diverse sectors, helping businesses communicate accurately and effectively within their industries.
          </p>
        </div>

        <div className="industries-grid">
          {INDUSTRIES_DATA.map((industry) => {
            const IconComp = industryIconMap[industry.iconName] || Landmark;

            return (
              <div
                key={industry.id}
                className="industry-card"
                role="button"
                tabIndex={0}
                onClick={() => onSelectIndustry && onSelectIndustry(industry)}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && onSelectIndustry) {
                    e.preventDefault();
                    onSelectIndustry(industry);
                  }
                }}
                aria-label={`View language solutions for ${industry.name}`}
              >
                <div className="industry-card-icon">
                  <IconComp size={22} strokeWidth={1.9} />
                </div>
                <h3 className="industry-card-title">{industry.name}</h3>
                <p className="industry-card-desc">{industry.shortDesc}</p>
                <span className="industry-card-link">
                  <span>View Solutions</span>
                  <ArrowRight size={14} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

