import React, { useState } from 'react';
import TopContactBar from './components/TopContactBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryBanners from './components/CategoryBanners';
import MainServices from './components/MainServices';
import WhyChooseIBS from './components/WhyChooseIBS';
import IndustriesSection from './components/IndustriesSection';
import AboutUs from './components/AboutUs';
import QualityPolicy from './components/QualityPolicy';
import LanguagesSection from './components/LanguagesSection';
import GetAQuote from './components/GetAQuote';
import ContactSection from './components/ContactSection';
import BlogSection from './components/BlogSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import BackToTop from './components/BackToTop';
import { ServiceModal, IndustryModal, LanguagesModal, BlogModal, PolicyModal } from './components/Modals';
import { ALL_SERVICES } from './data/servicesData';

export default function App() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [selectedPolicy, setSelectedPolicy] = useState(null);
  const [languagesModalOpen, setLanguagesModalOpen] = useState(false);

  // Quote form pre-fill state
  const [quotePrefill, setQuotePrefill] = useState({
    service: '',
    source: 'English',
    target: '',
    industry: ''
  });

  const handleOpenQuote = (
    serviceName = '',
    sourceLang = 'English',
    targetLang = '',
    industryName = ''
  ) => {
    setQuotePrefill({
      service: serviceName,
      source: sourceLang,
      target: targetLang,
      industry: industryName
    });
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategorySelect = (category) => {
    const matched = ALL_SERVICES.find((s) => s.id === category.id);
    if (matched) {
      setSelectedService(matched);
      return;
    }
    setSelectedService({
      title: category.title,
      description: category.description,
      subservices: category.features,
      tag: category.category === 'outsourcing' ? 'Outsourcing & Consulting' : 'Language Solutions'
    });
  };

  const handleExploreService = (service) => {
    setSelectedService(service);
  };

  const handleSelectMenuService = (menuItem) => {
    const matched = ALL_SERVICES.find((s) => s.id === menuItem.serviceId);
    if (matched) {
      setSelectedService(matched);
    }
  };

  const handleSelectLanguageFromExplorer = (langName) => {
    if (langName === 'English') {
      handleOpenQuote('Translation Services', 'English', 'Spanish');
    } else {
      handleOpenQuote('Translation Services', 'English', langName);
    }
  };

  return (
    <div className="app-root">
      {/* 1. Top Slim Contact Bar */}
      <TopContactBar />

      {/* 2. Navigation Bar with IBS Brand Logo & 14-Item Services Menu */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        onSelectMenuService={handleSelectMenuService}
      />

      <main id="main-content">
        {/* 3. Hero Section with Animated Language-Pair Showcase */}
        <Hero onOpenQuote={(srv, src, tgt) => handleOpenQuote(srv || 'Translation Services', src || 'English', tgt || '')} />

        {/* 4. Quick Highlights: 5 Core Language Service Highlights */}
        <CategoryBanners onSelectCategory={handleCategorySelect} />

        {/* 5. 14 Major Language & Outsourcing Service Categories */}
        <MainServices onExploreService={handleExploreService} />

        {/* 6. Why Choose Innovative Business Solutions */}
        <WhyChooseIBS />

        {/* 7. Industries We Serve (12 Industry Sectors) */}
        <IndustriesSection onSelectIndustry={(ind) => setSelectedIndustry(ind)} />

        {/* 8. Global Language Coverage Explorer */}
        <LanguagesSection onSelectLanguage={handleSelectLanguageFromExplorer} />

        {/* 9. About Us (Includes Executive Leadership & Founder) */}
        <AboutUs onOpenQuote={() => handleOpenQuote()} />

        {/* 10. Quality Policy */}
        <QualityPolicy />

        {/* 12. Get a Quote Form Section */}
        <GetAQuote
          key={`${quotePrefill.service}-${quotePrefill.source}-${quotePrefill.target}-${quotePrefill.industry}`}
          prefillService={quotePrefill.service}
          prefillSourceLang={quotePrefill.source}
          prefillTargetLang={quotePrefill.target}
          prefillIndustry={quotePrefill.industry}
        />

        {/* 13. Contact Us Section */}
        <ContactSection />

        {/* 14. Blog & Insights Section */}
        <BlogSection onSelectPost={(post) => setSelectedBlogPost(post)} />
      </main>

      {/* 15. Corporate Navy Footer */}
      <Footer onOpenPolicy={(policy) => setSelectedPolicy(policy)} />

      {/* Floating Support & Back-to-Top Controls */}
      <WhatsAppButton />
      <BackToTop />

      {/* Modals */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectQuoteService={(serviceTitle) => handleOpenQuote(serviceTitle)}
      />

      <IndustryModal
        industry={selectedIndustry}
        onClose={() => setSelectedIndustry(null)}
        onSelectQuoteIndustry={(serviceTitle, industryName) =>
          handleOpenQuote(serviceTitle, 'English', '', industryName)
        }
      />

      <LanguagesModal
        isOpen={languagesModalOpen}
        onClose={() => setLanguagesModalOpen(false)}
        onSelectLanguage={handleSelectLanguageFromExplorer}
      />

      <BlogModal
        post={selectedBlogPost}
        onClose={() => setSelectedBlogPost(null)}
      />

      <PolicyModal
        policy={selectedPolicy}
        onClose={() => setSelectedPolicy(null)}
      />
    </div>
  );
}
