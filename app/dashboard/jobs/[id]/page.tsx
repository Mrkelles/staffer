
import { jobPostings } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function JobPostingDetailPage({ params }: { params: { id: string } }) {
  const job = jobPostings.find((j) => j.id === parseInt(params.id));

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{job.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Client:</strong> {job.client}</p>
        <p><strong>Location:</strong> {job.location}</p>
        <p><strong>Salary:</strong> ${job.salary.toLocaleString()}</p>
        <p><strong>Status:</strong> {job.status}</p>
        <p><strong>Description:</strong> {job.description}</p>
      </CardContent>
    </Card>
  );
}
