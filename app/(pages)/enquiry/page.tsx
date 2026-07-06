
'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function EnquiryPage() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your enquiry!');
  };

  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Make an Enquiry</h1>
          <nav>
            <Link href="/" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Home</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-sm text-[#8E8C96] uppercase tracking-widest">SERVICE ENQUIRY</h2>
            <p className="text-4xl font-serif text-[#272980] mt-4">
              How Can We Help You?
            </p>
            <p className="text-[#7A7580] mt-4 max-w-xl mx-auto">
              Fill out the form below and a member of our team will get back to you shortly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Label htmlFor="name" className="text-sm font-medium text-[#272980]">Full Name</Label>
                <Input type="text" name="name" id="name" required className="mt-1" />
              </div>
              <div>
                <Label htmlFor="email" className="text-sm font-medium text-[#272980]">Email Address</Label>
                <Input type="email" name="email" id="email" required className="mt-1" />
              </div>
            </div>

            <div>
              <Label htmlFor="service" className="text-sm font-medium text-[#272980]">Service of Interest</Label>
              <Select>
                <SelectTrigger className="w-full mt-1">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="security">Security Services</SelectItem>
                  <SelectItem value="facilities">Facilities Management</SelectItem>
                  <SelectItem value="workforce">Workforce Solutions</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="message" className="text-sm font-medium text-[#272980]">Your Message</Label>
              <Textarea name="message" id="message" rows={6} required className="mt-1"></Textarea>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-12 py-4 text-lg">
                Submit Enquiry
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
