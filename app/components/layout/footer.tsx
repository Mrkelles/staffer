import Link from 'next/link';
import { ShieldCheck, Twitter, Linkedin, Facebook, Mail } from 'lucide-react';

export function Foot() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact' },
      ],
    },
    {
      title: 'Services',
      links: [
        { label: 'Cleaning Services', href: '/services' },
        { label: 'Security Services', href: '/services' },
        { label: 'CSCS Labour Supply', href: '/services' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { label: 'Privacy Policy', href: '/privacy' },
        { label: 'Terms of Service', href: '/terms' },
        { label: 'Enquiry', href: '/enquiry' },
      ],
    },
  ];

  return (
    <footer className="bg-[#F7ECE0] border-t border-[#D8B7C2]">
      <div className="container mx-auto px-4 py-8 md:py-16">
        <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center md:text-left">
              <div className="col-span-1 md:col-span-2 lg:col-span-2 space-y-4 flex flex-col items-center md:items-start">
                <Link href="/" className="flex items-center space-x-2">
                  <ShieldCheck className="h-6 w-6 text-[#272980]" />
                  <span className="font-bold text-xl tracking-tight text-[#272980]">Commonwealth</span>
                </Link>
                <p className="text-[#7A7580] text-sm max-w-xs leading-relaxed">
                  Your trusted partner for comprehensive facilities, security, and workforce solutions across the UK.
                </p>
                <div className="flex space-x-4 pt-2">
                  <Link href="#" className="text-[#7A7580] hover:text-[#272980] transition-colors">
                    <Twitter className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-[#7A7580] hover:text-[#272980] transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                  <Link href="#" className="text-[#7A7580] hover:text-[#272980] transition-colors">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </div>
              </div>
              
              {footerSections.map((section) => (
                <div key={section.title} className="space-y-4">
                  <h4 className="font-bold text-sm uppercase tracking-wider text-[#272980]">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link 
                          href={link.href} 
                          className="text-[#7A7580] hover:text-[#272980] text-sm transition-colors"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#D8B7C2] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#7A7580] text-sm">
            &copy; {currentYear} Workforce Inc. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-sm text-[#7A7580]">
            <Link href="/quote" className="hover:text-[#272980] transition-colors">Request a Quote</Link>
            <a href="mailto:hello@workforce.com" className="hover:text-[#272980] transition-colors font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              hello@workforce.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
