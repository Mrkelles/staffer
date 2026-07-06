
import Link from "next/link";

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Terms & Conditions</h1>
          <nav>
            <Link href="/" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Home</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <p className="text-sm text-[#8E8C96]">Last Updated: 1st January 2024</p>
          <div className="mt-8 text-[#7A7580] space-y-6 prose lg:prose-lg max-w-none">
            <p>Welcome to the Commonwealth Facilities & Security website. By accessing or using our website, platform, and recruitment services, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully.</p>
            
            <h2 className="text-xl font-semibold text-[#272980]">1. Services Provided</h2>
            <p>Commonwealth Facilities & Security operates as a workforce intermediary, connecting Job Seekers (Candidates) with Employers (Clients). All job postings, placements, and staffing requests are subject to specific separate agreements, work orders, or employment contracts.</p>

            <h2 className="text-xl font-semibold text-[#272980]">2. Use of the Site and Account Security</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Accuracy of Information:</strong> Candidates agree that all information provided in resumes, application forms, and credentials is true, accurate, and up-to-date. Misrepresentation is grounds for immediate termination of services.</li>
              <li><strong>Prohibited Activities:</strong> You agree not to disrupt the website architecture, upload malicious code, or attempt unauthorized access to our candidate database or client accounts.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#272980]">3. Candidate Submissions & Vetting</h2>
            <p>Submission of a resume or application does not guarantee employment, an interview, or placement with a client. Commonwealth Facilities & Security reserves the right to manage vetting, verification, and probation statuses in accordance with our internal screening metrics and client criteria.</p>

            <h2 className="text-xl font-semibold text-[#272980]">4. Client Staffing Requests</h2>
            <p>Clients submitting staffing requests agree to provide accurate details regarding job qualifications, locations, and safety environments. The formal financial terms of placement, fees, and guarantees will be governed by a separate Master Services Agreement (MSA) executed between Commonwealth Facilities & Security and the Client.</p>

            <h2 className="text-xl font-semibold text-[#272980]">5. Intellectual Property</h2>
            <p>All content on this website, including text, graphics, logos, and software, is the property of Commonwealth Facilities & Security and is protected by applicable copyright and intellectual property laws.</p>

            <h2 className="text-xl font-semibold text-[#272980]">6. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law, Commonwealth Facilities & Security shall not be liable for any indirect, incidental, or consequential damages resulting from the use of our website, the inability to place a candidate, or the performance of any candidate placed with a client.</p>

            <h2 className="text-xl font-semibold text-[#272980]">7. Governing Law</h2>
            <p>These Terms and Conditions are governed by and construed in accordance with the laws of the United Kingdom.</p>

            <h2 className="text-xl font-semibold text-[#272980]">8. Contact Information</h2>
            <p>For questions regarding these Terms, please contact us at <a href="mailto:info@commonwealth.com" className="text-[#272980] hover:underline">info@commonwealth.com</a>.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
