"use client"

import * as React from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function EditStaffingRequestPage() {
  const params = useParams()
  const router = useRouter()
  const requestId = params.id

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Updating staffing request:", requestId)
    router.push("/dashboard/requests")
  }

  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Edit Staffing Request</h2>
      </div>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardHeader>
            <CardTitle>Request Details</CardTitle>
            <CardDescription>
              Update the details for staffing request ID: {requestId}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="client">Client</Label>
                <Select name="client">
                  <SelectTrigger id="client">
                    <SelectValue placeholder="Select Client" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="client1">Client A</SelectItem>
                    <SelectItem value="client2">Client B</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="sector">Sector</Label>
                <Input id="sector" placeholder="e.g. Healthcare, IT" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfStaff">Number of Staff</Label>
                <Input id="numberOfStaff" type="number" min="1" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="locationType">Location Type</Label>
                <Select name="locationType">
                  <SelectTrigger id="locationType">
                    <SelectValue placeholder="Select location type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="On-site">On-site</SelectItem>
                    <SelectItem value="Remote">Remote</SelectItem>
                    <SelectItem value="Hybrid">Hybrid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="startDate">Start Date</Label>
                <Input id="startDate" type="date" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="endDate">End Date (Optional)</Label>
                <Input id="endDate" type="date" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="workLocation">Work Location</Label>
                <Input id="workLocation" placeholder="Address for On-site/Hybrid" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <Label htmlFor="qualifications">Qualifications</Label>
                <Textarea id="qualifications" placeholder="List required skills and experience" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="status">Current Status</Label>
                <Select name="status">
                  <SelectTrigger id="status">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Open">Open</SelectItem>
                    <SelectItem value="Partially Filled">Partially Filled</SelectItem>
                    <SelectItem value="Fulfilled">Fulfilled</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-end space-x-2">
            <Button variant="outline" type="button" onClick={() => router.back()}>
              Cancel
            </Button>
            <Button type="submit">Update Request</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}