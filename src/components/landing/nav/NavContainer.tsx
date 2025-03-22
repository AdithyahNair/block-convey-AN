import React from "react";

export const NavContainer: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <nav className="fixed top-2 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 mt-4">
        <div className="bg-brand-lightest/80 backdrop-blur-md border border-brand-light rounded-2xl shadow-sm">
          <div className="px-4 py-0">{children}</div>
        </div>
      </div>
    </nav>
  );
};
