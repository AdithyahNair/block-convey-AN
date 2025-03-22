import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../hooks/useTheme';

export const ThemeToggle: React.FC = () => {
  const { isDark, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className="relative inline-flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
      aria-label="Toggle theme"
    >
      <div className="relative h-6 w-6">
        <span
          className={`absolute inset-0 rotate-90 transform transition-transform duration-500 ${
            isDark ? 'rotate-0' : 'rotate-90'
          }`}
        >
          <Moon className="h-6 w-6 text-white" />
        </span>
        <span
          className={`absolute inset-0 transform transition-transform duration-500 ${
            isDark ? '-rotate-90' : 'rotate-0'
          }`}
        >
          <Sun className="h-6 w-6 text-white" />
        </span>
      </div>
    </button>
  );
};