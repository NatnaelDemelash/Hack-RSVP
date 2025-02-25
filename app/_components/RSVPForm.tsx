"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin } from "lucide-react";
import { toast } from "sonner";

const RSVPForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attendance: "yes",
    skills: "",
    teamName: "",
    trackPreference: "",
    mentorship: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Please enter a valid email address.";
    if (!formData.attendance)
      newErrors.attendance = "Please select your attendance status.";
    if (!formData.skills.trim()) newErrors.skills = "Skills are required.";
    return Object.keys(newErrors).length === 0 ? null : newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const validationErrors = validateForm();
    if (validationErrors) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Thank you for registering!");
      setFormData({
        name: "",
        email: "",
        attendance: "yes",
        skills: "",
        teamName: "",
        trackPreference: "",
        mentorship: false,
      });
      setErrors({});
    }, 1500);
  };

  return (
    <div className="max-w-md mx-auto my-10">
      <h1 className="text-2xl font-bold mb-4">HackFest 2025 RSVP</h1>
      <p className="mb-6">
        Join us for an epic 24-hour hackathon! Fill out the form below to
        register.
      </p>

      {/* Event Details */}
      <div className="mb-6 border p-4 rounded-lg bg-white shadow">
        <Label>Event Details</Label>
        <p className="mt-2">Date: April 25th, 2025</p>
        <div className="mt-4 flex items-center">
          <MapPin className="mr-2" />
          <span>Location: Online &amp; In-Person (Venue TBA)</span>
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
            onValueChange={(value) =>
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
        </div>

        {/* Mentorship Request */}
        <div className="flex items-center gap-3">
          <Label>Mentorship Request</Label>
          <Checkbox
            checked={formData.mentorship}
            onCheckedChange={(checked: boolean) =>
              setFormData((prev) => ({ ...prev, mentorship: checked }))
            }
          >
            I would like to request mentorship during the event.
          </Checkbox>
        </div>

        {/* Attendance */}
        <div>
          <Label>Will you attend?</Label>
          <RadioGroup
            value={formData.attendance}
            onValueChange={(value) =>
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
          {isLoading ? "Submitting..." : "Submit RSVP"}
        </Button>
      </form>
    </div>
  );
};

export default RSVPForm;
