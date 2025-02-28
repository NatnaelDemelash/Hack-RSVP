import { createClient } from '../utils/supabase/server';

export async function getRSVPs() {
  const supabase = await createClient();

  const { data, error } = await supabase.from('rsvps').select('*');

  if (error) {
    console.error('Error fetching RSVPs:', error);
    return {
      success: false,
      message: 'Failed to fetch RSVPs. Please try again later.',
    };
  }

  console.log('Fetched RSVPs:', data); // Log the fetched data for debugging

  if (!data || data.length === 0) {
    console.warn('No RSVPs found in the database.');
  }

  return { success: true, data };
}
