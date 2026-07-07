import React from 'react';
import Image from 'next/image';

export default function WhoWeAre() {
  return (
    <section className="relative w-full bg-[#F7ECE0] px-6 pt-12 pb-12 md:px-12 lg:px-[clamp(24px,8vw,120px)] lg:pt-20 lg:pb-16 font-sans overflow-hidden box-border">
      
      <div className="mx-auto max-w-[1100px]">
        
        {/* TWO-COLUMN CONTENT BLOCK */}
        <div className="grid grid-cols-1 lg:grid-cols-[40fr_60fr] gap-12 lg:gap-16 items-center mb-16 lg:mb-20">
          
          {/* LEFT COLUMN: RESTRAINED TYPOGRAPHY */}
          <div className="flex flex-col items-start text-left">
            <span className="text-[10px] font-semibold text-[#272980] tracking-[0.14em] uppercase mb-3 block">
              Who We Are
            </span>
            
            <h2 className="text-[30px] sm:text-[40px] md:text-[clamp(32px,4vw,52px)] font-bold tracking-[-0.02em] text-[#272980] m-0 leading-[1.10] max-w-[320px]">
              Architects of Alignment.
            </h2>
            
            {/* Signature Accent Rule */}
            <div className="w-[40px] h-[2.5px] bg-[#272980] rounded-[2px] mt-3.5 mb-6 block" />
            
            <p className="text-[12px] font-normal leading-[1.75] text-[#7A7580] m-0 max-w-[300px]">
            Commonwealth Facilities & Security is a premier UK-based provider of integrated facilities management, security services, and robust workforce solutions. Operating across Manchester and the wider UK, we seamlessly support construction sites, commercial properties, residential developments, and complex logistics operations with a steadfast commitment to absolute reliability and operational continuity.
            </p>
          </div>

          {/* RIGHT COLUMN: CHAT-BUBBLE STAGGERED UI CARD CLUSTER */}
          <div className="flex justify-start lg:justify-end w-full">
            <div className="relative bg-[#EFE7E1] rounded-[20px] p-6 w-full max-w-[440px] shadow-none flex flex-col gap-[10px] select-none">
              
              {/* SVG OVERLAY: Curved Arrow & Floating Network Status Dots */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none z-20" aria-hidden="true">
                {/* Single Hand-Drawn Style Curved Arrow connecting Card 1 area down to Card 2 area */}
                <path 
                  d="M 90,62 C 60,82 70,110 115,112" 
                  fill="none" 
                  stroke="#272980" 
                  strokeWidth="1.5" 
                  strokeOpacity="0.35"
                  markerEnd="url(#arrowhead)"
                />
                <defs>
                  <marker id="arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                    <path d="M 0 1 L 10 5 L 0 9 z" fill="#272980" fillOpacity="0.35" />
                  </marker>
                </defs>
              </svg>

              {/* Absolute Positioned Free-Floating Status Indicators */}
              <div 
                className="absolute w-2.5 h-2.5 rounded-full bg-[#272980] border-2 border-[#F7ECE0]" 
                style={{ top: '48%', left: '12%', zIndex: 30 }}
                aria-hidden="true" 
              />
              <div 
                className="absolute w-2 h-2 rounded-full bg-[#3DD68C] border-2 border-[#F7ECE0]" 
                style={{ bottom: '38%', right: '8%', zIndex: 30 }}
                aria-hidden="true" 
              />

              {/* CARD 1: Full width, Left Aligned */}
              <div className="w-full bg-white rounded-[12px] border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-12 px-4 flex items-center gap-3 relative z-10 transition-transform duration-200 hover:-translate-y-0.5">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Marcus Vance" 
                    fill
                    className="w-full h-full rounded-full object-cover border-[1.5px] border-white box-border" 
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#3DD68C] border-2 border-white box-border" />
                </div>
                <span className="text-[13px] font-semibold text-[#272980] truncate">✅ Completed Background Checks</span>
              </div>

              {/* CARD 2: Right Aligned, 75% Width */}
              <div className="w-[75%] ml-auto bg-white rounded-[12px] border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-12 px-4 flex items-center gap-3 relative z-10 transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-[10px] bg-[#272980] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-[#272980] truncate">CSCS Verified</span>
              </div>

              {/* CARD 3: Right Aligned, 85% Width */}
              <div className="w-[85%] ml-auto bg-white rounded-[12px] border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-12 px-4 flex items-center gap-3 relative z-10 transition-transform duration-200 hover:-translate-y-0.5">
                <div className="relative w-8 h-8 flex-shrink-0">
                  <Image 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&h=100&q=80" 
                    alt="Elena Rostova" 
                    fill
                    className="w-full h-full rounded-full object-cover border-[1.5px] border-white box-border" 
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-[#3DD68C] border-2 border-white box-border" />
                </div>
                <span className="text-[13px] font-semibold text-[#272980] truncate">Elena Smith vetted</span>
              </div>

              {/* CARD 4: Left Aligned, 65% Width */}
              <div className="w-[65%] bg-white rounded-[12px] border border-black/[0.06] shadow-[0_2px_12px_rgba(0,0,0,0.06)] h-12 px-4 flex items-center gap-3 relative z-10 transition-transform duration-200 hover:-translate-y-0.5">
                <div className="w-9 h-9 rounded-[10px] bg-[#272980] flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-white stroke-current stroke-[1.5]" fill="none" viewBox="0 0 24 24">
                    <path d="M4.5 16.5c-1.5 1.26-2.5 3.19-2.5 5.5h20c0-2.31-1-4.24-2.5-5.5" />
                    <path d="M12 2C9.24 2 7 4.24 7 7c0 2.76 2.24 5 5 5s5-2.24 5-5c0-2.76-2.24-5-5-5z" />
                  </svg>
                </div>
                <span className="text-[13px] font-semibold text-[#272980] truncate">Marcus Vance pending verification</span>
              </div>

            </div>
          </div>

        </div>

        {/* FULL-WIDTH 3-COLUMN HORIZONTAL MINI STRIP FOOTER */}
        <div className="w-full border-t border-black/[0.08] pt-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 box-border">
          
          {/* Strip Item 1 */}
          <div className="flex items-start gap-3 text-left md:px-4 lg:px-6 md:border-r md:border-black/[0.08] last:border-0 box-border">
            <svg className="w-7 h-7 text-[#272980] stroke-current stroke-[1.5] fill-none flex-shrink-0" viewBox="0 0 24 24">
              <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
              <path d="M12 6v6l4 2" />
            </svg>
            <div className="flex flex-col gap-1">
              <h4 className="text-[14px] font-bold text-[#272980] m-0 leading-tight">Commercial Cleaning Services</h4>
              <p className="text-[11px] font-normal text-[#7A7580] m-0 leading-[1.5]">Maintaining pristine, safe, and highly functional environments across your corporate offices, residential blocks, and critical post-construction site handovers.</p>
            </div>
          </div>

          {/* Strip Item 2 */}
          <div className="flex items-start gap-3 text-left md:px-8 lg:px-10 md:border-r md:border-black/[0.08] last:border-0 box-border">
            <svg className="w-7 h-7 text-[#272980] stroke-current stroke-[1.5] fill-none flex-shrink-0" viewBox="0 0 24 24">
              <path d="M3.82 10.82a1.5 1.5 0 0 1 0-2.12l5.18-5.18a1.5 1.5 0 0 1 2.12 0L20.3 12.7a1.5 1.5 0 0 1 0 2.12l-5.18 5.18a1.5 1.5 0 0 1-2.12 0z" />
              <path d="M7 7.01 7 7" />
            </svg>
            <div className="flex flex-col gap-1">
              <h4 className="text-[14px] font-bold text-[#272980] m-0 leading-tight">SIA-Licensed Security</h4>
              <p className="text-[11px] font-normal text-[#7A7580] m-0 leading-[1.5]">Deploying rigorously vetted, fully compliant security personnel trained for static guarding, night patrols, and front-of-house protection.</p>
            </div>
          </div>

          {/* Strip Item 3 */}
          <div className="flex items-start gap-3 text-left md:px-8 lg:px-10 last:border-0 box-border">
            <svg className="w-7 h-7 text-[#272980] stroke-current stroke-[1.5] fill-none flex-shrink-0" viewBox="0 0 24 24">
              <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
              <path d="M22 12A10 10 0 0 0 12 2v10z" />
            </svg>
            <div className="flex flex-col gap-1">
              <h4 className="text-[14px] font-bold text-[#272980] m-0 leading-tight">CSCS-Certified Labour</h4>
              <p className="text-[11px] font-normal text-[#7A7580] m-0 leading-[1.5]">Supplying dependable site labourers, construction operatives, and skilled assistants ready for both rapid temporary deployment and long-term infrastructure support..</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}