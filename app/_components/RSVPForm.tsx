'use client';
import React from 'react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { MapPin } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attendance: 'yes',
    skills: '',
    teamName: '',
    trackPreference: '',
    mentorship: false,
    eventDate: '2025-04-25', // YYYY-MM-DD format
    eventLocation: 'ALX Ethiopia |Lideta Hub, 4th Floor|',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset errors
    setErrors({});

    // Validate form data
    const validationErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      validationErrors.name = 'Name is required';
    }

    if (
      !formData.email.trim() ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      validationErrors.email = 'Please enter a valid email address';
    }

    if (!formData.skills.trim()) {
      validationErrors.skills = 'Skills are required';
    }

    if (!formData.attendance) {
      validationErrors.attendance = 'Please confirm your attendance';
    }

    if (!formData.trackPreference) {
      validationErrors.trackPreference = 'Track preference is required';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsLoading(true);

      // Create FormData object and append fields
      const formDataToSend = new FormData();
      formDataToSend.append('name', formData.name);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('attendance', formData.attendance);
      formDataToSend.append('skills', formData.skills);
      formDataToSend.append('teamName', formData.teamName || '');
      formDataToSend.append('trackPreference', formData.trackPreference);
      formDataToSend.append('mentorship', String(formData.mentorship)); // Convert boolean to string
      formDataToSend.append('eventDate', formData.eventDate);
      formDataToSend.append('eventLocation', formData.eventLocation);

      // Simulate form submission (replace with actual API call)
      console.log('Form Data Submitted:', Object.fromEntries(formDataToSend));

      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        attendance: 'yes',
        skills: '',
        teamName: '',
        trackPreference: '',
        mentorship: false,
        eventDate: '2025-04-25',
        eventLocation: 'ALX Ethiopia |Lideta Hub, 4th Floor|',
      });

      alert('RSVP submitted successfully!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form.');
    } finally {
      setIsLoading(false);
    }
  };

  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(formData.eventLocation);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    );
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">HackFest 2025 RSVP</h1>
      <p className="mb-6">
        Join us for an epic 24-hour hackathon! Fill out the form below to
        register.
      </p>

      {/* Event Details */}
      <div className="mb-6 border p-4 rounded-lg bg-white shadow flex flex-col items-center">
        <Label>Event Details</Label>
        <Calendar
          mode="single"
          selected={new Date(formData.eventDate)}
          className="rounded w-full"
          fromDate={new Date(formData.eventDate)}
          toDate={new Date(formData.eventDate)}
          defaultMonth={new Date(formData.eventDate)}
          ISOWeek
        />
        <div className="mt-4 flex items-center">
          <Button type="button" variant="outline" onClick={openGoogleMaps}>
            <MapPin className="mr-2" />
            View Location on Map
          </Button>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name */}
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
        </div>

        {/* Email */}
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Skills */}
        <div>
          <Label htmlFor="skills">Skills</Label>
          <Input
            id="skills"
            value={formData.skills}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, skills: e.target.value }))
            }
            placeholder="e.g., Frontend, Backend, Design"
            required
          />
          {errors.skills && (
            <p className="text-xs text-red-500">{errors.skills}</p>
          )}
        </div>

        {/* Team Name */}
        <div>
          <Label htmlFor="teamName">Team Name (Optional)</Label>
          <Input
            id="teamName"
            value={formData.teamName}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, teamName: e.target.value }))
            }
            placeholder="Enter your team name"
          />
        </div>

        {/* Track Preference */}
        <div>
          <Label>Track Preference</Label>
          <Select
            value={formData.trackPreference}
            onValueChange={(value: string) =>
              setFormData((prev) => ({ ...prev, trackPreference: value }))
            }
            required
          >
            <SelectTrigger>
              <SelectValue placeholder="Select a track" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="ai">AI & Machine Learning</SelectItem>
              <SelectItem value="blockchain">Blockchain</SelectItem>
              <SelectItem value="web3">Web3</SelectItem>
              <SelectItem value="gaming">Gaming</SelectItem>
            </SelectContent>
          </Select>
          {errors.trackPreference && (
            <p className="text-xs text-red-500">{errors.trackPreference}</p>
          )}
        </div>

        {/* Mentorship Request */}
        <div className="flex items-center gap-3">
          <Checkbox
            checked={formData.mentorship}
            onCheckedChange={(checked: boolean) =>
              setFormData((prev) => ({ ...prev, mentorship: checked }))
            }
          />
          <Label>I would like to request mentorship during the event.</Label>
        </div>

        {/* Attendance */}
        <div>
          <Label>Will you attend?</Label>
          <RadioGroup
            value={formData.attendance}
            onValueChange={(value: string) =>
              setFormData((prev) => ({ ...prev, attendance: value }))
            }
            required
          >
            <div className="flex items-center space-x-4">
              <RadioGroupItem value="yes" id="yes" />
              <Label htmlFor="yes">Yes</Label>
              <RadioGroupItem value="no" id="no" />
              <Label htmlFor="no">No</Label>
            </div>
          </RadioGroup>
          {errors.attendance && (
            <p className="text-xs text-red-500">{errors.attendance}</p>
          )}
        </div>

        {/* Submit Button */}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Submit RSVP'}
        </Button>
      </form>
    </div>
  );
};

export default RSVPForm;
