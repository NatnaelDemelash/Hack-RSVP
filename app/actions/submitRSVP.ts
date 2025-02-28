'use server';

import { createClient } from '../utils/supabase/server';

export async function submitRSVP(formData: FormData) {
  const supabase = await createClient();

  // Retrieve form data
  const name = formData.get('name')?.toString().trim();
  const email = formData.get('email')?.toString().trim();
  const skills = formData.get('skills')?.toString().trim();
  const trackPreference = formData.get('trackPreference')?.toString().trim();
  const attendance = formData.get('attendance')?.toString().trim();

  // Validate form data
  if (!name || !email || !skills || !attendance) {
    return {
      success: false,
      message: 'All fields are required.',
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      success: false,
      message: 'Please enter a valid email address.',
    };
  }

  try {
    // Insert RSVP data into the database
    const { data, error } = await supabase.from('rsvps').insert([
      {
        name,
        email,
        skills,
        trackPreference: trackPreference || null, // Set to null if tracks is empty
        attendance,
      },
    ]);

    if (error) {
      console.error('Error inserting RSVP:', error);
      return {
        success: false,
        message: 'Failed to submit RSVP. Please try again later.',
      };
    }

    console.info('RSVP submitted successfully:', data);
    return {
      success: true,
      message: 'RSVP submitted successfully!',
    };
  } catch (err) {
    console.error('Unexpected error during submission:', err);
    return {
      success: false,
      message: 'An unexpected error occurred. Please try again later.',
    };
  }
}
