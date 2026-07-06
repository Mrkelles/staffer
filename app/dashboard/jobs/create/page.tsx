"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function CreateJobPage() {
  return (
    <div className="container mx-auto py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Create Job Posting</CardTitle>
          <CardDescription>
            Create a new job posting linked to a staffing request.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="requestId">Staffing Request</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select a staffing request" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="req_1">Request #1234 - Healthcare</SelectItem>
                <SelectItem value="req_2">Request #1235 - IT Services</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobTitle">Job Title</Label>
            <Input id="jobTitle" placeholder="e.g. Senior ICU Nurse" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="sector">Sector</Label>
            <Input id="sector" placeholder="e.g. Healthcare" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobDescription">Job Description</Label>
            <Textarea
              id="jobDescription"
              placeholder="Describe the roles and responsibilities..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="qualifications">Qualifications</Label>
            <Textarea
              id="qualifications"
              placeholder="Required certifications, years of experience, etc..."
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="jobStatus">Job Status</Label>
            <Select defaultValue="Draft">
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Draft">Draft</SelectItem>
                <SelectItem value="Active">Active</SelectItem>
                <SelectItem value="Paused">Paused</SelectItem>
                <SelectItem value="Closed">Closed</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-4">
          <Button variant="outline">Cancel</Button>
          <Button>Create Job</Button>
        </CardFooter>
      </Card>
    </div>
  );
}