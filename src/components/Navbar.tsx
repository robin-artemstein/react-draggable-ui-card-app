import LightModeIcon from "../components/LightModeIcon";
import DarkModeIcon from "../components/DarkModeIcon";

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

export default function Navbar({ isDarkMode, onToggleTheme }: NavbarProps) {
  return (
    <nav className="w-full bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 px-6 py-4 flex items-center justify-between transition-colors duration-300">
      {/* Left side: Logo */}
      <div className="flex items-center space-x-2">
        <span className="text-xl font-bold tracking-wider text-indigo-600 dark:text-indigo-400">
          Logo
        </span>
      </div>

      {/* Right side: Dark / Light Mode Toggle Button */}
      <button
        onClick={onToggleTheme}
        type="button"
        className="px-1 py-1 rounded-lg bg-gray-100 dark:bg-gray-700 text-sm font-medium hover:bg-slate-200 dark:hover:bg-gray-600 focus:outline-none"
        aria-label="Toggle Theme Mode"
      >
        {isDarkMode ? (
          <span className="flex items-center"><LightModeIcon /></span>
        ) : (
          <span className="flex items-center"><DarkModeIcon /></span>
        )}
      </button>
    </nav>
  );
}