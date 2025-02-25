import React from "react";
import RSVPForm from "../_components/RSVPForm";
import { Button } from "@/components/ui/button";
import { ArrowLeftCircleIcon } from "lucide-react";

const Register = () => {
  return (
    <div>
      <div className="mt-6 max-w-md mx-auto">
        <a
          href="/"
          className="bg-[#333] flex items-center justify-center text-white font-medium py-2 px-5 rounded-full shadow hover:shadow-lg transition duration-300"
        >
          <ArrowLeftCircleIcon className="inline-flex mr-2 w-5 h-5" />
          <span className="text-sm">Go Back</span>
        </a>
      </div>
      <RSVPForm />
    </div>
  );
};

export default Register;
