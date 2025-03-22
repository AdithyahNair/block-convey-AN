import React from "react";
import { DropdownItem } from "./DropdownItem";

interface DropdownItem {
  title: string;
  description: string;
  path?: string;
}

interface DropdownContentProps {
  items: DropdownItem[];
  onItemClick?: (path?: string) => void;
}

export const DropdownContent: React.FC<DropdownContentProps> = ({
  items,
  onItemClick,
}) => {
  return (
    <div className="absolute left-0 right-0 w-full pt-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#488B8F] border border-brand/20 rounded-xl shadow-xl p-6">
          <div className="grid grid-cols-2 gap-x-8 gap-y-6">
            {items.map((item) => (
              <DropdownItem
                key={item.title}
                item={item}
                onSelect={onItemClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
