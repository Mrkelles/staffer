import React from 'react';

export default function CoreValuesSection() {
  // Mapping the 5 values into an array.
  // Step 1 is highlighted in the primary navy tone as the dominant visual weight.
  const pillars = [
    {
      id: 1,
      title: "Reliability",
      subtitle: "Consistent Service Delivery & Staffing",
      body: "We understand that gaps in security or maintenance create immediate operational risks. We guarantee dependable, consistent headcount and service standards, ensuring your sites remain fully operational without interruption.",
      isActive: true, 
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.745 3.745 0 013.296-1.043A3.746 3.746 0 0112 3c1.23 0 2.43.049 3.61.144m-5.716 0A2.25 2.25 0 004.5 5.308V19.5a2.25 2.25 0 002.25 2.25h1.314" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Strict Compliance",
      subtitle: "Fully Vetted Personnel",
      body: "Compliance isn't a checkbox; it's our baseline. Every operative we deploy undergoes rigorous verification, holding valid SIA licenses, CSCS cards, and comprehensive Right to Work documentation before they ever step onto your property.",
      isActive: false,
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 0A48.536 48.536 0 0112 3c1.23 0 2.43.049 3.61.144m-5.716 0A2.25 2.25 0 004.5 5.308V19.5a2.25 2.25 0 002.25 2.25h1.314" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Absolute Accountability",
      subtitle: "Responsibility for Performance",
      body: "We take complete ownership of our workforce's on-site performance and delivery. If a challenge arises, our management infrastructure is designed to resolve it immediately, keeping your project timelines secure.",
      isActive: false,
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "True Professionalism",
      subtitle: "Structured, Trained, and Uniformed",
      body: "First impressions matter, especially in front-of-house security and corporate cleaning. Our teams are structured, meticulously trained for their specific environments, and always arrive fully uniformed and ready to represent your brand.",
      isActive: false,
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
        </svg>
      )
    },
    {
      id: 5,
      title: "Operational Efficiency",
      subtitle: "Fast Deployment & Responsive Operations",
      body: "When your requirements change unexpectedly, you need a partner who can move at pace. Our deep local talent pools allow for rapid, responsive deployment to cover urgent security, cleaning, or labor needs with minimal notice.",
      isActive: false,
      icon: (
        <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      )
    }
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#F7ECE0] font-sans box-border pb-12">
      
      {/* ANGLED TRANSITION BAND: Slashed transition border from previous dark layout framework */}
      <div 
        className="w-full mb-[-1px] relative z-10"
        style={{
          background: '#272980',
          height: '100px',
          clipPath: 'polygon(0 0, 100% 0, 100% 55%, 0 100%)'
        }}
        aria-hidden="true"
      />

      {/* CENTERED HEADING BLOCK */}
      <div className="mx-auto flex flex-col px-2 items-center text-center select-none" style={{ marginTop: '36px', marginBottom: '48px', maxWidth: '750px' }}>
        <span className="text-[12px] uppercase tracking-[0.15em] font-bold text-[#272980] mb-2">
          Our Core Values
        </span>
        <h2 className="m-0 font-bold tracking-[-0.01em] text-[#272980] leading-[1.2]" style={{ fontSize: 'clamp(28px, 3vw, 38px)' }}>
          The Standards That Drive Our Workforce Infrastructure
        </h2>
        <p className="m-0 font-normal text-[#7A7580] text-[14px] leading-[1.5]" style={{ marginTop: '12px', maxWidth: '620px' }}>
          At Commonwealth Facilities & Security, we don&apos;t just fill open shifts. We build operational continuity through an unyielding commitment to five foundational pillars. These values guide how we select, train, and deploy every professional on our team.
        </p>
        
        {/* Short Navy Underline Rule */}
        <div className="rounded-[2px]" style={{ width: '40px', height: '2px', backgroundColor: '#272980', marginTop: '16px' }} aria-hidden="true" />
      </div>

      {/* CORE 2-COLUMN STRUCTURE GRID */}
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 items-center" style={{ maxWidth: '1100px' }}>
        
        {/* LEFT COLUMN: Deep Vertical Stack of Core Value Nodes */}
        <div className="lg:col-span-6 flex flex-col gap-8 w-full">
          {pillars.map((pillar) => (
            <div key={pillar.id} className="flex flex-row items-start text-left gap-4 group transition-all duration-200">
              {/* Badge Element Wrapper */}
              <div 
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105"
                style={{ 
                  backgroundColor: pillar.isActive ? '#272980' : '#42405A',
                  color: '#FFFFFF'
                }}
              >
                {pillar.icon}
              </div>

              {/* Text Block Stack */}
              <div className="flex flex-col items-start text-left">
                <h3 className="m-0 text-[16px] font-bold text-[#272980] leading-[1.3] mb-1 flex items-center gap-2">
                  <span className="text-[#F0A582] opacity-90 text-[14px] font-mono">0{pillar.id}.</span>
                  {pillar.title}
                </h3>
                <h4 className="m-0 text-[13px] font-semibold text-[#42405A] tracking-wide mb-1.5 opacity-90">
                  {pillar.subtitle}
                </h4>
                <p className="m-0 text-[12.5px] font-normal text-[#7A7580] leading-[1.65] max-w-[460px]">
                  {pillar.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* RIGHT COLUMN: Premium SVG Constellation Network Map */}
        <div className="lg:col-span-6 relative w-full flex items-center justify-center select-none min-h-[380px] lg:min-h-[460px] bg-[#EFE7E1]/60 rounded-2xl border border-dashed border-[#8E8C96]/30">
          
          {/* SVG Connector Lines Container Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
            {/* Network Vector Paths from Pills to Central Brand Hub Anchor */}
            <line x1="25%" y1="20%" x2="50%" y2="50%" stroke="#2B2D82" strokeWidth="1.5" strokeOpacity="0.25" />
            <line x1="22%" y1="52%" x2="50%" y2="50%" stroke="#2B2D82" strokeWidth="1.5" strokeOpacity="0.25" />
            <line x1="30%" y1="82%" x2="50%" y2="50%" stroke="#2B2D82" strokeWidth="1.5" strokeOpacity="0.25" />
            <line x1="78%" y1="32%" x2="50%" y2="50%" stroke="#2B2D82" strokeWidth="1.5" strokeOpacity="0.25" />
            <line x1="76%" y1="72%" x2="50%" y2="50%" stroke="#2B2D82" strokeWidth="1.5" strokeOpacity="0.25" />

            {/* Scattered Decorative Node Constellation Dots (3 Opacity Scales) */}
            <circle cx="15%" cy="38%" r="4" fill="#F0A582" fillOpacity="1" />
            <circle cx="45%" cy="15%" r="7" fill="#2B2D82" fillOpacity="0.15" />
            <circle cx="85%" cy="18%" r="5" fill="#F0A582" fillOpacity="0.5" />
            <circle cx="88%" cy="54%" r="3" fill="#2B2D82" fillOpacity="0.8" />
            <circle cx="62%" cy="85%" r="6" fill="#2B2D82" fillOpacity="0.15" />
            <circle cx="38%" cy="92%" r="4" fill="#F0A582" fillOpacity="0.6" />
            <circle cx="65%" cy="22%" r="3" fill="#2B2D82" fillOpacity="0.4" />
            <circle cx="12%" cy="74%" r="5" fill="#F0A582" fillOpacity="0.3" />
          </svg>

          {/* CENTRAL CORE HUB CIRCLE */}
          <div 
            className="absolute z-20 rounded-full bg-[#FFFFFF] border-2 flex items-center justify-center transition-transform duration-500 hover:rotate-12"
            style={{ 
              width: '80px', 
              height: '80px', 
              borderColor: '#272980',
              boxShadow: '0 4px 24px rgba(39,41,128,0.12)',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
            }}
          >
            {/* Abstract Operational Shield Brand Crown Icon */}
            <svg className="w-8 h-8 text-[#272980]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>

          {/* DISTRIBUTED SCHEMATIC PROCESS NODE PILLS */}
          {/* Pill 1: Top Left */}
          <div 
            className="absolute z-10 bg-[#FFFFFF] border rounded-[100px] text-center whitespace-nowrap tracking-[0.01em] font-semibold text-[#272980] text-[12px] shadow-sm transition-all duration-300 hover:translate-y-[-2px]"
            style={{ borderColor: '#F0A582', borderWidth: '1.5px', padding: '7px 16px', top: '16%', left: '12%' }}
          >
            Reliability
          </div>

          {/* Pill 2: Middle Left */}
          <div 
            className="absolute z-10 bg-[#FFFFFF] border rounded-[100px] text-center whitespace-nowrap tracking-[0.01em] font-semibold text-[#272980] text-[12px] shadow-sm transition-all duration-300 hover:translate-y-[-2px]"
            style={{ borderColor: '#272980', borderWidth: '1.5px', padding: '7px 16px', top: '48%', left: '4%' }}
          >
            Strict Compliance
          </div>

          {/* Pill 3: Bottom Left */}
          <div 
            className="absolute z-10 bg-[#FFFFFF] border rounded-[100px] text-center whitespace-nowrap tracking-[0.01em] font-semibold text-[#272980] text-[12px] shadow-sm transition-all duration-300 hover:translate-y-[-2px]"
            style={{ borderColor: '#272980', borderWidth: '1.5px', padding: '7px 16px', bottom: '14%', left: '16%' }}
          >
            Absolute Accountability
          </div>

          {/* Pill 4: Top Right */}
          <div 
            className="absolute z-10 bg-[#FFFFFF] border rounded-[100px] text-center whitespace-nowrap tracking-[0.01em] font-semibold text-[#272980] text-[12px] shadow-sm transition-all duration-300 hover:translate-y-[-2px]"
            style={{ borderColor: '#272980', borderWidth: '1.5px', padding: '7px 16px', top: '28%', right: '10%' }}
          >
            True Professionalism
          </div>

          {/* Pill 5: Bottom Right */}
          <div 
            className="absolute z-10 bg-[#FFFFFF] border rounded-[100px] text-center whitespace-nowrap tracking-[0.01em] font-semibold text-[#272980] text-[12px] shadow-sm transition-all duration-300 hover:translate-y-[-2px]"
            style={{ borderColor: '#C2624A', borderWidth: '1.5px', padding: '7px 16px', bottom: '24%', right: '12%' }}
          >
            Operational Efficiency
          </div>

        </div>

      </div>
    </section>
  );
}