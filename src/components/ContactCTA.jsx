import React from 'react';

export default function ContactCTA() {
  return (
    <div
      class="bg-navy text-cream rounded-3xl p-10 sm:p-14 md:p-16 text-center my-8 relative overflow-hidden shadow-2xl border border-white/10"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      {/* Background decorative elements */}
      <div class="absolute -top-24 -left-24 w-64 h-64 bg-avatar-pink/10 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-cream/10 rounded-full blur-3xl pointer-events-none"></div>

      <div class="relative z-10 max-w-3xl mx-auto space-y-6">
        <span class="text-xs font-sans text-cream-muted uppercase tracking-widest block">
          LET'S CONNECT & COLLABORATE
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-cream leading-tight">
          Get An Idea? Let's Bring It To Life!
        </h2>
        <p class="text-cream-muted text-sm sm:text-base font-sans max-w-xl mx-auto leading-relaxed">
          Whether you need a full web application, mobile app, or just want to discuss ideas, I'm always open to new projects.
        </p>
        <div class="pt-4">
          <a
            href="mailto:shelmondbimantara@gmail.com"
            class="bg-cream text-navy px-8 py-3.5 rounded-full font-semibold hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl inline-flex items-center gap-2 cursor-pointer"
          >
            <span>Get In Touch</span>
            <i class="fa-solid fa-paper-plane text-xs"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
