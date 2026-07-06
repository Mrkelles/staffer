
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-serif text-[#272980]">Admin Dashboard</h1>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Total Sales</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">$12,345</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">New Students</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">+1,234</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Total Courses</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">42</p>
          </CardContent>
        </Card>
        <Card className="bg-white rounded-2xl shadow-lg">
          <CardHeader className="p-6">
            <CardTitle className="font-serif text-[#272980]">Pending Instructors</CardTitle>
          </CardHeader>
          <CardContent className="p-6 pt-0">
            <p className="text-5xl font-bold text-[#272980]">3</p>
          </CardContent>
        </Card>
      </div>
      <div>
        <h2 className="text-2xl font-serif text-[#272980] mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-4">
          <Button asChild className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-6 py-3">
            <Link href="/dashboard/admin/curriculum-generator">Curriculum AI Tool</Link>
          </Button>
          <Button variant="outline" className="bg-transparent text-[#272980] border border-[#272980] hover:bg-[#EFE7E1] rounded-full px-6 py-3">
            Manage Instructors
          </Button>
          <Button variant="outline" className="bg-transparent text-[#272980] border border-[#272980] hover:bg-[#EFE7E1] rounded-full px-6 py-3">
            Manage Courses
          </Button>
        </div>
      </div>
    </div>
  );
}
