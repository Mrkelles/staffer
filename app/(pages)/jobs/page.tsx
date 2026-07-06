
import { jobPostings } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function JobsPage() {
  return (
    <div className="bg-[#F7ECE0] min-h-screen">
      <header className="py-6 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-serif text-[#272980]">Open Positions</h1>
          <nav>
            <Link href="/(pages)/careers" legacyBehavior>
              <a className="text-[#7A7580] hover:text-[#272980]">Back to Careers</a>
            </Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {jobPostings.map((job) => (
            <Card key={job.id} className="bg-white rounded-2xl p-6 flex flex-col justify-between">
              <div>
                <CardHeader>
                  <CardTitle className="text-[#272980]">{job.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#7A7580]">{job.location}</p>
                  <p className="text-[#7A7580] mt-4">{job.description.substring(0, 100)}...</p>
                </CardContent>
              </div>
              <div className="mt-6">
                <Link href={`/jobs/${job.id}`} legacyBehavior>
                  <a className="text-[#272980] font-semibold hover:underline flex items-center">
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
