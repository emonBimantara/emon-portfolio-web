import React, { useState, useEffect } from 'react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div class={`scroll-up ${isVisible ? 'scroll-active' : ''}`}>
      <a
        href="#home"
        class="w-12 h-12 bg-navy text-cream rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Scroll to top"
      >
        <i class="fa-solid fa-arrow-up text-lg"></i>
      </a>
    </div>
  );
}
