import React from 'react';
import { capabilitiesData } from '../data/capabilitiesData';

export default function WhatIBuild() {
  return (
    <section
      id="services"
      className="bg-cream py-20 lg:py-28 border-t border-navy/10"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div
          className="mb-14"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <span className="text-xs font-sans text-navy-muted uppercase tracking-widest block mb-2">
            CAPABILITIES & EXPERTISE
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-navy">
            What I Build
          </h2>
        </div>

        {/* Capabilities Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {capabilitiesData.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-3xl bg-white/60 border border-navy/12
              hover:border-navy/30 transition-all duration-300
              space-y-4 shadow-sm hover:shadow-md"
            >
              <div className="flex items-center justify-between text-navy-muted text-xs font-sans uppercase tracking-wider">
                <span>{item.number}</span>
                <i className={`${item.icon} text-base text-navy`}></i>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-navy">
                {item.title}
              </h3>

              <p className="text-sm sm:text-base font-sans text-navy-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}