import React from 'react';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/919502549665?text=Hello%20IBS,%20I%20would%20like%20to%20inquire%20about%20your%20language%20and%20business%20solutions."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-floating-btn"
      aria-label="Chat with IBS on WhatsApp at +91 95025 49665"
      title="Chat with IBS on WhatsApp (+91 95025 49665)"
    >
      <MessageCircle size={30} />
      <span className="whatsapp-tooltip">WhatsApp: +91 95025 49665</span>
    </a>
  );
}
