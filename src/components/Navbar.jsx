import React, { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <header class="bg-cream border-b border-navy/10 sticky top-0 z-40 backdrop-blur-md bg-cream/90 transition-all">
      <nav class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-5 flex items-center justify-between">
        {/* Left Logo */}
        <a href="#home" class="font-serif text-3xl font-bold text-navy tracking-tight hover:opacity-80 transition">
          Shelmond's Portfolio
        </a>

        {/* Nav Links (Desktop) */}
        <ul class="hidden md:flex items-center gap-8 text-sm font-medium text-navy/80">
          <li>
            <a href="#about" class="hover:text-navy hover:underline underline-offset-8 transition">
              About
            </a>
          </li>
          <li>
            <a href="#services" class="hover:text-navy hover:underline underline-offset-8 transition">
              What I Do
            </a>
          </li>
          <li>
            <a href="#experience" class="hover:text-navy hover:underline underline-offset-8 transition">
              Experience
            </a>
          </li>
          <li>
            <a href="#project" class="hover:text-navy hover:underline underline-offset-8 transition">
              Featured Work
            </a>
          </li>
          <li>
            <a href="#contact" class="hover:text-navy hover:underline underline-offset-8 transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Right Resume Button */}
        <div class="flex items-center gap-4">
          <a
            href="./resume/Shelmond-Resume.pdf"
            download="Shelmond-Resume.pdf"
            className="hidden sm:inline-flex bg-navy text-cream px-6 py-2.5 rounded-full hover:bg-navy-dark hover:shadow-lg transition-all duration-300 text-sm font-medium items-center gap-2"
          >
            <span>Download Resume</span>
            <i className="fa-solid fa-arrow-down-long text-xs"></i>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            id="menu-toggle"
            onClick={toggleMobileMenu}
            class="md:hidden text-navy text-2xl focus:outline-none p-1"
            aria-label="Toggle navigation menu"
          >
            <i class={`fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation */}
      <div id="mobile-menu" class={`${mobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-cream border-t border-navy/10 px-6 py-4 shadow-xl`}>
        <ul class="flex flex-col gap-4 text-base font-medium text-navy">
          <li>
            <a href="#about" onClick={() => setMobileMenuOpen(false)} class="block py-2 hover:text-navy-muted">
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} class="block py-2 hover:text-navy-muted">
              What I Do
            </a>
          </li>
          <li>
            <a href="#experience" onClick={() => setMobileMenuOpen(false)} class="block py-2 hover:text-navy-muted">
              Experience
            </a>
          </li>
          <li>
            <a href="#project" onClick={() => setMobileMenuOpen(false)} class="block py-2 hover:text-navy-muted">
              Featured Work
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} class="block py-2 hover:text-navy-muted">
              Contact
            </a>
          </li>
          <li class="pt-2">
            <a
              href="./resume/Shelmond-Resume.pdf"
              download="Shelmond-Resume.pdf"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex w-full justify-center bg-navy text-cream px-6 py-3 rounded-full text-sm font-medium"
            >
              Download Resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
