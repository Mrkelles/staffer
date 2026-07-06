
import { clients } from "@/lib/data";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function ClientDetailPage({ params }: { params: { id: string } }) {
  const client = clients.find((c) => c.id === parseInt(params.id));

  if (!client) {
    return <div>Client not found</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>{client.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p><strong>Industry:</strong> {client.industry}</p>
        <p><strong>Location:</strong> {client.location}</p>
        <p><strong>Contact Person:</strong> {client.contactPerson}</p>
        <p><strong>Email:</strong> {client.email}</p>
        <p><strong>Phone:</strong> {client.phone}</p>
      </CardContent>
    </Card>
  );
}
