'use client';

import { useState } from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import type { RSVP } from '@/app/(pages)/admin/rsvps/page';

export function RSVPList({ initialData }: { initialData: RSVP[] }) {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredData =
    searchQuery.trim() === ''
      ? initialData
      : initialData.filter(
          (rsvp) =>
            rsvp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            rsvp.email.toLowerCase().includes(searchQuery.toLowerCase())
        );

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">RSVPs</h1>
        <Link href="/" className="flex items-center space-x-2">
          <Button variant="outline">Home</Button>
        </Link>
      </div>

      {/* Search Input */}
      <div className="mb-6">
        <Input
          type="text"
          placeholder="Search by name or email..."
          className="w-1/2 border border-gray-900 focus:outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* RSVP Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Attendance</TableHead>
            <TableHead>Skills</TableHead>
            <TableHead>Track Preference</TableHead>
            <TableHead>Mentorship</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredData.map((rsvp, index) => (
            <TableRow key={index}>
              <TableCell>{rsvp.name}</TableCell>
              <TableCell>{rsvp.email}</TableCell>
              <TableCell>{rsvp.attendance}</TableCell>
              <TableCell>{rsvp.skills}</TableCell>
              <TableCell>{rsvp.trackPreference}</TableCell>
              <TableCell>{rsvp.mentorship ? 'Yes' : 'No'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableCaption>A list of all RSVPs for the event.</TableCaption>
      </Table>

      {/* No Results Message */}
      {!filteredData.length && (
        <p className="mt-4 text-center text-gray-500">
          No matching RSVPs found.
        </p>
      )}
    </div>
  );
}
