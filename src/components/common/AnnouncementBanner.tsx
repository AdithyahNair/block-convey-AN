import React from "react";

export const AnnouncementBanner: React.FC = () => {
  // Direct navigation handler
  const navigateToProductHunt = (e: React.MouseEvent) => {
    e.preventDefault();
    window.open("https://ai-gov-dashboard.vercel.app/", "_blank");
  };

  return (
    <div className="bg-gray-50 border-2 border-gray-200 rounded-lg shadow-sm relative overflow-hidden hover:bg-gray-100 transition-colors duration-300 mx-4 my-3">
      {/* Interactive highlight effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-teal-100/0 via-teal-100/20 to-teal-100/0 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      {/* Left accent bar - using teal/seafoam green color */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#5e9b99]"></div>

      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-[#5e9b99]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 4.5a.75.75 0 01.721.544l.813 2.846a3.75 3.75 0 002.576 2.576l2.846.813a.75.75 0 010 1.442l-2.846.813a3.75 3.75 0 00-2.576 2.576l-.813 2.846a.75.75 0 01-1.442 0l-.813-2.846a3.75 3.75 0 00-2.576-2.576l-2.846-.813a.75.75 0 010-1.442l2.846-.813A3.75 3.75 0 007.466 7.89l.813-2.846A.75.75 0 019 4.5z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            <span className="font-medium">
              Support Block Convey on Product Hunt!
            </span>
            <span className="font-medium text-[#5e9b99]">
              We're going LIVE SOON 🚀
            </span>
          </div>

          {/* Simple button with hover effect */}
          <button
            onClick={navigateToProductHunt}
            className="flex items-center bg-white border border-gray-200 px-3 py-2 rounded-full shadow-sm hover:shadow-md hover:border-[#5e9b99] transition-all duration-300 cursor-pointer group"
          >
            <span className="text-sm text-gray-600 mr-1">
              Launching soon on
            </span>
            <span className="text-orange-500 font-bold">Product Hunt</span>
            <span className="ml-2 transform transition-transform duration-300 text-[#5e9b99] group-hover:translate-x-1">
              →
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
