import React from 'react';

export default function Footer() {
  return (
    <footer id="contact" class="bg-cream py-16 lg:py-24 border-t border-navy/10">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Social Link Pills Footer */}
        <div class="pt-8 border-t border-navy/12 flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Social Link Pills */}
          <div class="w-full md:w-auto grid grid-cols-2 sm:grid-cols-4 gap-3">
            <a
              href="https://github.com/emonBimantara"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-navy text-cream px-6 py-3 rounded-2xl text-center font-medium text-xs sm:text-sm hover:bg-navy-dark hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <i class="fa-brands fa-github"></i>
              <span>GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/shelmond-eugene-bimantara1610"
              target="_blank"
              rel="noopener noreferrer"
              class="bg-navy text-cream px-6 py-3 rounded-2xl text-center font-medium text-xs sm:text-sm hover:bg-navy-dark hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <i class="fa-brands fa-linkedin"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/shelmond_pelawi?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              class="bg-navy text-cream px-6 py-3 rounded-2xl text-center font-medium text-xs sm:text-sm hover:bg-navy-dark hover:scale-105 transition-all duration-300 shadow-md flex items-center justify-center gap-2"
            >
              <i class="fa-brands fa-instagram"></i>
              <span>Instagram</span>
            </a>
          </div>

          {/* Copyright */}
          <p class="text-xs text-navy-muted font-sans text-center md:text-right">
            &copy; 2026 <span class="font-semibold text-navy">Shelmond Eugene Bimantara</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
