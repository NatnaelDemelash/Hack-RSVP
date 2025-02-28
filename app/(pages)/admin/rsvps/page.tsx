// app/rsvps/page.tsx

import { getRSVPs } from '@/app/actions/getRSVPs';
import { RSVPList } from '@/app/_components/RSVPList';

export interface RSVP {
  name: string;
  email: string;
  attendance: string;
  skills: string;
  team_name?: string;
  track_preference: string;
  mentorship: boolean;
  event_date: string;
  event_location: string;
}

export default async function RSVPsPage() {
  const { success, data, message } = await getRSVPs();

  if (!success) {
    return <div>{message}</div>;
  }

  return <RSVPList initialData={data || []} />;
}
