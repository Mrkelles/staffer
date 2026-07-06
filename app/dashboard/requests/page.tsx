'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Plus, Pencil, Trash2, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { requests, clients } from '@/lib/data';

export default function StaffingRequestsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('requestDate');
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

  const statuses = ['all', ...Array.from(new Set(requests.map(r => r.status)))];

  const filteredAndSortedRequests = requests
    .filter(request => {
      if (statusFilter !== 'all' && request.status.toLowerCase() !== statusFilter) {
        return false;
      }
      if (searchTerm === '') {
        return true;
      }
      return request.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
             request.client.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const aValue = sortColumn === 'requestDate' ? new Date(a.requestDate).getTime() : a[sortColumn as keyof typeof a];
      const bValue = sortColumn === 'requestDate' ? new Date(b.requestDate).getTime() : b[sortColumn as keyof typeof b];

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

  const statusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'text-green-600';
      case 'pending':
        return 'text-blue-600';
      case 'rejected':
        return 'text-red-600';
      default:
        return 'text-gray-700';
    }
  };

  return (
    <div className="space-y-8">
        <div className="flex justify-between items-center">
            <h1 className="text-4xl font-serif text-[#272980]">Staffing Requests</h1>
            <Button asChild className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-6 py-3">
                <Link href="/dashboard/requests/create">
                    <Plus className="mr-2 h-4 w-4" /> Create Request
                </Link>
            </Button>
        </div>

        <div className="flex items-center space-x-4">
          <Input
            placeholder="Search by job title or client..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="max-w-sm"
          />
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              {statuses.map(status => (
                <SelectItem key={status} value={status}>{status === 'all' ? 'All Statuses' : status}</SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select
            value={sortColumn === 'requestDate' ? sortDirection : ''}
            onValueChange={(direction) => {
              if (direction) {
                setSortColumn('requestDate');
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
                            <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('id')}>
                              Request ID
                              {sortColumn === 'id' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                            </TableHead>
                            <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('client')}>
                              Client
                              {sortColumn === 'client' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                            </TableHead>
                            <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden md:table-cell cursor-pointer" onClick={() => handleSort('jobTitle')}>
                              Job Title
                              {sortColumn === 'jobTitle' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                            </TableHead>
                            <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell text-center cursor-pointer" onClick={() => handleSort('requestDate')}>
                              Request Date
                              {sortColumn === 'requestDate' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                            </TableHead>
                            <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider">Status</TableHead>
                            <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAndSortedRequests.map((request) => {
                            const client = clients.find(c => c.name === request.client)
                            return (
                            <TableRow key={request.id} className="border-b-[#EFE7E1] last:border-b-0 hover:bg-[#F7ECE0]/50">
                                <TableCell className="px-6 py-4 whitespace-nowrap font-medium text-[#7A7580]">
                                    <Link href={`/dashboard/requests/${request.id}`} className="font-medium text-[#272980] hover:text-[#2B2D82]">
                                        {`REQ-${request.id.toString().padStart(3, '0')}`}
                                    </Link>
                                </TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap">
                                    {client && (
                                        <Link href={`/dashboard/clients/${client.id}`} className="font-medium text-[#272980] hover:text-[#2B2D82]">
                                            {request.client}
                                        </Link>
                                    )}
                                </TableCell>
                                <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden md:table-cell">{request.jobTitle}</TableCell>
                                <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell text-center">{request.requestDate}</TableCell>
                                <TableCell className={`px-6 py-4 whitespace-nowrap font-semibold ${statusColor(request.status)}`}>{request.status}</TableCell>
                                <TableCell className="px-6 py-4 whitespace-nowrap text-right">
                                    <Button asChild variant="outline" size="icon" className="mr-2">
                                        <Link href={`/dashboard/requests/${request.id}/edit`}><Pencil className="h-4 w-4" /></Link>
                                    </Button>
                                    <Button variant="destructive" size="icon">
                                        <Trash2 className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )})}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    </div>
  );
}
