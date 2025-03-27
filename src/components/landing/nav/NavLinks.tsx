import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { NavDropdown } from "./NavDropdown";
import { useClickOutside } from "../../../hooks/useClickOutside";
import { NavLinksProps } from "../../../types/blog";

export const NavLinks: React.FC<NavLinksProps> = ({ items }) => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleClose = useCallback(() => {
    setOpenDropdown(null);
  }, []);

  const handleItemClick = (path?: string) => {
    if (path) {
      navigate(path);
      handleClose();
    }
  };

  const ref = useClickOutside(handleClose);

  const handleToggle = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2"
    >
      {items.map((item) => (
        <NavDropdown
          key={item.label}
          label={item.label}
          items={item.subitems}
          isOpen={openDropdown === item.label}
          onToggle={() => handleToggle(item.label)}
          onItemClick={handleItemClick}
        />
      ))}
    </div>
  );
};
