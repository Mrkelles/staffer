
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

export default function StaffingDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-serif text-[#272980]">Staffing Dashboard</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Job Postings</CardTitle>
            <CardDescription className="text-[#7A7580]">Active job listings</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">12</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Candidates</CardTitle>
            <CardDescription className="text-[#7A7580]">Available candidates</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">45</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Clients</CardTitle>
            <CardDescription className="text-[#7A7580]">Current clients</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">8</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Staffing Requests</CardTitle>
            <CardDescription className="text-[#7A7580]">Open staffing requests</CardDescription>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">5</p>
          </CardContent>
        </Card>
      </div>
     {/* <div>
        <h2 className="text-2xl font-serif text-[#272980] mb-4">Recent Activity</h2>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardContent className="p-8">
            <p className="text-[#7A7580]">Recent staffing activities will appear here.</p>
          </CardContent>
        </Card>
      </div>
      */}
    </div>
  );
}
