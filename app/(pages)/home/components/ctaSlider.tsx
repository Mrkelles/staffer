'use client'
import React, { useState, useEffect } from 'react';

export default function CtaCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);

  const slides = [
    {
      "id": 1,
      "image": "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1200&q=80",
      "headline": "SIA-Licensed Site Security",
      "subtext": "Deploying rigorously vetted, fully compliant security personnel trained for static guarding, construction site safety, and proactive night patrols.",
      "ctaLabel": "Secure Your Site"
    },
    {
      "id": 2,
      "image": "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
      "headline": "CSCS-Certified Site Labour",
      "subtext": "Supplying dependable construction operatives, general site labourers, and skilled assistants ready for rapid workforce deployment.",
      "ctaLabel": "Request Labour Supply"
    },
    {
      "id": 3,
      "image": "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=1200&q=80",
      "headline": "Commercial Cleaning Excellence",
      "subtext": "Maintaining pristine, safe, and highly functional corporate environments, residential blocks, and meticulous post-construction end-of-build cleans.",
      "ctaLabel": "Book Cleaning Services"
    }
  ];

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
  };

  const getSlidePositionClass = (index) => {
    // Basic structural alignment for the 3-panel horizontal layout
    if (index === activeIndex) return "w-full md:w-[60%] opacity-100 z-20 scale-100";
    return "hidden md:flex md:w-[20%] opacity-40 desaturate-[40%] hover:opacity-70 cursor-pointer scale-[0.98] transition-all duration-300";
  };

  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 px-4 sm:px-6 md:px-8 box-border font-sans">
      <div className="mx-auto max-w-[1200px]">
        
        {/* CAROUSEL BANNER WRAPPER CONTAINER */}
        <div className="flex flex-row gap-[2px] items-stretch justify-center overflow-hidden rounded-xl h-[420px] md:h-[460px] select-none bg-[#272980]">
          
          {slides.map((slide, idx) => {
            const isActive = idx === activeIndex;
            
            return (
              <div
                key={slide.id}
                onClick={!isActive ? () => handleSlideClick(idx) : undefined}
                className={`relative flex flex-col justify-center items-center overflow-hidden transition-all duration-500 ease-in-out ${getSlidePositionClass(idx)}`}
              >
                {/* PHOTOGRAPHIC BACKGROUND LAYER */}
                <img 
                  src={slide.image} 
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover z-0"
                  loading="lazy"
                />

                {/* TRANSLUCENT DARK OVERLAY FOR TEXT CONTRAST */}
                <div 
                  className="absolute inset-0 z-10 pointer-events-none mix-blend-normal"
                  style={{ backgroundColor: '#272980', opacity: 0.55 }}
                />

                {/* CONTENT BLOCK - Only fully visible & interactive on active slide */}
                <div className={`relative z-20 w-full px-6 sm:px-12 md:px-8 lg:px-12 text-center flex flex-col items-center justify-center h-full transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                  
                  {/* Headline Group */}
                  <h2 className="m-0 text-white font-bold leading-[1.2] text-center tracking-normal max-w-[680px] text-[clamp(24px,3vw,38px)]">
                    {slide.headline}
                  </h2>

                  {/* Supporting Subtext */}
                  <p className="m-0 mt-4 text-[#F7ECE0] font-normal leading-[1.6] text-center text-[14px] max-w-[90%] md:max-w-[55%]">
                    {slide.subtext}
                  </p>

                  {/* Primary Call to Action Button */}
                  <button
                    type="button"
                    className="mt-8 bg-[#D8B7C2] hover:bg-[#C8A7B2] active:scale-[0.98] text-white rounded-[999px] pt-3 pb-3 pl-6 pr-3 flex flex-row items-center gap-4 border-0 cursor-pointer shadow-none transition-colors duration-200 ease-in-out box-border"
                  >
                    <span className="text-[13px] font-bold tracking-[0.08em] uppercase text-[#272980] whitespace-nowrap">
                      {slide.ctaLabel}
                    </span>
                    {/* Circular Outlined Arrow Badge */}
                    <div className="w-7 h-7 rounded-full border border-white/30 flex items-center justify-center bg-white/10 flex-shrink-0">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </button>

                  {/* Segmented Dash + Dot Pagination */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-row items-center gap-2 z-30">
                    {slides.map((_, dotIdx) => (
                      <button
                        key={dotIdx}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSlideClick(dotIdx);
                        }}
                        className={`h-2 transition-all duration-300 border-0 p-0 cursor-pointer rounded-full ${
                          dotIdx === activeIndex 
                            ? 'w-6 bg-[#D8B7C2]' 
                            : 'w-2 bg-[#7A7580] hover:bg-[#F7ECE0]'
                        }`}
                        aria-label={`Go to slide ${dotIdx + 1}`}
                      />
                    ))}
                  </div>

                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}