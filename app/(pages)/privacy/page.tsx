
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Privacy Policy</h1>
          <nav>
            <Link href="/" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Home</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <p className="text-sm text-[#8E8C96]">Effective Date: 1st January 2024</p>
          <div className="mt-8 text-[#7A7580] space-y-6 prose lg:prose-lg max-w-none">
            <p>At Commonwealth Facilities & Security ("we," "our," or "us"), we respect your privacy and are committed to protecting the personal data you share with us. This Privacy Policy outlines how we collect, use, store, and disclose your information when you use our website, apply for jobs, or utilize our staffing services.</p>
            
            <h2 className="text-xl font-semibold text-[#272980]">1. Information We Collect</h2>
            <p>We collect information that identifies, relates to, or could reasonably be linked to you. This includes:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>Candidates:</strong> Name, contact information (email, phone, address), employment history, resumes, credentials, certifications, vetting status, and right-to-work verifications.</li>
              <li><strong>Clients:</strong> Company name, corporate contact person info, email, phone number, address, and staffing request details.</li>
              <li><strong>Website Users:</strong> IP addresses, browser types, and usage data collected via cookies to improve website functionality.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#272980]">2. How We Use Your Information</h2>
            <p>We utilize your data to provide exceptional recruitment and staffing operations, specifically to:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Match candidates with appropriate job opportunities and staffing requests.</li>
              <li>Verify candidate credentials, background checks, and employment eligibility.</li>
              <li>Facilitate communications between clients and candidates.</li>
              <li>Manage client accounts, billing, and workforce placements.</li>
              <li>Comply with legal obligations and employment regulations.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#272980]">3. Information Sharing and Disclosure</h2>
            <p>We do not sell your personal information. We share your information only under the following circumstances:</p>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>With Clients:</strong> Candidate profiles, resumes, and relevant vetting statuses are shared with prospective employers for hiring purposes.</li>
              <li><strong>With Service Providers:</strong> Trusted third-party vendors who assist us with background screening, payroll administration, cloud storage, or IT support.</li>
              <li><strong>Legal Compliance:</strong> When required by law, subpoena, or government regulatory bodies.</li>
            </ul>

            <h2 className="text-xl font-semibold text-[#272980]">4. Data Retention and Security</h2>
            <p>We implement industry-standard technical and organizational security measures to protect your data from unauthorized access, loss, or alteration. We retain candidate and client records only for as long as necessary to fulfill business purposes or comply with legal, tax, and reporting mandates.</p>

            <h2 className="text-xl font-semibold text-[#272980]">5. Your Rights</h2>
            <p>Depending on your location, you may have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, please contact us at <a href="mailto:privacy@commonwealth.com" className="text-[#272980] hover:underline">privacy@commonwealth.com</a>.</p>
          </div>
        </div>
      </main>
    </div>
  );
}
