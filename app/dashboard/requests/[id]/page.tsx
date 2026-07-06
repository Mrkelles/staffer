
import { requests, clients } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function RequestDetailPage({ params }: { params: { id: string } }) {
  const request = requests.find((r) => r.id === parseInt(params.id));

  if (!request) {
    return <div>Request not found</div>;
  }

  const client = clients.find((c) => c.name === request.client);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Request Details</CardTitle>
      </CardHeader>
      <CardContent>
        {client ? (
          <p>
            <strong>Client:</strong>{" "}
            <Link href={`/dashboard/clients/${client.id}`} className="text-blue-500 hover:underline">
              {request.client}
            </Link>
          </p>
        ) : (
          <p><strong>Client:</strong> {request.client}</p>
        )}
        <p><strong>Job Title:</strong> {request.jobTitle}</p>
        <p><strong>Request Date:</strong> {request.requestDate}</p>
        <p><strong>Status:</strong> {request.status}</p>
      </CardContent>
    </Card>
  );
}
