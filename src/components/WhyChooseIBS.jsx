import React from 'react';
import {
  Layers,
  Globe,
  BookOpenCheck,
  ShieldCheck,
  SlidersHorizontal,
  TrendingUp,
  Lock,
  UserCheck,
  Sparkles
} from 'lucide-react';

const ADVANTAGES = [
  {
    icon: Layers,
    title: 'Comprehensive Solutions Under One Roof',
    description: 'Comprehensive language and outsourcing solutions under one roof'
  },
  {
    icon: Globe,
    title: 'Multilingual Language Resources',
    description: 'Access to multilingual language resources across global markets'
  },
  {
    icon: BookOpenCheck,
    title: 'Industry-Specific Expertise',
    description: 'Industry-specific linguistic expertise tailored to specialized sectors'
  },
  {
    icon: ShieldCheck,
    title: 'Human-Led QA & Technology',
    description: 'Human-led quality assurance supported by language technology'
  },
  {
    icon: SlidersHorizontal,
    title: 'Flexible Delivery Models',
    description: 'Flexible project delivery models aligned with client timelines'
  },
  {
    icon: TrendingUp,
    title: 'Scalable Project Capacity',
    description: 'Scalable solutions for projects of different sizes and complexities'
  },
  {
    icon: Lock,
    title: 'Confidentiality & Data Care',
    description: 'Confidentiality and responsible information handling at every step'
  },
  {
    icon: UserCheck,
    title: 'Dedicated Project Coordination',
    description: 'Dedicated project coordination for seamless milestone communication'
  },
  {
    icon: Sparkles,
    title: 'Customized Client Solutions',
    description: 'Customized solutions based on specific client requirements'
  }
];

export default function WhyChooseIBS() {
  return (
    <section id="why-ibs" className="why-ibs-section">
      <div className="container">
        <div className="text-center">
          <span className="section-tag">Why Choose Innovative Business Solutions?</span>
          <h2 className="section-title">
            One Partner. Multiple Language Solutions. <span>Global Reach.</span>
          </h2>
          <p className="section-subtitle">
            We believe effective communication is the foundation of successful global business. Our approach combines linguistic expertise, technology, industry understanding and quality-focused project management.
          </p>
        </div>

        <div className="why-ibs-grid">
          {ADVANTAGES.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div key={idx} className="why-ibs-card">
                <div className="why-ibs-icon-wrap">
                  <IconComp size={22} strokeWidth={1.8} />
                </div>
                <div className="why-ibs-body">
                  <h3 className="why-ibs-card-title">{item.title}</h3>
                  <p className="why-ibs-card-desc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

