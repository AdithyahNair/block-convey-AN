import React from "react";
import logo from "../../../assets/logo.png";
import { scrollToFeature } from "../../../utils/scroll";
import { useNavigate } from "react-router-dom";
export const NavLogo: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (path: string) => {
    const [route, hash] = path.split("#");
    // Navigate to the page first
    navigate(route);
    // If there's a hash, scroll to the section
    if (hash) {
      scrollToFeature(hash);
    }
  };

  return (
    <div
      onClick={() => handleClick("/#main")}
      className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
    >
      <img
        src={logo}
        alt="Block Convey"
        className="h-16 w-32 object-cover object-center transform scale-110"
        style={{
          transform: "scale(1.4)", // Adjust the scale value as needed
          objectPosition: "center", // Ensures the image stays centered while zoomed
        }}
      />
    </div>
  );
};
