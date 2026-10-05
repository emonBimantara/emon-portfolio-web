import React from 'react';
import { experienceData } from '../data/experienceData';

export default function Experience() {
  return (
    <section id="experience" class="bg-navy text-cream py-20 lg:py-28 relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Seksi */}
        <div class="mb-14" data-aos="fade-up" data-aos-duration="1000">
          <span class="text-xs font-sans text-cream-muted uppercase tracking-widest block mb-2">
            CAREER & HISTORY
          </span>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif text-cream">Experience History</h2>
        </div>

        {/* List Table (Row-based) */}
        <div class="divide-y divide-white/15" data-aos="fade-up" data-aos-duration="1000">
          {experienceData.map((item, index) => (
            <div
              key={index}
              class="py-6 md:py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 group hover:translate-x-2 transition-all duration-300 hover:bg-white/5 rounded-2xl px-4 cursor-pointer"
            >
              <div class="space-y-1">
                <h3 class="font-serif text-xl sm:text-2xl text-cream group-hover:text-amber-200 transition">
                  {item.role}
                </h3>
                <p class="text-sm font-sans text-cream-muted">{item.company}</p>
              </div>
              <div class="flex items-center gap-6 text-sm font-sans text-cream-muted">
                <span class="px-3 py-1 bg-white/10 text-cream text-xs rounded-full">{item.type}</span>
                <span>{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
