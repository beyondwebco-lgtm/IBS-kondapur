import React from 'react';
import ibsLogoHeader from '../assets/ibs-logo-header.png';
import ibsLogoFooter from '../assets/ibs-logo-footer.png';

/**
 * IBSLogo - Official Corporate Brand Mark for IBS (Innovative Business Solutions)
 * Supports dedicated header and footer logo variants:
 * - Header: High-resolution compact brand mark with the global communication sphere,
 *   6 language bubbles (Hi, Hola, Bonjour, Hallo, Ciao, Olá), dynamic swoosh arc,
 *   and bold IBS lettermark.
 * - Footer: High-resolution complete brand signature featuring the global sphere,
 *   6 language bubbles, bold IBS lettermark, "Innovative Business Solutions" title,
 *   and "Establish connections across languages and cultures" tagline, presented
 *   in a high-contrast protective badge.
 *
 * @param {'header'|'footer'|'light'|'dark'} variant
 * @param {'default'|'compact'|'large'} size
 */
export default function IBSLogo({ variant = 'header', size = 'default' }) {
  const isFooter = variant === 'footer' || variant === 'dark';
  const logoSrc = isFooter ? ibsLogoFooter : ibsLogoHeader;

  const heights = {
    compact: isFooter ? 56 : 52,
    default: isFooter ? 80 : 76,
    large: isFooter ? 96 : 88
  };

  const imgHeight = heights[size] || (isFooter ? 80 : 76);
  // Aspect ratios: Header tightly cropped (670x240 ~2.79:1), Footer (720x240 = 3.0:1)
  const aspectRatio = isFooter ? 3.0 : 670 / 240;
  const imgWidth = Math.round(imgHeight * aspectRatio);

  if (isFooter) {
    return (
      <div
        className="ibs-brand-lockup ibs-dark-badge ibs-footer-brand"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          background: '#ffffff',
          padding: '10px 20px',
          borderRadius: '14px',
          boxShadow: '0 6px 24px rgba(0, 0, 0, 0.4)',
          maxWidth: '100%',
          transition: 'all 0.25s ease'
        }}
      >
        <img
          src={logoSrc}
          alt="IBS – Innovative Business Solutions: Establish connections across languages and cultures"
          width={imgWidth}
          height={imgHeight}
          className="ibs-logo-footer-img"
          style={{
            height: `${imgHeight}px`,
            width: 'auto',
            maxWidth: '100%',
            objectFit: 'contain',
            display: 'block'
          }}
          loading="eager"
          decoding="async"
        />
      </div>
    );
  }

  return (
    <div
      className="ibs-brand-lockup ibs-header-brand"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        textDecoration: 'none',
        userSelect: 'none',
        maxWidth: '100%'
      }}
    >
      <img
        src={logoSrc}
        alt="IBS – Innovative Business Solutions: Establish connections across languages and cultures"
        width={imgWidth}
        height={imgHeight}
        className="ibs-logo-header-img"
        style={{
          height: `${imgHeight}px`,
          width: 'auto',
          maxHeight: '100%',
          objectFit: 'contain',
          display: 'block'
        }}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />
    </div>
  );
}
