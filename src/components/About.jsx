import React from 'react';
import { techStackData } from '../data/techStackData';

export default function About() {
  return (
    <section id="about" class="bg-navy text-cream py-20 lg:py-28 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Seksi */}
        <div class="mb-14" data-aos="fade-up" data-aos-duration="1000">
          <span class="text-xs font-sans text-cream-muted uppercase tracking-widest block mb-2">
            BACKGROUND & COMPETENCIES
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-cream">A Little About Me</h2>
        </div>

        {/* Layout 2-Kolom */}
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          {/* Kolom Kiri: Vertical Stack daftar keahlian/kategori */}
          <div class="lg:col-span-5 space-y-4" data-aos="fade-right" data-aos-duration="1000">
            <div class="p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div class="text-xs font-sans text-cream-muted uppercase tracking-wider mb-1">01 / FRONT-END WEB</div>
              <h3 class="font-serif text-xl sm:text-2xl text-cream mb-2">Web Application Development</h3>
              <p class="text-sm font-sans text-cream-muted leading-relaxed">
                Crafting responsive, user-friendly websites with modern JavaScript frameworks, crisp styling, and clean architecture.
              </p>
            </div>

            <div class="p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div class="text-xs font-sans text-cream-muted uppercase tracking-wider mb-1">02 / MOBILE APPS</div>
              <h3 class="font-serif text-xl sm:text-2xl text-cream mb-2">Cross-Platform Development</h3>
              <p class="text-sm font-sans text-cream-muted leading-relaxed">
                Building intuitive Android and iOS mobile applications powered by Flutter, Dart, and real-time backend integrations.
              </p>
            </div>

            <div class="p-6 rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 transition-all duration-300">
              <div class="text-xs font-sans text-cream-muted uppercase tracking-wider mb-1">03 / TEACHING ASSISTANT</div>
              <h3 class="font-serif text-xl sm:text-2xl text-cream mb-2">Programming & Technology Education</h3>
              <p class="text-sm font-sans text-cream-muted leading-relaxed">
                Guiding students through programming, web development, UI/UX, and artificial intelligence while providing hands-on support, project feedback, and practical technical guidance.
              </p>
            </div>
          </div>

          {/* Kolom Kanan: Paragraf narasi personal */}
          <div class="lg:col-span-7 space-y-6" data-aos="fade-left" data-aos-duration="1000">
            <div class="relative">
              <img
                src="/assets/images/profile 2.jpeg"
                alt="Shelmond Eugene Bimantara Working"
                class="w-full h-64 sm:h-80 object-cover rounded-3xl border border-white/15 shadow-2xl mb-8"
              />
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6 text-cream-muted text-sm sm:text-base font-sans leading-relaxed">
              <p>
                Hi! I'm <span class="text-cream font-medium">Shelmond Eugene Bimantara</span>, an Informatics Engineering with hands-on experience in software development and personal projects. I specialize in Front-End and Mobile Development, with additional experience in backend services and Generative AI integration.
              </p>
              <p>
                I love solving problems through code, exploring UI/UX design, and I'm always excited to grow, learn, and create meaningful digital experiences. Let's build something remarkable together.
              </p>
            </div>

            <div class="pt-4">
              <a
                href="#project"
                class="inline-flex items-center gap-2 bg-cream text-navy px-6 py-3 rounded-full text-sm font-semibold hover:bg-white hover:scale-105 transition-all duration-300"
              >
                <span>Explore Projects List</span>
                <i class="fa-solid fa-arrow-down-long text-xs"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Tech Stack Cards Row */}
        <div class="border-t border-white/15 pt-14" data-aos="fade-up" data-aos-duration="1000">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
            <div>
              <span class="text-xs font-sans text-cream-muted uppercase tracking-widest block mb-1">
                TOOLKIT & FRAMEWORKS
              </span>
              <h3 class="text-2xl sm:text-3xl font-serif text-cream">Used Tools & Technologies</h3>
            </div>
            <p class="text-sm font-sans text-cream-muted max-w-xs">
              Here are some of the tools and technologies I rely on to build web & mobile applications.
            </p>
          </div>

          {/* Grid of squircle cards */}
          <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-4 sm:gap-6">
            {techStackData.map((item, index) => (
              <div
                key={index}
                class="w-24 h-24 bg-cream rounded-2xl flex flex-col items-center justify-center p-3 shadow-sm hover:scale-105 transition cursor-pointer mx-auto group"
              >
                <img src={item.icon} alt={item.name} class="w-10 h-10 object-contain group-hover:scale-110 transition" />
                <span class="text-[11px] font-sans font-semibold text-navy mt-1 truncate">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
