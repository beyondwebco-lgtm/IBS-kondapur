import React, { useState, useEffect } from 'react';
import { ArrowRight, Globe, ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { HERO_LANGUAGE_PAIRS } from '../data/languagesData';

export default function Hero({ onOpenQuote }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % HERO_LANGUAGE_PAIRS.length);
    }, 3200);
    return () => clearInterval(timer);
  }, [isPaused]);

  const currentPair = HERO_LANGUAGE_PAIRS[activeIndex];

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToQuote = () => {
    if (onOpenQuote) {
      onOpenQuote('', currentPair.source, currentPair.target);
    } else {
      const el = document.getElementById('quote');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + HERO_LANGUAGE_PAIRS.length) % HERO_LANGUAGE_PAIRS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % HERO_LANGUAGE_PAIRS.length);
  };

  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Hero Left Content */}
          <div className="hero-content">
            <div className="hero-pill">
              <span className="hero-pill-badge">GLOBAL LANGUAGE &amp; BUSINESS SOLUTIONS</span>
            </div>

            <h1 className="hero-title">
              Bridging Languages. <span>Empowering</span> Businesses.
            </h1>

            <p className="hero-description">
              Connecting businesses, people and markets through professional translation, interpretation, localization and multilingual outsourcing solutions. Backed by extensive industry expertise, IBS helps organizations communicate confidently across borders.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="btn-yellow"
                onClick={scrollToServices}
                aria-label="Explore language and business outsourcing services"
              >
                <span>Explore Language Services</span>
                <ArrowRight size={18} />
              </button>

              <button
                type="button"
                className="btn-blue-outline"
                onClick={scrollToQuote}
                aria-label="Get a free translation or outsourcing quote"
              >
                <span>Get a Free Quote</span>
              </button>
            </div>

            {/* Verified Statistics */}
            <div className="hero-trust-row">
              <div className="hero-stat-item">
                <span className="hero-stat-number" style={{ color: '#0D9488' }}>15+ Years</span>
                <span className="hero-stat-label">Industry Expertise</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number">5+ Years</span>
                <span className="hero-stat-label">Delivering Business Solutions</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-number" style={{ fontSize: '1.35rem' }}>Feb 2021</span>
                <span className="hero-stat-label">Established</span>
              </div>
            </div>
          </div>

          {/* Hero Right: Animated Language-Pair Workflow Showcase */}
          <div className="hero-visual">
            <div
              className="hero-card-showcase hero-pair-showcase"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="hero-showcase-badge">
                <span className="status-dot">Multilingual Workflow Showcase</span>
                <div className="hero-carousel-controls">
                  <button
                    type="button"
                    className="hero-carousel-btn"
                    onClick={handlePrev}
                    aria-label="Previous language pair"
                  >
                    <ChevronLeft size={15} />
                  </button>
                  <button
                    type="button"
                    className="hero-carousel-btn"
                    onClick={() => setIsPaused((p) => !p)}
                    aria-label={isPaused ? 'Resume language pair rotation' : 'Pause language pair rotation'}
                  >
                    {isPaused ? <Play size={13} /> : <Pause size={13} />}
                  </button>
                  <button
                    type="button"
                    className="hero-carousel-btn"
                    onClick={handleNext}
                    aria-label="Next language pair"
                  >
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>

              {/* Animated Floating Language Pair Panel */}
              <div key={activeIndex} className="hero-pair-stage">
                <div className="hero-pair-cards">
                  <div className="hero-lang-node">
                    <span className="hero-lang-role">Source Language</span>
                    <span className="hero-lang-name">{currentPair.source}</span>
                    <span className="hero-lang-native">{currentPair.sourceNative}</span>
                  </div>

                  <div className="hero-pair-arrow" aria-hidden="true">
                    <ArrowRight size={20} />
                  </div>

                  <div className="hero-lang-node target">
                    <span className="hero-lang-role">Target Language</span>
                    <span className="hero-lang-name">{currentPair.target}</span>
                    <span className="hero-lang-native">{currentPair.targetNative}</span>
                  </div>
                </div>

                <div className="hero-pair-caption">
                  <Globe size={15} style={{ color: '#0D9488', flexShrink: 0 }} />
                  <span>
                    <strong>{currentPair.source.toUpperCase()} → {currentPair.target.toUpperCase()}</strong>
                    {' · '}
                    {currentPair.label}
                  </span>
                </div>
              </div>

              {/* Progress Dots */}
              <div className="hero-pair-dots" role="tablist" aria-label="Featured language pairs">
                {HERO_LANGUAGE_PAIRS.map((pair, idx) => (
                  <button
                    key={`${pair.source}-${pair.target}`}
                    type="button"
                    role="tab"
                    aria-selected={idx === activeIndex}
                    aria-label={`${pair.source} to ${pair.target}`}
                    className={`hero-pair-dot ${idx === activeIndex ? 'active' : ''}`}
                    onClick={() => setActiveIndex(idx)}
                  />
                ))}
              </div>

              {/* Service Labels Strip */}
              <div className="hero-service-labels">
                <span>Translation</span>
                <span className="sep">|</span>
                <span>Interpretation</span>
                <span className="sep">|</span>
                <span>Localization</span>
                <span className="sep">|</span>
                <span>Transcription</span>
                <span className="sep">|</span>
                <span>Subtitling</span>
                <span className="sep">|</span>
                <span>Outsourcing &amp; Consulting</span>
              </div>

              <p className="hero-pair-disclaimer">
                * Illustrative project language combinations; resource availability confirmed per project scope.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
