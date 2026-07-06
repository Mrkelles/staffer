
'use client'

import { useState } from 'react';
import { jobPostings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { usePathname } from 'next/navigation';
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ApplyPage() {
  const pathname = usePathname();
  const id = pathname.split('/')[3];
  const job = jobPostings.find((j) => j.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: '',
    coverLetter: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your application!');
    // Here you would typically handle the form submission, e.g., send to an API
    console.log(formData);
  };

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href={`/jobs/${job.id}`} className="text-[#7A7580] hover:text-[#272980] flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Job Details
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif text-[#272980]">Apply for {job.title}</h1>
          
          <form onSubmit={handleSubmit} className="mt-8 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#272980]">Full Name</label>
              <Input type="text" name="name" id="name" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#272980]">Email Address</label>
              <Input type="email" name="email" id="email" required onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#272980]">Phone Number</label>
              <Input type="tel" name="phone" id="phone" onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500" />
            </div>

            <div>
                <label htmlFor="resume" className="block text-sm font-medium text-[#272980]">Resume/CV</label>
                <Input type="file" name="resume" id="resume" accept=".pdf,.doc,.docx" required className="mt-1 block w-full" />
            </div>

            <div>
              <label htmlFor="coverLetter" className="block text-sm font-medium text-[#272980]">Cover Letter</label>
              <Textarea name="coverLetter" id="coverLetter" rows={6} onChange={handleChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"></Textarea>
            </div>

            <div className="text-center">
              <Button type="submit" className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-12 py-4 text-lg">
                Submit Application
              </Button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
