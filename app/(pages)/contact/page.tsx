
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ContactPage() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message!');
  };

  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Contact Us</h1>
          <nav>
            <Link href="/" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Home</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <section className="text-center">
          <h2 className="text-sm text-[#8E8C96] uppercase tracking-widest">GET IN TOUCH</h2>
          <p className="text-4xl md:text-5xl font-serif text-[#272980] mt-4 max-w-3xl mx-auto">
            We’re Here to Help
          </p>
          <div className="flex justify-center my-8">
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 10H38" stroke="#2B2D82" strokeWidth="2" strokeLinecap="round"/>
              <circle cx="20" cy="10" r="3" fill="#F0A582"/>
            </svg>
          </div>
          <p className="text-[#7A7580] mt-4 max-w-2xl mx-auto">
            Whether you have a question about our services, need a quote, or want to join our team, we are ready to answer all your questions.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-16 mt-20">
            <div className="bg-white rounded-2xl p-8 md:p-12">
                <h3 className="text-2xl font-serif text-[#272980]">Send Us a Message</h3>
                 <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                    <div>
                        <Label htmlFor="name" className="text-sm font-medium text-[#272980]">Full Name</Label>
                        <Input type="text" name="name" id="name" required className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="email" className="text-sm font-medium text-[#272980]">Email Address</Label>
                        <Input type="email" name="email" id="email" required className="mt-1" />
                    </div>
                    <div>
                        <Label htmlFor="message" className="text-sm font-medium text-[#272980]">Message</Label>
                        <Textarea name="message" id="message" rows={5} required className="mt-1"></Textarea>
                    </div>
                    <div className="text-left">
                        <Button type="submit" className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-10 py-3">
                            Send Message
                        </Button>
                    </div>
                </form>
            </div>
            <div className="space-y-8">
                <div>
                    <h3 className="text-xl font-semibold text-[#272980]">Our Office</h3>
                    <p className="text-[#7A7580] mt-2">123 Security Lane, Manchester, M1 1AB</p>
                    <p className="text-[#7A7580]">Office Hours: Mon – Fri, 9:00 AM – 5:00 PM</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-[#272980]">Direct Contact</h3>
                    <p className="text-[#7A7580] mt-2">General Inquiries: <a href="mailto:info@commonwealth.com" className="text-[#272980] hover:underline">info@commonwealth.com</a></p>
                    <p className="text-[#7A7580]">Service Quotes: <a href="mailto:quotes@commonwealth.com" className="text-[#272980] hover:underline">quotes@commonwealth.com</a></p>
                    <p className="text-[#7A7580]">Careers: <a href="mailto:careers@commonwealth.com" className="text-[#272980] hover:underline">careers@commonwealth.com</a></p>
                </div>
            </div>
        </div>
      </main>
    </div>
  );
}
