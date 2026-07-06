
import { jobPostings } from "@/lib/data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = jobPostings.find((j) => j.id === parseInt(params.id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <Link href="/(pages)/jobs" legacyBehavior>
            <a className="text-[#7A7580] hover:text-[#272980] flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all jobs
            </a>
          </Link>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 md:px-8 py-12">
        <div className="bg-white rounded-2xl p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-serif text-[#272980]">{job.title}</h1>
          <p className="text-[#7A7580] mt-2">{job.location}</p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-[#272980]">Job Description</h2>
            <p className="text-[#7A7580] mt-4 whitespace-pre-line">{job.description}</p>
          </div>

          <div className="mt-8">
              <h2 className="text-xl font-semibold text-[#272980]">Salary</h2>
              <p className="text-[#7A7580] mt-4 whitespace-pre-line">{job.salary}</p>
          </div>

          <div className="mt-12 text-center">
            <Button asChild className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-12 py-4 text-lg">
              <Link href={`/jobs/${job.id}/apply`}>
                Apply for this role
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
