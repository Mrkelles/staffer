'use client';

import { useState } from 'react';
import { jobPostings } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Pencil, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export default function JobPostingsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('datePosted');
  const [sortDirection, setSortDirection] = useState('desc');
  const [statusFilter, setStatusFilter] = useState('all');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const filteredAndSortedJobs = jobPostings
    .filter(job => {
      if (statusFilter !== 'all' && job.status.toLowerCase() !== statusFilter) {
        return false;
      }
      if (searchTerm === '') {
        return true;
      }
      return job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
             job.client.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const aValue = sortColumn === 'datePosted' ? new Date(a.datePosted).getTime() : a[sortColumn as keyof typeof a];
      const bValue = sortColumn === 'datePosted' ? new Date(b.datePosted).getTime() : b[sortColumn as keyof typeof b];

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const statusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'open':
        return 'text-green-600';
      case 'filled':
        return 'text-gray-500';
      case 'closed':
        return 'text-red-600';
      default:
        return 'text-yellow-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-serif text-[#272980]">Job Postings</h1>
        <Button asChild className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-6 py-3">
          <Link href="/dashboard/jobs/create">Create Job</Link>
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search by title or client..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Statuses</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="filled">Filled</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
        <Select
            value={sortColumn === 'datePosted' ? sortDirection : ''}
            onValueChange={(direction) => {
              if (direction) {
                setSortColumn('datePosted');
                setSortDirection(direction);
              }
            }}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by Date" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="desc">Newest First</SelectItem>
              <SelectItem value="asc">Oldest First</SelectItem>
            </SelectContent>
          </Select>
      </div>

      <Card className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow className="border-b-[#EFE7E1]">
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('title')}>
                  Title
                  {sortColumn === 'title' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('client')}>
                  Client
                  {sortColumn === 'client' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden md:table-cell">Location</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell cursor-pointer" onClick={() => handleSort('salary')}>
                  Salary
                  {sortColumn === 'salary' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell cursor-pointer" onClick={() => handleSort('datePosted')}>
                  Date Posted
                  {sortColumn === 'datePosted' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider text-right">Status</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedJobs.map((job) => (
                <TableRow key={job.id} className="border-b-[#EFE7E1] last:border-b-0 hover:bg-[#F7ECE0]/50">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/dashboard/jobs/${job.id}`} className="font-medium text-[#272980] hover:text-[#2B2D82]">
                      {job.title}
                    </Link>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap">{job.client}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden md:table-cell">{job.location}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell">${job.salary.toLocaleString()}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell">{job.datePosted}</TableCell>
                  <TableCell className={`px-6 py-4 whitespace-nowrap text-right font-medium ${statusColor(job.status)}`}>
                    {job.status}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Button asChild variant="outline" size="icon" className="mr-2">
                      <Link href={`/dashboard/jobs/${job.id}/edit`}><Pencil className="h-4 w-4" /></Link>
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
