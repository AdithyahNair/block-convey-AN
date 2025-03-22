import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { scrollToFeature } from "../../../../utils/scroll";

interface DropdownItemProps {
  item: {
    title: string;
    description: string;
    path?: string;
  };
  onSelect?: (path?: string) => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  item,
  onSelect,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (item.path) {
      const [path, hash] = item.path.split("#");

      // Navigate to the page first
      navigate(path);

      // If there's a hash, scroll to the section
      if (hash) {
        scrollToFeature(hash);
      }

      // Close the dropdown
      onSelect?.(path);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full group flex flex-col p-4 rounded-lg hover:bg-brand transition-colors text-left"
      role="menuitem"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-sm font-medium text-white group-hover:text-brand-lightest">
          {item.title}
        </span>
        <ArrowRight className="h-4 w-4 text-brand-light group-hover:text-brand-lightest" />
      </div>
      <p className="text-sm text-brand-light group-hover:text-white/90">
        {item.description}
      </p>
    </button>
  );
};
