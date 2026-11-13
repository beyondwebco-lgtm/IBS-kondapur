import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const handleClick = (e) => {
    e.preventDefault();
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a
      href="#contact"
      onClick={handleClick}
      className="whatsapp-floating-btn"
      aria-label="Contact IBS Support"
      title="Official WhatsApp channel being configured. Click to send an inquiry."
      style={{ backgroundColor: '#0D9488' }}
    >
      <MessageCircle size={30} />
      <span className="whatsapp-tooltip">Contact IBS Support</span>
    </a>
  );
}
