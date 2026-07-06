'use client';

import { useState } from 'react';
import { clients } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import { Pencil, Trash2, ChevronUp, ChevronDown } from 'lucide-react';

export default function ClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortColumn, setSortColumn] = useState('memberSince');
  const [sortDirection, setSortDirection] = useState('desc');
  const [industryFilter, setIndustryFilter] = useState('all');

  const handleSort = (column: string) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const industries = ['all', ...Array.from(new Set(clients.map(c => c.industry)))];

  const filteredAndSortedClients = clients
    .filter(client => {
      if (industryFilter !== 'all' && client.industry !== industryFilter) {
        return false;
      }
      if (searchTerm === '') {
        return true;
      }
      return client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
             client.industry.toLowerCase().includes(searchTerm.toLowerCase()) ||
             client.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
             client.contactPerson.toLowerCase().includes(searchTerm.toLowerCase()) ||
             client.email.toLowerCase().includes(searchTerm.toLowerCase());
    })
    .sort((a, b) => {
      const aValue = sortColumn === 'memberSince' ? new Date(a.memberSince).getTime() : a[sortColumn as keyof typeof a];
      const bValue = sortColumn === 'memberSince' ? new Date(b.memberSince).getTime() : b[sortColumn as keyof typeof b];

      if (aValue < bValue) {
        return sortDirection === 'asc' ? -1 : 1;
      }
      if (aValue > bValue) {
        return sortDirection === 'asc' ? 1 : -1;
      }
      return 0;
    });

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-serif text-[#272980]">Clients</h1>
        <Button asChild className="bg-[#272980] text-white hover:bg-[#2B2D82] rounded-full px-6 py-3">
          <Link href="/dashboard/clients/create">Create Client</Link>
        </Button>
      </div>

      <div className="flex items-center space-x-4">
        <Input
          placeholder="Search by name, industry, etc..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
        <Select value={industryFilter} onValueChange={setIndustryFilter}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter by industry" />
          </SelectTrigger>
          <SelectContent>
            {industries.map(industry => (
              <SelectItem key={industry} value={industry}>{industry === 'all' ? 'All Industries' : industry}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select
            value={sortColumn === 'memberSince' ? sortDirection : ''}
            onValueChange={(direction) => {
              if (direction) {
                setSortColumn('memberSince');
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
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider cursor-pointer" onClick={() => handleSort('industry')}>
                  Industry
                  {sortColumn === 'industry' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden md:table-cell cursor-pointer" onClick={() => handleSort('location')}>
                  Location
                  {sortColumn === 'location' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell">Contact</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden lg:table-cell cursor-pointer" onClick={() => handleSort('memberSince')}>
                  Member Since
                  {sortColumn === 'memberSince' && (sortDirection === 'asc' ? <ChevronUp className="inline-block ml-2 h-4 w-4" /> : <ChevronDown className="inline-block ml-2 h-4 w-4" />)}
                </TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider">Email</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider hidden md:table-cell">Phone</TableHead>
                <TableHead className="px-6 py-4 text-sm font-semibold text-[#272980] uppercase tracking-wider">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredAndSortedClients.map((client) => (
                <TableRow key={client.id} className="border-b-[#EFE7E1] last:border-b-0 hover:bg-[#F7ECE0]/50">
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Link href={`/dashboard/clients/${client.id}`} className="font-medium text-[#272980] hover:text-[#2B2D82]">
                      {client.name}
                    </Link>
                  </TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap">{client.industry}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden md:table-cell">{client.location}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell">{client.contactPerson}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden lg:table-cell">{client.memberSince}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap">{client.email}</TableCell>
                  <TableCell className="px-6 py-4 text-[#7A7580] whitespace-nowrap hidden md:table-cell">{client.phone}</TableCell>
                  <TableCell className="px-6 py-4 whitespace-nowrap">
                    <Button asChild variant="outline" size="icon" className="mr-2">
                      <Link href={`/dashboard/clients/${client.id}/edit`}><Pencil className="h-4 w-4" /></Link>
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
