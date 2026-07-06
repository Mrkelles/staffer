'use client';

import { useState } from 'react';
import { candidates } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Pencil, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export default function CandidatesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('dateApplied');
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

  const statuses = ['all', ...Array.from(new Set(candidates.map(c => c.status)))];

  const filteredAndSortedCandidates = candidates
    .filter(candidate => {
      if (statusFilter !== 'all' && candidate.status.toLowerCase() !== statusFilter) {
        return false;
      }
      if (searchTerm === '') {
        return true;
      }
      return candidate.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             candidate.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
             candidate.role.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const aValue = sortColumn === 'dateApplied' ? new Date(a.dateApplied).getTime() : a[sortColumn as keyof typeof a];
      const bValue = sortColumn === 'dateApplied' ? new Date(b.dateApplied).getTime() : b[sortColumn as keyof typeof b];

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
      case 'active':
        return 'text-green-600';
      case 'passive':
        return 'text-blue-600';
      case 'placed':
        return 'text-gray-500';
      default:
        return 'text-red-600';
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-serif text-[#272980]">Candidates</h1>
        <Button asChild className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-6 py-3">
          <Link href="/dashboard/candidates/create">Create Candidate</Link>
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search by name, email, or role..."
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
            value={sortColumn === 'dateApplied' ? sortDirection : ''}
            onValueChange={(direction) => {
              if (direction) {
                setSortColumn('dateApplied');
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
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('name')}>
                  Name
                  {sortColumn === 'name' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden md:table-cell">Email</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell">Phone</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('role')}>
                  Role
                  {sortColumn === 'role' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell cursor-pointer" onClick={() => handleSort('dateApplied')}>
                  Date Applied
                  {sortColumn === 'dateApplied' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider text-right">Status</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedCandidates.map((candidate) => (
                <TableRow key={candidate.id} className="border-b-[#EFE7E1] last:border-b-0 hover:bg-[#F7ECE0]/50">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/dashboard/candidates/${candidate.id}`} className="font-medium text-[#272980] hover:text-[#2B2D82]">
                      {candidate.name}
                    </Link>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden md:table-cell">{candidate.email}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell">{candidate.phone}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap">{candidate.role}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell">{candidate.dateApplied}</TableCell>
                  <TableCell className={`px-6 py-4 whitespace-nowrap text-right font-medium ${statusColor(candidate.status)}`}>
                    {candidate.status}
                  </TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Button asChild variant="outline" size="icon" className="mr-2">
                      <Link href={`/dashboard/candidates/${candidate.id}/edit`}><Pencil className="h-4 w-4" /></Link>
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
