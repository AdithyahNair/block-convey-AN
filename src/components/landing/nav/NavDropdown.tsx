import React from "react";
import { AnimatePresence } from "framer-motion";
import { DropdownTrigger } from "./dropdown/DropdownTrigger";
import { DropdownContent } from "./dropdown/DropdownContent";

interface NavDropdownProps {
  label: string;
  items: Array<{
    title: string;
    description: string;
    path?: string;
  }>;
  isOpen: boolean;
  onToggle: () => void;
  onItemClick?: (path?: string) => void;
}

export const NavDropdown: React.FC<NavDropdownProps> = ({
  label,
  items,
  isOpen,
  onToggle,
  onItemClick,
}) => {
  return (
    <div className="static">
      <DropdownTrigger label={label} isOpen={isOpen} onClick={onToggle} />
      <AnimatePresence>
        {isOpen && <DropdownContent items={items} onItemClick={onItemClick} />}
      </AnimatePresence>
    </div>
  );
};
