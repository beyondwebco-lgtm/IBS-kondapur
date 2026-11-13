import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import IBSLogo from './IBSLogo';
import { WEBSITE_MENU_SERVICES } from '../data/servicesData';

export default function Navbar({ onOpenQuote, onSelectMenuService }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'services', 'why-ibs', 'industries', 'languages', 'about', 'quality', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close desktop dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setServicesDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Services', href: '#services', id: 'services', hasDropdown: true },
    { label: 'Languages', href: '#languages', id: 'languages' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Quality Policy', href: '#quality', id: 'quality' },
    { label: 'Blog', href: '#blog', id: 'blog' },
    { label: 'Contact', href: '#contact', id: 'contact' }
  ];

  const scrollToSection = (href) => {
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 85;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    scrollToSection(href);
  };

  const handleMenuServiceClick = (menuItem) => {
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
    scrollToSection('#services');
    if (onSelectMenuService) {
      onSelectMenuService(menuItem);
    }
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} aria-label="Main Navigation">
        <div className="container navbar-container">
          {/* Left Side: IBS Brand Logo */}
          <a href="#home" className="brand-wrapper" onClick={(e) => handleNavClick(e, '#home')} aria-label="IBS Home">
            <IBSLogo variant="header" size="default" />
            <span className="navbar-tagline ibs-brand-subtitle">
              Establishing Connections Across Languages and Cultures
            </span>
          </a>

          {/* Right Side Desktop Navigation */}
          <ul className="nav-links">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <li
                    key={item.id}
                    ref={dropdownRef}
                    className={`nav-dropdown-wrapper ${servicesDropdownOpen ? 'open' : ''}`}
                    onMouseEnter={() => setServicesDropdownOpen(true)}
                    onMouseLeave={() => setServicesDropdownOpen(false)}
                  >
                    <button
                      type="button"
                      className={`nav-link nav-dropdown-trigger ${activeSection === item.id ? 'active' : ''}`}
                      aria-expanded={servicesDropdownOpen}
                      aria-haspopup="true"
                      onClick={() => setServicesDropdownOpen((prev) => !prev)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        size={14}
                        style={{
                          transition: 'transform 0.2s ease',
                          transform: servicesDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                        }}
                      />
                    </button>

                    <div className="nav-dropdown-menu" role="menu" aria-label="Services Menu">
                      <div className="nav-dropdown-header">
                        <span>IBS Service Offerings</span>
                        <a
                          href="#services"
                          className="nav-dropdown-view-all"
                          onClick={(e) => handleNavClick(e, '#services')}
                        >
                          View All Offerings →
                        </a>
                      </div>

                      <div className="nav-dropdown-grid">
                        {WEBSITE_MENU_SERVICES.map((srv) => (
                          <button
                            key={srv.menuLabel}
                            type="button"
                            role="menuitem"
                            className="nav-dropdown-item"
                            onClick={() => handleMenuServiceClick(srv)}
                          >
                            <span className="nav-dropdown-item-title">{srv.menuLabel}</span>
                            <span className="nav-dropdown-item-cat">{srv.category}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Header Action Button (Desktop) */}
          <div className="navbar-action">
            <button
              type="button"
              className="btn-yellow nav-cta-btn"
              onClick={() => {
                if (onOpenQuote) onOpenQuote();
                else scrollToSection('#quote');
              }}
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={15} />
            </button>
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Backdrop Overlay */}
      <div
        className={`mobile-nav-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Drawer Menu */}
      <aside
        className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}
        aria-label="Mobile Navigation"
      >
        <div className="mobile-nav-header">
          <div className="brand-wrapper" style={{ maxWidth: 'calc(100% - 48px)' }}>
            <IBSLogo variant="header" size="compact" />
            <span className="navbar-tagline" style={{ whiteSpace: 'normal', fontSize: '0.62rem' }}>
              Establishing Connections Across Languages and Cultures
            </span>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            style={{ position: 'static' }}
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close mobile menu"
          >
            <X size={20} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navItems.map((item) => {
            if (item.hasDropdown) {
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    className={`mobile-nav-link mobile-nav-accordion-btn ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => setMobileServicesOpen((prev) => !prev)}
                    aria-expanded={mobileServicesOpen}
                  >
                    <span>{item.label} ({WEBSITE_MENU_SERVICES.length})</span>
                    <ChevronDown
                      size={16}
                      style={{
                        transition: 'transform 0.2s ease',
                        transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                    />
                  </button>

                  {mobileServicesOpen && (
                    <ul className="mobile-subnav-list">
                      <li>
                        <a
                          href="#services"
                          className="mobile-subnav-link mobile-subnav-all"
                          onClick={(e) => handleNavClick(e, '#services')}
                        >
                          All Services Overview →
                        </a>
                      </li>
                      {WEBSITE_MENU_SERVICES.map((srv) => (
                        <li key={srv.menuLabel}>
                          <button
                            type="button"
                            className="mobile-subnav-link"
                            onClick={() => handleMenuServiceClick(srv)}
                          >
                            <span>{srv.menuLabel}</span>
                            <span className="mobile-subnav-cat">{srv.category}</span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            }

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`mobile-nav-link ${activeSection === item.id ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="mobile-nav-footer">
          <button
            type="button"
            className="btn-yellow"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => {
              setMobileMenuOpen(false);
              if (onOpenQuote) onOpenQuote();
              else scrollToSection('#quote');
            }}
          >
            <span>Get a Free Quote</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </aside>
    </>
  );
}
