import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/logo.svg";

export const FooterLogo: React.FC = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 hover:opacity-90 transition-opacity"
    >
      <img
        src={logo}
        alt="Block Convey"
        className="h-16 w-32 object-cover object-center"
      />
    </Link>
  );
};
