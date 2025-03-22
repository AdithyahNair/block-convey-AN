import React from "react";
import { ChevronDown } from "lucide-react";

interface DropdownTriggerProps {
  label: string;
  isOpen: boolean;
  onClick: () => void;
}

export const DropdownTrigger: React.FC<DropdownTriggerProps> = ({
  label,
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="group inline-flex items-center gap-1.5 text-gray-600 hover:text-brand font-medium py-2 px-3 rounded-lg transition-all"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-all duration-200 ${
          isOpen ? "rotate-180 text-brand" : ""
        } group-hover:text-brand`}
      />
    </button>
  );
};
