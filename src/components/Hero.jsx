import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Hero() {
  const el = useRef(null);
  const typedRef = useRef(null);

  useEffect(() => {
    if (el.current) {
      typedRef.current = new Typed(el.current, {
        strings: ['Shelmond Eugene Bimantara', 'Front-End Developer', 'Mobile Developer'],
        typeSpeed: 100,
        backSpeed: 60,
        showCursor: true,
        cursorChar: '|',
        backDelay: 2000,
        loop: true
      });
    }

    return () => {
      if (typedRef.current) {
        typedRef.current.destroy();
      }
    };
  }, []);

  return (
    <section class="bg-cream py-16 lg:py-24 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Hero Text & CTA */}
          <div class="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-duration="1000">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl font-serif italic text-navy leading-[1.1]">
              Hello, I am <br />
              <span ref={el} id="nama" class="font-serif italic text-navy not-italic">
                Shelmond Eugene Bimantara
              </span>
            </h1>

            <p class="text-base sm:text-lg font-sans text-navy-muted leading-relaxed max-w-xl">
              Front-End Developer & Mobile Developer passionate about creating elegant, accessible, and high-performance digital experiences.
            </p>

            <div class="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#project"
                class="bg-navy text-cream px-8 py-3.5 rounded-full text-sm font-medium shadow-lg hover:bg-navy-dark hover:scale-105 active:scale-95 transition-all duration-300 inline-flex items-center gap-2"
              >
                <span>Explore Projects</span>
                <i class="fa-solid fa-arrow-right text-xs"></i>
              </a>
              <a
                href="#contact"
                class="border-2 border-navy text-navy px-8 py-3.5 rounded-full text-sm font-medium hover:bg-navy hover:text-cream transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>

          {/* Right Avatar & Highlight Stats */}
          <div class="lg:col-span-5 flex flex-col items-center lg:items-end space-y-8" data-aos="fade-left" data-aos-duration="1000">
            {/* Avatar Frame */}
            <div class="relative group">
              <div
                class="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-avatar-pink
                flex items-center justify-center overflow-hidden
                border-4 border-white shadow-2xl
                transition-transform duration-500 group-hover:scale-105"
              >
                <img
                  src="./assets/images/profile.jpg"
                  alt="Shelmond Eugene Bimantara Profile"
                  class="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
