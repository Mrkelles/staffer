import React from 'react';

export default function DualCta() {
  return (
    <section className="w-full bg-[#FFFFFF] py-16 md:py-24 px-4 sm:px-6 md:px-8 font-sans box-border">
      {/* Bounded Container centered on the page */}
      <div className="mx-auto max-w-[1140px]">
        
        {/* Two equal-width rectangular cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6 items-stretch">
          
          {/* LEFT CARD: Deep Blue Variant / Solid Accent Button */}
          <div 
            className="group relative flex flex-col justify-center rounded-[4px] p-8 md:p-10 overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.01] hover:brightness-[1.03] select-none box-border shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            style={{ backgroundColor: '#272980' }}
          >
            {/* Photographic Background Layer with Brand-Color Duotone Overlay */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center mix-blend-multiply opacity-25"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80')` 
              }}
              aria-hidden="true"
            />
            {/* Dark Card Tint */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#272980]/90 to-[#272980]/65" 
              aria-hidden="true"
            />

            {/* Content Content Stack */}
            <div className="relative z-20 flex flex-col items-start text-left h-full justify-between">
              <div>
                <h3 className="m-0 text-white font-bold text-[20px] md:text-[22px] leading-1.3 tracking-tight">
                  For Global Enterprise Clients
                </h3>
                
                {/* Heading Underline Accent */}
                <div className="w-9 h-[2.5px] bg-[#F7ECE0] rounded-[1px] mt-2 mb-4" aria-hidden="true" />
                
                <p className="m-0 text-[#D8B7C2] font-normal text-[12px] md:text-[13px] leading-1.6 max-w-[85%] mb-8">
                  Deploy custom architectural talent pipelines built upon localized compliance metrics, robust behavioral telemetry, and immediate tax nexus verification models.
                </p>
              </div>

              {/* Solid Accent Button Variant */}
              <button
                type="button"
                className="bg-[#F7ECE0] hover:bg-[#EFE7E1] active:scale-[0.98] rounded-[999px] pt-2.5 pb-2.5 pl-5 pr-2 flex flex-row items-center gap-3 border-0 cursor-pointer transition-colors duration-200 box-border"
              >
                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.06em] uppercase text-[#272980]">
                  Initiate Search Mandate
                </span>
                {/* Circular Outlined Arrow Badge */}
                <div className="w-6 h-6 rounded-full border border-[#272980]/30 flex items-center justify-center bg-[#272980]/10 flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#272980]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

          {/* RIGHT CARD: Light Beige Variant / Solid White Button */}
          <div 
            className="group relative flex flex-col justify-center rounded-[4px] p-8 md:p-10 overflow-hidden transition-all duration-300 ease-in-out hover:scale-[1.01] hover:brightness-[1.03] select-none box-border shadow-[0_4px_20px_rgba(0,0,0,0.05)]"
            style={{ backgroundColor: '#F7ECE0' }}
          >
            {/* Photographic Background Layer with Brand-Color Duotone Overlay */}
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center mix-blend-multiply opacity-30"
              style={{ 
                backgroundImage: `url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80')` 
              }}
              aria-hidden="true"
            />
            {/* Card Tint */}
            <div 
              className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#F7ECE0]/95 to-[#F7ECE0]/70" 
              aria-hidden="true"
            />

            {/* Content Content Stack */}
            <div className="relative z-20 flex flex-col items-start text-left h-full justify-between">
              <div>
                <h3 className="m-0 text-[#272980] font-bold text-[20px] md:text-[22px] leading-1.3 tracking-tight">
                  For Specialized Operators
                </h3>
                
                {/* Heading Underline Accent */}
                <div className="w-9 h-[2.5px] bg-[#272980] rounded-[1px] mt-2 mb-4" aria-hidden="true" />
                
                <p className="m-0 text-[#7A7580] font-normal text-[12px] md:text-[13px] leading-1.6 max-w-[85%] mb-8">
                  Connect anonymously with elite industrial and engineering architecture firms seeking specialized capabilities for large-scale systemic transformation.
                </p>
              </div>

              {/* Solid White Button Variant (Alternated Pairing Logic) */}
              <button
                type="button"
                className="bg-white hover:bg-[#EFE7E1] active:scale-[0.98] rounded-[999px] pt-2.5 pb-2.5 pl-5 pr-2 flex flex-row items-center gap-3 border-0 cursor-pointer transition-colors duration-200 box-border"
              >
                <span className="text-[11px] md:text-[12px] font-bold tracking-[0.06em] uppercase text-[#272980]">
                  Explore Active Nodes
                </span>
                {/* Dark Circular Outlined Arrow Badge */}
                <div className="w-6 h-6 rounded-full border border-[#272980]/20 flex items-center justify-center bg-[#272980]/5 flex-shrink-0">
                  <svg className="w-3.5 h-3.5 text-[#272980]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </button>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
