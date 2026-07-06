'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const navItems = [
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' },
    { label: 'Terms', href: '/terms' },
    { label: 'Privacy', href: '/privacy' },
    { label: 'Quote', href: '/quote' },
    //{ label: 'Enquiry', href: '/enquiry' },
    { label: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-2 mb-8">
        <div className="relative max-w-[1200px] mx-auto">
            <nav className={`h-14 px-6 flex items-center justify-between rounded-full w-full shadow-lg transition-colors duration-300 ${scrolled ? "bg-[#F7ECE0]/20 backdrop-blur-xl" : "bg-[#F7ECE0]"}`}>
                {/* Logo Component - Left Layout */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="text-xl font-bold text-[#272980] tracking-normal">
                    Commonwealth
                    </span>
                </Link>

                {/* Nav links - Center Layout (Hidden on Mobile, flex on Desktop) */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                    <Link key={item.label} href={item.href} className="text-sm font-normal text-[#7A7580] hover:text-[#7A7580]/75 transition-colors duration-150">
                        {item.label}
                    </Link>
                    ))}
                </div>

                {/* Premium CTA Button - Right Layout (Hidden on Mobile, flex on Desktop) */}
                <div className="hidden md:block">
                    <Link href="/quote">
                    <button className="bg-[#272980] text-white rounded-full px-5 py-2.5 text-sm font-semibold flex items-center justify-center transition-colors duration-200 hover:bg-[#272980]/90 cursor-pointer">
                        Request a Quote
                    </button>
                    </Link>
                </div>

                {/* Mobile Hamburger Trigger (Visible on Mobile, hidden on Desktop) */}
                <div className="md:hidden flex items-center">
                    <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-[#272980] focus:outline-none p-1 flex flex-col justify-center items-center w-6 h-5 gap-[4px]"
                    aria-label="Toggle navigation menu"
                    >
                    <span className={`block w-5 h-[2px] bg-[#272980] transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[6px]' : ''}`}></span>
                    <span className={`block w-5 h-[2px] bg-[#272980] transition-all duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}></span>
                    <span className={`block w-5 h-[2px] bg-[#272980] transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[6px]' : ''}`}></span>
                    </button>
                </div>
            </nav>
            {/* Responsive Mobile Dropdown Drawer */}
            <div className={`md:hidden absolute left-0 right-0 mt-2 w-full bg-[#F7ECE0] border border-[#D8B7C2] px-4 py-6 shadow-lg transition-all duration-300 ease-in-out origin-top rounded-2xl ${isOpen ? 'opacity-100 scale-y-100 pointer-events-auto' : 'opacity-0 scale-y-95 pointer-events-none'}`}>
                <div className="flex flex-col gap-5 p-4">
                    {navItems.map((item) => (
                        <Link key={item.label} href={item.href} onClick={() => setIsOpen(false)} className="text-sm font-normal text-[#7A7580] pb-2 border-b border-[#D8B7C2]">
                        {item.label}
                        </Link>
                    ))}
                    <div className="pt-2">
                        <Link href="/quote">
                        <button className="w-full bg-[#272980] text-white rounded-full py-3 text-sm font-semibold flex items-center justify-center">
                            Request a Quote
                        </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </header>
  );
}
