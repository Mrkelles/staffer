
import { candidates } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Image from "next/image";

export default function CandidateDetailPage({ params }: { params: { id: string } }) {
  const candidate = candidates.find((c) => c.id === parseInt(params.id));

  if (!candidate) {
    return <div>Candidate not found</div>;
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center gap-4">
        <Image src={candidate.avatarUrl} alt={candidate.name} width={100} height={100} className="rounded-full" />
        <CardTitle>{candidate.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Phone:</strong> {candidate.phone}</p>
        <p><strong>Role:</strong> {candidate.role}</p>
        <p><strong>Status:</strong> {candidate.status}</p>
        <p><strong>Resume:</strong> <a href={candidate.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Resume</a></p>
      </CardContent>
    </Card>
  );
}
