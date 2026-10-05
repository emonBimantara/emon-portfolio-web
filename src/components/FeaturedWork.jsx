import React from 'react';
import { projectsData } from '../data/projectsData';

export default function FeaturedWork() {
  return (
    <section id="project" class="bg-cream py-20 lg:py-28 border-t border-navy/10">
      <div class="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Complete Projects Gallery Grid */}
        <div class="pt-6">
          <div class="mb-8 flex items-center justify-between border-b border-navy/10 pb-4">
            <h3 class="text-2xl font-serif text-navy">All Projects Showcase</h3>
            <span class="text-xs font-sans text-navy-muted uppercase tracking-wider">
              {projectsData.length} WORK SHOWCASES
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectsData.map((project, index) => (
              <div
                key={index}
                class="bg-white rounded-3xl overflow-hidden border border-navy/10 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div>
                  <div class="h-48 overflow-hidden bg-navy/5 relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div class="p-6">
                    <h4 class="font-serif text-2xl text-navy mb-2">{project.title}</h4>
                    <p class="text-navy-muted text-xs sm:text-sm font-sans leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div class="p-6 pt-0 flex flex-wrap items-center gap-3">
                  {project.codeUrl && (
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class="bg-navy text-cream text-xs px-4 py-2 rounded-full font-medium hover:bg-navy-dark transition inline-flex items-center gap-1"
                    >
                      <i class="fa-brands fa-github"></i>
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      class={
                        project.isPlayStore
                          ? "bg-navy text-cream text-xs px-4 py-2 rounded-full font-medium hover:bg-navy-dark transition inline-flex items-center gap-1"
                          : "border border-navy/20 text-navy text-xs px-4 py-2 rounded-full font-medium hover:bg-navy hover:text-cream transition inline-flex items-center gap-1"
                      }
                    >
                      {project.isPlayStore ? (
                        <>
                          <i class="fa-brands fa-google-play"></i>
                          <span>Play Store App</span>
                        </>
                      ) : (
                        <>
                          <span>Visit</span>
                          <i class="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                        </>
                      )}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
