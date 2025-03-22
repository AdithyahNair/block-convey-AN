import React from "react";

export const FooterCopyright: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="text-gray-600 text-sm">
      © {currentYear} BlockConvey Inc. All rights reserved.
    </div>
  );
};
