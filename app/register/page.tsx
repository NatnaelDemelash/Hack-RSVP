import React from 'react';
import RSVPForm from '../_components/RSVPForm';
import { ArrowLeftCircleIcon } from 'lucide-react';
import Link from 'next/link';

const Register = () => {
  return (
    <div>
      <div className="mt-6 max-w-md mx-auto">
        <Link
          href="/"
          className="bg-gray-700 flex items-center justify-center text-white font-medium py-2 px-5 rounded-full shadow hover:shadow-lg transition duration-300"
        >
          <ArrowLeftCircleIcon className="inline-flex mr-2 w-5 h-5" />
          <span className="text-sm">Go Back</span>
        </Link>
      </div>
      <RSVPForm />
    </div>
  );
};

export default Register;
