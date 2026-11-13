import React from 'react';
import { 
  FileText, 
  Building2, 
  Globe, 
  Workflow, 
  Layers, 
  Database,
  Headphones,
  Mic,
  Film,
  ArrowUpRight 
} from 'lucide-react';
import { CATEGORY_SERVICES } from '../data/servicesData';

const iconMap = {
  FileText: FileText,
  Building2: Building2,
  Globe: Globe,
  Workflow: Workflow,
  Layers: Layers,
  Database: Database,
  Headphones: Headphones,
  Mic: Mic,
  Film: Film
};

export default function CategoryBanners({ onSelectCategory }) {
  return (
    <section className="categories-section" aria-label="Services Categories">
      <div className="container">
        <div className="categories-horizontal-grid">
          {CATEGORY_SERVICES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Globe;

            return (
              <div
                key={cat.id}
                className="category-box"
                style={{ backgroundColor: cat.bgColor }}
                onClick={() => {
                  if (onSelectCategory) onSelectCategory(cat);
                }}
                role="button"
                tabIndex={0}
                aria-label={`View ${cat.title} category details`}
                onKeyDown={(e) => {
                  if ((e.key === 'Enter' || e.key === ' ') && onSelectCategory) {
                    onSelectCategory(cat);
                  }
                }}
              >
                <div className="category-icon-wrapper">
                  <IconComponent size={26} strokeWidth={2.2} />
                </div>
                <h3 className="category-name">{cat.title}</h3>
                <span
                  style={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    color: 'rgba(255,255,255,0.85)',
                    opacity: 0.9
                  }}
                >
                  <ArrowUpRight size={16} />
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
